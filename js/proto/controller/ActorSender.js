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
    var ActorSender = /** @class */ (function (_super) {
        __extends(ActorSender, _super);
        function ActorSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.Actor;
            return _this;
        }
        /**
         *查探艺人
         * @param isUseCard 是否使用星探卡
         */
        ActorSender.prototype.noseInfoActor = function (isUseCard) {
            var req = new Proto.API.Actor.NoseInfoActorRequest();
            req.isUseCard = isUseCard;
            this.send(req, this.moduleName);
        };
        /**
         *招募艺人
         * @param actorId 艺人ID
         */
        ActorSender.prototype.recruitActor = function (actorId) {
            var req = new Proto.API.Actor.RecruitActorRequest();
            req.actorId = actorId;
            this.send(req);
        };
        /**
         *雪藏艺人
         * @param actorId 艺人id
         * @param isHide 是否雪藏
         */
        ActorSender.prototype.hideActor = function (actorId, isHide) {
            var req = new Proto.API.Actor.HideActorRequest();
            req.actorId = actorId;
            req.isHide = isHide;
            this.send(req);
        };
        /**
         *增加艺人槽位
         */
        ActorSender.prototype.addActorSlot = function () {
            var req = new Proto.API.Actor.AddActorSlotRequest();
            this.send(req);
        };
        /**
         * 升级艺人
         *@param actorId
         */
        ActorSender.prototype.upgradeActor = function (actorId) {
            var req = new Proto.API.Actor.UpgradeActorRequest();
            req.actorId = actorId;
            this.send(req);
        };
        /**
         *赠送艺人资产
         * @param actorId 艺人ID
         * @param giveType 赠送类型
         * @param giveLevel 赠送等级
         * @param giveNum 赠送数量
         */
        ActorSender.prototype.giveActorAssets = function (actorId, giveType, giveLevel, giveNum) {
            var req = new Proto.API.Actor.GiveActorAssetsRequest();
            req.actorId = actorId;
            req.giveLevel = giveLevel;
            req.giveNum = giveNum;
            req.giveType = giveType;
            this.send(req);
        };
        /**
         *艺人技能升级
         * @param actorId 艺人ID
         * @param skillId 技能ID
         */
        ActorSender.prototype.upgradeActorSkill = function (actorId, skillId) {
            var req = new Proto.API.Actor.UpgradeActorSkillRequest();
            req.actorId = actorId;
            req.skillId = skillId;
            this.send(req);
        };
        /**
         * @param actorId 艺人id
         * @param name 名字
         */
        ActorSender.prototype.actorChangeName = function (actorId, name) {
            var req = new Proto.API.Actor.ActorChangeNameRequest();
            req.actorId = actorId;
            req.name = name;
            this.send(req);
        };
        return ActorSender;
    }(Games.ProtoSender));
    Games.ActorSender = ActorSender;
})(Games || (Games = {}));
//# sourceMappingURL=ActorSender.js.map