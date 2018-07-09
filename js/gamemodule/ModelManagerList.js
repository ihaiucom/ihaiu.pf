var Games;
(function (Games) {
    //======================
    // 模块 数据模型 管理器
    //----------------------
    var ModelManagerList = /** @class */ (function () {
        function ModelManagerList() {
            // 列表
            this.list = [];
            // 物品
            this.item = new Games.ItemModel();
            // 剧情
            this.story = new Games.StoryModel();
            //建造
            this.building = new Games.BuildingModel();
            //角色信息
            this.playerInfo = new Games.PlayerInfoModel();
            //
            this.actor = new Games.ActorModel();
            // 战斗
            this.warData = new Games.WarModel();
            this.market = new Games.MarketModel();
            this.bag = new Games.BagModel();
        }
        // 初始化列表
        ModelManagerList.prototype.initList = function () {
            this.list.push(this.item);
            this.list.push(this.story);
            this.list.push(this.building);
            this.list.push(this.actor);
            this.list.push(this.warData);
            this.list.push(this.market);
            this.list.push(this.bag);
            this.list.push(this.playerInfo);
        };
        return ModelManagerList;
    }());
    Games.ModelManagerList = ModelManagerList;
})(Games || (Games = {}));
//# sourceMappingURL=ModelManagerList.js.map