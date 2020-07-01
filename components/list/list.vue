<template>
	<swiper class="home-swiper" :current="activeIndex" @change='change'>
		<swiper-item v-for="(item,index) in tab" :key='index' class="swiper-item">
			<list-item></list-item>
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
				
			};
		},
		methods:{
			change(e){
				let { current } = e.detail
				this.$emit('change',current)
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
