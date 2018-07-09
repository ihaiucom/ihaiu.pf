var Games;
(function (Games) {
    var AssetData = /** @class */ (function () {
        function AssetData() {
            this.lv = 1; //等级
            //
            this.giveItemDic = new Dictionary();
        }
        /**
         * 更新资产数据
         * @param data 资产数据
         */
        AssetData.prototype.update = function (data) {
            var _this = this;
            this.data = data;
            this.giveItemDic.clear();
            if (data) {
                this.lv = data.giveLevel;
                //存储起来
                data.giveItemList.forEach(function (element) {
                    _this.giveItemDic.add(element.itemId, element);
                });
            }
            this.config = Game.config.actorAssets.getConfigByIdLvType(this.actorId, this.type, this.lv);
            this.max = this.config.max_num;
        };
        /**
         *
         * @param id
         */
        AssetData.prototype.getItemNum = function (id) {
            var num = 0;
            var d = this.giveItemDic.getValue(id);
            if (d) {
                num = d.amount;
            }
            return num;
        };
        /**
         * 获取当前等级锁赠送的数量
         * @param id 道具id
         */
        AssetData.prototype.getCurLvItemNum = function (id) {
            var lv = this.lv;
            var count = this.getItemNum(id);
            while (lv > 1) {
                lv = lv - 1;
                count = count - Game.config.actorAssets.getConfigByIdLvType(this.actorId, this.type, lv).number;
            }
            return count;
        };
        return AssetData;
    }());
    Games.AssetData = AssetData;
})(Games || (Games = {}));
//# sourceMappingURL=AssetData.js.map