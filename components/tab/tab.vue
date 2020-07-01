<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true" >
			<view class="tab-scroll_box">
				<view :class="{active:activeIndex===index}" @click="clickTab(item,index)" v-for="(item, index) in list" :key='index' class="tab-scroll_item">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		watch:{
			tabIndex(newVal,oldVal){
				this.activeIndex = newVal
			}
		},
		data() {
			return {
				activeIndex:0
			};
		},
		methods:{
			clickTab(item,index){
				this.activeIndex = index
				console.log(item)
				this.$emit('tab',{
					data:item,
					index:index
				})
			}
		}
	}
</script>

<style lang="scss">
 .tab{
	 display: flex;
	 width: 100%;
	 background-color: #fff;
	 border-bottom: 1px solid #f5f5f5;
	 box-sizing: border-box;
	 .tab-scroll{
		 flex: 1;
		 overflow: hidden;
		 box-sizing: border-box;
		 .tab-scroll_box{
			 display: flex;
			 align-items: center;
			 flex-wrap: nowrap;
			 height: 45px;
			 box-sizing: border-box;
			 .tab-scroll_item{
				 flex-shrink: 0;
				 padding: 0 10px;
				 color: #333;
				 font-size: 14px;
				 &.active{
					 color: $mk-base-color;
				 }
			 }
			 
		 }
	 }
	 .tab-icons{
		 position: relative;
		 display: flex;
		 align-items: center;
		 justify-content: center;
		 width: 45px;
		 &::after{
			 content: '';
			 position: absolute;
			 left: 0;
			 top: 12px;
			 bottom: 12px;
			 width: 1px;
			 background-color: #ddd;
		 }
	 }
 }
</style>
