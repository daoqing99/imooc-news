<template>
	<view>
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="listcard">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>
						{{item.title}}
					</text>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browse">{{item.browse_count}}人浏览</view>
				</view>
			</view>
		</view>
		
		<!-- 多图模式 -->
		<view v-if="item.mode === 'column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>
						{{item.title}}
					</text>
				</view>
				<view class="listcard-image">
					<view class="listcard-image__item" v-for="(img,index) in item.cover" :key='index' v-if='index < 3'>
						<image :src="img" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browse">{{item.browse_count}}人浏览</view>
				</view>
			</view>
		</view>
	
		<!-- 大图模式 -->
		<view v-if="item.mode === 'image'" class="listcard mode-image">
			<view class="listcard-image">
					<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>
						{{item.title}}
					</text>
				</view>
				<view class="listcard-content__des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browse">{{item.browse_count}}人浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				style:String,
				default:'base'
			},
			item:{
				style:Object,
				default(){
					return {}
				}
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.listcard{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.listcard-image{
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content{
			display: flex;
			flex-direction: column;
			padding-left: 10px;
			width: 100%;
			justify-content: space-between;
			.listcard-content_title{
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
			}
			.listcard-content__des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content_des-label{
					display: flex;
					.listcard-content_des-label-item{
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px solid $mk-base-color;
					}
				}
				.listcard-content_des-browse{
					color: #999;
					line-height: 1.5;
				}
			}
		}
		&.mode-column{
			.listcard-image{
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.listcard-image__item{
					margin-right: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.listcard-content__des{
				margin-top: 10px;
			}
			.listcard-content{
				width: 100%;
				padding-left: 0;
			}
		}
		&.mode-image{
			flex-direction: column;
			.listcard-image{
				width: 100%;
				height: 100px;
			}
			.listcard-content{
				padding-left: 0;
				margin-top: 10px;
				.listcard-content__des{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
