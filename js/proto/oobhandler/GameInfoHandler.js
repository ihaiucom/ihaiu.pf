var Games;
(function (Games) {
    Games.ProtoOobHandler.GameInfoHandler = function (msg, ops, uuid) {
        if (!msg)
            return;
        User.info = msg;
        if (Games.ProtoOobHandler.isFirstGameInfo) {
            Games.ProtoOobHandler.isFirstGameInfo = false;
            Game.menu.open(Games.MenuId.Home);
            Game.menu.close(Games.MenuId.Login);
            Game.menu.close(Games.MenuId.CreateRole);
        }
        Game.moduleModel.actor.setup();
        //通知数据变更
        User.sGameInfoUpdate.dispatch();
    };
})(Games || (Games = {}));
//# sourceMappingURL=GameInfoHandler.js.map