<template>
	<tabbar class="contrl">
			<tab-bar-item path="/home">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/home.svg" alt="">
				</template>
				<template v-slot:item-icon-A>
					<img src="~assets/img/tabbar/homeA.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div>
						首页
					</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/order">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/order.svg" alt="">
				</template>
				<template v-slot:item-icon-A>
					<img src="~assets/img/tabbar/orderA.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div>
						分类
					</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/shop">
				<template v-slot:item-icon>
					<img  src="~assets/img/tabbar/shop.svg" alt="">
				</template>
				<template v-slot:item-icon-A>
					<img  src="~assets/img/tabbar/shopA.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div>
						购物车
					</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/user">
				<template v-slot:item-icon>
					<img src="~assets/img/tabbar/user.svg" alt="">
				</template>
				<template v-slot:item-icon-A>
					<img src="~assets/img/tabbar/userA.svg" alt="">
				</template>
				<template v-slot:item-text>
					<div>
						我的
					</div>
				</template>
			</tab-bar-item>
	</tabbar>
</template>

<script>
	import Tabbar from 'components/common/tabbar/Tabbar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default{
		name:'MainTabBar',
		components:{
			Tabbar,
			TabBarItem
		}
	}
</script>

<style scoped>
.contrl{
  max-width: 640px;
  width: 100%;
  margin: auto;
}
</style>
