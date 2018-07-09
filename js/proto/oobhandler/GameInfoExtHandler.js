var Games;
(function (Games) {
    Games.ProtoOobHandler.GameInfoExtHandler = function (msg) {
        if (!msg)
            return;
        User.infoExt = msg;
        //打开信息窗口
        Game.menu.open(Games.MenuId.PlayerInfo);
    };
})(Games || (Games = {}));
//# sourceMappingURL=GameInfoExtHandler.js.map