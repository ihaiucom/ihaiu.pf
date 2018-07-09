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
    (function (Main) {
        var MainRightBarStruct = /** @class */ (function (_super) {
            __extends(MainRightBarStruct, _super);
            function MainRightBarStruct() {
                return _super.call(this) || this;
            }
            MainRightBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "MainRightBar"));
            };
            MainRightBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_chat = (this.getChild("btn_chat"));
                this.m_btn_mail = (this.getChild("btn_mail"));
                this.m_btn_setting = (this.getChild("btn_setting"));
                this.m_btn_tips = (this.getChild("btn_tips"));
            };
            MainRightBarStruct.URL = "ui://7ecreso0npx5x3o";
            MainRightBarStruct.DependPackages = ["Main"];
            return MainRightBarStruct;
        }(fairygui.GComponent));
        Main.MainRightBarStruct = MainRightBarStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainRightBarStruct.js.map