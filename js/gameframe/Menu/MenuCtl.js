var Games;
(function (Games) {
    // 菜单控制器
    var MenuCtl = /** @class */ (function () {
        function MenuCtl() {
        }
        // 打开
        MenuCtl.prototype.open = function (parametar) {
            this.openParametar = parametar;
            if (!this.moduleWindow) {
                this.moduleWindow = new this.menuWindowConfig.windowClass();
                this.moduleWindow.menuId = this.menuId;
                this.moduleWindow.windowContainer = Games.MenuLayer.getLayer(this.menuConfig.menuLayer);
            }
            this.load();
        };
        // 关闭
        MenuCtl.prototype.close = function () {
            if (this.moduleWindow && this.moduleWindow.menuIsCreated) {
                this.moduleWindow.onMenuClose();
            }
            this.state = Games.MenuCtlStateType.Closed;
        };
        // 销毁
        MenuCtl.prototype.destory = function () {
            if (this.moduleWindow) {
                this.moduleWindow.sShowComplete.remove(this.closeOther, this);
                this.moduleWindow.destory();
                this.moduleWindow = null;
            }
            this.state = Games.MenuCtlStateType.Destoryed;
        };
        // 加载资源
        MenuCtl.prototype.load = function () {
            this.state = Games.MenuCtlStateType.Loading;
            var list = this.getLoadAssets();
            if (!list || list.length == 0) {
                this.onLoadComplete();
            }
            else {
                // 打开加载面板
                var loaderCtl_1 = Game.loader.open(this.menuConfig.menuLoaderId);
                loaderCtl_1.setMax(list.length);
                loaderCtl_1.setProgress(0);
                var onProgress = function (rate, current, max, assetItemInfo) {
                    loaderCtl_1.setProgress(current);
                };
                Game.asset.loadList(list, this, this.onLoadComplete, onProgress);
            }
        };
        // 加载完成
        MenuCtl.prototype.onLoadComplete = function () {
            this.setShow();
            Game.loader.close(this.menuConfig.menuLoaderId);
        };
        // 获取模块资源列表
        MenuCtl.prototype.getLoadAssets = function () {
            var list = [];
            var dict = new Dictionary();
            if (!this.moduleWindow.menuIsCreated) {
                this.moduleWindow.getLoadAssets(list, dict);
            }
            this.moduleWindow.generateAssetsForDynmic();
            this.moduleWindow.getLoadAssetsForDynamic(list, dict);
            return list;
        };
        // 设置显示
        MenuCtl.prototype.setShow = function () {
            this.moduleWindow.sShowComplete.addOnce(this.closeOther, this);
            this.moduleWindow.sShowSubwindowComplete.addOnce(this.closeOther, this);
            this.state = Games.MenuCtlStateType.Opened;
            if (this.moduleWindow.menuIsCreated) {
                this.moduleWindow.onMenuOpen(this.openParametar);
            }
            else {
                this.moduleWindow.menuParameter = this.openParametar;
            }
            this.moduleWindow.menuShow(this.moduleWindow.windowContainer);
        };
        // 关闭其他模块
        MenuCtl.prototype.closeOther = function () {
            var list = Game.menu.dict.getValues();
            switch (this.menuConfig.menuCloseOtherType) {
                // 不关闭任何面板
                case Games.MenuCloseOtherType.None:
                    break;
                // 除自己外的所有
                case Games.MenuCloseOtherType.ExceptSelf_All:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl != this) {
                            ctl.close();
                        }
                    }
                    break;
                // 除自己外的所有模块层级面板
                case Games.MenuCloseOtherType.ExceptSelf_All:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl != this && ctl.menuConfig.menuLayer == Games.MenuLayerType.Module) {
                            ctl.close();
                        }
                    }
                    break;
                // 相同层级的其他面板
                case Games.MenuCloseOtherType.ExceptSelf_All:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl != this && ctl.menuConfig.menuLayer == this.menuConfig.menuLayer) {
                            ctl.close();
                        }
                    }
                    break;
            }
        };
        return MenuCtl;
    }());
    Games.MenuCtl = MenuCtl;
})(Games || (Games = {}));
//# sourceMappingURL=MenuCtl.js.map