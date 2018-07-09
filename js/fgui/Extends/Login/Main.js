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
    var Login;
    (function (Login) {
        var PanelId;
        (function (PanelId) {
            PanelId[PanelId["Login"] = 0] = "Login";
            PanelId[PanelId["Register"] = 1] = "Register";
            PanelId[PanelId["LoginGuest"] = 2] = "LoginGuest";
        })(PanelId || (PanelId = {}));
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 如果定义了该变量, 且whenSelfVisiableCallWindowShowAndHide=true，只有自己 visiable == true时, onWindowShow和onWindowHide才会被调
                _this.whenSelfVisiableCallWindowShowAndHide = true;
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_register.visible = false;
                this.m_login_guest.visible = false;
                this.m_login = (this.getChild("login"));
                this.m_register = (this.getChild("register"));
                this.m_login_guest = (this.getChild("login_guest"));
                this.m_agreement = (this.getChild("agreement"));
                this.m_version = (this.getChild("version"));
            };
            // 如果定义了该方法，主窗口显示时将被调
            Main.prototype.onWindowShow = function () {
            };
            // 如果定义了该方法,主窗口关闭时将被调
            Main.prototype.onWindowHide = function () {
            };
            return Main;
        }(Login.MainStruct));
        Login.Main = Main;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map