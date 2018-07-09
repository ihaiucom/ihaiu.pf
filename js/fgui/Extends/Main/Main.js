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
    var Main;
    (function (Main_1) {
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            Main.prototype.onWindowInited = function () {
                this.expBar = this.m_headInfo.m_expBar.getChild("sp_exp").asImage;
                this.expBarWidth = this.expBar.width;
                this.m_headInfo.m_icon_head.onClick(this, this.showPlayerInfo);
                this.m_bar_bottom.m_btn_film.onClick(this, this.onClickWar);
                this.m_bar_bottom.m_btn_artist.onClick(this, this.onClickArtist);
            };
            Main.prototype.onWindowShow = function () {
                this.init();
                Game.protoOkEvent.add(ProtoAPIEventKey.ItemData, this.updatePlayerInfo, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.GameInfo, this.updatePlayerInfo, this);
            };
            Main.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.ItemData, this.updatePlayerInfo, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.GameInfo, this.updatePlayerInfo, this);
            };
            Main.prototype.init = function () {
                this.updatePlayerInfo();
            };
            Main.prototype.updatePlayerInfo = function () {
                this.updateExpProgressBar();
                this.updateHeadIcon();
                this.m_headInfo.m_txt_vip.text = "Star " + User.info.vipLevel;
                this.m_headInfo.m_num_heart.text = User.info.level.toString();
                //
                this.m_txt_username.text = User.info.name;
                this.m_txt_street1.text = "ST." + User.info.stall % 1000;
                this.m_txt_street2.text = "No.105";
                this.m_txt_streetName1.text = "David";
                this.m_txt_street3.text = "No.105";
                //
                this.m_assets.m_txt_coin.text = formatNumberUnit(Game.moduleModel.item.getItemNum(Games.AssetType.Gold));
                this.m_assets.m_txt_diamond.text = formatNumberUnit(Game.moduleModel.item.getItemNum(Games.AssetType.Diamond));
            };
            Main.prototype.updateExpProgressBar = function () {
                //exp
                var prevExp = 0;
                for (var i = 0; i < User.info.level; i++) {
                    var cfg = Game.config.playerLevel.getConfig(i);
                    if (cfg != null) {
                        prevExp += cfg.fans;
                    }
                }
                var curExp = User.info.fans; // - prevExp;
                var upgradeExp = Game.config.playerLevel.getConfig(User.info.level).fans;
                this.expBar.width = (curExp / upgradeExp) * this.expBarWidth;
            };
            Main.prototype.updateHeadIcon = function () {
                var _this = this;
                var getPortrait = function () {
                    var portraitId = User.info.portrait;
                    if (portraitId == 0) {
                        portraitId = _this.getDefaultPortrait();
                    }
                    var portraitCfg = Game.config.headPortrait.getConfig(portraitId);
                    if (portraitCfg) {
                        portraitId = portraitCfg.icon;
                        var avatarConfig = Game.config.avatar.getConfig(portraitCfg.icon);
                        if (avatarConfig) {
                            return avatarConfig.iconUrl;
                        }
                    }
                    return "";
                };
                this.m_headInfo.m_icon_head.getChild("icon_head").asLoader.url = getPortrait();
            };
            //获取默认头像
            Main.prototype.getDefaultPortrait = function () {
                var portraitCfgList = Game.config.headPortrait.getConfigList();
                var portraitSexList = portraitCfgList.filter(function (value, index, array) {
                    return value.sex == User.info.sex;
                });
                for (var _i = 0, portraitSexList_1 = portraitSexList; _i < portraitSexList_1.length; _i++) {
                    var portrait = portraitSexList_1[_i];
                    if (portrait.unlock.itemId == 0 && portrait.unlock.itemNum == 0) {
                        return portrait.id;
                    }
                }
                return 0;
            };
            Main.prototype.showPlayerInfo = function () {
                //Request
                Game.protosender.GameData.GetGameInfoExt();
            };
            // 点击战斗按钮，发送战斗请求
            Main.prototype.onClickWar = function () {
                Game.menu.open(MenuId.War);
            };
            /**
             * 更新红点
             */
            Main.prototype.updateRed = function () {
                //艺人红点
                this.m_bar_bottom.m_btn_artist.m_red.visible = Game.moduleModel.actor.isCanNoseActor;
            };
            //点击艺人
            Main.prototype.onClickArtist = function () {
                Game.menu.open(MenuId.ArtistList);
            };
            return Main;
        }(Main_1.MainStruct));
        Main_1.Main = Main;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map