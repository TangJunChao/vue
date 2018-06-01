<!-- HomeNav.vue -->
<template>
		<!-- <router-link :to="href" class="link">
			{{title}}
		</router-link> -->
		<header class="header">
			<header class="jg-header clearfix">
				<h1 class="logo"><router-link to="/"><img src="../assets/images/logo.png" alt="创趣网络" /></router-link></h1>
				<div class="fr user-search">
					<span @click="click" class="fl iconfont search">&#xe672;</span>
					<span @click="show=!show" class="fl followBtn">关注</span>
				</div>
			</header>
			<!-- 关注弹窗 -->
			<transition name="fade">
				<div class="popBg" v-show="show" @click="show=!show"></div>
			</transition>
			<transition name="fade">
				<div class="popFollow" v-show="show">
					<div class="popFH">
						<p class="logoImg"><img src="../assets/images/dk_logo.png" alt=""></p>
					</div>
					<div class="popFM">
						<p>关注 <strong>裤带游戏</strong></p>
						<p><img src="../assets/images/ewm.png" alt=""></p>
						<p><small>长按识别二维码</small></p>
					</div>
				</div>
			</transition>
			<!-- //关注弹窗 -->

		</header>
</template>

<style>
</style>
<script>
	export default{
		data () {  
			return{
				show:false,
			}
		},
		props:['title','href'],
		methods:{
			click:function(){
				console.log('111')
			}
		}
	}
</script>