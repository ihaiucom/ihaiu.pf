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
    var PlayerInfo;
    (function (PlayerInfo) {
        var Btn_tabStruct = /** @class */ (function (_super) {
            __extends(Btn_tabStruct, _super);
            function Btn_tabStruct() {
                return _super.call(this) || this;
            }
            Btn_tabStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "btn_tab"));
            };
            Btn_tabStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_select_title = (this.getChild("select_title"));
            };
            Btn_tabStruct.URL = "ui://tderqmz5dyfel";
            Btn_tabStruct.DependPackages = ["PlayerInfo", "Common"];
            return Btn_tabStruct;
        }(fairygui.GButton));
        PlayerInfo.Btn_tabStruct = Btn_tabStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_tabStruct.js.map