var Games;
(function (Games) {
    Games.ProtoOobHandler.ItemDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                var itemData = Game.moduleModel.item.getItemByUuid(uuid);
                if (itemData) {
                    Game.moduleModel.item.setItemNum(itemData.itemId, 0, uuid);
                }
                break;
            default:
                Game.moduleModel.item.setItemNum(msg.itemId, msg.amount, uuid, msg.createTime);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ItemDataHandler.js.map