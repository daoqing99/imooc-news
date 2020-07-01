<template>
	<view class="home">
		<navbar></navbar>
		<tab @tab='tab' :list='tabList' :tabIndex='tabIndex'></tab>
		<view class="home-list">
			<list :tab='tabList' :activeIndex='activeIndex' @change='change'></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			change(e){
				this.tabIndex = e
				console.log(e)
			},
			tab({data,index}){
				this.activeIndex = index
				console.log(data,index)
			},
			getLabel () {
				console.log(this.$api)
				this.$api.get_label({
					name:'get_label'
				}).then((res)=>{
					const {data} =res
					console.log(res)
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		display: flex;
		height: 100%;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
