var Games;
(function (Games) {
    //====================
    // 消息处理器列表
    //--------------------
    var ProtoHandlerList = /** @class */ (function () {
        function ProtoHandlerList() {
            this.list = [];
            this.account = new Games.AccountHandler();
            this.GameData = new Games.GameDataHandler();
            this.CinemaBuild = new Games.CinemaBuildHandler();
            this.movie = new Games.movieHandler();
            this.city = new Games.cityHandler();
            this.item = new Games.itemHandler();
            this.Actor = new Games.ActorHandler();
        }
        // 初始化
        ProtoHandlerList.prototype.install = function () {
            this.initList();
        };
        // 初始化列表
        ProtoHandlerList.prototype.initList = function () {
            this.list.push(this.account);
            this.list.push(this.GameData);
            this.list.push(this.city);
            this.list.push(this.CinemaBuild);
            this.list.push(this.movie);
            this.list.push(this.item);
            this.list.push(this.Actor);
        };
        return ProtoHandlerList;
    }());
    Games.ProtoHandlerList = ProtoHandlerList;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoHandlerList.js.map