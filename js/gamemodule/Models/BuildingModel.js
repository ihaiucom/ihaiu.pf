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
    //楼层信息
    var FloorInfo = /** @class */ (function () {
        function FloorInfo() {
            this.index = 0;
        }
        return FloorInfo;
    }());
    Games.FloorInfo = FloorInfo;
    //房间信息
    var RoomInfo = /** @class */ (function () {
        function RoomInfo() {
            this.name = "room";
        }
        RoomInfo.prototype.updateServer = function (info) {
            this.id = info.roomId;
            this.floor = info.floor;
            var config = Game.config.buildingLevel.getConfig(info.roomId);
            this.name = config.name;
            this.type = config.type;
            this.isBuilded = true;
        };
        RoomInfo.creatInfo = function (sinfo) {
            var info = new RoomInfo();
            info.updateServer(sinfo);
            return info;
        };
        return RoomInfo;
    }());
    Games.RoomInfo = RoomInfo;
    //======================
    // 建造 数据模型
    //----------------------
    var BuildingModel = /** @class */ (function (_super) {
        __extends(BuildingModel, _super);
        function BuildingModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roomInfoList = [];
            return _this;
        }
        // 初始化
        BuildingModel.prototype.install = function () {
        };
        //获取房间信息
        BuildingModel.prototype.getRoomInfo = function (id) {
            for (var _i = 0, _a = this.roomInfoList; _i < _a.length; _i++) {
                var info = _a[_i];
                if (info.id == id)
                    return info;
            }
        };
        //房间类型获取房间号
        BuildingModel.prototype.getRoomByType = function (roomType) {
            for (var _i = 0, _a = this.roomInfoList; _i < _a.length; _i++) {
                var info = _a[_i];
                if (info.type == roomType)
                    return info;
            }
        };
        //获取房间等级
        BuildingModel.prototype.getRoomLevel = function (roomType) {
            var roomId = this.getRoomByType(roomType).id;
            return Game.config.buildingLevel.getConfig(roomId).level;
        };
        //添加房间信息
        BuildingModel.prototype.addRoomInfo = function (info) {
            this.roomInfoList.push(info);
        };
        //房间升级
        BuildingModel.prototype.upgradeRoom = function (preRoomId, roomId) {
            var preRoomInfo = this.getRoomInfo(preRoomId);
            var cfg = Game.config.buildingLevel.getConfig(roomId);
            preRoomInfo.id = roomId;
            preRoomInfo.name = cfg.name;
        };
        //获取所有房间信息列表
        BuildingModel.prototype.getInfoList = function () {
            return this.roomInfoList;
        };
        return BuildingModel;
    }(Games.MModel));
    Games.BuildingModel = BuildingModel;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingModel.js.map