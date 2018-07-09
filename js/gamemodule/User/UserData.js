var Games;
(function (Games) {
    // 玩家数据
    var UserData = /** @class */ (function () {
        function UserData() {
            this.sGameInfoUpdate = new Signal();
            this.account = new Games.UserAccountData();
        }
        return UserData;
    }());
    Games.UserData = UserData;
})(Games || (Games = {}));
//# sourceMappingURL=UserData.js.map