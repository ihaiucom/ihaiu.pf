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
        var Bar_toprightStruct = /** @class */ (function (_super) {
            __extends(Bar_toprightStruct, _super);
            function Bar_toprightStruct() {
                return _super.call(this) || this;
            }
            Bar_toprightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "bar_topright"));
            };
            Bar_toprightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            Bar_toprightStruct.URL = "ui://7ecreso0ua2b32";
            Bar_toprightStruct.DependPackages = ["Main"];
            return Bar_toprightStruct;
        }(fairygui.GComponent));
        Main.Bar_toprightStruct = Bar_toprightStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Bar_toprightStruct.js.map