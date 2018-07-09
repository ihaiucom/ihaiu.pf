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
    //====================
    // 消息发送器 -- 账号
    //--------------------
    var AccountSender = /** @class */ (function (_super) {
        __extends(AccountSender, _super);
        function AccountSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.Account;
            return _this;
        }
        // 生成游客账号
        AccountSender.prototype.generateGuestAccount = function () {
            var timestamp = new Date().getTime();
            var random = Math.random();
            var guset = timestamp.toString() + "." + random.toString();
            return guset;
        };
        // 获取游客账号
        AccountSender.prototype.getGuestAccount = function () {
            if (!isNullOrEmpty(Game.localStorage.username)) {
                return Game.localStorage.username;
            }
            return this.generateGuestAccount();
        };
        /**
         * 游客登录
         */
        AccountSender.prototype.GuestAuth = function () {
            var account = this.getGuestAccount();
            Game.localStorage.username = account;
            Game.localStorage.password = "";
            Game.localStorage.isGuest = true;
            // Game.proto.httpChannel.login(account);
            var reqData = new Proto.API.account.authRequest();
            reqData.account = account;
            this.sendByCommand(reqData, "account/auth");
        };
        /**
         * 请求登录
         */
        AccountSender.prototype.Auth = function (account, password) {
            if (isNullOrEmpty(account)) {
                Game.system.toastText(Games.TEXT.ErrorNameEmpty);
                return;
            }
            var patt = /[^a-zA-Z0-9\.@_\u4e00-\u9fa5]/;
            if (patt.test(account)) {
                Game.system.toastMsg(MsgKey.account_name_blockword);
                return;
            }
            Game.localStorage.username = account;
            Game.localStorage.password = password;
            Game.localStorage.isGuest = false;
            // Game.proto.httpChannel.login(account);
            var reqData = new Proto.API.account.authRequest();
            reqData.account = account;
            this.sendByCommand(reqData, "account/auth");
        };
        /**
         * 登录反馈
         */
        AccountSender.prototype.Login = function (account, token) {
            var reqData = new Proto.API.account.loginRequest();
            reqData.account = account;
            reqData.token = token;
            this.sendByCommand(reqData, "account/login");
        };
        return AccountSender;
    }(Games.ProtoSender));
    Games.AccountSender = AccountSender;
})(Games || (Games = {}));
//# sourceMappingURL=AccountSender.js.map