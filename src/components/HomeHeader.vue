<!-- HomeHeader.vue -->
<template>
	<!-- <header class="header">
		<div class="header_inner">
			<div class="header_cont">{{title}}</div>
		</div>
	</header> -->
	<header class="fixed_header">
		<div class="fixedNav">
			<nav class="navList flex">
				<router-link to='/' class="link_a"><i class="iconfont">&#xe677;</i>首页</router-link>
				<router-link to='/list' class="link_a"><i class="iconfont">&#xe617;</i>网游</router-link>
				<router-link to='/detail' class="link_a"><i class="iconfont">&#xe60a;</i>资讯</router-link>
				<router-link to='/detail' class="link_a"><i class="iconfont">&#xe601;</i>礼包</router-link>
			</nav>
		</div>
	</header>
</template>

<style>
</style>
<script>
	export default{
		props:['title']
	}
	// document.getElementsByTagName('body')[0].style.marginBottom='.525rem'
</script>