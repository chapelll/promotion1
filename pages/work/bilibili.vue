<template>
	<view class="wrapper">
		<u-navbar title="B站助力关注"></u-navbar>
		<u-notice-bar mode="horizontal" :list="notice"></u-notice-bar>
		<view class="content">
			<view class="main1" v-if="bilibiliList.length == '0'">
				<img src="@/static/none.png" class="none-img" />
				<view class="text">
					没有添加需要助力的账号
				</view>
				<view class="btn">
					<u-button :custom-style="customStyle" @click="openAccModal">立即添加</u-button>
				</view>
			</view>
			<view class="main2" v-else>
				<img src="@/static/none.png" class="none-img" />
				<view class="text">
					没有添加需要助力的账号
				</view>
				<view class="btn">
					<u-button :custom-style="customStyle">立即添加</u-button>
				</view>
			</view>
		</view>
		<u-modal v-model="accountModalShow" show-cancel-button :show-title="false" @confirm="confirm">
			<view class="modal">
				<view class="title">
					添加助力账号
				</view>
				<view class="form">
					<u-form :model="form" ref="uForm" label-width="280">
						<u-form-item label="B站频道链接/UID: " required prop="account">
							<u-input v-model="form.account" placeholder="请输入" />
						</u-form-item>
					</u-form>
					<view class="text1">
						您的B站频道链接/UID可以通过 <span @click="exampleShow = true" style="color: #3978f4;">【B站链接/UID示例
							】</span>获取到。
					</view>
				</view>
			</view>
		</u-modal>
		<u-popup v-model="exampleShow" mode="bottom" border-radius="14">
			<view class="popup-example">
				<view class="example-title">示例预览</view>
				<scroll-view scroll-y="true" style="height: 800rpx;">
					<view class="example-content">
						<view class="example-item" v-for="(item,index) of exampleList">
							<view class="small-title">
								<img src="@/static/title1.png" class="title1-img" />{{item.name}}
							</view>
							<view class="img-wrapper">
								<img :src="item.img" class="img"/>
							</view>
						</view>
					</view>
				</scroll-view>

			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accountModalShow: false,
				exampleShow: false,
				form: {
					account: '',
				},

				notice: [
					'自媒体社区积分设置调整：投币：40～100、点赞：20～70、完播：30～60、关注：30～60、关注：30～60、评论、弹幕：20～60、分享、收藏：10～50',
				],
				customStyle: {
					height: '60rpx',
					padding: '0 24rpx',
					color: '#fff',
					background: 'linear-gradient(to right, #54d6ff,#6177ff)',
					borderRadius: '10rpx',
					border: 'none',
					fontSize: '26rpx',
				},
				bilibiliList: [],

				exampleList: [{
					name: '第一步:',
					img: require('./static/bili-1.jpg')
				},{
					name: '第二步:',
					img: require('./static/bili-2.jpg')
				},{
					name: '第三步:',
					img: require('./static/bili-3.png')
				}, ],


				examples: {
					account: [{
						required: true,
						message: '请输入B站频道链接/UID',
						trigger: ['blur', 'change']
					}]
				},
			}
		},
		onReady() {
			// this.$refs.uForm.setexamples(this.examples);
		},
		onLoad() {

		},
		methods: {
			openAccModal() {
				this.accountModalShow = true
				this.$nextTick(() => {
					this.$refs.uForm.setRules(this.examples);
				})
			},
			confirm() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');

						this.accountModalShow = false
					} else {
						console.log('验证失败');
						this.accountModalShow = true
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f7fe;
	}

	.wrapper {
		position: relative;
	}

	.content {
		padding: 32rpx;

		.main1 {
			margin-top: 64rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			display: flex;
			flex-direction: column;

			.none-img {
				width: 320rpx;
				height: 320rpx;
			}

			.text {
				color: #999;
				margin-top: 48rpx;
				font-size: 28rpx;
			}

			.btn {
				margin-top: 64rpx;
			}
		}
	}

	.modal {
		padding: 24rpx;

		.title {
			font-size: 36rpx;
			font-weight: 700;
			text-align: center;
		}

		.form {
			padding: 24rpx;

			.text1 {
				font-size: 28rpx;
				margin-top: 12rpx;

			}
		}

	}

	.popup-example {
		.example-title {
			text-align: center;
			padding: 24rpx;
			font-weight: 700;
			font-size: 32rpx;
			border-bottom: 1rpx solid #e7e7e7;
		}

		.example-content {
			padding: 32rpx;

			.line1 {
				width: 100vw;
				height: 1rpx;
				background-color: #e6e6e6;
				transform: translateX(-32rpx);
				margin: 48rpx 0;
			}

			.small-title {
				display: flex;
				font-weight: 700;
				align-items: center;

				.title1-img {
					width: 14rpx;
					height: 26rpx;
					margin-right: 12rpx;
					transform: translateY(1rpx);
				}
			}

			.example-item {
				padding: 0 24rpx;
				margin-bottom: 48rpx;
				.img-wrapper {
					width: calc(100vw - 96rpx);
					border: 1rpx solid #eee;
					margin-top: 24rpx;
					.img {
						width: 100%;
					}
				}
			}
		}
	}
</style>

<style lang="scss" scoped>

</style>