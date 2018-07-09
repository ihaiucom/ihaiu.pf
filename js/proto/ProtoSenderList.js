var Games;
(function (Games) {
    //====================
    // 消息发送器列表
    //--------------------
    var ProtoSenderList = /** @class */ (function () {
        function ProtoSenderList() {
            this.list = [];
            this.Account = new Games.AccountSender();
            this.GameData = new Games.GameDataSender();
            this.CinemaBuild = new Games.CinemaBuildSender();
            this.test = new Games.testSender();
            this.movie = new Games.movieSender();
            this.Actor = new Games.ActorSender();
            this.city = new Games.citySender();
            this.item = new Games.itemSender();
        }
        // 初始化
        ProtoSenderList.prototype.install = function () {
            this.initList();
        };
        // 初始化列表
        ProtoSenderList.prototype.initList = function () {
            this.list.push(this.Account);
            this.list.push(this.GameData);
            this.list.push(this.city);
            this.list.push(this.CinemaBuild);
            this.list.push(this.test);
            this.list.push(this.Actor);
            this.list.push(this.movie);
            this.list.push(this.item);
        };
        return ProtoSenderList;
    }());
    Games.ProtoSenderList = ProtoSenderList;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoSenderList.js.map