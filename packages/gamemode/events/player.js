module.exports = {
    "playerJoin": player => {
        player.spawn(797.208984375, -2978.392822265625, 6.020942211151123);
        player.dimension = player.id + 1000;

        player.call("client::auth:start");
    }
}