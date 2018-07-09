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
        var MainStruct = /** @class */ (function (_super) {
            __extends(MainStruct, _super);
            function MainStruct() {
                return _super.call(this) || this;
            }
            MainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "Main"));
            };
            MainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_flag_weal = (this.getChild("flag_weal"));
                this.m_txt_street1 = (this.getChild("txt_street1"));
                this.m_txt_username = (this.getChild("txt_username"));
                this.m_txt_street2 = (this.getChild("txt_street2"));
                this.m_txt_streetName1 = (this.getChild("txt_streetName1"));
                this.m_txt_street3 = (this.getChild("txt_street3"));
                this.m_builder = (this.getChild("builder"));
                this.m_bar_bottom = (this.getChild("bar_bottom"));
                this.m_bar_right = (this.getChild("bar_right"));
                this.m_btn_weal = (this.getChild("btn_weal"));
                this.m_headInfo = (this.getChild("headInfo"));
                this.m_assets = (this.getChild("assets"));
                this.m_btn_add = (this.getChild("btn_add"));
            };
            MainStruct.URL = "ui://7ecreso0ua2b2m";
            MainStruct.DependPackages = ["Main", "Building"];
            return MainStruct;
        }(fairygui.GComponent));
        Main.MainStruct = MainStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainStruct.js.map