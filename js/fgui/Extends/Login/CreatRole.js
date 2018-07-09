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
        var CreatRole = /** @class */ (function (_super) {
            __extends(CreatRole, _super);
            function CreatRole() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CreatRole.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_next.onClick(this, this.onClickNext);
            };
            Object.defineProperty(CreatRole.prototype, "rolename", {
                // 公司名称
                get: function () {
                    return this.m_nameInput.m_txt_account.text.trim();
                },
                set: function (value) {
                    this.m_nameInput.m_txt_account.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CreatRole.prototype, "sex", {
                // 性别
                get: function () {
                    switch (this.m_roleSelect.selectedIndex) {
                        case 0:
                            return Proto.SE.EUserSex.boy;
                        case 1:
                            return Proto.SE.EUserSex.girl;
                    }
                    return Proto.SE.EUserSex.boy;
                },
                set: function (value) {
                    switch (value) {
                        case Proto.SE.EUserSex.boy:
                            this.m_roleSelect.setSelectedIndex(0);
                            break;
                        case Proto.SE.EUserSex.girl:
                            this.m_roleSelect.setSelectedIndex(1);
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            // 点击按钮--下一步
            CreatRole.prototype.onClickNext = function () {
                if (isNullOrEmpty(this.rolename)) {
                    Game.system.toastText(Games.TEXT.ErrorNameEmpty);
                    return;
                }
                Game.protosender.GameData.InitGameData(this.rolename, this.sex);
            };
            return CreatRole;
        }(Login.CreatRoleStruct));
        Login.CreatRole = CreatRole;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CreatRole.js.map