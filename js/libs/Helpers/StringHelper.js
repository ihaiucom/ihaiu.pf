function toStringArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    return txt.split(separator);
}
function toIntArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseInt(arr[i]));
    }
    return list;
}
function toFloatArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseFloat(arr[i]));
    }
    return list;
}
function toInt(val) {
    return parseInt(val);
}
function toFloat(val) {
    return parseFloat(val);
}
function toBoolean(val) {
    if (val) {
        if (isNumber(val)) {
            return val != 0;
        }
        else if (isString(val)) {
            return val == "true" || parseInt(val) != 0;
        }
        return true;
    }
    else {
        return false;
    }
}
function toBooleanArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(toBoolean(arr[i]));
    }
    return list;
}
function configCellToArray(txt, separator) {
    if (separator === void 0) { separator = /[;]/; }
    return toStringArray(txt, separator);
}
function csvGetInt(csv, i) {
    return parseInt(csv[i]);
}
function csvGetFloat(csv, i) {
    return parseFloat(csv[i]);
}
function csvGetBoolean(csv, i) {
    return toBoolean(csv[i]);
}
function csvGetString(csv, i) {
    return csv[i];
}
function firstUpperCase(str) {
    return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}
/**
 * format('{0} {1} {2}', params1, params2, params3)
 * format('{0} {1:U} {2:L}', params1, params2, params3)
 * @param value
 * @param args
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
            var s = match.split(':');
            if (s.length > 1) {
                i = i[0];
                match = s[1].replace('}', '');
            }
            var arg = formatPattern(match, args[i]);
            return typeof arg != 'undefined' && arg != null ? arg : "";
        });
    }
    catch (e) {
        return "";
    }
}
function formatPattern(match, arg) {
    switch (match) {
        case 'L':
            arg = arg.toLowerCase();
            break;
        case 'U':
            arg = arg.toUpperCase();
            break;
        default:
            break;
    }
    return arg;
}
function isNullOrWhiteSpace(value) {
    try {
        if (value == null || value == 'undefined')
            return false;
        return value.replace(/\s/g, '').length < 1;
    }
    catch (e) {
        return false;
    }
}
//开头与结尾是否有空格字符
function isStartOrEndWithSpace(s) {
    var index = s.indexOf(" ");
    if (index == 0 || index == s.length - 1) {
        return true;
    }
    return false;
}
//////////////////////////////////////////////////////////////////////////
var __NumberUnitText = /** @class */ (function () {
    function __NumberUnitText() {
    }
    __NumberUnitText.B = "B";
    __NumberUnitText.M = "M";
    __NumberUnitText.K = "K";
    return __NumberUnitText;
}());
var __NumberUnitValue = /** @class */ (function () {
    function __NumberUnitValue() {
    }
    __NumberUnitValue.K = 1000;
    __NumberUnitValue.M = 1000 * 1000;
    __NumberUnitValue.B = 1000 * 1000 * 1000;
    return __NumberUnitValue;
}());
/**
 * 格式化数字 为K M B格式化
 * @param value 数字
 * @param fixed 数字保留几位
 */
function formatNumberUnit(value, fixed) {
    if (fixed === void 0) { fixed = 1; }
    var str = "";
    if (value >= __NumberUnitValue.B) {
        value = value / __NumberUnitValue.B;
        str = value.toFixed(fixed) + __NumberUnitText.B;
    }
    else if (value >= __NumberUnitValue.M) {
        value = value / __NumberUnitValue.M;
        str = value.toFixed(fixed) + __NumberUnitText.M;
    }
    else if (value >= __NumberUnitValue.K) {
        value = value / __NumberUnitValue.K;
        str = value.toFixed(fixed) + __NumberUnitText.K;
    }
    else {
        str = value + "";
    }
    return str;
}
//# sourceMappingURL=StringHelper.js.map