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
    var BlackSkin;
    (function (BlackSkin) {
        var TooltipsWinStruct = /** @class */ (function (_super) {
            __extends(TooltipsWinStruct, _super);
            function TooltipsWinStruct() {
                return _super.call(this) || this;
            }
            TooltipsWinStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "TooltipsWin"));
            };
            TooltipsWinStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TooltipsWinStruct.URL = "ui://s1uxc7tgjmop3b";
            TooltipsWinStruct.DependPackages = ["BlackSkin"];
            return TooltipsWinStruct;
        }(fairygui.GLabel));
        BlackSkin.TooltipsWinStruct = TooltipsWinStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TooltipsWinStruct.js.map