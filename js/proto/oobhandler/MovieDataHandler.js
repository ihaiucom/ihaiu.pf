var Games;
(function (Games) {
    // 拍摄过程获取的更新协议
    Games.ProtoOobHandler.MovieDataHandler = function (msg) {
        if (msg.state === EMovieState.contineTransceiver) {
            Game.moduleModel.warData.movieDataList.push(msg);
        }
        else {
            Game.moduleModel.warData.moveData = msg;
        }
        console.log("战斗协议更新=======ProtoOobHandler.MovieDataHandler msg.uuid" + msg.uuid);
    };
})(Games || (Games = {}));
//# sourceMappingURL=MovieDataHandler.js.map