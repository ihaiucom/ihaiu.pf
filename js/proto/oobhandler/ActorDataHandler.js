var Games;
(function (Games) {
    Games.ProtoOobHandler.ActorDataHandler = function (msg, ops, uuid) {
        var isAdd = false;
        if (Game.moduleModel.actor.hasActor(msg.actorId) == false) {
            isAdd = true;
        }
        var data = Game.moduleModel.actor.addActorData(msg);
        switch (ops) {
            case EGameDataOps.init:
                break;
            case EGameDataOps.add:
                break;
            case EGameDataOps.update:
                break;
            case EGameDataOps.remove:
                break;
            default:
                break;
        }
        console.log("艺人更新：", ops, msg.actorId);
        if (isAdd) {
            Game.moduleModel.actor.sAddActorList.dispatch(data);
        }
        else {
            Game.moduleModel.actor.sUpdateActorInfo.dispatch(data);
        }
        Game.moduleModel.market.AddActorData(msg);
    };
})(Games || (Games = {}));
//# sourceMappingURL=ActorDataHandler.js.map