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
    var testSender = /** @class */ (function (_super) {
        __extends(testSender, _super);
        function testSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.test;
            return _this;
        }
        /**
         * 添加道具
         * @param floor
         */
        testSender.prototype.AddItem = function (itemId, amount) {
            var reqData = new Proto.API.test.AddItemRequest();
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
        };
        /**
         * 建造房间
         * @param floor
         * @param roomType
         */
        testSender.prototype.BuildRoom = function (floor, roomType) {
            var reqData = new Proto.API.CinemaBuild.BuildRoomRequest();
            reqData.floor = floor;
            reqData.roomType = roomType;
            this.send(reqData);
        };
        /**
         * 升级房间
         * @param roomId
         */
        testSender.prototype.UpgradeRoom = function (roomId) {
            var reqData = new Proto.API.CinemaBuild.UpgradeRoomRequest();
            reqData.roomId = roomId;
            this.send(reqData);
        };
        // AddActor(actorId, name)
        // {
        //     let reqData = new Proto.API.test.AddActorRequest();
        //     reqData.actorId = actorId;
        //     reqData.name = name;
        //     // this.send(reqData);
        // }
        testSender.prototype.AddFans = function (amount) {
            var reqData = new Proto.API.test.AddFansRequest();
            reqData.amount = amount;
            this.send(reqData);
        };
        return testSender;
    }(Games.ProtoSender));
    Games.testSender = testSender;
})(Games || (Games = {}));
//# sourceMappingURL=testSender.js.map