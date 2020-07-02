<template>
	<swiper class="home-swiper" :current="activeIndex" @change='change'>
		<swiper-item v-for="(item,index) in tab" :key='index' class="swiper-item">
			<list-item :list='list'></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			activeIndex:{
				type:Number,
				default:0
			}
		},
		watch:{
			activeIndex(){
				
			}
		},
		data() {
			return {
				list:[]
			};
		},
		// onLoad 页面用   created 组件用
		created() {
			this.getList()
		},
		methods:{
			change(e){
				let { current } = e.detail
				this.$emit('change',current)
			},
			getList(){
				this.$api.get_list().then(res=>{
					console.log(res)
					let {data} = res
					this.list = data
				})
			}
		},
		components:{
			listItem
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
			.list-scroll{
				height: 100%;
			}
		}
	}
</style>
