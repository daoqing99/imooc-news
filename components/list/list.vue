<template>
	<swiper class="home-swiper" :current="activeIndex" @change='change'>
		<swiper-item v-for="(item,index) in tab" :key='index' class="swiper-item">
			<list-item :list='listCatchData[index]'></list-item>
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
			tab(newVal){
				if(newVal === 0) return
				this.getList(this.activeIndex)
			}
		},
		data() {
			return {
				list:[],
				listCatchData:{}
			};
		},
		// onLoad 页面用   created 组件用
		created() {
			
		},
		methods:{
			change(e){
				let { current } = e.detail
				// console.log(this.tab[current].name)
				this.getList(current)
				this.$emit('change',current)
			},
			getList(current){
				this.$api.get_list({
					   name:this.tab[current].name,
					}).then(res=>{
					console.log(res)
					let {data} = res
					// this.list = data
					// this.listCatchData[current] = data
					this.$set(this.listCatchData,current,data)
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
