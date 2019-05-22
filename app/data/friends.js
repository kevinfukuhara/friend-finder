
var bestFriend;

var addFriend = function (user) {
    console.log("Adding friend now...");
    console.log(user);

    friends.push(user);
}

var friends = [
    {
        name: 'Thanos',
        photo: "https://www.sideshow.com/product-asset/903429/feature",
        score1: 1,
        score2: 1,
        score3: 1,
        score4: 1,
        score5: 1,
        score6: 5,
        score7: 5,
        score8: 5,
        score9: 5,
        score10: 5
    },
    {
        name: 'Opposite Thanos',
        photo: "https://i.redd.it/u8xboq61v4m01.png",
        score1: 5,
        score2: 5,
        score3: 5,
        score4: 5,
        score5: 5,
        score6: 1,
        score7: 1,
        score8: 1,
        score9: 1,
        score10: 1
    }];



module.exports = {
    addFriend,
    bestFriend,
    friends
}