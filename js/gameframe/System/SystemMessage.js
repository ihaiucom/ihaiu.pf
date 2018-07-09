var Games;
(function (Games) {
    //======================
    // 转圈
    //----------------------
    var SystemMessag = /** @class */ (function () {
        function SystemMessag() {
            // 浮动消息
            this.toastMessage = new Games.SystemToastMessag();
        }
        Object.defineProperty(SystemMessag.prototype, "alertMessage", {
            get: function () {
                if (!this._alertMessage) {
                    this._alertMessage = fgui.System.SystemAlertMessage.createInstance();
                }
                return this._alertMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "confirmMessage", {
            get: function () {
                if (!this._confirmMessage) {
                    this._confirmMessage = fgui.System.SystemConfirmMessage.createInstance();
                }
                return this._confirmMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "renameComfirm", {
            get: function () {
                if (!this._renameComfirm) {
                    this._renameComfirm = fgui.PfSkin.RenameUI.createInstance();
                }
                return this._renameComfirm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "setNumMessage", {
            get: function () {
                if (!this._setNumMessage) {
                    this._setNumMessage = fgui.Common.SystemSetNumMessage.createInstance();
                }
                return this._setNumMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getRewardMessage", {
            get: function () {
                if (!this._getRewardMessage) {
                    this._getRewardMessage = fgui.System.SystemAddItemMessage.createInstance();
                }
                return this._getRewardMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "selectActorPanel", {
            get: function () {
                if (!this._selectActorPanel) {
                    this._selectActorPanel = fgui.PfSkin.SystemSelectActorPanel.createInstance();
                }
                return this._selectActorPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getItemMessage", {
            get: function () {
                if (!this._getItemMessage) {
                    this._getItemMessage = fgui.PfSkin.SystemGetItemMessage.createInstance();
                }
                return this._getItemMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "dialog", {
            get: function () {
                if (!this._dialog) {
                    this._dialog = fgui.PfSkin.DialogUI.createInstance();
                }
                return this._dialog;
            },
            enumerable: true,
            configurable: true
        });
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 浮动消息
        SystemMessag.prototype.toastText = function (txt) {
            this.toastMessage.play(txt);
        };
        SystemMessag.prototype.toastMsg = function (msgKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(args));
            this.toastMessage.play(txt);
            var _a;
        };
        /**
         * 道具不足提示
         * @param id 道具id
         */
        SystemMessag.prototype.toastItemNotEnough = function (id) {
            var config = Game.config.item.getConfig(id);
            var itemName = "";
            if (config)
                itemName = config.name;
            else
                itemName = id.toString();
            this.toastText(format(Games.TEXT.ToastTextItemNotEnough, itemName));
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 对话框消息,一个按钮, 简洁方法
        SystemMessag.prototype.alertText = function (txt, yesObj, yesFun) {
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsg = function (msgKey, yesObj, yesFun) {
            var txt = Game.config.msg.getTxt(msgKey);
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsgFormat = function (msgKey, msgargs, yesObj, yesFun) {
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun);
            var _a;
        };
        SystemMessag.prototype.alrtTMsgFull = function (msgkey, msgargs, title, yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,一个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param yesObj 点击yes按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param buttonEnable 按钮是否可以点击
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.alrtTextFull = function (txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonOk;
            }
            this.alertMessage.open(txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose);
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 对话框消息,两个按钮
         * @param msgkey MsgConfig key
         * @param msgargs 消息参数
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmMsg = function (msgkey, msgargs, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.confirmText(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,两个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmText = function (txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            if (isNullOrEmpty(noTxt)) {
                noTxt = Games.TEXT.ButtonNo;
            }
            this.confirmMessage.open(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
        };
        /**
         *花费确定
         * @param txt
         * @param costnum
         * @param costId
         * @param caller
         * @param yesFun
         */
        SystemMessag.prototype.confirmBuyText = function (txt, cost, caller, yesFun) {
            var costId = cost[0];
            var costnum = cost[1];
            var config = Game.config.item.getConfig(costId);
            var costItemName = "";
            if (cost) {
                costItemName = config.name;
            }
            else {
                costItemName = costId + "";
            }
            this.confirmText(format(txt, costnum, costItemName), null, caller, yesFun);
        };
        /**
         * 选择数量
         * @param limit
         * @param txt
         * @param title
         * @param caller
         * @param yesFun
         * @param noFun
         * @param closeButtonVisiable
         * @param isClickButtonAutoClose
         */
        SystemMessag.prototype.setNumText = function (limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (txt === void 0) { txt = ""; }
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            this.setNumMessage.open(limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose);
        };
        /**
         *获得物品
         * @param txt
         * @param items
         */
        SystemMessag.prototype.getRewardText = function (items, title, autoCloseTime) {
            this.getRewardMessage.open(items, title, autoCloseTime);
        };
        /**
         *选择演员
         * @param actorList
         * @param selectFun
         * @param caller
         * @param title
         */
        SystemMessag.prototype.selectActor = function (actorList, selectFun, caller, title) {
            if (caller === void 0) { caller = null; }
            if (title === void 0) { title = ""; }
            this.selectActorPanel.open(actorList, selectFun, caller, title);
        };
        /**
                 *获得物品
                 * @param txt
                 * @param items
                 */
        SystemMessag.prototype.getItemText = function (items, title, autoCloseTime) {
            this.getItemMessage.open(items, title, autoCloseTime);
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 关闭对话框
         */
        SystemMessag.prototype.alertMessageHide = function () {
            if (this._alertMessage) {
                this._alertMessage.close();
            }
            if (this._confirmMessage) {
                this._confirmMessage.close();
            }
            if (this._getRewardMessage) {
                this._getRewardMessage.close();
            }
            if (this._setNumMessage) {
                this._setNumMessage.close();
            }
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 打开重命名窗口
         * @param dialogMsg 对话文本
         * @param caller 调用域
         * @param okFunc 函数
         * @param okBtnTxt 按钮文本
         * @param defaultTxt 默认输入文本
         * @param promptText 提示文本
         * @param maxLen 最大字符
         * @param url icon路径
         * @param cost 花费[id,num]
         * @param isClickButtonAutoClose 点击ok是否自动关闭
         * @param randomNames //随机名字数组
         */
        SystemMessag.prototype.openRename = function (dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames) {
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            this.renameComfirm.open(dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames);
        };
        /**隐藏重命名窗口*/
        SystemMessag.prototype.hideRename = function () {
            this.renameComfirm.close();
        };
        SystemMessag.prototype.openDialog = function (content, okFunc) {
            this.dialog.open(content, okFunc);
        };
        return SystemMessag;
    }());
    Games.SystemMessag = SystemMessag;
})(Games || (Games = {}));
//# sourceMappingURL=SystemMessage.js.map