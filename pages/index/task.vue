<template>
	<view class="wrapper">
		<view class="title">
			<img src="@/static/title1.png" class="title1-img" /> 做任务赚积分
		</view>
		<view class="task-list">
			<view class="task-item" v-for="(item,index) of taskList">
				<img src="@/static/task-icon.png" class="task-icon" />
				<view class="main">
					<view class="text1">
						任务奖励 <span class="cur">【已完成：{{item.cur}}】</span>
					</view>
					<view class="text2">
						{{item.text1}} <span>{{item.max}}</span> {{item.text2}},即可领取额外的奖励+ <span>{{item.score}}</span> 积分
					</view>
					<view class="btn">
						<u-button :custom-style="customStyle">去完成</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					width: '120rpx',
					height: '50rpx',
					fontSize: '24rpx',
					border: 'none',
					background: '#e8f3ff',
					color: '#0e87ff',
				},
				taskList: [{
						'text1': '每周通过邀请链接注册',
						'text2': '位新用户',
						"id": 2,
						"type": 2,
						"max": 10,
						"cur": 0,
						"secondType": null,
						"score": 10000,
						"isReceive": false
					},
					{
						'text1': '每周登录完成关注',
						'text2': '个任务',
						"id": 9,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 1,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成点赞',
						'text2': '个任务',
						"id": 1,
						"type": 1,
						"max": 30,
						"cur": 0,
						"secondType": 2,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成评论',
						'text2': '个任务',
						"id": 7,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 4,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成收藏',
						'text2': '个任务',
						"id": 6,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 5,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成投币',
						'text2': '个任务',
						"id": 5,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 3,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成分享',
						'text2': '个任务',
						"id": 8,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 6,
						"score": 500,
						"isReceive": false
					},
					{
						'text1': '每周登录完成弹幕',
						'text2': '个任务',
						"id": 10,
						"type": 1,
						"max": 20,
						"cur": 0,
						"secondType": 7,
						"score": 500,
						"isReceive": false
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f7fe;
	}
	
	.wrapper {
		position: relative;
		padding: 32rpx;
	}

	.title {
		display: flex;
		align-items: center;

		.title1-img {
			width: 14rpx;
			height: 26rpx;
			margin-right: 12rpx;
			transform: translateY(1rpx);
		}
	}

	.task-list {
		margin-top: 48rpx;

		.task-item {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			padding: 20rpx;
			background: #f9f9f9;
			border: solid 1rpx #e5e5e5;
			border-radius: 20rpx;
			font-size: 24rpx;
			position: relative;

			.main {
				margin-left: 24rpx;
				max-width: 400rpx;

				.text1 {
					margin-bottom: 24rpx;

					.cur {
						margin-left: 6rpx;
						color: #409eff;
					}
				}

				.text2 {
					line-height: 40rpx;

					span {
						padding: 0 6rpx;
						color: #409eff;
					}
				}

				.btn {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 24rpx;
				}

			}
		}
	}
</style>

<style lang="scss" scoped>

</style>