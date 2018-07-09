var Games;
(function (Games) {
    var Templet = laya.ani.bone.Templet;
    var Event = laya.events.Event;
    var CAnimation = /** @class */ (function () {
        function CAnimation() {
            this.curSkinIndex = 0; //当前皮肤索引
            this.init();
        }
        CAnimation.prototype.init = function () {
            this.animTemlet = new Templet();
            this.animTemlet.on(Event.COMPLETE, this, this.parseAnimComplete);
            this.animTemlet.on(Event.ERROR, this, this.parseAnimError);
        };
        /**
         * 销毁动画
         */
        CAnimation.prototype.dispose = function () {
            this.animTemlet.off(Event.COMPLETE, this, this.parseAnimComplete);
            this.animTemlet.off(Event.ERROR, this, this.parseAnimError);
            this.animLoadCompleteCallBack = null;
            this.animLoadErrorCallBack = null;
            this.animTemlet.destroy();
        };
        Object.defineProperty(CAnimation.prototype, "Skeleton", {
            get: function () {
                return this.animator;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @public
         * 加载，解析纹理和骨骼动画信息
         * @param texturePath   纹理文件路径
         * @param skeletonPath  骨骼文件路径
         * @param parent        添加的容器节点
         * @param isChangeSkin  是否需要换皮肤
         * @param complete      解析成功回调
         * @param error         解析失败回调
         */
        CAnimation.prototype.loadAnim = function (texturePath, skeletonPath, parent, isChangeSkin, complete, error) {
            var _this = this;
            if (isChangeSkin === void 0) { isChangeSkin = true; }
            this.parent = parent;
            this.isChangeSkin = isChangeSkin;
            this.animLoadCompleteCallBack = complete;
            this.animLoadErrorCallBack = error;
            //loader
            var assets = [];
            assets.push({ url: texturePath, type: Loader.IMAGE });
            assets.push({ url: skeletonPath, type: Loader.BUFFER });
            var onAssetsLoaded = function () {
                _this.skeletonData = Loader.getRes(skeletonPath);
                _this.texture = Loader.getRes(texturePath);
                _this.parseData(_this.texture, _this.skeletonData);
            };
            Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));
        };
        /**
        * @public
        * 解析骨骼动画数据
        * @param texture		骨骼动画用到的纹理
        * @param skeletonData	骨骼动画信息及纹理分块信息
        * @param playbackRate	缓冲的帧率数据（会根据帧率去分帧）
        */
        CAnimation.prototype.parseData = function (texture, skeletonData, playbackRate) {
            this.animTemlet.parseData(texture, skeletonData, playbackRate);
        };
        /**
         * @public
         * 通过骨骼文件加载动画
         * @param path
         * @param parent
         * @param isChangeSkin
         * @param complete
         * @param error
         */
        CAnimation.prototype.loadSkeleton = function (path, parent, isChangeSkin, complete, error) {
            if (isChangeSkin === void 0) { isChangeSkin = true; }
            this.path = path;
            this.parent = parent;
            this.isChangeSkin = isChangeSkin;
            this.animLoadCompleteCallBack = complete;
            this.animLoadErrorCallBack = error;
            this.animTemlet.loadAni(path);
        };
        /**
        * 动画解析成功
        */
        CAnimation.prototype.parseAnimComplete = function () {
            this.animator = this.animTemlet.buildArmature(this.isChangeSkin ? 1 : 0);
            this.animator.showSkinByIndex(0);
            this.animator.play(0, true);
            this.parent.addChild(this.animator);
            if (this.animLoadCompleteCallBack != null) {
                this.animLoadCompleteCallBack.apply(null);
            }
        };
        /**
         * 动画解析错误
         */
        CAnimation.prototype.parseAnimError = function () {
            if (this.animLoadErrorCallBack != null) {
                this.animLoadErrorCallBack.apply(null);
            }
        };
        /**
         * 播放动画
         * @param nameOrIndex
         * @param loop
         * @param force
         * @param start
         * @param end
         * @param freshSkin
         */
        CAnimation.prototype.play = function (nameOrIndex, loop, force, start, end, freshSkin) {
            this.animator.play(nameOrIndex, loop, force, start, end, freshSkin);
        };
        CAnimation.prototype.crossFade = function (nameOrIndex, loop) {
            if (loop === void 0) { loop = true; }
            this.play(nameOrIndex, loop);
        };
        CAnimation.prototype.setBounds = function (rect) {
            this.animator.setBounds(rect);
        };
        CAnimation.prototype.getBounds = function () {
            return this.animator.getBounds();
        };
        CAnimation.prototype.scale = function (scaleX, scaleY, speedMode) {
            this.animator.scale(scaleX, scaleY, speedMode);
        };
        CAnimation.prototype.pos = function (x, y) {
            if (this.animator != null)
                this.animator.pos(x, y);
        };
        /**
         * 切换皮肤
         * @param nameOrIndex
         */
        CAnimation.prototype.changeSkin = function (nameOrIndex) {
            if (typeof (nameOrIndex) == "string") {
                this.animator.showSkinByName(nameOrIndex);
            }
            if (typeof (nameOrIndex) == "number") {
                this.animator.showSkinByIndex(nameOrIndex);
            }
        };
        return CAnimation;
    }());
    Games.CAnimation = CAnimation;
})(Games || (Games = {}));
//# sourceMappingURL=CAnimation.js.map