import ServiceBase from './ServiceBase';
import Session from './Session';

class Service extends ServiceBase {
	constructor() {
		super();
		this.$$prefix = '';
	}

	/**
	 * 初始化默认拦截器
	 */
	__initInterceptor() {
		this.interceptors.push({
			request(request) {
				return request;
			},
			requestError(requestError) {
				return Promise.reject(requestError);
			},
			response(response) {
				return response;
			},
			responseError(responseError) {
				return Promise.reject(responseError);
			}
		});
	}

	//获取POST数据
	postData(params, url) {
		return this.post(url || this.$$path.data, params);
	}

	//获取GET数据
	getData(params, url) {
		return this.get(url || this.$$path.data, params);
	}

	//保存数据
	saveData(params, url) {
		return this.post(url || this.$$path.save, params);
	}

	//删除数据
	delData(params, url) {
		return this.post(url || this.$$path.del, params);
	}
}

export default Service;
