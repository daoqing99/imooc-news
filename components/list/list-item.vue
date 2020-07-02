<template>
	<list-scroll class='list-scroll'>
		<list-card :item='item' v-for='(item,index) in list' :key='item._id'></list-card>
		<!-- <list-card mode='image'></list-card> -->
		<!-- <list-card mode='column'></list-card> -->
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
