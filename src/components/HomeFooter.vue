<!-- HomeHeader.vue -->
<template>
	<div>
	<footer class="footer">
		<p class="lr"><a target="_blank" href="javascript:void(0)">关于我们</a> | <a target="_blank" href="javascript:void(0)">联系我们</a> | <a target="_blank" href="javascript:void(0)">游戏合作</a> | <a target="_blank" href="javascript:void(0)">渠道合作</a> | <a target="_blank" href="/Index/protocol">用户许可协议</a></p>
		<p>Copyright &copy;2017-2018 海南坚果互娱信息科技有限公司 版权所有</p>
	</footer>
	<div class="kd_logo"><router-link to="/"><img src="../assets/images/kd_logo.png" alt=""></router-link></div>
<div class="backTop">
	<a href="javascript:;">返回顶部</a>
</div>

	</div>
</template>
<style>
	.footer{padding:.15rem 0;text-align:center;background-color:#fff;font-size:.08rem;line-height:.18rem;}
	.footer .lr{font-size:.1rem;color:#ff8e55;margin-bottom:.025rem;}
	.footer .lr a{color:#ff8e55;}
	.footer .mes{font-size:.09rem;}
	.footer .mes a:last-child{color:#ef7600;}
	.kd_logo{padding:.15rem 0;background:#f2f2f2;text-align:center;}
	.kd_logo img{width:.84rem;height:auto;}
	.backTop{position:fixed;right:10px;bottom:10px;z-index:99;display:none;}
	.backTop a{display:block;width:40px;height:36px;background-image:url(../assets/images/top.png);text-indent:-999em;}
</style>