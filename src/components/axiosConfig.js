function getConfig(URL){
    var config = {
        method: 'get',
        url: URL,
        headers: { 
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return config;
};

function postConfig(URL, DATA){
    var config = {
        method: 'post',
        url: URL,
        headers: { 
            'x-access-token': localStorage.getItem('accessToken')
        },
        data : DATA
    }
    return config;
};

function deleteConfig(URL, PARAMS){
    var config = {
        method: 'delete',
        url: URL,
        params: PARAMS,
        headers: { 
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return config;
};

function editConfig(URL, PARAMS, DATA){
    var config = {
        method: 'put',
        url: URL,
        params: PARAMS,
        headers: { 
            'x-access-token': localStorage.getItem('accessToken')
        },
        data: DATA
    }
    return config;
};


var axiosConfig = {
    getConfig : getConfig,
    postConfig : postConfig,
    deleteConfig : deleteConfig,
    editConfig : editConfig
}

export default axiosConfig;