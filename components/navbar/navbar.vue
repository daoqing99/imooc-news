<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight +'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uniapp,vue</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navBarHeight +'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight: 45,
				windowWidth: 375
			};
		},
		created () {
			// 获取手机系统信息
		const info = uni.getSystemInfoSync()
		   // 设置状态栏高度
		this.statusBarHeight = info.statusBarHeight
		this.windowWidth = info.windowWidth
		console.log(info)
		console.log(this.statusBarHeight)
		
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		  // 获取胶囊的位置
		const menuBtnInfo = uni.getMenuButtonBoundingClientRect()
		console.log(menuBtnInfo)
		// 导航栏高度=(胶囊底部高度-状态栏高度)+(胶囊顶部-状态栏的高度)
		this.navBarHeight = (menuBtnInfo.bottom - this.statusBarHeight) + (menuBtnInfo.top-this.statusBarHeight)
		this.windowWidth = menuBtnInfo.left
		console.log(this.navBarHeight)
		// #endif
		}
	}
</script>

<style lang="scss">
.navbar{
	.navbar-fixed{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;	
		width: 100%;
		background-color: $mk-base-color;
		.navbar-content{
			display: flex;
			justify-content: center;
			align-items: center;
			// height: 45px;
			padding: 0 15px;
			box-sizing: border-box;
			.navbar-search{
				display: flex;
				align-items: center;
				height: 30px;
				width: 100%;
				border-radius: 30px;
				padding: 0 10px;
				background-color: #fff;
				.navbar-search_icon{
					// width: 10px;
					// height: 10px;
					// border:1px solid red;
					margin-right: 10px;
				}
				.navbar-search_icon{
					font-size: 12px;
					color: #999;
				}
			}
		}	
	}	
}
</style>
