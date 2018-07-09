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
        var GetWayItemStruct = /** @class */ (function (_super) {
            __extends(GetWayItemStruct, _super);
            function GetWayItemStruct() {
                return _super.call(this) || this;
            }
            GetWayItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "GetWayItem"));
            };
            GetWayItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_loader = (this.getChild("loader"));
                this.m_title = (this.getChild("title"));
            };
            GetWayItemStruct.URL = "ui://d062jvkgo11z124";
            GetWayItemStruct.DependPackages = ["Building"];
            return GetWayItemStruct;
        }(fairygui.GComponent));
        Building.GetWayItemStruct = GetWayItemStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GetWayItemStruct.js.map