const db = require("./model.js");

const controller = {};

controller.getUndraftedPlayers = (req, res, next) => {
    // TODO: make a sql query to local database for the table player_rank for alllll the players to load
    // const stringSQL =
    //     "SELECT * FROM public.player_rank WHERE player='Tyrese Haliburton';"

    const stringSQL =
        "SELECT * FROM public.player_rank;"

    db.query(stringSQL)
        .then((result) => {
            res.locals.players = result.rows;
            console.log('res.locals.players', res.locals.players);
            return next();
        })
        .catch((error) => {
            return next({ 
                log: `Error in controller.getUndraftedPlayers - Error: ${error}`,
                message: { err: "Error in controller.getUndraftedPlayers" },
            });
        });
}

module.exports = controller;