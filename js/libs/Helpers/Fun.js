function isNumber(x) {
    return typeof x === "number";
}
//判断是否是正整数
function isInt(s) {
    if (s != null) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r == s) ? true : false;
    }
    return false;
}
function isString(x) {
    return typeof x === "string";
}
function isNullOrEmpty(x) {
    return x == null || x == undefined || x == "";
}
// 获取类名
function getClassName(obj) {
    return obj["constructor"]["name"];
}
// 获取时间戳
function getTime() {
    return new Date().getTime();
}
// 获取时间戳 （秒）
function getTimeStamp() {
    return Math.floor(getTime() / 1000);
}
function getAssetItemKey(item) {
    return item.type + " " + item.url;
}
function addItem(itemId, itemNum) {
    Game.protosender.test.AddItem(itemId, itemNum);
}
function addActor(actorId, name) {
    // Game.protosender.test.AddActor(actorId, name);
}
function addFans(amount) {
    Game.protosender.test.AddFans(amount);
}
//# sourceMappingURL=Fun.js.map