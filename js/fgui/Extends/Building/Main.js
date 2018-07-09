/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var Building;
    (function (Building) {
        var MenuLayer = Games.MenuLayer;
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //已扩建楼层列表
                _this.floorRoomList = [];
                //楼层索引
                _this.floorIndex = 0;
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.init();
            };
            Main.prototype.init = function () {
                this.m_BuildList.lineGap = -5;
                this.m_BuildList.ensureBoundsCorrect();
                this.m_BuildList.scrollItemToViewOnClick = false;
                this.m_bg_main.visible = true;
                this.m_BuildList.addChild(this.m_bg_main);
                //更新房间信息
                this.setBuildRoomInfo();
            };
            Main.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoAPIEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
            };
            Main.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
            };
            //更新已建造房屋信息
            Main.prototype.setBuildRoomInfo = function () {
                for (var _i = 0, _a = User.info.buildRoomInfo; _i < _a.length; _i++) {
                    var sRoomInfo = _a[_i];
                    var room = this.creatBuildRoom();
                    room.setInfo(Games.RoomInfo.creatInfo(sRoomInfo));
                    room.onBuildComplete(room.roomInfo);
                    Game.moduleModel.building.addRoomInfo(room.roomInfo);
                }
                this.floorIndex = User.info.extendFloor;
                Game.moduleModel.building.floorIndex = User.info.extendFloor;
                if (User.info.buildRoomInfo.length < this.floorIndex) {
                    // 已扩建还没建造房间
                    this.creatBuildFloor(this.floorIndex, true);
                }
                else {
                    //检查是否可扩建楼层
                    // if(this.floorIndex == 0 || this.hasFloorCanBuild)
                    {
                        this.showNextFloor();
                    }
                }
            };
            /**
             * 创建楼层
             * @param floor 等待扩建楼层
             * @param isBuildFloor  是否已扩建楼层
             */
            Main.prototype.creatBuildFloor = function (floor, isBuildFloor) {
                if (isBuildFloor === void 0) { isBuildFloor = false; }
                var room = this.m_BuildList.addItemFromPool();
                room.floorInfo.index = floor;
                room.init();
                if (isBuildFloor) {
                    room.waitBuindRoom();
                    room.m_btn_buildRoom.onClick(this, this.onBuildRoomClick);
                }
                else {
                    room.m_btn_buildFloor.onClick(this, this.onBuildFloorClick, [room]);
                }
                this.m_BuildList.setChildIndex(room, 0);
                this.m_BuildList.scrollToView(0, true, true);
                this.currentFloorRoom = room;
                this.floorRoomList.push(room);
                return room;
            };
            /**
             * 建造建筑
             */
            Main.prototype.creatBuildRoom = function () {
                var room = this.m_BuildList.addItemFromPool();
                room.m_btn_buildFloor.visible;
                room.m_btn_roomName.onClick(this, this.onRoomTitleClick, [room]);
                this.m_BuildList.setChildIndex(room, 0);
                this.m_BuildList.scrollToView(0, true, true);
                this.floorRoomList.push(room);
                return room;
            };
            //扩建
            Main.prototype.showNextFloor = function () {
                if (this.checkTopFloor()) {
                    return null;
                }
                var room = this.creatBuildFloor(this.floorIndex + 1);
                var result = this.checkBuildFloorLevelCondition();
                if (!result.result) //build floor fail
                 {
                    room.showFailBuildFloorReason(result.reason);
                }
                else {
                }
                return room;
            };
            /**
             * 扩建房间
             * @param room
             * @param url
             */
            Main.prototype.onBuildFloorClick = function (room) {
                // Game.system.alertText("this is message", null, ()=>
                // {   
                //     console.log("onBuildFloorClick()");
                //     // Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index); //请求扩建楼层
                // });
                var _this = this;
                // let itemcfg = Game.config.item.getConfig(2);
                // let itemAlert = ItemAlert.createInstance();
                // itemAlert.show();
                // itemAlert.setInfo(2,100);
                // return ;
                if (this.checkBuildFloorCondition(true).result) {
                    // let floorCfg =  Game.config.floor.getConfig(room.floorInfo.index);
                    // let itemCfg = Game.config.item.getConfig(floorCfg.cost.itemId);
                    // let msg:string = `扩建需要消耗 [color=#ff9900]${itemCfg.name}[/color] ${floorCfg.cost.itemNum}`;
                    // Game.system.alertText(msg, ()=>
                    // {
                    //     Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index); //请求扩建楼层
                    // });
                    var self_1 = {
                        callback: function () {
                            room.m_btn_buildRoom.visible = true;
                            room.m_btn_buildFloor.visible = false;
                            room.m_btn_buildRoom.onClick(_this, _this.onBuildRoomClick);
                        }
                    };
                    var alert_1 = Building.BuildFloorAlert.createInstance();
                    alert_1.show(room.floorInfo.index);
                    MenuLayer.module.addChild(alert_1);
                }
            };
            Main.prototype.onServerBuildFloor = function (msg) {
                User.info.extendFloor = Game.moduleModel.building.floorIndex;
                this.floorIndex = User.info.extendFloor;
                this.currentFloorRoom.waitBuindRoom();
                this.currentFloorRoom.m_btn_buildRoom.onClick(this, this.onBuildRoomClick);
            };
            /**
             * 建造楼层
             */
            Main.prototype.onBuildRoomClick = function () {
                var roomListPanel = Building.BuildRoomList.createInstance();
                roomListPanel.init(this.floorIndex);
                MenuLayer.module.addChild(roomListPanel);
            };
            /**
             * 建造房间完成
             * @param floor
             * @param roomId
             */
            Main.prototype.onServerBuildRoom = function (msg) {
                var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                this.currentFloorRoom.onBuildComplete(roomInfo);
                this.currentFloorRoom.m_btn_roomName.onClick(this, this.onRoomTitleClick, [this.currentFloorRoom]);
                var list = this.floorRoomList;
                this.showNextFloor();
            };
            /**
             * 房间升级
             * @param msg
             */
            Main.prototype.onServerRoomUpgrade = function (msg) {
                var room = this.getBuildRoom(msg.roomId);
                if (room) {
                    var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                    room.onBuildComplete(roomInfo);
                }
            };
            /**
             * 检查是否可扩建楼层
             */
            Main.prototype.checkBuildFloorCondition = function (isShowAlert) {
                if (isShowAlert === void 0) { isShowAlert = false; }
                var checkResult = { result: true, reason: "" };
                var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
                if (User.info.level < floorConfig.level_req) {
                    checkResult.result = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_level, floorConfig.level_req);
                    checkResult.reason = msg;
                    if (isShowAlert) {
                        Game.system.toastText(msg);
                        return checkResult;
                    }
                }
                var itemcfg = Game.config.item.getConfig(floorConfig.cost.itemId);
                var hasItemNum = Game.moduleModel.item.getItemNum(floorConfig.cost.itemId);
                if (hasItemNum < floorConfig.cost.itemNum) {
                    checkResult.result = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemcfg.name);
                    checkResult.reason = msg;
                    if (isShowAlert) {
                        var itemAlert = Building.ItemAlert.createInstance();
                        itemAlert.show();
                        itemAlert.setInfo(floorConfig.cost.itemId, floorConfig.cost.itemNum);
                    }
                }
                return checkResult;
            };
            /**
             * 检查是否可扩建楼层
             */
            Main.prototype.checkBuildFloorLevelCondition = function () {
                var checkResult = { result: true, reason: "" };
                var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
                if (User.info.level < floorConfig.level_req) {
                    checkResult.result = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_level, floorConfig.level_req);
                    checkResult.reason = msg;
                }
                return checkResult;
            };
            Main.prototype.checkTopFloor = function () {
                return this.floorIndex >= Game.config.floor.getConfigList().length;
            };
            /**
             * 显示房间信息
             * @param room
             */
            Main.prototype.onRoomTitleClick = function (room) {
                if (room.roomInfo != null) {
                    var buildRoomUpgrade = Building.BuildRoomUpgrade.createInstance();
                    buildRoomUpgrade.setInfo(room.roomInfo);
                    MenuLayer.module.addChild(buildRoomUpgrade);
                }
            };
            Main.prototype.getBuildRoom = function (roomId) {
                for (var _i = 0, _a = this.floorRoomList; _i < _a.length; _i++) {
                    var room = _a[_i];
                    if (room.roomInfo) {
                        if (room.roomInfo.id == roomId) {
                            return room;
                        }
                    }
                }
            };
            /**
             * 房间内执行动作
             * @param type
             * @param avatarId
             * @param actNameOrIndex
             */
            Main.prototype.executeAction = function (type, avatarId, actNameOrIndex) {
                for (var _i = 0, _a = this.floorRoomList; _i < _a.length; _i++) {
                    var room = _a[_i];
                    if (room.roomInfo.type == type) {
                        room.executeAction(avatarId, actNameOrIndex);
                        break;
                    }
                }
            };
            /**
             * Avatar切换房间
             * @param avatarId
             * @param from
             * @param to
             */
            Main.prototype.avatarChangeRoom = function (avatarId, from, to) {
                var avatar = from.getAvatar(avatarId);
                from.avatarLeave(avatar);
                to.avatarEnter(avatar);
            };
            /**
             * 获取房间
             * @param type
             */
            Main.prototype.getRoom = function (type) {
                for (var _i = 0, _a = this.floorRoomList; _i < _a.length; _i++) {
                    var room = _a[_i];
                    if (room.roomInfo.type == type) {
                        return room;
                    }
                }
                return null;
            };
            return Main;
        }(Building.MainStruct));
        Building.Main = Main;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map