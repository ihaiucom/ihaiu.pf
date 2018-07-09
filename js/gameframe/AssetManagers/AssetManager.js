var Games;
(function (Games) {
    var AssetManager = /** @class */ (function () {
        function AssetManager() {
        }
        // 加载配置
        AssetManager.prototype.loadConfig = function (path, callback) {
            if (callback) {
                path = "config/csv/" + path + ".csv";
                var obj = {
                    onLoaded: function () {
                        var txt = Laya.loader.getRes(path);
                        callback(txt, path);
                    }
                };
                Laya.loader.load(path, Handler.create(obj, obj.onLoaded), null, Loader.TEXT);
            }
        };
        // 加载资源列表
        AssetManager.prototype.loadList = function (list, onObj, onCompleteFun, onProgress) {
            var count = list.length;
            var index = 0;
            var callback = {
                apply: function (item) {
                    index++;
                    if (onProgress) {
                        var rate = count > 0 ? index / count : 1;
                        onProgress(rate, index, count, item);
                    }
                    if (index >= count) {
                        if (onCompleteFun) {
                            if (onObj) {
                                onCompleteFun.apply(onObj);
                            }
                            else {
                                onCompleteFun();
                            }
                        }
                    }
                }
            };
            if (list && list.length > 0) {
                var assets = [];
                var item = void 0;
                for (var i = 0; i < list.length; i++) {
                    item = list[i];
                    if (!item) {
                        callback.apply(item);
                    }
                    switch (item.type) {
                        case Games.AssetItemType.FguiPackage:
                            this.loadFguiByPackagename(item.url, callback, callback.apply);
                            break;
                        case Games.AssetItemType.FspritePackage:
                            this.loadFSpriteByPackagename(item.url, callback, callback.apply);
                            break;
                        case Games.AssetItemType.Image:
                            assets.push({ url: item.url, type: Loader.IMAGE });
                            break;
                        case Games.AssetItemType.Buffer:
                            assets.push({ url: item.url, type: Loader.BUFFER });
                            break;
                        case Games.AssetItemType.Sound:
                            assets.push({ url: item.url, type: Loader.SOUND });
                            break;
                        case Games.AssetItemType.Text:
                            assets.push({ url: item.url, type: Loader.TEXT });
                            break;
                        case Games.AssetItemType.Json:
                            assets.push({ url: item.url, type: Loader.JSON });
                            break;
                        case Games.AssetItemType.Xml:
                            assets.push({ url: item.url, type: Loader.XML });
                            break;
                        case Games.AssetItemType.Font:
                            assets.push({ url: item.url, type: Loader.FONT });
                            break;
                        case Games.AssetItemType.TTF:
                            assets.push({ url: item.url, type: Loader.TTF });
                            break;
                        case Games.AssetItemType.PKM:
                            assets.push({ url: item.url, type: Loader.PKM });
                            break;
                    }
                }
                if (assets.length > 0) {
                    for (var j = 0; j < assets.length; j++) {
                        Laya.loader.load([assets[j]], Handler.create(callback, callback.apply));
                    }
                }
            }
            else {
                callback.apply(null);
            }
        };
        // 加载fgui包
        AssetManager.prototype.loadFguiByPackagename = function (packageName, caller, method) {
            var packageConfig = Game.guiRes.getconfig(packageName);
            this.loadFgui(packageConfig, caller, method);
        };
        // 加载fsprite包
        AssetManager.prototype.loadFSpriteByPackagename = function (packageName, caller, method) {
            var packageConfig = Game.spriteRes.getconfig(packageName);
            this.loadFgui(packageConfig, caller, method);
        };
        AssetManager.prototype.loadFgui = function (packageConfig, caller, method) {
            var callback = {
                apply: function () {
                    fairygui.UIPackage.addPackage(packageConfig.packagePath);
                    if (method) {
                        if (caller) {
                            return method.apply(caller, [packageConfig]);
                        }
                        else {
                            method(packageConfig);
                        }
                    }
                }
            };
            Laya.loader.load(packageConfig.loadList, Handler.create(callback, callback.apply));
        };
        return AssetManager;
    }());
    Games.AssetManager = AssetManager;
})(Games || (Games = {}));
//# sourceMappingURL=AssetManager.js.map