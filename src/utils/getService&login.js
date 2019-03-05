define([], function() {  
    return {  
        _getServices: function(fun) {  
            mui.plusReady(function() {  
                plus.oauth.getServices(function(services) {  
                    fun(services);  
                }, function(e) {  
                    debugCom.log("获取分享服务列表失败：" + e.message + " - " + e.code);  
                    return null;  
                });  
            })  
        },  
        login: function() {  
            this._getServices(function(auths) {  
                var s = auths[0];  
                if(!s.authResult) {  
                    s.login(function(e) {  
                        // 获取登录操作结果  
                        s.getUserInfo(function(e) {  
                            debugCom.log("获取用户信息成功：" + JSON.stringify(s.userInfo));  
                        }, function(e) {  
                            debugCom.log("获取用户信息失败：" + e.message + " - " + e.code);  
                        });  
                    }, function(e) {  
                        debugCom.log("登录认证失败！");  
                    });  
                } else {  
                    debugCom.log("已经登录认证！");  
                }  
            })  

        }  
    }  
})  