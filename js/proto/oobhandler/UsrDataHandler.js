var Games;
(function (Games) {
    Games.ProtoOobHandler.UsrDataHandler = function (msg, ops, uuid) {
        if (!msg)
            return;
        switch (msg.usrState) {
            // 新账号
            case Proto.SE.EUsrState.uninit:
                Game.menu.open(Games.MenuId.CreateRole);
                break;
            // 启用
            case Proto.SE.EUsrState.usual:
                break;
        }
        // 设置服务器登录时间
        Game.time.serverLoginTime = msg.lastLoginTime * 1000;
    };
})(Games || (Games = {}));
//# sourceMappingURL=UsrDataHandler.js.map