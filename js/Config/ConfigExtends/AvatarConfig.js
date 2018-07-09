/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var AvatarConfig = /** @class */ (function (_super) {
        __extends(AvatarConfig, _super);
        function AvatarConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(AvatarConfig.prototype, "modelSkinUrl", {
            get: function () {
                if (!this.model_skin) {
                    return null;
                }
                if (!this._modelSkinUrl) {
                    this._modelSkinUrl = Res.getSpinePngPath(this.model_skin);
                }
                return this._modelSkinUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "modelBoneUrl", {
            get: function () {
                if (!this.model_bones) {
                    return null;
                }
                if (!this._modelBoneUrl) {
                    this._modelBoneUrl = Res.getSpineSKPath(this.model_bones);
                }
                return this._modelBoneUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "picUrl", {
            get: function () {
                if (!this.bg_pic) {
                    return null;
                }
                if (!this._picUrl) {
                    this._picUrl = Res.getTexturePath(this.bg_pic);
                }
                return this._picUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "modelSkinAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.model_skin)) {
                    return null;
                }
                if (!this._modelSkinAssetItem) {
                    this._modelSkinAssetItem = { url: this.modelSkinUrl, type: Games.AssetItemType.Image };
                }
                return this._modelSkinAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "modelBoneAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.model_bones)) {
                    return null;
                }
                if (!this._modelBoneAssetItem) {
                    this._modelBoneAssetItem = { url: this.modelBoneUrl, type: Games.AssetItemType.Buffer };
                }
                return this._modelBoneAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "picAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.bg_pic)) {
                    return null;
                }
                if (!this._picAssetItem) {
                    this._picAssetItem = { url: this.picUrl, type: Games.AssetItemType.Image };
                }
                return this._picAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "iconUrl", {
            get: function () {
                if (!this._iconUrl) {
                    this._iconUrl = "ui://" + this.icon;
                }
                return this._iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "bodyIconUrl", {
            get: function () {
                if (!this._bodyIconUrl) {
                    this._bodyIconUrl = "ui://" + this.body_icon;
                }
                return this._bodyIconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "pieceIconUrl", {
            get: function () {
                if (!this._pieceIconUrl) {
                    this._pieceIconUrl = "ui://" + this.piece_icon;
                }
                return this._pieceIconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "iconPackagename", {
            get: function () {
                if (isNullOrEmpty(this.icon)) {
                    return null;
                }
                if (!this._iconPackagename) {
                    this._iconPackagename = this.icon.split("/")[0];
                }
                return this._iconPackagename;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "bodyIconPackageName", {
            get: function () {
                if (isNullOrEmpty(this.body_icon)) {
                    return null;
                }
                if (!this._bodyIconPackageName) {
                    this._bodyIconPackageName = this.body_icon.split("/")[0];
                }
                return this._bodyIconPackageName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "pieceIconPackageName", {
            get: function () {
                if (isNullOrEmpty(this.piece_icon)) {
                    return null;
                }
                if (!this._pieceIconPackageName) {
                    this._pieceIconPackageName = this.piece_icon.split("/")[0];
                }
                return this._pieceIconPackageName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "iconAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.icon)) {
                    return null;
                }
                if (!this._iconAssetItem) {
                    this._iconAssetItem = { url: this.iconPackagename, type: Games.AssetItemType.FspritePackage };
                }
                return this._iconAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "bodyIconAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.body_icon)) {
                    return null;
                }
                if (!this._bodyIconAssetItem) {
                    this._bodyIconAssetItem = { url: this.bodyIconPackageName, type: Games.AssetItemType.FspritePackage };
                }
                return this._bodyIconAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "pieceIconAssetItem", {
            get: function () {
                if (isNullOrEmpty(this.piece_icon)) {
                    return null;
                }
                if (!this._pieceIconAssetItem) {
                    this._pieceIconAssetItem = { url: this.pieceIconPackageName, type: Games.AssetItemType.FspritePackage };
                }
                return this._pieceIconAssetItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarConfig.prototype, "assetList", {
            get: function () {
                if (!this._assetList) {
                    this._assetList = [];
                    if (this.iconAssetItem)
                        this._assetList.push(this.iconAssetItem);
                    if (this.bodyIconAssetItem)
                        this._assetList.push(this.bodyIconAssetItem);
                    if (this.pieceIconAssetItem)
                        this._assetList.push(this.pieceIconAssetItem);
                    if (this.modelSkinAssetItem)
                        this._assetList.push(this.modelSkinAssetItem);
                    if (this.modelBoneAssetItem)
                        this._assetList.push(this.modelBoneAssetItem);
                    if (this.picAssetItem)
                        this._assetList.push(this.picAssetItem);
                }
                return this._assetList;
            },
            enumerable: true,
            configurable: true
        });
        // 获取预加载的资源列表
        AvatarConfig.prototype.getAllAssset = function (list, dict) {
            if (!list) {
                return this.assetList;
            }
            for (var i = 0; i < this.assetList.length; i++) {
                var item = this.assetList[i];
                if (dict) {
                    var key = getAssetItemKey(item);
                    if (!dict.hasKey(key)) {
                        list.push(item);
                        dict.add(key, item);
                    }
                }
                else {
                    list.push(item);
                }
            }
            return list;
        };
        return AvatarConfig;
    }(configs.AvatarConfigStruct));
    configs.AvatarConfig = AvatarConfig;
})(configs || (configs = {}));
//# sourceMappingURL=AvatarConfig.js.map