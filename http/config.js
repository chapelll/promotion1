const url_config = {}
// 接口地址
url_config.interfacePath = {
	"login": "/api/user/login", //登录
	"register": "/api/user/register", //注册
};

url_config.interfacePath2 = {

}


// uEnvDev
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	url_config.url_hostWeb = "https://xcx.csfczx.com/welfarelottery" //正式

}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
	// 生产环境
	url_config.url_hostWeb2 = "https://xcx.csfczx.com/digital" //正式环境
}
export default url_config