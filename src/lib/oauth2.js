import {isBrower} from "./util"
import http from "./http"


const APPID = "wx6e3551dee5f7e716";
const COMPONENT_APPID = "wxe24cab30ebb1e366";

function getParams() {
  let query = url("?");
  let hash = url("#");
  let params = Object.assign({}, query, hash);
  return params;
}

function getOpenidByCode(code, cb) {
  http("", {code}).then((res) => {
    cb();
  })
}

function initWeixin(cb) {
  let p = getParams();
  if (p.code) {
    getOpenidByCode(p.code, cb);
  } else {
    let href = location.href;
    let redirect_uri = encodeURIComponent(href);
    let jumpTo = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=${COMPONENT_APPID}#wechat_redirect`;
    location.replace(jumpTo);
  }

}

export default (cb) => {
  /*微信打开*/
  if (isBrower("micromessenger")) {
    initWeixin(cb);
  }
  /*非微信打开*/
  else {
    //getParams();
    cb();
  }
}
