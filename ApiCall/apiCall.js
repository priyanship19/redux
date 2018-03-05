import ApioConstant from './ApiConst'
import axios from 'axios'
export  function CallApi(url,type='get',data={},header={}) {

    let reqHeader = Object.assign(header, {"Accept":"application/json", "Content-Type": "application/json"});

    if(type == 'get'){
        return axios.get(url,{headers: reqHeader})
            .then((response) => {
           // console.log("Employee Data " + response.data);
                return Promise.resolve(response)
            })
            .catch((err) => {
                if(err.response != undefined){
                    return err.response;
                }
                return err;

            });
    }else if(type == 'post') {
        return axios.post(url,data,{headers: reqHeader})
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                if(err.response != undefined){
                    return Promise.reject(err.response);
                }else{
                    return Promise.reject(err);
                }
            });
    }else if(type == 'delete'){
        return axios.delete(url,{headers:reqHeader})
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                switch (err.response.data.status){
                    case 401:
                        return Promise.reject(err.response.data.data);
                    case 409:
                        return Promise.reject(err.response.data.data);
                    default:
                        return Promise.reject(err);
                }
            });
    }else if(type == 'put') {
        return axios.put(url,data,{headers: reqHeader})
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                if(err.response != undefined){
                    return Promise.reject(err.response);
                }else{
                    return Promise.reject(err);
                }
            });
    }
}
