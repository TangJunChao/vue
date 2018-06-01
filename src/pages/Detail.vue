<!-- List.vue -->  
<template>  
    <div class="detail">  
        <detail-header></detail-header> 
        <img v-bind:src="items.img" alt=""> 
        <div v-html="items.des"></div>
        <div class="aa">
            <ul class="newsList" id="tagArea">
                <li class="cur"><a href="javascript:;" type="19,20,21" class="recently"><i></i>最新</a></li>
                <li><a href="javascript:;" type="20" class="notice"><i></i>公告</a></li>
                <li><a href="javascript:;" type="21" class="activity"><i></i>活动</a></li>
                <li><a href="javascript:;" type="19" class="news"><i></i>新闻</a></li>
                <li><a href="javascript:;" type="23" class="methods"><i></i>攻略</a></li>
            </ul>
            <div id="contentArea">
                <div class="newCon">
                    111
                </div>
                <div class="newCon" style="display:none;">
                    2222
                </div>
                <div class="newCon" style="display:none;">
                    3333
                </div>
                <div class="newCon" style="display:none;">
                    4444
                </div>
                <div class="newCon" style="display:none;">
                   555
                </div>
            </div>
        </div>
        <div class="aa">
            <ul class="newsList" id="tagArea1">
                <li class="cur"><a href="javascript:;" type="19,20,21" class="recently"><i></i>最新</a></li>
                <li><a href="javascript:;" type="20" class="notice"><i></i>公告</a></li>
                <li><a href="javascript:;" type="21" class="activity"><i></i>活动</a></li>
                <li><a href="javascript:;" type="19" class="news"><i></i>新闻</a></li>
                <li><a href="javascript:;" type="23" class="methods"><i></i>攻略</a></li>
            </ul>
            <div id="contentArea1">
                <div class="newCon">
                    111
                </div>
                <div class="newCon" style="display:none;">
                    2222
                </div>
                <div class="newCon" style="display:none;">
                    3333
                </div>
                <div class="newCon" style="display:none;">
                    4444
                </div>
                <div class="newCon" style="display:none;">
                   555
                </div>
            </div>
        </div>
    </div>  
</template>  
<style>

    .detail {  
        padding: 0.24rem;  
        font-size: 12px;  
    }  
</style>  
<script>  
    import {tagChange} from '../assets/js/nor.js';
    
    import DetailHeader from '../components/DetailHeader' 
  
    export default {
        data(){
            return{
                items:
                    {img:require('../assets/img/lp_01.jpg'),des:'<p>崇贤馆始置唐代太宗朝。1999年，李克先生及志同道合者复兴其宗旨。以积累、传播中华优秀传统文化，提供全新国学体验馆为宏愿。</p><p>其间，在季羡林、冯其庸等国学大师及著名文史学家傅璇琮、毛佩琦先生指导下，耕注先贤原典，以宣纸线装精品形式呈奉世人。作为一家国学传播机构，崇贤馆始终致力于中华传统文化的传承和推广，以古籍线装宣纸书的形式，对浩繁的史海巨著进行经典复刻。不仅如此，崇贤馆还延请了傅璇琮、毛佩奇等诸位在国学界内享有盛誉的专家和学者担纲学术顾问，以精益求精的治学态度面对每一部崇贤馆的作品，使之成为学术史中无尚的精品。</p> '}               
            }
        },
        components: {  
            DetailHeader  
        },
        mounted:function(){//页面加载完成后执行
            //返回顶端
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            tagChange("#tagArea li","#contentArea .newCon","cur").setTouchType("click").init(); 
            tagChange("#tagArea1 li","#contentArea1 .newCon","cur").setTouchType("click").init(); 
        }
    }; 
</script> 