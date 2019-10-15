import { axios } from '@/utils/cdn';
import conf from '@/config';

/**
 * 格式化返回，根据实际情况调整
 *
 * @param {*} param
 * @returns
 */
function formatResponse(params) {
    let { data } = params;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // 如果没有code，增加code属性
    if (!data.code) {
        data.code = data.success ? 200 : 500;
    }

    // 如果没有data，增加data属性
    if (!data.data) {
        data.data = data.resData || {};
    }

    params.data = data;

    return params;
}

/**
 * 格式化发送，根据实际情况调整
 *
 * @param {*} param
 * @returns
 */
function formatRequest(params) {
    return params;
}

function axiosInstance(args) {
    const defaultOptions = {
        // 自定义
        notification: true, // notification提示框
        loading: false, // 全局loading层（不推荐）
        retryMax: 1, // 自动重试次数
        retryDelay: 1000, // 重试延迟

        // 原生
        baseURL: conf.server.api,
        timeout: 50000,
        // withCredentials: true,
        // paramsSerializer(params) {
        //     return Qs.stringFy(setParams(params), { arrayFormat: 'brackets' });
        // },
    };

    const options = Object.assign({}, defaultOptions, args);
    const instance = axios.create({ ...options });

    let myReq = null;

    instance.interceptors.request.use((request) => {
        myReq = formatRequest(request);
        return myReq;
    }, error => Promise.reject(error));

    instance.interceptors.response.use((response) => {
        const { data, config } = formatResponse(response);

        const status = [200, 201, 204];
        const method = ['post', 'put', 'delete', 'patch'];

        if (status.includes(response.status) && method.includes(config.method)) { // 正常响应预设 status 状态
            if (data.code !== 200) {
                let { message } = data;
                message = message || '服务器返回错误';

                return Promise.reject(new Error(`${message} code ${data.code}`));
            }
        } else if (!status.includes(response.status)) { // 非预设 status 状态，需要看具体返回类型决定如果处理
            const message = response.statusText;
            return Promise.reject(new Error(message));
        }
        return data.data;
    }, (error) => { // 5xx, 4xx
        const { config } = error;
        const noReryCode = [401];

        config.retryCount = config.retryCount || 0;
        config.retryCount += 1;

        const code = +RegExp.$1;

        // 异常处理
        if (
            !config
            || !config.retryMax
            || config.retryCount >= config.retryMax
            || noReryCode.includes(code)
        ) {
            return Promise.reject(error);
        }

        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 1);
        });

        return backoff.then(() => instance(config));
    });

    return instance;
}

/**
 * 传参时，把值为undefined的，换成空
 *
 * @param {*} params
 */
// function setParams(params) {
//     const p = params;
//     Object.keys(p).forEach((key) => {
//         if (typeof p[key] === 'object') { setParams(p[key]); }
//         if (typeof p[key] === 'undefined') { p[key] = ''; }
//     });
// }

export default axiosInstance;
