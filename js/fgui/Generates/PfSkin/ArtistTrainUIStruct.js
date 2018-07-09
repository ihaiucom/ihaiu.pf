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
    var PfSkin;
    (function (PfSkin) {
        var ArtistTrainUIStruct = /** @class */ (function (_super) {
            __extends(ArtistTrainUIStruct, _super);
            function ArtistTrainUIStruct() {
                return _super.call(this) || this;
            }
            ArtistTrainUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTrainUI"));
            };
            ArtistTrainUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_bottom = (this.getChild("bottom"));
                this.m_actorList = (this.getChild("actorList"));
                this.m_attrIcon1 = (this.getChild("attrIcon1"));
                this.m_attrIcon2 = (this.getChild("attrIcon2"));
                this.m_attrIcon3 = (this.getChild("attrIcon3"));
                this.m_attrIcon4 = (this.getChild("attrIcon4"));
                this.m_attrLabel1 = (this.getChild("attrLabel1"));
                this.m_attrLabel2 = (this.getChild("attrLabel2"));
                this.m_attrLabel3 = (this.getChild("attrLabel3"));
                this.m_attrLabel4 = (this.getChild("attrLabel4"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_checkbox = (this.getChild("checkbox"));
            };
            ArtistTrainUIStruct.URL = "ui://s33x8418jazc1le";
            ArtistTrainUIStruct.DependPackages = ["PfSkin"];
            return ArtistTrainUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistTrainUIStruct = ArtistTrainUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainUIStruct.js.map