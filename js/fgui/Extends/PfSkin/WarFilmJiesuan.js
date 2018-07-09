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
        var WarFilmJiesuan = /** @class */ (function (_super) {
            __extends(WarFilmJiesuan, _super);
            function WarFilmJiesuan() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmJiesuan.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 参演艺人列表初始化
                this.m_zhuyanList.itemRenderer = Laya.Handler.create(this, this.initYRListItem, null, false);
                // 掉落
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.initRewardListItem, null, false);
                // 分享按钮
                this.m_shareBtn.visible = false;
                this.m_shareRewardTip.visible = false;
                // 关闭按钮
                this.onClick(this, this.onClickOkBtn);
            };
            WarFilmJiesuan.prototype.onClickOkBtn = function () {
                Game.moduleModel.warData.moveData = null;
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
                // Game.moduleModel.warData.setBattleOver();
                // 进入下映提示
                // this.moduleMain.conent.otherCloseToWarMain(WarStatus.overMarket);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.OverTip);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.OverTip, true);
            };
            WarFilmJiesuan.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmJiesuan.prototype.onWindowHide = function () {
            };
            WarFilmJiesuan.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.isPutPanel = true;
                // 服务器数据
                var data = Game.moduleModel.warData.moveData;
                // 剧本数据（配置表）
                var confData = Game.moduleModel.warData.moveStory;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(confData.poster_name).iconUrl;
                var sellIcon = Game.config.blockLevel.getSellIcon(data.totalBoxOffice);
                this.m_sellTipIcon.icon = Game.config.avatar.getConfig(sellIcon).iconUrl;
                this.m_tip5.text = format(Game.config.msg.getConfig(MsgKey.movie_drop_tips).notice, Game.config.movieDrop.getSellTip(sellIcon).gain_name);
                this.m_filmName.text = data.name;
                var types = Game.config.movieShootType.getConfigList();
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                        this.m_filmType.text = types[i].getName;
                        break;
                    }
                }
                this.m_totalProgress.value = 100;
                this.m_costProgress.value = data.totalMovieCost / data.totalBoxOffice * 100;
                this.m_rewardValue.text = ((data.totalBoxOffice / data.totalMovieCost) * 100).toFixed(0) + "%";
                this.m_filmTime.text = confData.length.toFixed(0) + "分钟";
                this.m_koubei.text = "观众口碑：" + data.publicPraise.toFixed(0);
                this.m_starProgress.value = data.praise;
                this.m_auther.text = User.info.name;
                this.m_total.text = data.totalBoxOffice.toFixed(0);
                this.m_bipinCom.visible = false;
                this.m_filmTip.text = Game.config.msg.getConfig(MsgKey.movie_big_sell_tips).notice;
                var dropCount = Game.moduleModel.warData.dropList.length;
                this.m_rewardList.numItems = dropCount;
                this.m_zhuyanList.numItems = Game.moduleModel.warData.getRealYRList.count;
            };
            // 单个艺人item赋值
            WarFilmJiesuan.prototype.initYRListItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index);
            };
            WarFilmJiesuan.prototype.initRewardListItem = function (index, obj) {
                var item = obj;
                item.setData(index);
            };
            return WarFilmJiesuan;
        }(PfSkin.WarFilmJiesuanStruct));
        PfSkin.WarFilmJiesuan = WarFilmJiesuan;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmJiesuan.js.map