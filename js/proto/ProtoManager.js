var Games;
(function (Games) {
    var ProtoManager = /** @class */ (function () {
        function ProtoManager() {
        }
        // 初始化
        ProtoManager.prototype.install = function (ip, port, useHttps) {
            if (ip === void 0) { ip = "172.16.0.116"; }
            if (port === void 0) { port = 8360; }
            if (useHttps === void 0) { useHttps = false; }
            DataRespondsManager.init();
            OobManager.init();
            //Http初始化和登录
            this.httpChannel = new frame.comm.HttpChannel(ip, port, useHttps);
        };
        // 发送消息, 使用命令路径
        ProtoManager.prototype.sendMsg = function (requestData, command) {
            this.httpChannel.http.addReq(command, requestData);
        };
        // 发送消息, 使用模块名称
        ProtoManager.prototype.sendMsgByModulename = function (requestData, moduleName) {
            var clsname = getClassName(requestData).replace("Request", "");
            var command = moduleName + "/" + clsname;
            this.sendMsg(requestData, command);
        };
        return ProtoManager;
    }());
    Games.ProtoManager = ProtoManager;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoManager.js.map