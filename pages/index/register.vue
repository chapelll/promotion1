<template>
	<view class="wrapper">
		<u-navbar title="注册"></u-navbar>
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label="账号"><u-input v-model="form.name" /></u-form-item>
				<u-form-item label="密码"><u-input v-model="form.intro" /></u-form-item>
			</u-form>
			<u-button type="primary" @click="register" class="btn">注册</u-button>
			<!-- <u-button type="primary" @click="login" class="btn">登录</u-button> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					phone: '',
				}
			}
		},
		onLoad() {

		},

		methods: {
			register() {
				
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