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
        var WarFilmOverMarketInfo = /** @class */ (function (_super) {
            __extends(WarFilmOverMarketInfo, _super);
            function WarFilmOverMarketInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmOverMarketInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pinglun1.itemRenderer = Laya.Handler.create(this, this.initPlI1tem, [1], false);
                this.m_pinglun2.itemRenderer = Laya.Handler.create(this, this.initPlI1tem, [2], false);
                this.m_pinglun3.itemRenderer = Laya.Handler.create(this, this.initPlI1tem, [3], false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarFilmOverMarketInfo.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 进入结算界面
                Game.moduleModel.warData.setBattleOver(function () { _this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.Jiesuan); });
                // 返回，回到状态判断
                // this.moduleMain.conent.otherCloseToWarMain(WarStatus.Jiesuan);
                // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.Jiesuan);
                // Game.moduleModel.warData.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Jiesuan, true);
            };
            WarFilmOverMarketInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmOverMarketInfo.prototype.onWindowHide = function () {
            };
            WarFilmOverMarketInfo.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_pinglun1.numItems = 0;
                this.m_pinglun2.numItems = 0;
                this.m_pinglun3.numItems = 0;
                this.m_pinglun1.numItems = 3;
                this.m_pinglun2.numItems = 3;
                this.m_pinglun3.numItems = 5;
            };
            // 媒体item赋值
            WarFilmOverMarketInfo.prototype.initPlI1tem = function (ping, index, obj) {
                var item = obj;
                switch (ping) {
                    case 1:
                        {
                            if (index === 1) {
                                item.text = PfSkin.ulits.getRandomInt(50, 500) + "%";
                                item.m_title.fontSize = 35;
                                item.m_title.color = "#ff00ff";
                            }
                        }
                        break;
                    case 2:
                        {
                            if (index === 1) {
                                item.text = PfSkin.ulits.getRandomInt(10, 50) + "%";
                            }
                        }
                        break;
                    case 3:
                        {
                            if (index === 1) {
                                item.text = PfSkin.ulits.getRandomInt(10, 20) + "%";
                            }
                            else if (index === 3) {
                                var types = Game.config.movieShootType.getConfigList();
                                var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                                for (var i = 0; i < types.length; i++) {
                                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                                        item.text = types[i].getName + "电影";
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                }
            };
            return WarFilmOverMarketInfo;
        }(PfSkin.WarFilmOverMarketInfoStruct));
        PfSkin.WarFilmOverMarketInfo = WarFilmOverMarketInfo;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmOverMarketInfo.js.map