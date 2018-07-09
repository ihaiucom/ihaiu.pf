var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    /**
     *艺人接口
     */
    var ActorHandler = /** @class */ (function (_super) {
        __extends(ActorHandler, _super);
        function ActorHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.Actor;
            return _this;
        }
        /**
         *查探艺人
         */
        ActorHandler.prototype.noseInfoActor = function (msg) {
        };
        /**
         *招募艺人
         */
        ActorHandler.prototype.RecruitActor = function (msg) {
            console.log("success");
            if (msg.result == 0 && msg.isNewActor == false) {
                var data = Game.moduleModel.actor.getActor(msg.actorId);
                if (data) {
                    Game.menu.open(Games.MenuId.ArtistScoutSuccess, data, true);
                }
            }
        };
        /**
         *雪藏艺人
         */
        ActorHandler.prototype.hideActor = function (msg) {
        };
        /**
         *增加艺人槽位
         */
        ActorHandler.prototype.AddActorSlot = function (msg) {
        };
        /**
         * 升级艺人
         *@param actorId
         */
        ActorHandler.prototype.upgradeActor = function (msg) {
        };
        /**
         *赠送艺人资产
         */
        ActorHandler.prototype.giveActorAssets = function (msg) {
        };
        /**
         *艺人技能升级
         */
        ActorHandler.prototype.upgradeActorSkill = function (msg) {
        };
        return ActorHandler;
    }(Games.ProtoHandler));
    Games.ActorHandler = ActorHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ActorHandler.js.map