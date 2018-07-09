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
        var WarSelectFilmType = /** @class */ (function (_super) {
            __extends(WarSelectFilmType, _super);
            function WarSelectFilmType() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectType = -1;
                _this.curClickIndex = -1;
                return _this;
            }
            WarSelectFilmType.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.allType = Game.config.movieShootType.getConfigList();
                // 刷新类型列表
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initTypeListItem, null, false);
                // 选中列表某一项
                this.m_typeList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarSelectFilmType.prototype.onClickOkBtn = function () {
                var _this = this;
                if (this.selectType > -1) {
                    Game.moduleModel.warData.setSelectType(this.selectType, function () {
                        _this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.chooseTip);
                    });
                    this.moduleWindow.closeSelf();
                    // 返回，回到状态判断
                    // 回调，拍摄进度继续
                    // let fun = this.moduleWindow.menuParameter.args[0];
                    // fun(ShootingStage.SelectType);
                }
            };
            WarSelectFilmType.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarSelectFilmType.prototype.onWindowShow = function () {
                this.setData();
            };
            WarSelectFilmType.prototype.onWindowHide = function () {
            };
            WarSelectFilmType.prototype.setData = function () {
                this.curClickIndex = -1;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.selectType = -1;
                this.allType = Game.config.movieShootType.getConfigList();
                this.m_typeList.numItems = this.allType.length;
            };
            // 类型列表单个赋值
            WarSelectFilmType.prototype.initTypeListItem = function (index, obj) {
                var item = obj;
                item.setData(this.allType[index], index, this.curClickIndex == index);
            };
            // 点击某个item
            WarSelectFilmType.prototype.onClickItem = function (obj) {
                var index = this.m_typeList.getChildIndex(obj);
                this.curClickIndex = index;
                this.selectType = this.allType[index].id;
                this.m_typeList.numItems = this.allType.length;
            };
            return WarSelectFilmType;
        }(PfSkin.WarSelectFilmTypeStruct));
        PfSkin.WarSelectFilmType = WarSelectFilmType;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectFilmType.js.map