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
        var Rectangle = laya.maths.Rectangle;
        var BuildRoom = /** @class */ (function (_super) {
            __extends(BuildRoom, _super);
            function BuildRoom() {
                var _this = _super.call(this) || this;
                _this.frameId = 0;
                _this.avatarList = [];
                _this.floorInfo = new Games.FloorInfo();
                return _this;
            }
            BuildRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoom"));
            };
            BuildRoom.prototype.init = function () {
                this.m_btn_roomName.getChild("title").text = "第" + this.floorInfo.index + "层";
                this.m_btn_buildFloor.getChild("Title").text = "扩建第" + this.floorInfo.index + "层";
                this.m_buildFloorInfo.visible = false;
                this.m_btn_buildRoom.visible = false;
                this.m_loader.url = Res.getRoom("expansion");
            };
            BuildRoom.prototype.waitBuindRoom = function () {
                this.m_btn_buildFloor.visible = false;
                this.m_btn_buildRoom.visible = true;
                this.m_loader.url = Res.getRoom("construct");
            };
            BuildRoom.prototype.showFailBuildFloorReason = function (reason) {
                this.m_buildFloorInfo.visible = true;
                this.m_buildFloorInfo.text = reason;
            };
            BuildRoom.prototype.setInfo = function (info) {
                this.roomInfo = info;
                this.name = info.name;
                var cfg = Game.config.buildingLevel.getConfig(info.id);
                this.m_btn_roomName.getChild("title").text = this.name + format(Games.TEXT.Lv, cfg.level);
                this.m_loader.url = Res.getRoom(info.type);
                this.m_btn_buildFloor.visible = false;
                this.m_btn_buildRoom.visible = false;
                this.isShowChair();
            };
            //显示座椅
            BuildRoom.prototype.isShowChair = function () {
                if (this.roomInfo.type == 1) {
                    this.m_chair1.visible = true;
                    this.m_chair2.visible = true;
                }
                else {
                    this.m_chair1.visible = false;
                    this.m_chair2.visible = false;
                }
            };
            /**
             * 创建Avatar角色
             * @param info
             */
            BuildRoom.prototype.creatAvatar = function (info, factor) {
                if (factor === void 0) { factor = 0.26; }
                //creat avatar 
                var avatar = Games.Avatar.Creat(info);
                avatar.setBounds(new Rectangle(0, 0, 190, 620));
                var bounds = avatar.getBounds();
                avatar.scale(0.26, 0.26, true);
                avatar.pos(bounds.width * factor, bounds.height * 0.58);
                this.avatarList.push(avatar);
                this.displayObject.addChild(avatar);
                return avatar;
            };
            BuildRoom.prototype.onBuildComplete = function (info) {
                this.m_btn_buildRoom.visible = false;
                this.m_buildFloorInfo.visible = false;
                this.setInfo(info);
                if (info.type == 3) //艺人教室
                 {
                    var avatarinfo = new Games.AvatarInfo();
                    avatarinfo.texturePath = "res/spine/actor/man_01/1001_Joan.png";
                    avatarinfo.skeletonPath = "res/spine/bones/man_01.sk";
                    this.creatAvatar(avatarinfo, 0.5);
                    avatarinfo = new Games.AvatarInfo();
                    avatarinfo.texturePath = "res/spine/npc/female_01/2004_famle.png";
                    avatarinfo.skeletonPath = "res/spine/bones/female_01.sk";
                    avatarinfo.unitType = Games.UnitType.E_Avatar;
                    this.creatAvatar(avatarinfo, 3).skewY = 180;
                    //OnFrame
                    Laya.timer.frameLoop(1, this, this.roomFrame);
                }
            };
            BuildRoom.prototype.roomFrame = function () {
                this.frameId++;
                if (this.frameId % 200 == 0) {
                    var r = Math.random() > 0.5 ? 0 : 1;
                    this.AvatarMoveAI(r);
                }
            };
            /***
             * avatar随机移动
             */
            BuildRoom.prototype.AvatarMoveAI = function (i) {
                this.avatarList.forEach(function (value, index, array) {
                    if (index == i) {
                        var animIndex = Math.random() > 0.5 ? 5 : 10;
                        var animName = animIndex == 5 ? "zoulu1" : "paodong1";
                        if (value.info.unitType == Games.UnitType.E_Avatar) //temp
                         {
                            animIndex = 5;
                            animName = "zoulu1";
                        }
                        value.animator.play(animName, true); //walk5 run10
                        var rx = BuildRoom.GetRandomNum(100, 600);
                        value.skewY = value.x > rx ? 180 : 0; //设置方向
                        var factor = animIndex == 5 ? 10 : 5;
                        var duration = Math.abs(value.x - rx) * factor; //持续时间
                        Laya.Tween.to(value, { x: rx }, duration, Laya.Ease.linearIn, Handler.create(null, function () {
                            value.animator.play("zhanli1", true); //idle
                        }), 0, true, true);
                    }
                });
            };
            /**
             * 生成范围随机数
             * @Min 最小值
             * @Max 最大值
             */
            BuildRoom.GetRandomNum = function (Min, Max) {
                var Range = Max - Min;
                var Rand = Math.random();
                return (Min + Math.round(Rand * Range));
            };
            /**
             * 房间内执行动作
             * @param type
             * @param actionInfo
             */
            BuildRoom.prototype.executeAction = function (avatarId, actionNameOrIndex) {
                var list = this.avatarList.filter(function (value, index, array) {
                    return value.id == avatarId;
                });
                if (list.length > 0) {
                    list[0].executeAction(actionNameOrIndex);
                }
            };
            /**
             * avatar进入房间
             * @param avatar
             */
            BuildRoom.prototype.avatarEnter = function (avatar) {
                this.creatAvatar(avatar.info);
            };
            /**
             * avatar 离开房间
             * @param avatar
             */
            BuildRoom.prototype.avatarLeave = function (avatar) {
                avatar.dispose();
            };
            /**
             * 获取房间Avatar
             * @param avatarId
             */
            BuildRoom.prototype.getAvatar = function (avatarId) {
                var filters = this.avatarList.filter(function (avatar, index, array) {
                    return avatar.id == avatarId;
                });
                if (filters.length > 0) {
                    return filters[0];
                }
                return null;
            };
            BuildRoom.URL = "ui://d062jvkgor9t1";
            return BuildRoom;
        }(Building.BuildRoomStruct));
        Building.BuildRoom = BuildRoom;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoom.js.map