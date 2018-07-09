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
    var PfSkin;
    (function (PfSkin) {
        var WarFilmInfo = /** @class */ (function (_super) {
            __extends(WarFilmInfo, _super);
            function WarFilmInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmLabelList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
                this.m_filmYirenList.itemRenderer = Laya.Handler.create(this, this.yirenItem, null, false);
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
            };
            WarFilmInfo.prototype.onClicClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarFilmInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmInfo.prototype.onWindowHide = function () {
            };
            WarFilmInfo.prototype.setData = function () {
                if (Game.moduleModel.warData.filmInfoConfig !== null) {
                    this.curData = Game.moduleModel.warData.filmInfoConfig;
                }
                else {
                    this.curData = Game.moduleModel.warData.moveStory;
                }
                // 剧本名称
                this.m_filmName.text = this.curData.filmName;
                // 剧本风格
                this.m_filmType.text = this.curData.filmType;
                // 剧本元素
                this.m_filmLabelList.numItems = this.curData.filmTags.length;
                // 介绍 
                this.m_filmDes.text = this.curData.filmDes;
                // 剧本星级
                this.m_filmStar.m_Star.setSelectedIndex(this.curData.starNumber);
                this.clickYRItem = 0;
                this.curController = null;
                // 艺人需求列表
                this.m_filmYirenList.numItems = this.curData.characterProperty.length;
                if (this.m_filmYirenList.numItems > 3) {
                    this.m_filmYirenList.scrollPane.setPosX(75);
                }
                // 点击艺人列表item
                this.m_filmYirenList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
                // 点击界面
                this.onClick(this, this.closeyirenItemPos);
                if (this.curData.getMale > 0) {
                    this.m_manIcon.visible = true;
                    this.m_manReq.text = this.curData.getMale + "%";
                    this.m_manReq.visible = true;
                }
                else {
                    this.m_manIcon.visible = false;
                    this.m_manReq.visible = false;
                }
                if (this.curData.getFemale > 0) {
                    this.m_womanIcon.visible = true;
                    this.m_womanReq.text = this.curData.getFemale + "%";
                    this.m_womanReq.visible = true;
                }
                else {
                    this.m_womanIcon.visible = false;
                    this.m_womanReq.visible = false;
                }
                if (this.curData.getChild > 0) {
                    this.m_childIcon.visible = true;
                    this.m_childReq.text = this.curData.getChild + "%";
                    this.m_childReq.visible = true;
                }
                else {
                    this.m_childIcon.visible = false;
                    this.m_childReq.visible = false;
                }
                this.m_completedConditions1.visible = true;
                this.m_completedConditions1.text = this.getRewardTip();
                this.m_completedConditions2.visible = false;
                this.m_completedConditions3.visible = false;
                this.m_completedConditions4.visible = false;
                // 图片
                this.m_filmIcon.icon = Game.config.avatar.getConfig(this.curData.poster_name).iconUrl;
                // this.m_icon = this.curData.getReward[0]
                this.m_attAdd.text = format("+{0}%", this.curData.getReward[0].rate);
            };
            WarFilmInfo.prototype.getRewardTip = function () {
                var str = "";
                if (this.curData.target_mark) {
                    str = Game.config.msg.getConfig(MsgKey.story_target_tips).notice;
                }
                else {
                    str = Game.config.msg.getConfig(MsgKey.story_non_target_tips).notice;
                }
                return str;
            };
            // 剧本元素item赋值
            WarFilmInfo.prototype.initTagsItem = function (index, obj) {
                obj.text = this.curData.filmTags[index];
            };
            // 单个艺人赋值
            WarFilmInfo.prototype.yirenItem = function (index, obj) {
                var item = obj;
                item.setData(this.curData.characterProperty[index]);
            };
            // 点击界面
            WarFilmInfo.prototype.closeyirenItemPos = function (vet) {
                if (this.clickYRItem == 0) {
                    // 关闭pop提示
                    if (this.curController !== null) {
                        this.curController.setSelectedIndex(0);
                    }
                    this.curController = null;
                    this.setChildIndex(this.m_okBtn, this.numChildren - 1);
                }
                else {
                    this.clickYRItem = 0;
                }
            };
            // 艺人被点击
            WarFilmInfo.prototype.clickItem = function (obj) {
                if (this.curController !== null) {
                    this.curController.setSelectedIndex(0);
                }
                this.clickYRItem = 1;
                var item = obj;
                this.curController = item.m_popControl;
                this.curController.setSelectedIndex(1);
                this.setChildIndex(this.m_filmYirenList, this.numChildren - 1);
            };
            return WarFilmInfo;
        }(PfSkin.WarFilmInfoStruct));
        PfSkin.WarFilmInfo = WarFilmInfo;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmInfo.js.map