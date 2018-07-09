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
        var Com_jinbiStruct = /** @class */ (function (_super) {
            __extends(Com_jinbiStruct, _super);
            function Com_jinbiStruct() {
                return _super.call(this) || this;
            }
            Com_jinbiStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "com_jinbi"));
            };
            Com_jinbiStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Title = (this.getChild("Title"));
            };
            Com_jinbiStruct.URL = "ui://d062jvkgcpc9115";
            Com_jinbiStruct.DependPackages = ["Building"];
            return Com_jinbiStruct;
        }(fairygui.GComponent));
        Building.Com_jinbiStruct = Com_jinbiStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Com_jinbiStruct.js.map