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
        /**
         * 剧本选择列表中的item
         */
        var WarFilmSelectItem = /** @class */ (function (_super) {
            __extends(WarFilmSelectItem, _super);
            function WarFilmSelectItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSelectItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_infIconBtn.onClick(this, this.onClickInf);
                this.m_infBtn.onClick(this, this.onClickInf);
                this.m_selectBtn.onClick(this, this.onClickSelectBtn);
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
            };
            WarFilmSelectItem.prototype.onClickInf = function () {
                Game.moduleModel.warData.filmInfoConfig = this.currData;
                // 打开电影信息详情子窗口
                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
            };
            WarFilmSelectItem.prototype.onClickSelectBtn = function () {
                var _this = this;
                Game.moduleModel.warData.filmIndexOf = this.indexOf;
                Game.system.openRename("修改剧本名称", null, function (arg) { _this.moduleWindow.conent.onReName(arg); }, null, "确定", this.currData.filmName, "名称7个字符", 7, "", [3, this.cost], true, this.getRandomList());
            };
            WarFilmSelectItem.prototype.getRandomList = function () {
                return Game.config.gameRandomName.getConfig(this.currData.random_name).names;
            };
            WarFilmSelectItem.prototype.onWindowShow = function () {
            };
            WarFilmSelectItem.prototype.onWindowHide = function () {
            };
            WarFilmSelectItem.prototype.setData = function (data, index) {
                this.currData = data;
                this.indexOf = index;
                this.cost = Game.moduleModel.warData.moveData.movieCost[this.indexOf];
                // 名称
                this.m_filmName.text = this.currData.filmName;
                // 星级
                this.m_starShow.m_Star.selectedIndex = this.currData.starNumber;
                var url = Game.config.avatar.getConfig(this.currData.poster_name).iconUrl;
                // 图片
                this.m_filmMoveShow.icon = url;
                // 剧本风格
                this.m_filmTopic.text = this.currData.filmType;
                // 剧本元素
                this.m_typeList.numItems = this.currData.filmTags.length;
                // 介绍 
                this.m_filmDes.text = this.currData.filmDes;
                // 选择按钮消费美元数量
                this.m_selectBtn.text = this.cost.toFixed(0);
                // 观众需求
                if (this.currData.getMale > 0) {
                    this.m_manReq.text = this.currData.getMale + "%";
                    this.m_manReq.visible = true;
                }
                else {
                    this.m_manReq.visible = false;
                }
                if (this.currData.getFemale > 0) {
                    this.m_womanReq.text = this.currData.getFemale + "%";
                    this.m_womanReq.visible = true;
                }
                else {
                    this.m_womanReq.visible = false;
                }
                if (this.currData.getChild > 0) {
                    this.m_childReq.text = this.currData.getChild + "%";
                    this.m_childReq.visible = true;
                }
                else {
                    this.m_childReq.visible = false;
                }
            };
            // 剧本元素item赋值
            WarFilmSelectItem.prototype.initTagsItem = function (index, obj) {
                obj.text = this.currData.filmTags[index];
            };
            return WarFilmSelectItem;
        }(PfSkin.WarFilmSelectItemStruct));
        PfSkin.WarFilmSelectItem = WarFilmSelectItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSelectItem.js.map