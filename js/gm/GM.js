var Games;
(function (Games) {
    var GMMenuType = /** @class */ (function () {
        function GMMenuType() {
        }
        GMMenuType.ADD = "添加";
        GMMenuType.CLIENT = "客户端";
        GMMenuType.SERVER = "服务器";
        GMMenuType.LOG = "日志";
        GMMenuType.list = [GMMenuType.ADD, GMMenuType.CLIENT, GMMenuType.SERVER, GMMenuType.LOG];
        return GMMenuType;
    }());
    Games.GMMenuType = GMMenuType;
    var GMAddType = /** @class */ (function () {
        function GMAddType() {
        }
        GMAddType.getItemTypes = function (itemAddType) {
            var types = [];
            switch (itemAddType) {
                case GMAddType.Item_Money:
                    types.push(Proto.SE.EItemCategory.diamond);
                    types.push(Proto.SE.EItemCategory.gold);
                    types.push(Proto.SE.EItemCategory.dollar);
                    types.push(10); // 许可证
                    types.push(11); // 粉丝
                    types.push(12); // 点赞
                    types.push(13); // 期待
                    break;
                case GMAddType.Item_Other:
                    types.push(Proto.SE.EItemCategory.other);
                    break;
                case GMAddType.Item_Normal:
                    types.push(Proto.SE.EItemCategory.normal);
                    break;
                case GMAddType.Item_Asset:
                    types.push(Proto.SE.EItemCategory.assets);
                    break;
                case GMAddType.Item_Contract:
                    types.push(Proto.SE.EItemCategory.contract);
                    break;
                case GMAddType.Item_Giftbag:
                    types.push(Proto.SE.EItemCategory.giftbag);
                    break;
                case GMAddType.Item_Build:
                    types.push(9);
                    break;
            }
            return types;
        };
        GMAddType.Actor = "艺人";
        GMAddType.Story = "剧本";
        GMAddType.Item = "物品--所有";
        GMAddType.Item_Money = "物品--货币";
        GMAddType.Item_Other = "物品--周边产品";
        GMAddType.Item_Normal = "物品--普通道具";
        GMAddType.Item_Asset = "物品--资产";
        GMAddType.Item_Contract = "物品--合同";
        GMAddType.Item_Giftbag = "物品--礼包";
        GMAddType.Item_Build = "物品--建筑材料";
        GMAddType.list = [
            GMAddType.Actor,
            GMAddType.Story,
            GMAddType.Item,
            GMAddType.Item_Money,
            GMAddType.Item_Other,
            GMAddType.Item_Normal,
            GMAddType.Item_Asset,
            GMAddType.Item_Contract,
            GMAddType.Item_Giftbag,
            GMAddType.Item_Build
        ];
        return GMAddType;
    }());
    Games.GMAddType = GMAddType;
    var GM = /** @class */ (function () {
        function GM() {
        }
        Object.defineProperty(GM, "window", {
            get: function () {
                if (!GM._window) {
                    GM._window = new Games.GMWindow();
                }
                return GM._window;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GM, "visiable", {
            get: function () {
                if (GM._window) {
                    if (GM._window.parent) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return GM._visiable;
            },
            set: function (value) {
                if (value) {
                    GM.window.show();
                }
                else {
                    if (GM._window) {
                        GM.window.hide();
                    }
                }
                GM._visiable = value;
            },
            enumerable: true,
            configurable: true
        });
        return GM;
    }());
    Games.GM = GM;
})(Games || (Games = {}));
//# sourceMappingURL=GM.js.map