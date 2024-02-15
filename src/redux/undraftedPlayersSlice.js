import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//fetch data to populate state
export const fetchUndraftedPlayers = createAsyncThunk(
    'undraftedPlayers/fetchUndraftedPlayers',
    async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    }
);



const initialState = {
    undraftedPlayers: [],
    myTeam: {
        // PG: 'hi',
        // SG,
        // SF,
        // PF,
        // C,
        // G,
        // F,
        // UTL,
        // B,
        // O
    },
    Overall: {
        // PTS,
        // REB,
        // AST,
        // BLK,
        // STL,
        // FG,
        // FT,
        // THREEPT,
        // FANTASY,
        // SPENT,
    }
}

export const undraftedPlayersSlice = createSlice({
    name: 'undraftedPlayers',
    initialState,
    reducers: {
        addMyTeam: (state) => {
            //this should make state.undraftedPlayers into an array of objects of each player
            const selectedPlayer; //should be the index of the object of the player selected
            const userPosition; // should be the value of the user's input
            const userBid; // should be the value of the user's input
            const player = {
                player: state.selectedPlayer.player,
                pts: state.selectedPlayer.pts,
                reb: state.selectedPlayer.reb,
                ast: state.selectedPlayer.ast,
                blk: state.selectedPlayer.blk,
                stl: state.selectedPlayer.stl,
                fg_percentage: state.selectedPlayer.fg_percentage,
                ft_percentage: state.selectedPlayer.ft_percentage,
                threept: state.selectedPlayer.threept,
                ftsy: state.selectedPlayer.ftsy,
                bid_price: userBid,
            };

            state.myTeam[userPosition] = player;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUndraftedPlayers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUndraftedPlayers.fulfilled, (state, action) => {
                state.status = 'success';
                state.undraftedPlayers = action.payload;
            })
            .addCase(fetchUndraftedPlayers.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addMyTeam } = undraftedPlayersSlice.actions;

export default undraftedPlayersSlice.reducer;