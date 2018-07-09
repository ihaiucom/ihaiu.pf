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
        var MainBottomBarStruct = /** @class */ (function (_super) {
            __extends(MainBottomBarStruct, _super);
            function MainBottomBarStruct() {
                return _super.call(this) || this;
            }
            MainBottomBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "MainBottomBar"));
            };
            MainBottomBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_run = (this.getChild("btn_run"));
                this.m_btn_manager = (this.getChild("btn_manager"));
                this.m_btn_artist = (this.getChild("btn_artist"));
                this.m_btn_film = (this.getChild("btn_film"));
                this.m_btn_market = (this.getChild("btn_market"));
                this.m_btn_social = (this.getChild("btn_social"));
                this.m_btn_depot = (this.getChild("btn_depot"));
            };
            MainBottomBarStruct.URL = "ui://7ecreso0npx5x3n";
            MainBottomBarStruct.DependPackages = ["Main"];
            return MainBottomBarStruct;
        }(fairygui.GComponent));
        Main.MainBottomBarStruct = MainBottomBarStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainBottomBarStruct.js.map