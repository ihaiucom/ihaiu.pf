var Games;
(function (Games) {
    var ItemHelper = /** @class */ (function () {
        function ItemHelper() {
        }
        /**
         * 判断道具数量是否足够(DTItemNum)
         * @param item DTItemNum 道具
         */
        ItemHelper.checkItemEnough = function (item) {
            var id = item.itemId;
            var needNum = item.itemNum;
            var enough = ItemHelper.checkItemEnough2(id, needNum);
            return enough;
        };
        /**
         *
         * 判断道具数量是否足够(id,num)
         * @param id 道具id
         * @param needNum 道具数量
         */
        ItemHelper.checkItemEnough2 = function (id, needNum) {
            var curNum = Game.moduleModel.item.getItemNum(id);
            var enough = true;
            if (curNum < needNum) {
                enough = false;
            }
            return enough;
        };
        /**
         * 判断道具数量是否足够(number[])
         * @param item number[] 道具id,num
         */
        ItemHelper.checkItemEnough3 = function (items) {
            var enough = true;
            if (items.length == 2) {
                var id = items[0];
                var num = items[1];
                enough = ItemHelper.checkItemEnough2(id, num);
            }
            return enough;
        };
        /**
         * 判断道具数量是否足够(DTItemNum[])
         * @param items DTItemNum[] 道具
         */
        ItemHelper.checkItemsEnough = function (items) {
            var enough = true;
            for (var index = 0; index < items.length; index++) {
                var element = items[index];
                enough = ItemHelper.checkItemEnough(element);
                if (enough == false) {
                    break;
                }
            }
            return enough;
        };
        /**
         *取道具数量不足的id(DTItemNum[])
         * @param items DTItemNum[] 道具
         */
        ItemHelper.getItemNotEnoughId = function (items) {
            var noEnoughId = 0;
            var enough = true;
            for (var index = 0; index < items.length; index++) {
                var element = items[index];
                enough = ItemHelper.checkItemEnough(element);
                if (enough == false) {
                    noEnoughId = element.itemId;
                }
            }
            return noEnoughId;
        };
        return ItemHelper;
    }());
    Games.ItemHelper = ItemHelper;
})(Games || (Games = {}));
//# sourceMappingURL=ItemHelper.js.map