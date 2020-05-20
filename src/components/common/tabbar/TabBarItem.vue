<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isAct">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-A"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem'
		// components:{
			
		// },
		,
		props:{
			path:String,
			 activeColor:{
				 type:String,
				 default:'red'
			 }
		},
		data(){
			return {
				
			}
		},
		computed:{
			isAct(){
				//==this.path
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isAct ? {color:this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path).catch(err=>{err})
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 3.0625rem;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
</style>
