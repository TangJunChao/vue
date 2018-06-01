<!-- List.vue -->  
<template>  
    <div id="container">
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->  
        <home-header :title="home"></home-header> 
        <nav class="home-nav">
            <Home-nav v-for="item in nav" :title="item.index" :href="item.href" :style="item.colorActive"></Home-nav>
        </nav> 
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
    </div> 
</template>  
<style>
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
<script>  
    import HomeHeader from '../components/HomeHeader' 
    import HomeNav from '../components/HomeNav'
    import HomeFooter from '../components/HomeFooter' 
    import List from '../components/List'  

    export default {  
        data () {  
            return { 
                home:'列表页', 
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
                ]
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
        }
    }  
    // var txt={
    //     img:require('../assets/img/lp_01.jpg'),des:'<p>崇贤馆始置唐代太宗朝。1999年，李克先生及志同道合者复兴其宗旨。以积累、传播中华优秀传统文化，提供全新国学体验馆为宏愿。</p><p>其间，在季羡林、冯其庸等国学大师及著名文史学家傅璇琮、毛佩琦先生指导下，耕注先贤原典，以宣纸线装精品形式呈奉世人。作为一家国学传播机构，崇贤馆始终致力于中华传统文化的传承和推广，以古籍线装宣纸书的形式，对浩繁的史海巨著进行经典复刻。不仅如此，崇贤馆还延请了傅璇琮、毛佩奇等诸位在国学界内享有盛誉的专家和学者担纲学术顾问，以精益求精的治学态度面对每一部崇贤馆的作品，使之成为学术史中无尚的精品1111。</p> '
    // }
    // export default {
    //     data(){
    //         return{
    //             items:
    //                 {}               
    //         }
    //     },
    //     components: {  
    //         DetailHeader  
    //     },
    //     created(){
    //         var sign = this.$route.query.id;
    //         if(sign==1){
    //             this.items=txt;
    //         }else{
    //             window.location.href='/'
    //         }
    //     }
    // }; 
</script> 