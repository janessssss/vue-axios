
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.params = {}
// POST传参序列化
axios.interceptors.request.use((config) => {
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data)
    // }
    let URL = config.url.split(config.baseURL)
    return config
}, (error) => {
    return Promise.reject(error)
})
  
// 返回状态判断
axios.interceptors.response.use((res) => {
      //console.log(res)
    // 拦截器配置
    // if (res.data.success) {
    //   Tool.toast(res.data.msg)
    //   Tool.close()
    //   return Promise.reject(res)
    // }
    return res
}, (error) => {
    return Promise.reject(error)
})


  //封装获取数据
export const oGet = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
};
//封装发送数据
export const oPost = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}
export const oUpdate = (url ,param,params) => {
    return new Promise((resolve , reject) => {
        axios.patch(url ,param, params)
            .then(res => {
                resolve(res.data)
            }, err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}
export const oRemove = (url , params) => {
    return new Promise((resolve,reject) => {
        axios.delete(url,params)
            .then(res => {
                resolve(res.data)
            },err => {
                reject(err)
            }).catch(err => {
                reject(err)
            })
    })
}

export default {
    _get () {
        return oGet('http://192.168.1.190/api/v1/accounts');
    },

    _post (params) {
        return oPost('http://192.168.1.190/api/v1/accounts',params);
    },

    _update (param,params) {
        return oUpdate('http://192.168.1.190/api/v1/accounts'+'?ids='+param, params);
    },

    _remove(user){
        var userid = user.id;
        return oRemove('http://192.168.1.190/api/v1/accounts/'+ userid);
        
    },

    _removes(){
        var ids = [];
        $.each(this.selected, (i, user) => {
            ids.push(user.id);
        });
        ids = ids.join(",");
        return oRemove('http://192.168.1.190/api/v1/accounts/'+ids);
    },

    Get (link) {
        return oGet(link)
    }
}

