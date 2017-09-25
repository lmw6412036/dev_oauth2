import config from "./config"

/**
 * 生成指定长度随机数
 * @param length
 * @returns {string}
 */
export function makeRandom(length) {
    let str = "0123456789", ret = "";
    for (let i = 0; i < length; i++) {
        ret += str.substr(Math.floor(Math.random() * str.length), 1);
    }
    return ret;
}

/**
 * 根据条件返回数组指定元素
 * @param array
 * @param fn
 * @returns {null}
 */
export function arrayFind(array, fn) {
    let index = array.findIndex(fn);
    return index > -1 ? array[index] : null;
}

/**
 * 判断浏览器类型
 * @param name
 * iphone
 * android
 * micromessenger
 * @returns {boolean}
 */
export function isBrower(name) {
    let UA = window.navigator.userAgent.toLowerCase();
    return UA.indexOf(name) > -1;
}

/**
 * 根据来源获得api_url
 * @param callback
 * @returns {string}
 */
export function getApiUrl(callback) {
    let hostname = url("hostname", callback);
    let api_url = "";
    for (let key in config.api_url) {
        if (hostname == key) {
            api_url = config.api_url[key];
        }
    }
    if (!api_url) {
        api_url = config.api_url[Object.keys(config.api_url)[0]];
    }
    return api_url;
}