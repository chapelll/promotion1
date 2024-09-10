<template>
	<view class="wrapper">
		<u-notice-bar mode="horizontal" :list="notice"></u-notice-bar>
		<view class="content">
			<view class="list">
				<view class="item" v-for="(item,index) of list" @click="handleItem(item)">
					<img :src="item.img" class="img" />
					<view class="text">
						<view class="name">
							{{item.name}}
						</view>
						<view class="detail">
							{{item.detail}}
						</view>
					</view>
				</view>
			</view>
			<view class="tips">
				{{tips}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notice: [
					'自媒体社区积分设置调整：投币：40～100、点赞：20～70、完播：30～60、关注：30～60、关注：30～60、评论、弹幕：20～60、分享、收藏：10～50',
				],
				list: [{
					id: '1',
					img: require('@/static/work1.png'),
					name: '选择哔哩哔哩互助平台',
					detail: '快速提升账号影响力',
				}, {
					id: '2',
					img: require('@/static/work2.png'),
					name: '选择抖音互助平台',
					detail: '快速提升账号影响力',
				}, ],
				tips: '任务中心旨在通过互助互动，打造一个积极向上的创作环境。你可以通过点赞、评论和分享他人的作品来获取积分。这些积分可以用来为你的作品增加更多的关注和点赞，从而提升作品的人气和影响力。',
			}
		},
		onLoad() {

		},
		methods: {
			handleItem(item) {
				if (item.id == '1') {
					uni.navigateTo({
						url: `/pages/work/bilibili`
					})
				}
			}
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
		padding: 0 24rpx;

		.list {
			margin-top: 200rpx;
			display: flex;
			flex-direction: column;

			.item {
				display: flex;
				margin: 20rpx;
				padding: 20rpx;
				background: #fff;
				border: solid 1rpx #e5e5e5;
				border-radius: 10rpx;

				.img {
					width: 120rpx;
					height: 120rpx;
					margin-right: 24rpx;
				}

				.text {
					.detail {
						font-size: 24rpx;
						color: #999;
						margin-top: 24rpx;
					}
				}
			}
		}

		.tips {
			padding: 20rpx 60rpx;
			font-size: 24rpx;
			color: #666;
			line-height: 40rpx;
		}
	}
</style>

<style lang="scss" scoped>

</style>