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
        var WarCurrentMarketInfo = /** @class */ (function (_super) {
            __extends(WarCurrentMarketInfo, _super);
            function WarCurrentMarketInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCurrentMarketInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭面板
                this.onClick(this, this.onClickClose);
            };
            WarCurrentMarketInfo.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.chooseActor);
            };
            WarCurrentMarketInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarCurrentMarketInfo.prototype.onWindowHide = function () {
            };
            WarCurrentMarketInfo.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                var data = Game.moduleModel.warData.moveStory;
                var man = Game.moduleModel.warData.moveData.expected[0];
                var woman = Game.moduleModel.warData.moveData.expected[1];
                var child = Game.moduleModel.warData.moveData.expected[2];
                this.m_curManReq.text = man + "%";
                this.m_curWomanReq.text = woman + "%";
                this.m_curChildReq.text = child + "%";
                var isOk = true;
                this.m_manReqCom.visible = true;
                this.m_manReq.text = data.getMale + "%";
                if (man >= data.getMale) {
                    this.m_manOk.visible = true;
                    this.m_manReq.color = "#00FF00";
                }
                else {
                    this.m_manOk.visible = false;
                    this.m_manReq.color = "#FF0000";
                    isOk = false;
                }
                this.m_womanReqCom.visible = true;
                this.m_womenReq.text = data.getFemale + "%";
                if (woman >= data.getFemale) {
                    this.m_womanOk.visible = true;
                    this.m_womenReq.color = "#00FF00";
                }
                else {
                    this.m_womanOk.visible = false;
                    this.m_womenReq.color = "#FF0000";
                    isOk = false;
                }
                this.m_childReqCom.visible = true;
                this.m_childReq.text = data.getChild + "%";
                if (child >= data.getChild) {
                    this.m_childOk.visible = true;
                    this.m_childReq.color = "#00FF00";
                }
                else {
                    this.m_childOk.visible = false;
                    this.m_childReq.color = "#FF0000";
                    isOk = false;
                }
                var strTip = "";
                if (isOk) {
                    if (PfSkin.ulits.getRandomInt(0, 1) === 0) {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_good1).notice;
                    }
                    else {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_good2).notice;
                    }
                }
                else {
                    if (PfSkin.ulits.getRandomInt(0, 1) === 0) {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_bad1).notice;
                    }
                    else {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_bad2).notice;
                    }
                }
                this.m_filmName.text = format(strTip, Game.moduleModel.warData.moveData.name);
            };
            return WarCurrentMarketInfo;
        }(PfSkin.WarCurrentMarketInfoStruct));
        PfSkin.WarCurrentMarketInfo = WarCurrentMarketInfo;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCurrentMarketInfo.js.map