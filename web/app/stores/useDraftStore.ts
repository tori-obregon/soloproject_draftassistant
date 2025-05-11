import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Types
interface Player {
  player: string;
  pts: number;
  reb: number;
  ast: number;
  blk: number;
  stl: number;
  fg_percentage: number;
  ft_percentage: number;
  threept: number;
  ftsy: number;
  positions?: Array<string>;
  suggested_bid?: string;
}

interface TeamPlayer extends Player {
  bid_price: number;
}

interface StoreState {
  undraftedPlayers: Record<string, Player>[];
  myTeam: Record<string, TeamPlayer>;
  Overall: Record<string, any>; // refine type as needed
  status?: "idle" | "loading" | "success" | "failed";
  fetchUndraftedPlayers: () => Promise<void>;
  addMyTeam: (bid: number, position: string, myPlayer: string) => void;
}

export const useDraftStore = create<StoreState>()(
  immer((set, get) => ({
    undraftedPlayers: [],
    myTeam: {},
    Overall: {},
    status: "idle",

    fetchUndraftedPlayers: async () => {
      set({ status: "loading" });
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        set({ undraftedPlayers: data, status: "success" });
      } catch (e) {
        set({ status: "failed" });
      }
    },

    addMyTeam: (bid, position, myPlayer) => {
      const { undraftedPlayers } = get();

      // Flatten the array of { [name]: Player } to a single list of [name, Player] pairs
      const playerEntry = undraftedPlayers
        .flatMap((entry) => Object.entries(entry))
        .find(([name]) => name === myPlayer);

      if (!playerEntry) return;

      const [playerName, player]: [string, Player] = playerEntry;

      const newPlayer: TeamPlayer = {
        ...player,
        player: playerName,
        bid_price: bid,
      };

      set((state) => {
        state.myTeam[position] = newPlayer;
      });
    },
  }))
);
