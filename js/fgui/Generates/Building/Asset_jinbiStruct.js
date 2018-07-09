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
        var Asset_jinbiStruct = /** @class */ (function (_super) {
            __extends(Asset_jinbiStruct, _super);
            function Asset_jinbiStruct() {
                return _super.call(this) || this;
            }
            Asset_jinbiStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "asset_jinbi"));
            };
            Asset_jinbiStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Title = (this.getChild("Title"));
            };
            Asset_jinbiStruct.URL = "ui://d062jvkgcpc9115";
            Asset_jinbiStruct.DependPackages = ["Building"];
            return Asset_jinbiStruct;
        }(fairygui.GComponent));
        Building.Asset_jinbiStruct = Asset_jinbiStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Asset_jinbiStruct.js.map