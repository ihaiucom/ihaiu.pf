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
        var ActorDetailUIStruct = /** @class */ (function (_super) {
            __extends(ActorDetailUIStruct, _super);
            function ActorDetailUIStruct() {
                return _super.call(this) || this;
            }
            ActorDetailUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ActorDetailUI"));
            };
            ActorDetailUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_aName = (this.getChild("aName"));
                this.m_desc = (this.getChild("desc"));
                this.m_starlist = (this.getChild("starlist"));
                this.m_contory = (this.getChild("contory"));
                this.m_sex = (this.getChild("sex"));
                this.m_show = (this.getChild("show"));
                this.m_age = (this.getChild("age"));
                this.m_attrIcon1 = (this.getChild("attrIcon1"));
                this.m_attTitle1 = (this.getChild("attTitle1"));
                this.m_attrLabel1 = (this.getChild("attrLabel1"));
                this.m_attr1 = (this.getChild("attr1"));
                this.m_attrIcon2 = (this.getChild("attrIcon2"));
                this.m_attTitle2 = (this.getChild("attTitle2"));
                this.m_attrLabel2 = (this.getChild("attrLabel2"));
                this.m_attr2 = (this.getChild("attr2"));
                this.m_attrIcon3 = (this.getChild("attrIcon3"));
                this.m_attTitle3 = (this.getChild("attTitle3"));
                this.m_attrLabel3 = (this.getChild("attrLabel3"));
                this.m_attr3 = (this.getChild("attr3"));
                this.m_attrIcon4 = (this.getChild("attrIcon4"));
                this.m_attTitle4 = (this.getChild("attTitle4"));
                this.m_attrLabel4 = (this.getChild("attrLabel4"));
                this.m_attr4 = (this.getChild("attr4"));
                this.m_icon = (this.getChild("icon"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_content = (this.getChild("content"));
            };
            ActorDetailUIStruct.URL = "ui://s33x8418jazc1kz";
            ActorDetailUIStruct.DependPackages = ["PfSkin"];
            return ActorDetailUIStruct;
        }(fairygui.GComponent));
        PfSkin.ActorDetailUIStruct = ActorDetailUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorDetailUIStruct.js.map