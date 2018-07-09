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
var Games;
(function (Games) {
    //======================
    // 模块窗口
    //----------------------
    var MWindow = /** @class */ (function (_super) {
        __extends(MWindow, _super);
        function MWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 消息--显示完成
            _this.sShowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideComplete = new Signal();
            // 是否初始化视图
            _this.menuIsCreated = false;
            // 是否可以出现显示过度动画
            _this.enableShowAnimation = true;
            // 是否显示需要发消息
            _this.enableShowSignal = true;
            // 是否隐藏需要发消息
            _this.enableHideSignal = true;
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 依赖资源列表
            _this._loadAssets = [];
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 动态资源列表
            _this._dynamicAssetsList = [];
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 消息--显示完成
            _this.sShowSubwindowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideSubwindowComplete = new Signal();
            // 子窗口字典
            _this.subwindowDict = new Dictionary();
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // Tab字典
            _this.tabDict = new Dictionary();
            // Tab历史记录
            _this.tabHistorys = [];
            return _this;
        }
        // 添加依赖资源--fgui 包名
        MWindow.prototype.addAssetForFguiPackagename = function (packagename) {
            this._loadAssets.push({ url: packagename, type: Games.AssetItemType.FguiPackage });
        };
        // 添加依赖资源--组件
        MWindow.prototype.addAssetForFguiComponent = function (fguiCom) {
            var names = fguiCom["DependPackages"];
            for (var i = 0; i < names.length; i++) {
                this.addAssetForFguiPackagename(names[i]);
            }
        };
        // 获取资源加载列表
        MWindow.prototype.getLoadAssets = function (list, dict) {
            var assets = this._loadAssets;
            for (var i = 0; i < assets.length; i++) {
                var key = getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            return list;
        };
        // 添加动态资源
        MWindow.prototype.addDynamicAsset = function (assetItem) {
            if (assetItem)
                this._dynamicAssetsList.push(assetItem);
        };
        // 添加动态资源--AvatarConfig里的所有
        MWindow.prototype.addDynmicAssetForAvatarAll = function (avatarConfig) {
            avatarConfig.getAllAssset(this._dynamicAssetsList);
        };
        // 生成动态预加载资源
        MWindow.prototype.generateAssetsForDynmic = function () {
            this._dynamicAssetsList = [];
        };
        // 获取动态资源加载列表
        MWindow.prototype.getLoadAssetsForDynamic = function (list, dict) {
            var assets = this._dynamicAssetsList;
            for (var i = 0; i < assets.length; i++) {
                var key = getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            var subwindows = this.subwindowDict.getValues();
            for (var i = 0; i < subwindows.length; i++) {
                subwindows[i].getLoadAssetsForDynamic(list, dict);
            }
            return list;
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // fgui 初始化视图
        MWindow.prototype.onInit = function () {
            this.onMenuCreate();
        };
        // 菜单创建
        MWindow.prototype.onMenuCreate = function () {
            // 在该位置实例化显示对象
            // 如果需要创建Tab, 可以在该位置设置
            this.setChildWindow(this.contentPane);
            this.callChildOnWindowInited(this.contentPane);
            this.menuIsCreated = true;
            this.onMenuOpen(this.menuParameter);
        };
        // 菜单打开事件，传递参数
        MWindow.prototype.onMenuOpen = function (parameter) {
            this.enableShowSignal = true;
            this.enableShowAnimation = true;
            this.menuParameter = parameter;
            switch (parameter.openType) {
                // 打开子窗口
                case Games.MenuOpenType.Subwindow:
                    this.enableShowSignal = false;
                    this.enableShowAnimation = false;
                    this.openSubwindowByIndex(parameter.openIndex);
                    break;
                // 打开Tab
                case Games.MenuOpenType.Tab:
                    this.openTab(parameter.openIndex);
                    break;
                default:
                    break;
            }
        };
        // 菜单显示
        MWindow.prototype.menuShow = function (root) {
            switch (this.menuParameter.openType) {
                // 打开子窗口
                case Games.MenuOpenType.Subwindow:
                    if (!this.contentPane)
                        this.onInit();
                    break;
                default:
                    this.showOn(root);
                    break;
            }
        };
        // 关闭
        MWindow.prototype.menuClose = function () {
            Game.menu.close(this.menuId);
        };
        // 返回, 到之前打开该模块的面板
        MWindow.prototype.menuBack = function () {
            // 占时是直接关闭自己
            this.menuClose();
        };
        // 销毁
        MWindow.prototype.destory = function () {
            this.dispose();
        };
        // protected doShowAnimation():void
        // {
        //     this.setScale(0.1, 0.1);
        //     laya.utils.Tween.to(this, { scaleX: 1,scaleY: 1 },300, laya.utils.Ease.quadOut, Handler.create(this, this.onShown));
        // }
        // protected doHideAnimation():void
        // {
        //     laya.utils.Tween.to(this, { scaleX: 0.1,scaleY: 0.1 },300, laya.utils.Ease.quadOut, Handler.create(this, this.hideImmediately));
        // }
        MWindow.prototype.onShown = function () {
            this.enableHideSignal = true;
            this.onShowComplete();
            if (this.contentPane) {
                this.callChildOnWindowShow(this.contentPane);
            }
        };
        // 菜单管理器调的关闭
        MWindow.prototype.onMenuClose = function () {
            this.hide();
            var list = this.subwindowDict.getValues;
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                item.hide();
            }
        };
        MWindow.prototype.onHide = function () {
            this.enableShowSignal = true;
            this.onHideComplete();
            this.clearTabHistorys();
            if (this.contentPane) {
                this.callChildOnWindowHide(this.contentPane);
            }
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        MWindow.prototype.onShowComplete = function () {
            if (this.enableShowSignal) {
                this.sShowComplete.dispatch();
            }
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        MWindow.prototype.onHideComplete = function () {
            if (this.enableHideSignal) {
                this.sHideComplete.dispatch();
            }
        };
        // 获取子窗口
        MWindow.prototype.getSubwindow = function (subwindowIndex) {
            return this.subwindowDict.getValue(subwindowIndex);
        };
        // 注册子窗口
        MWindow.prototype.registerSubwindow = function (subwindow) {
            this.subwindowDict.add(subwindow.subwindowIndex, subwindow);
        };
        // 打开子窗口
        MWindow.prototype.openSubwindow = function (subwindow, dontCloseOther) {
            var _this = this;
            if (dontCloseOther === void 0) { dontCloseOther = false; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            this.menuParameter.openType = Games.MenuOpenType.Subwindow;
            this.menuParameter.openIndex = subwindow.subwindowIndex;
            this.menuParameter.args = args;
            if (!dontCloseOther) {
                var caller = {
                    on: function () {
                        if (subwindow.whenOpenCloseMainwindow) {
                            _this.enableHideSignal = false;
                            _this.hideImmediately();
                        }
                        if (subwindow.whenOpenCloseOthersubwindow) {
                            var list_1 = _this.subwindowDict.getValues;
                            for (var i = 0; i < list_1.length; i++) {
                                var item = list_1[i];
                                if (item != subwindow) {
                                    item.hideImmediately();
                                }
                            }
                        }
                        _this.sShowSubwindowComplete.dispatch();
                    }
                };
                subwindow.sShowComplete.addOnce(caller.on, caller);
            }
            if (subwindow.menuIsCreated) {
                subwindow.onMenuOpen(this.menuParameter);
            }
            else {
                subwindow.menuParameter = this.menuParameter;
            }
            subwindow.showOn(this.windowContainer);
        };
        // 打开子窗口, 使用索引
        MWindow.prototype.openSubwindowByIndex = function (subwindowIndex, dontCloseOther) {
            if (dontCloseOther === void 0) { dontCloseOther = false; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var subwindow = this.getSubwindow(subwindowIndex);
            this.openSubwindow.apply(this, [subwindow, dontCloseOther].concat(args));
        };
        // 子窗口返回到主窗口
        MWindow.prototype.onSubwindowBack = function (subwindow) {
            this.menuParameter.openType = Games.MenuOpenType.None;
            this.menuParameter.openIndex = 0;
            this.sShowComplete.addOnce(subwindow.hide, subwindow);
            this.showOn(this.windowContainer);
        };
        // 获取Tab的显示对象列表
        MWindow.prototype.getTabDispyaObjects = function (tabIndex) {
            if (this.tabDict.hasKey(tabIndex)) {
                return this.tabDict.getValue(tabIndex);
            }
            var list = [];
            this.tabDict.add(tabIndex, list);
            return list;
        };
        // 注册Tab内容
        MWindow.prototype.registerTab = function (tabIndex, displayObject) {
            var list = this.getTabDispyaObjects(tabIndex);
            list.push(displayObject);
        };
        // 设置Tab，显示或者隐藏
        MWindow.prototype.setTabVisiable = function (tabIndex, visiable) {
            var list = this.getTabDispyaObjects(tabIndex);
            for (var i = 0; i < list.length; i++) {
                if (visiable) {
                    this.callChildOnTabShow(list[i]);
                    var fun = list[i]["onTabShow"];
                    if (fun) {
                        fun.apply(list[i]);
                    }
                }
                else if (list[i].visible) {
                    this.callChildOnTabHide(list[i]);
                }
                list[i].visible = visiable;
            }
        };
        MWindow.prototype.setOpenTab = function (tabIndex) {
            this.menuParameter.openIndex = tabIndex;
            var keys = this.tabDict.getKeys();
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] != tabIndex) {
                    this.setTabVisiable(keys[i], false);
                }
            }
            this.setTabVisiable(tabIndex, true);
            this.onOpenTab(tabIndex);
        };
        // 打开Tab
        MWindow.prototype.openTab = function (tabIndex) {
            this.tabHistorys.push(tabIndex);
            this.setOpenTab(tabIndex);
        };
        // 如果需要处理额外的业务，可以重新该方法
        MWindow.prototype.onOpenTab = function (tabIndex) {
        };
        // 返回上一次Tab
        MWindow.prototype.backTab = function () {
            if (this.tabHistorys.length > 0) {
                // this.tabHistorys = this.tabHistorys.filter((id)=>{return id != this.menuParameter.openIndex});
                // if(this.tabHistorys.length > 0)
                // {
                //     let index = this.tabHistorys[0];
                //     this.tabHistorys = this.tabHistorys.filter((id)=>{return id != index});
                //     this.menuParameter.openIndex = index;
                //     this.setOpenTab(index);
                // }
                var lastIndex = void 0;
                for (var i = this.tabHistorys.length - 1; i >= 0; i--) {
                    if (this.tabHistorys[i] == this.menuParameter.openIndex) {
                        if (i > 0) {
                            if (this.tabHistorys[i - 1] != this.menuParameter.openIndex) {
                                lastIndex = this.tabHistorys[i - 1];
                            }
                        }
                    }
                }
                if (lastIndex === undefined) {
                    this.menuBack();
                }
                else {
                    this.openTab(lastIndex);
                }
            }
        };
        // 清除Tab历史记录
        MWindow.prototype.clearTabHistorys = function () {
            this.tabHistorys = [];
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        //=========================
        // 设置child.moduleWindow
        //-------------------------
        MWindow.prototype.setChildWindow = function (com) {
            if (com) {
                com["moduleWindow"] = this;
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.setChildWindow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 设置child.onWindowInited
        //-------------------------
        MWindow.prototype.callChildOnWindowInited = function (com) {
            if (com) {
                var fun = com["onWindowInited"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowInited(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowShow
        //-------------------------
        MWindow.prototype.callChildOnWindowShow = function (com) {
            if (com) {
                var enbaleCall = true;
                var fun = com["onWindowShow"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        var whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowShow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowHide
        //-------------------------
        MWindow.prototype.callChildOnWindowHide = function (com) {
            if (com) {
                var enbaleCall = true;
                var fun = com["onWindowHide"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        var whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowHide(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onTabShow
        //-------------------------
        MWindow.prototype.callChildOnTabShow = function (com) {
            if (com) {
                var fun = com["onTabShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (var i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabShow(com["_children"][i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onTabHide
        //-------------------------
        MWindow.prototype.callChildOnTabHide = function (com) {
            if (com) {
                var fun = com["onTabHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (var i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabHide(com["_children"][i]);
                    }
                }
            }
        };
        return MWindow;
    }(fairygui.Window));
    Games.MWindow = MWindow;
})(Games || (Games = {}));
//# sourceMappingURL=MWindow.js.map