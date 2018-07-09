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
    //====================
    // 消息发送器
    //--------------------
    var GameDataSender = /** @class */ (function (_super) {
        __extends(GameDataSender, _super);
        function GameDataSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.GameData;
            return _this;
        }
        /**
         * 初始化游戏数据
         */
        GameDataSender.prototype.InitGameData = function (name, sex) {
            var reqData = new Proto.API.GameData.InitGameDataRequest();
            reqData.name = name;
            reqData.sex = sex;
            this.send(reqData);
        };
        /**
         * 玩家数据初始化提交
         */
        GameDataSender.prototype.GetLoginGameData = function (channel) {
            if (channel === void 0) { channel = "1"; }
            var reqData = new Proto.API.GameData.GetLoginGameDataRequest();
            reqData.channel = channel;
            this.send(reqData);
        };
        /**
         * 获取角色详细信息
         */
        GameDataSender.prototype.GetGameInfoExt = function () {
            var reqData = new Proto.API.GameData.GetGameInfoExtRequest();
            this.send(reqData);
        };
        /**
         * 修改公司名
         * @param playerName
         */
        GameDataSender.prototype.RenameGameData = function (playerName) {
            var reqData = new Proto.API.GameData.RenameGameDataRequest();
            reqData.playerName = playerName;
            this.send(reqData);
        };
        /**
         * 修改玩家的个性签名
         * @param playerName
         */
        GameDataSender.prototype.RePerSignatureGameData = function (perSignature) {
            var reqData = new Proto.API.GameData.RePerSignatureGameDataRequest();
            reqData.perSignature = perSignature;
            this.send(reqData);
        };
        /**
         * 修改玩家的头像
         * @param type 0表示穿戴 1表示购买
         * @param portraitId 头像ID
         */
        GameDataSender.prototype.RePortraitGameData = function (type, portraitId) {
            var reqData = new Proto.API.GameData.RePortraitGameDataRequest();
            reqData.type = type;
            reqData.portraitId = portraitId;
            this.send(reqData);
        };
        return GameDataSender;
    }(Games.ProtoSender));
    Games.GameDataSender = GameDataSender;
})(Games || (Games = {}));
//# sourceMappingURL=GameDataSender.js.map