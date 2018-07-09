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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var fx;
    (function (fx) {
        var dajian_01UI = /** @class */ (function (_super) {
            __extends(dajian_01UI, _super);
            function dajian_01UI() {
                return _super.call(this) || this;
            }
            dajian_01UI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.dajian_01UI.uiView);
            };
            dajian_01UI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Particle2D", "props": { "y": 82, "x": 164, "width": 1, "url": "Yun_01.part", "height": 1 } }, { "type": "Particle2D", "props": { "y": 82, "x": 164, "width": 1, "url": "ChuiZi_01.part", "height": 1 } }] };
            return dajian_01UI;
        }(View));
        fx.dajian_01UI = dajian_01UI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
(function (ui) {
    var fx;
    (function (fx) {
        var JinBiUI = /** @class */ (function (_super) {
            __extends(JinBiUI, _super);
            function JinBiUI() {
                return _super.call(this) || this;
            }
            JinBiUI.prototype.createChildren = function () {
                View.regComponent("Particle2D", laya.particle.Particle2D);
                _super.prototype.createChildren.call(this);
                this.createView(ui.fx.JinBiUI.uiView);
            };
            JinBiUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Particle2D", "props": { "y": 108, "x": 178, "width": 0, "url": "jinbi_01.part", "height": 0 } }, { "type": "Image", "props": { "y": 78, "x": 135, "width": 145, "skin": "fx/true01.png", "pivotY": 63, "pivotX": 64, "height": 137 } }, { "type": "Image", "props": { "y": 79, "x": 219, "width": 150, "skin": "fx/true01.png", "pivotY": 63, "pivotX": 64, "height": 136 } }, { "type": "Image", "props": { "y": 86, "x": 193, "width": 106, "skin": "fx/true01.png", "pivotY": 63, "pivotX": 64, "height": 133 } }, { "type": "Image", "props": { "y": 71, "x": 150, "width": 85, "skin": "fx/钱袋01.png", "height": 76 } }, { "type": "Image", "props": { "y": 56, "x": 90, "width": 102, "skin": "fx/钱袋01.png", "height": 93 } }, { "type": "Image", "props": { "y": 59, "x": 185, "width": 102, "skin": "fx/钱袋01.png", "height": 86 } }, { "type": "Particle2D", "props": { "y": 35, "x": 200, "width": 1, "url": "jinbi_02.part", "height": 1 } }, { "type": "Particle2D", "props": { "y": 121, "x": 190, "width": 1, "url": "ShanGuang_01.part", "height": 1 } }] };
            return JinBiUI;
        }(View));
        fx.JinBiUI = JinBiUI;
    })(fx = ui.fx || (ui.fx = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map