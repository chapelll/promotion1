<template>
	<view class="wrapper">
		<u-navbar title="登录" :is-back="false"></u-navbar>
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label="账号" prop="Email"><u-input v-model="form.Email" /></u-form-item>
				<u-form-item label="密码" prop="Pwd"><u-input v-model="form.Pwd" /></u-form-item>
			</u-form>
			<u-button type="primary" @click="$u.route('pages/index/register')" class="btn">去注册</u-button>
			<u-button type="primary" @click="submit" class="btn">登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					Email: '',
					Pwd: '',
				},
				rules: {
					Email: [{
						required: true,
						message: '请输入账号',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}, ],
					Pwd: [{
						required: true,
						message: '请输入密码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}, {
						min: 6,
						message: '密码不能少于6位',
						trigger: 'change'
					}, ]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {

		},

		methods: {
			register() {

			},
			submit() {
				this.login()
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.login()
					} else {
						console.log('验证失败');
					}
				});
			},
			async login() {
				const params = {}
				let res = await this.$u.post("login", params)
			}
		},
	}
</script>

<style lang="scss">
	.wrapper {
		position: relative;

	}

	.header {
		display: flex;
		justify-content: center;
		align-item: center;
	}

	.content {
		border: 1rpx solid red;
		padding: 32rpx;
		margin-top: 100rpx;

		.btn {
			margin-top: 100rpx;
		}
	}
</style>

<style lang="scss" scoped>

</style>