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
    var Building;
    (function (Building) {
        var Asset_mucaiStruct = /** @class */ (function (_super) {
            __extends(Asset_mucaiStruct, _super);
            function Asset_mucaiStruct() {
                return _super.call(this) || this;
            }
            Asset_mucaiStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "asset_mucai"));
            };
            Asset_mucaiStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Title = (this.getChild("Title"));
            };
            Asset_mucaiStruct.URL = "ui://d062jvkgcpc9117";
            Asset_mucaiStruct.DependPackages = ["Building"];
            return Asset_mucaiStruct;
        }(fairygui.GComponent));
        Building.Asset_mucaiStruct = Asset_mucaiStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Asset_mucaiStruct.js.map