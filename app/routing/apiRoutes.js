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
module.exports = function (app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function (req, res) {
    // function to add friend to DB - function can be found in friends.js
    // console.log(req.body);
    var bestFriend;

    // Begin Logic finding the best friend user compared to others
    var minDiffTot = 100;
    var calcTot = 105;

    for (i = 0; i < friendData.friends.length; i++) {
      calcTot = Math.abs(req.body.score1 - friendData.friends[i].score1) +
        Math.abs(req.body.score2 - friendData.friends[i].score2) +
        Math.abs(req.body.score3 - friendData.friends[i].score3) +
        Math.abs(req.body.score4 - friendData.friends[i].score4) +
        Math.abs(req.body.score5 - friendData.friends[i].score5) +
        Math.abs(req.body.score6 - friendData.friends[i].score6) +
        Math.abs(req.body.score7 - friendData.friends[i].score7) +
        Math.abs(req.body.score8 - friendData.friends[i].score8) +
        Math.abs(req.body.score9 - friendData.friends[i].score9) +
        Math.abs(req.body.score10 - friendData.friends[i].score10);

      if (calcTot < minDiffTot) {
        minDiffTot = calcTot;
        bestFriend = friendData.friends[i];
        console.log("Best friend is now: " + bestFriend.name + " with score1 = " + bestFriend.score1);
      }
    }

    friendData.addFriend(req.body);

    res.json(bestFriend);
  });
};
