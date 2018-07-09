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
        var HeadInfoStruct = /** @class */ (function (_super) {
            __extends(HeadInfoStruct, _super);
            function HeadInfoStruct() {
                return _super.call(this) || this;
            }
            HeadInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "HeadInfo"));
            };
            HeadInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_vip = (this.getChild("txt_vip"));
                this.m_flag_heart = (this.getChild("flag_heart"));
                this.m_num_heart = (this.getChild("num_heart"));
                this.m_expBar = (this.getChild("expBar"));
                this.m_icon_head = (this.getChild("icon_head"));
            };
            HeadInfoStruct.URL = "ui://7ecreso0f2qvx3r";
            HeadInfoStruct.DependPackages = ["Main"];
            return HeadInfoStruct;
        }(fairygui.GComponent));
        Main.HeadInfoStruct = HeadInfoStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HeadInfoStruct.js.map