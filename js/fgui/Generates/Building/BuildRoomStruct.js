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
        var BuildRoomStruct = /** @class */ (function (_super) {
            __extends(BuildRoomStruct, _super);
            function BuildRoomStruct() {
                return _super.call(this) || this;
            }
            BuildRoomStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoom"));
            };
            BuildRoomStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Button = this.getController("Button");
                this.m_loader = (this.getChild("loader"));
                this.m_chair1 = (this.getChild("chair1"));
                this.m_chair2 = (this.getChild("chair2"));
                this.m_buildFloorInfo = (this.getChild("buildFloorInfo"));
                this.m_avatarContainer = (this.getChild("avatarContainer"));
                this.m_btn_roomName = (this.getChild("btn_roomName"));
                this.m_btn_buildRoom = (this.getChild("btn_buildRoom"));
                this.m_btn_buildFloor = (this.getChild("btn_buildFloor"));
            };
            BuildRoomStruct.URL = "ui://d062jvkgor9t1";
            BuildRoomStruct.DependPackages = ["Building"];
            return BuildRoomStruct;
        }(fairygui.GComponent));
        Building.BuildRoomStruct = BuildRoomStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomStruct.js.map