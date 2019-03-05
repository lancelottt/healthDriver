//export const holdno = function(array, obj) {
//	cookie: {
//		set: function(name, value) {
//			// 缓存过期时间
//			let Days = 30
//			let exp = new Date()
//			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
//			document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
//		},
//		get: function(name) {
//			let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
//			let reg = arr
//			arr = document.cookie.match(reg)
//			if(arr) {
//				return unescape(arr[2])
//			} else {
//				return null
//			}
//		},
//		del: function(name) {
//			let exp = new Date()
//			exp.setTime(exp.getTime() - 1)
//			let cval = this.cookie.get(name)
//			if(cval != null) {
//				document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
//			}
//		}
//	}
//}
//获取cookie、
export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  }
  
  //设置cookie,增加到vue实例方便全局调用
  export function setCookie (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  };
  
  //删除cookie
  export function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  };