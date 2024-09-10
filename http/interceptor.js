import url_config from './config.js'
const install = (Vue, vm) => {
	// 自定义配置参数
	Vue.prototype.$u.http.setConfig({});

	// 请求拦截部分
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 添加token
		config.header = {
			'content-type': 'application/json;charset=utf-8',
			'userToken': vm?.vuex_token || ""
		}
		// 对url进行处理
		const urlType = config.url
		const realUrl = urlType in url_config.interfacePath ?
			url_config.url_hostWeb + url_config.interfacePath[urlType] :
			(urlType in url_config.interfacePath2 ? url_config.url_hostWeb2 + url_config.interfacePath2[
				urlType] : url_config.url_hostWeb3 + url_config.interfacePath3[urlType])
		config.url = realUrl
		console.log('config',config);
		// 最后需要将config进行return,若return false则取消本次请求
		return config;
	}

	// 响应拦截
	Vue.prototype.$u.http.interceptor.response = (res) => {
		const data = res?.data
		// 请求成功
		if (data?.serviceSuccess) return data?.data?.resultData || data?.data?.data
		// 请求失败
		const toastOpt = {
			icon: 'none',
			duration: 1500,
			mask: true
		}
		if (data?.code === '2') {
			toastOpt.title = "登陆过期，请重新登录"
			toastOpt.success = () => {
				setTimeout(() => {
					uni.redirectTo({
						url: '/pages/home/login'
					});
				}, 1500)
			}
		} else {
			let msg
			if (data?.errors && data.errors[0]) {
				msg = data.errors[0].msg
			}
			toastOpt.title = msg || '出了点小意外'
		}
		uni.showToast(toastOpt)
		return false
	}
}

export default {
	install
}
