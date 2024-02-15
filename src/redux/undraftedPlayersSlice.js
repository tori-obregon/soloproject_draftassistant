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
            console.log('selectedPlayer', selectedPlayer);

            const {bid, position, myPlayer} = action.payload;


            //should be the index of the object of the player selected
            function findPlayer() {
                //variable to store found player
                let foundPlayer = {myPlayer: 'Mickey Mouse'};
                console.log('foundPlayer initial:', foundPlayer);
                //iterate through array checking each object
                state.undraftedPlayers.forEach((playerObj) => {
                    //iterate through object values to see if it has the selected player
                    //if found, assign to found player variable
                    if(Object.values(playerObj).includes(myPlayer)) {
                        foundPlayer = playerObj;
                        console.log('foundPlayer', foundPlayer);
                    }
                }) 
                
                //return object with player information from undrafted players
                return foundPlayer; 
            }; 

            const selectedPlayer = findPlayer();

            const newPlayer = {
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