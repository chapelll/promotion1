<template>
	<view class="wrapper">
		<view class="header">
			<img src="@/static/index-bg.png" class="bg1" />
			<view class="uesr">
				<img src="@/static/user.png" class="user-img" />
				<view class="link" @click="copyName(user.link)">
					<u-icon name="share-fill" color="#0e87ff" size="30"></u-icon>
					邀请链接
				</view>
				<view class="user-info">
					<view class="name">
						{{user.name}}
						<u-icon @click="copyName(user.name)" name="file-text" color="#323232" size="26"
							style="margin-left: 2rpx;"></u-icon>
					</view>
					<view class="score">
						积分:{{user.score}}
					</view>
				</view>
			</view>
			<view class="task-point">
				<view class="item" v-for="(item,index) of taskPointList">
					<view class="num">
						{{item.num}}
					</view>
					<view class="name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

		<view class="line" style="margin-top: 48rpx;"></view>

		<view class="content">
			<!-- 签到 -->
			<view class="sign">
				<view class="sign-tip">
					<view>
						已连续签到 <span class="unit">{{continuDays}}</span> 天
					</view>
					<view class="sign-rule-btn">
						<view class="sign-rule" @click="openRule">
							签到规则
						</view>
						<view class="sign-btn" :class="{'sign-ok': isSign}" @click="fnSign">
							<span v-if="isSign">已</span> 签到
						</view>
					</view>
				</view>
				<view class="sign-list">
					<view class="sign-item" v-for="(item,index) of signList">
						<view class="item-wrapper" :class="{'item-wrapper-sign': item.signType == '1'}">
							<view class="add-score" :class="{'add-score-sign': item.signType == '1'}">
								{{item.date.slice(8,10)}}
							</view>
							<img v-if="item.signType == '1'" src="@/static/sign.png" class="img" />
							<img v-else src="@/static/sign-no.png" class="img" />
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<!-- 常用功能 -->
			<view class="common">
				<view class="title">
					常用功能
				</view>
				<view class="common-list">
					<view class="common-item" v-for="(item,index) of commonList" @click="handleCommonItem(item)">
						<img :src="item.img" class="common-img" />
						<view class="name">
							{{item.name}}
						</view>
						<view class="detail" v-if="item.detail">
							{{item.detail}}
						</view>
						<u-icon name="arrow-right" color="#a4a5a7" size="30" class="icon"></u-icon>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="common">
				<view class="title">
					更多功能
				</view>
				<view class="common-list">
					<view class="common-item" v-for="(item,index) of moreList">
						<img :src="item.img" class="common-img" />
						<view class="name">
							{{item.name}}
						</view>
						<view class="detail" v-if="item.detail">
							{{item.detail}}
						</view>
						<u-icon name="arrow-right" color="#a4a5a7" size="30" class="icon"></u-icon>
					</view>
				</view>
			</view>
			<view class="line" style="height: 64rpx;"></view>
		</view>
		<u-popup v-model="ruleShow" mode="bottom" border-radius="14">
			<view class="popup-rule">
				<view class="rule-title">签到规则奖励</view>
				<view class="rule-content">
					<view class="small-title">
						<img src="@/static/title1.png" class="title1-img" /> 单次签到奖励
					</view>
					<view class="signle-sign">
						<view class="row">
							<view class="item">
								第1天:<span>50</span>积分
							</view>
							<view class="item">
								第2~3天: 每天<span>60</span>积分
							</view>
						</view>
						<view class="row">
							<view class="item">
								第4~7天: 每天<span>70</span>积分
							</view>
							<view class="item">
								第8~14天: 每天<span>80</span>积分
							</view>
						</view>
						<view class="row">
							<view class="item">
								第15~21天: 每天<span>90</span>积分
							</view>
							<view class="item">
								第22~30天: 每天<span>100</span>积分
							</view>
						</view>
					</view>
					<view class="line1"></view>
					<view class="small-title">
						<img src="@/static/title1.png" class="title1-img" /> 连续签到奖励
					</view>
					<view class="continue-sign">
						<view class="row" v-for="(item,index) of continueSignList">
							连续签到{{item.day}}天：额外奖励<span>{{item.score}}</span>积分
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<u-modal v-model="signShow" :show-title="false" mask-close-able>
			<view class="modal">
				<img src="@/static/sign-success.png" class="sign-success-img" />
				<view class="text1">
					签到成功!
				</view>
				<view class="text2">
					<img src="@/static/sign.png" class="sign-img" />
					<span class="score">+60</span>积分
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleShow: false,
				isSign: false,
				signShow: false,

				user: {
					name: '用户148304',
					score: '1050',
					link: 'baidu.com'
				},
				taskPointList: [{
					name: '任务进行',
					num: '0',
				}, {
					name: '帮助他人',
					num: '0',
				}, {
					name: '今日赚取积分',
					num: '0',
				}, {
					name: '今日消耗积分',
					num: '0',
				}, ],
				signList: [{
						signType: '1', //0未签到 1已签到
						integral: '10',
						date: '2024-08-19',
					},
					{
						signType: '1', //0未签到 1已签到
						integral: '10',
						date: '2024-08-20',
					},
					{
						signType: '0', //0未签到 1已签到
						integral: '10',
						date: '2024-08-21',
					},
					{
						signType: '0', //0未签到 1已签到
						integral: '10',
						date: '2024-08-22',
					},
					{
						signType: '0', //0未签到 1已签到
						integral: '10',
						date: '2024-08-23',
					},
					{
						signType: '0', //0未签到 1已签到
						integral: '10',
						date: '2024-08-24',
					},
					{
						signType: '0', //0未签到 1已签到
						integral: '10',
						date: '2024-08-25',
					},
				],
				continuDays: '2', //连续签到天数

				continueSignList: [{
					day: '7',
					score: '250'
				}, {
					day: '14',
					score: '500'
				}, {
					day: '21',
					score: '750'
				}, {
					day: '30',
					score: '1000'
				}, ],
				commonList: [{
					name: '平台任务',
					detail: '做任务得积分',
					img: require('@/static/common1.png')
				}, {
					name: '我的邀请',
					detail: '',
					img: require('@/static/common2.png')
				}, {
					name: '他人助力',
					detail: '',
					img: require('@/static/common3.png')
				}, {
					name: '我的助力',
					detail: '',
					img: require('@/static/common4.png')
				}, ],
				moreList: [{
					name: '投诉中心',
					detail: '',
					img: require('@/static/common5.png')
				}, ],

			}
		},
		onLoad() {

		},
		
		methods: {
			copyName(text) {
				uni.setClipboardData({
					data: text,
					success: function() {
						console.log('复制成功', text);
						uni.showToast({
							title: '复制成功',
							icon: 'success',
							duration: 2000
						});
					},
				});
			},
			fnSign() {
				console.log('调用签到方法');
				if (this.isSign) {
					return
				}
				this.isSign = true
				this.signShow = true
			},
			openRule() {
				console.log('打开签到规则');
				this.ruleShow = true
			},
			handleCommonItem(item) {
				console.log(item);
				if (item.name == '平台任务') {
					uni.switchTab({
						url: `/pages/index/task`
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.line {
		height: 24rpx;
		width: 100%;
		background-color: #f4f7fe;
	}

	.header {
		.bg1 {
			height: 160rpx;
			width: 100%;
		}

		.uesr {
			position: absolute;
			padding: 40rpx 30rpx;
			background: #fff;
			border-radius: 20rpx;
			box-shadow: 0 6rpx 40rpx 2rpx #adcdefbd;
			width: 90%;
			left: 50%;
			transform: translateX(-50%);
			top: 64rpx;
			display: flex;
			align-items: center;

			.link {
				position: absolute;
				display: flex;
				align-items: center;
				color: #0e87ff;
				right: 36rpx;
				top: 45rpx;
			}

			.user-img {
				width: 100rpx;
				height: 100rpx;
			}

			.user-info {
				display: flex;
				flex-direction: column;
				height: 100rpx;
				justify-content: space-between;
				padding: 6rpx 0;
				margin-left: 24rpx;
				font-weight: 700;
				font-family: PingFangSC;
				font-size: 30rpx;

				.name {
					display: flex;
					align-items: center;
				}

				.score {
					color: #0e87ff;
				}
			}
		}

		.task-point {
			padding: 0 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 140rpx;
			align-items: center;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;

				.num {
					font-weight: 700;
					margin-bottom: 6rpx;
					font-size: 36rpx;
				}

				.num {
					font-weight: 700;
					margin-bottom: 6rpx;
					font-size: 36rpx;
				}

				.name {
					font-size: 24rpx;
				}
			}
		}
	}

	.content {
		.sign {
			background: #FFFFFF;
			border-radius: 16rpx;
			padding: 24rpx 32rpx;
			position: relative;

			.sign-tip {
				font-family: PingFang SC, PingFang SC;
				font-size: 28rpx;
				color: #000000;
				margin-bottom: 24rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-weight: 700;

				.unit {
					color: #FE772E;
					padding: 0 6rpx;
					font-size: 30rpx;
				}

				.sign-rule-btn {
					display: flex;
					align-items: center;

					.sign-rule {
						font-size: 24rpx;
						font-weight: 400;
						color: #3978f4;
						margin-right: 24rpx;
					}

					.sign-ok {
						opacity: 0.5;
					}

					.sign-btn {
						padding: 16rpx 0rpx;
						width: 130rpx;
						text-align: center;
						color: #5a3517;
						background: linear-gradient(to right, #ffe1cc, #ffc45d);
						border-radius: 44rpx;
					}
				}
			}

			.sign-list {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.sign-item {
					display: flex;
					flex-direction: column;
					align-items: center;

					.item-wrapper-sign {
						background: linear-gradient(180deg, #FE7A0D 0%, #FFB719 100%) !important;
					}

					.item-wrapper {
						display: flex;
						flex-direction: column;
						background: #FFF0CF;
						border-radius: 16rpx;
						padding-top: 6rpx;
						padding-bottom: 12rpx;
						align-items: center;
						min-width: 80rpx;

						.img {
							width: 48rpx;
							height: 48rpx;
							margin-top: 12rpx;
						}

						.add-score-sign {
							color: #FFFFFF !important;
						}

						.add-score {
							color: #FF800F;
							font-family: PingFang SC, PingFang SC;
							font-size: 12rrpx;
						}
					}

				}
			}

		}

		.common {
			padding: 32rpx;

			.title {
				font-weight: 700;
			}

			.common-list {
				margin-top: 24rpx;

				.common-item:not(:last-child) {
					border-bottom: 1rpx solid #eee;
				}

				.common-item {
					padding: 24rpx 0;
					display: flex;
					align-items: center;
					font-size: 28rpx;
					position: relative;


					.icon {
						position: absolute;
						right: 0;
						top: 33rpx;
					}

					.common-img {
						width: 44rpx;
						height: 44rpx;
					}

					.name {
						margin-left: 24rpx;
					}

					.detail {
						margin-left: 300rpx;
						color: #969799;
					}
				}
			}
		}
	}

	.popup-rule {
		.rule-title {
			text-align: center;
			padding: 24rpx;
			font-weight: 700;
			font-size: 32rpx;
			border-bottom: 1rpx solid #e7e7e7;
		}

		.rule-content {
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

			.signle-sign {
				display: flex;
				flex-direction: column;
				margin-top: 24rpx;

				.row:nth-child(2n-1) {
					background-color: #f5f6f9;
				}

				.row {
					padding: 30rpx;
					border-radius: 6rpx;
					color: #323232;
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;

					.item {
						min-width: 300rpx;
						text-align: left;

						span {
							color: #1c8eff;
							font-weight: 700;
							padding: 0 6rpx;
						}
					}
				}
			}

			.continue-sign {
				display: flex;
				flex-direction: column;
				margin-top: 24rpx;

				.row:nth-child(2n-1) {
					background-color: #f5f6f9;
				}

				.row {
					padding: 30rpx;
					border-radius: 6rpx;
					color: #323232;
					display: flex;
					font-size: 24rpx;

					span {
						color: #1c8eff;
						font-weight: 700;
					}
				}
			}
		}
	}

	.modal {
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 999;

		.sign-success-img {
			width: 400rpx;
			height: 300rpx;
			position: absolute;
			top: -130rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 999999;
		}

		.text1 {
			margin-top: 200rpx;
			text-align: center;
		}

		.text2 {
			margin: 48rpx 0;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;

			.score {
				color: #0e87ff;
				font-weight: 700;
			}

			.sign-img {
				width: 50rpx;
			}
		}
	}
</style>

<style lang="scss" scoped>
	/deep/ .u-mode-center-box {
		overflow: visible !important;
	}

	/deep/ .u-model {
		overflow: visible !important;
		border-radius: 32rpx;
	}

	/deep/ .u-drawer__scroll-view .uni-scroll-view {
		overflow: visible !important;
	}
</style>