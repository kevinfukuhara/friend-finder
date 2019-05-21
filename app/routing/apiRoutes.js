// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// Needs to come from SQL DB
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // API POST Requests
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {
        // function to add friend to DB - function can be found in friends.js
        console.log(req.body);
        // addFriend(req.body);
    });
};
