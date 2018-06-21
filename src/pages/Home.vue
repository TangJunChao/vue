<!-- Home.vue -->  
<template>  
    <div class="container">  
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->  
        <Home-nav></Home-nav>
        <div class="jgBanner"><router-link to='/'><img src="../assets/images/banner01.jpg" alt=""></router-link></div>
        <section class="new-hot" id="playB">
            <span :class="{cur:index==num}" v-for="(item,index) in tabs" @click="tab(index)">{{item}}</span>
        </section>
        <div id="playAll">
            <div class="game-con pdt10" v-for="(item,index) in tabContents" v-show="index == num">
                <section class="swiper-container gameSwiper game-list">
                    <div class="swiper-wrapper">
                        <router-link v-for="(img,index) in item.data" :to="img.href" class="swiper-slide"><img :src="img.img" alt="" /><p>{{img.txt}}</p></router-link>
                        <!-- <router-link class="swiper-slide" to="/"><img src="../assets/images/game02.jpg" alt="" /><p>尸兄</p></router-link>
                        <router-link class="swiper-slide" to="/"><img src="../assets/images/game03.jpg" alt="" /><p>梦想仙侠</p></router-link>
                        <router-link class="swiper-slide" to="/"><img src="../assets/images/game04.jpg" alt="" /><p>天下</p></router-link>
                        <router-link class="swiper-slide" to="/"><img src="../assets/images/game01.jpg" alt="" /><p>大富豪</p></router-link>
                        <router-link class="swiper-slide" to="/"><img src="../assets/images/game02.jpg" alt="" /><p>尸兄</p></router-link>
                        <router-link class="swiper-slide" to="/"><img src="../assets/images/game03.jpg" alt="" /><p>梦想仙侠</p></router-link> -->
                    </div>
                </section>
            </div>
        </div>
        <div class="game-con getMoney">
            <h5 class="t_a">分享有礼</h5>
            <ul class="gameList" id="gameShare">
                <li>
                <div class="list-all flex">
                    <img src="../assets/images/game02.jpg">
                        <div class="list-js"><strong>琅琊榜<span class="label red">传奇</span><span class="label blue">仙侠</span></strong><span class="allPlay">专属链接</span><span class="txt"><input type="text" name="" id="" class="ui_t" value="http://h5.gzkudai.com/Index/play?game_alias=lyb2&amp;sponsor=MTA0ODk="></span>
                    </div>
                    <span onclick="shareEvent(this,'MTA0ODk=','琅琊榜','57')" class="play">一键分享</span>
                </div>
                </li>
            </ul>
            <div class="moreShow">
                <span class="share_more">点击加载更多</span>
            </div>
        </div>
        <section class="new-hot four_hot">
            <span :class="{cur:index==tabIndex}" v-for="(item,index) in tabsThree" @click="tabHot(index)">{{item}}</span>
        </section>
        <div class="game-con" v-show="0==tabIndex">
            <ul class="gameList">
                <li>
                    <div class="list-all flex">
                        <a href="/Index/gameDetail?game_alias=zlsg"><img src="../assets/images/game01.jpg"></a>
                        <div class="list-js"><strong><a href="/Index/gameDetail?game_alias=zlsg">战龙三国</a><span class="label red">热血</span><span class="label blue">国战</span></strong><span class="allPlay oR">人气：38331</span><span class="txt ellipsis">合碎片化时间的操作，手机打开页面，随时随地就可以上去PK一场</span>
                        </div>
                        <a href="/Index/play?game_alias=zlsg" class="play orange">打开</a>
                    </div>
                </li>
                <li>
                    <div class="list-all flex">
                        <a href="/Index/gameDetail?game_alias=zlsg"><img src="../assets/images/game01.jpg"></a>
                        <div class="list-js"><strong><a href="/Index/gameDetail?game_alias=zlsg">战龙三国</a><span class="label red">热血</span><span class="label blue">国战</span></strong><span class="allPlay oR">人气：38331</span><span class="txt ellipsis">合碎片化时间的操作，手机打开页面，随时随地就可以上去PK一场</span>
                        </div>
                        <a href="/Index/play?game_alias=zlsg" class="play orange">打开</a>
                    </div>
                </li>
            </ul>
            <div class="moreShow">
                <span>点击加载更多</span>
            </div>
        </div>
        <div class="game-con" v-show="1==tabIndex">
            222
        </div>
        <div class="game-con" v-show="2==tabIndex">
            none
        </div>


        <div class="content">  
            <ul class="cont_ul">  
                <list v-for="item in items"  
                    :price="item.price"  
                    :title="item.title"
                    :img="item.img"
                    >  
                </list>  
            </ul>  
        </div>  
        <home-footer></home-footer>
        <home-header :title="home"></home-header> 
    </div>  
</template>  
<style>
    @import 'swiper/dist/css/swiper.css';  
    .home-nav{display:flex;font-size:18px;}
    .home-nav{}
    .container {  
        max-width: 640px;  
        margin: 0 auto;  
        overflow-x: hidden;  
    }  
    .cont_ul {  
        padding-top: 0.05rem;  
        margin: 0 -0.12rem;  
    }  
    .cont_ul:after {  
        content: "";  
        display: block;  
        width: 0;  
        height: 0;  
        clear: both;  
    }  
</style>  
<style lang="scss" scoped>
    @import '../assets/scss/mixin';
    .header{
        @include font(12px,1.6);
        @include wh(100%, .4rem);
    }
</style>
<script>  
    // 导入要用到的子组件  
    import HomeHeader from '../components/HomeHeader'  
    import HomeNav from '../components/HomeNav' 
    import HomeFooter from '../components/HomeFooter' 
    import List from '../components/List'  

    import Swiper from 'swiper';//swiper插件
  
    export default {  
        data () {  
            return { 
                home:'主页', 
                items: [  
                    // { price: "129.00", title: "大学" },  
                    // { price: "256.00", title: "中庸" },  
                    // { price: "399.00", title: "论语" },  
                    // { price: "998.00", title: "孟子" },  
                    // { price: "99.00", title: "道德经" },  
                    // { price: "89.00", title: "老子" },  
                    // { price: "188.00", title: "金刚经" },  
                    // { price: "209.00", title: "易筋经" },  
                ],
                nav:[
                    {index:'首页',href:'/'},
                    {index:'列表页',href:'/list?id=1'},
                    {index:'文章',href:'/detail'}
                ],
                tabs:['大家在玩','最近在玩'],
                tabsThree:['热门','新游推荐','新开服'],
                tabContents:[
                    {code:'0',data:[
                        {img:require('../assets/images/game01.jpg'),href:'/',txt:'大富豪'},
                        {img:require('../assets/images/game02.jpg'),href:'/',txt:'师兄'},
                        {img:require('../assets/images/game03.jpg'),href:'/',txt:'梦想仙侠'},
                        {img:require('../assets/images/game04.jpg'),href:'/',txt:'天下'},
                        {img:require('../assets/images/game03.jpg'),href:'/',txt:'梦想仙侠'},
                        {img:require('../assets/images/game04.jpg'),href:'/',txt:'天下'}
                    ]},
                    {code:'1',data:[
                        {img:require('../assets/images/game01.jpg'),href:'/',txt:'大富豪'},
                        {img:require('../assets/images/game02.jpg'),href:'/',txt:'大富豪'},
                        {img:require('../assets/images/game03.jpg'),href:'/',txt:'大富豪'},
                        {img:require('../assets/images/game04.jpg'),href:'/',txt:'大富豪'}
                    ]}
                ],
                tabIndex:0,//热门，新游推荐
                num:0//大家在玩-最近在玩切换卡index值
            }  
        },  
        // 在components字段中，包含导入的子组件  
        components: {  
            HomeHeader,
            HomeNav, 
            HomeFooter, 
            List  
        },
        created(){
            this.$http.get('/api/books').then(data => {
                console.log(data);
                this.items=data.body.data;
            })
        },
        mounted(){
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                speed:800,
                autoplay : 3000,
                observer:true,
                observeParents:true,
                loop : false,
                preventClicks:false
            });
            console.log(this.tabContents[0].data)
        },
        methods:{
            tab(index){
                this.num=index;
            },
            tabHot(index){
                let ti=this.tabIndex;
                this.tabIndex=index;
                if(index==2){
                    this.tabIndex=ti;
                    alert('暂未开放！')
                }
            }
        }
    }  
</script>  