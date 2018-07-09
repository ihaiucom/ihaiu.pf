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
        var WarFilmShangYing = /** @class */ (function (_super) {
            __extends(WarFilmShangYing, _super);
            function WarFilmShangYing() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmShangYing.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 初始化柱状图列表
                this.m_progressList.itemRenderer = Laya.Handler.create(this, this.initProgressItem, null, false);
                // 初始化观众类别
                this.m_guanzhongList.itemRenderer = Laya.Handler.create(this, this.initGuanzhongItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            WarFilmShangYing.prototype.onClickCloseBtn = function () {
                this.moduleWindow.closeSelf();
                this.moduleWindow.menuClose();
            };
            WarFilmShangYing.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmShangYing.prototype.onWindowHide = function () {
            };
            WarFilmShangYing.prototype.setData = function () {
                var _this = this;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_progressList.numItems = 0;
                this.moveData = Game.moduleModel.warData.moveData;
                this.m_filmTip.visible = true;
                this.m_filmTime.text = "";
                this.m_filmTotal.text = "";
                this.m_filmcurrent.text = "";
                this.runDays = this.moveData.runDays;
                this.maxDays = this.moveData.runDays.length;
                this.curDays = 0;
                this.total = this.moveData.totalBoxOffice;
                this.curMax = 0;
                this.m_filmName.text = this.moveData.name;
                // 1秒后开始正常放映
                setTimeout(function () { _this.delayRun(); }, 1000);
            };
            // 第一天放映，所有数据赋值
            WarFilmShangYing.prototype.delayRun = function () {
                var _this = this;
                this.m_filmTip.visible = false;
                this.curGZindex = 0;
                this.onShowProgress();
                this.setGuanzhong();
                this.onShowGuanzhongList();
                // 2秒后显示流行趋势
                setTimeout(function () { _this.showLiuxing(); }, 2000);
            };
            WarFilmShangYing.prototype.setGuanzhong = function () {
                this.guanzhongList = new Array();
                var expected = new Array();
                for (var i = 0; i < 3; i++) {
                    expected.push(Game.moduleModel.warData.moveData.expected[i]);
                }
                for (var i = 0; i < 10; i++) {
                    if (expected[0] > 0) {
                        this.guanzhongList.push(0);
                        expected[0] -= 10;
                    }
                    else if (expected[1] > 0) {
                        this.guanzhongList.push(1);
                        expected[1] -= 10;
                    }
                    else {
                        this.guanzhongList.push(2);
                    }
                }
                this.guanzhongList = this.sortRandomArr(this.guanzhongList);
            };
            WarFilmShangYing.prototype.sortRandomArr = function (arr) {
                var i = arr.length;
                while (i) {
                    var j = Math.floor(Math.random() * i--);
                    _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
                }
                return arr;
                var _a;
            };
            // 期待值不同，显示不同的流行推广情况
            WarFilmShangYing.prototype.showLiuxing = function () {
                // let liuxing = fgui.PfSkin.WarFilmLiuxing.createInstance();
                // liuxing.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                // fairygui.GRoot.inst.addChild(liuxing);
                // liuxing.m_c1.setSelectedIndex(ulit.ulit.getRandomInt(0, 2));
                // liuxing.onClick(this, () => { liuxing.visible = false });
            };
            // 刷新柱状图
            WarFilmShangYing.prototype.onShowProgress = function () {
                this.curDays++;
                if (this.curDays <= this.maxDays) {
                    this.curAdd = this.runDays[this.curDays - 1];
                    if (this.curMax < this.curAdd) {
                        this.curMax = this.curAdd;
                    }
                    this.m_filmcurrent.text = "第" + this.curDays + "天：+" + this.curAdd.toFixed(0);
                    this.m_filmTime.text = "还将上映" + (this.maxDays - this.curDays) + "天";
                    this.total += this.curAdd;
                    this.m_filmTotal.text = this.total.toFixed(0);
                    this.m_progressList.numItems = this.curDays;
                    this.m_progressList.scrollToView(this.curDays - 1);
                }
                else {
                    this.onClickCloseBtn();
                    // Game.moduleModel.warData.setBattleOver();
                    // 放映结束，下映反馈
                    this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.overMarket);
                    // Game.menu.openSubWindow(MenuId.War, Games.WarSubwindowType.overMarket);
                }
            };
            // 单个柱状图赋值
            WarFilmShangYing.prototype.initProgressItem = function (index, obj) {
                var item = obj;
                item.max = this.curMax;
                if (index + 1 === this.curDays) {
                    item.value = 0;
                    laya.utils.Tween.to(item, { value: this.curAdd }, 2000, Laya.Ease.linearIn, Laya.Handler.create(this, this.onShowProgress));
                }
            };
            // 刷新观众列表
            WarFilmShangYing.prototype.onShowGuanzhongList = function () {
                this.curGZindex++;
                if (this.curGZindex < 11) {
                    this.m_guanzhongList.numItems = this.curGZindex;
                }
            };
            // 观众item
            WarFilmShangYing.prototype.initGuanzhongItem = function (index, obj) {
                if (index + 1 === this.curGZindex) {
                    var item = obj;
                    var conf = Game.config.dialogue.getConfig(PfSkin.ulits.getRandomInt(1, 50));
                    item.m_sex.setSelectedIndex(this.guanzhongList[index]);
                    item.m_phiz.setSelectedIndex(conf.face - 1);
                    item.m_title.text = conf.content;
                    item.m_phizShow.play(null, 1);
                    item.m_phizShow.setHook("phizShowOver", laya.utils.Handler.create(this, this.onShowGuanzhongList));
                }
            };
            return WarFilmShangYing;
        }(PfSkin.WarFilmShangYingStruct));
        PfSkin.WarFilmShangYing = WarFilmShangYing;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmShangYing.js.map