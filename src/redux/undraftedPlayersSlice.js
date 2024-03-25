import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'

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
    myTeam: {},
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
        addMyTeam: (state, action) => {
            //this should make state.undraftedPlayers into an array of objects of each player

            const {bid, position, myPlayer} = action.payload;


            //should be the index of the object of the player selected
            function findPlayer() {
                //variable to store found player
                let foundPlayer = {myPlayer: 'Mickey Mouse'};
                //iterate through array checking each object
                current(state.undraftedPlayers).forEach((playerObj) => {
                    //iterate through object values to see if it has the selected player
                    //if found, assign to found player variable
                    if(Object.values(playerObj).includes(myPlayer)) {
                        foundPlayer = structuredClone(playerObj);
                    }
                }) 
                
                //return object with player information from undrafted players
                return foundPlayer; 
            }; 

            const selectedPlayer = findPlayer();


            const newPlayer = {
                player: selectedPlayer.player,
                pts: selectedPlayer.pts,
                reb: selectedPlayer.reb,
                ast: selectedPlayer.ast,
                blk: selectedPlayer.blk,
                stl: selectedPlayer.stl,
                fg_percentage: selectedPlayer.fg_percentage,
                ft_percentage: selectedPlayer.ft_percentage,
                threept: selectedPlayer.threept,
                ftsy: selectedPlayer.ftsy,
                bid_price: bid,
            };

            state.myTeam[position] = newPlayer;
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