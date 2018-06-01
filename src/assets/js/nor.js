var tagChange = function(){
    var _tagElements,_contentElements,_addClassName;
    var _touchEvent,_touchType;
    arguments[0]?_tagElements = easy_switch(arguments[0]):"";
    arguments[1]?_contentElements = easy_switch(arguments[1]):"";
    arguments[2]?_addClassName = arguments[2]:"";
    //简易选择器
    function easy_switch(elm){
        if(typeof elm == "string"){
            var strs = elm.split(" ");
            var targetElements = [document.body];
            for(var i in strs){
                if(!targetElements){return false;}
                var flagGroups = new Array();

                for(var j in targetElements){

                    var datasource = typeSwitcher(targetElements[j],strs[i]);
                    if(!datasource){return false;}
                    if(!datasource.length){
                        if(datasource){
                            flagGroups.push(datasource);
                        }
                    }
                    else{

                        for(var k = 0; k < datasource.length; k++){
                            if(datasource[k]){
                                flagGroups.push(datasource[k])
                            }
                        }
                    }

                }
                targetElements = flagGroups;
            }
            if(targetElements.length ==1){return targetElements[0]}
            else {return targetElements;}
        }
        else{
            return elm;
        }
        function typeSwitcher(elm,str){

            if(str.substring(0,1) == "#"){
                return document.getElementById( str.substring(1,str.length) )
            }
            else if(str.substring(0,1) == "."){
                var flag = elm.getElementsByTagName("*");
                var results = [];
                for(var i in flag){
                    if(flag[i].className == str.substring(1,str.length)){
                        results.push(flag[i]);
                    }
                }
                return results;
            }
            else{
                var result = elm.getElementsByTagName(str)
                if(result.length >0){
                    return result;
                }
                else{
                    return false;
                }
            }
        }
    }
    return{
        setTagElements:function(elements){
            _tagElements = elements;
            return this;
        },
        setContentElements:function(elements){
            _contentElemens = elements;
            return this;
        },
        setTouchType:function(type){
            _touchType = type;
            return this;
        },
        setTouchEvent:function(func){
            _touchEvent = func;
        },
        setAddClass:function(className){
            _addClass = className;
            return this;
        },
        init:function(){
            if(!_tagElements){return;}
            _touchType = _touchType ||"click";
            _addClassName = _addClassName ||"";
            
            var orgClassName = new Array();
            for(var i = 0; i < _tagElements.length; i++){
                orgClassName[i] = _tagElements[i].className.replace(_addClassName,"");
                switch(_touchType){
                    case 'click':_tagElements[i].onclick = function(){touchEvent.call(this);};break;
                    case 'mouseover':_tagElements[i].onmouseover = function(){touchEvent.call(this)};break;
                }
                function touchEvent(){
                    _touchEvent?_touchEvent.call(this):"";
                    for(var i = 0; i < _tagElements.length; i++ ){
                        this == _tagElements[i]?(
                            _tagElements[i].className = orgClassName[i] + " " + _addClassName,
                                _contentElements[i] ? _contentElements[i].style.display = "block" : ""
                        ):(
                            _tagElements[i].className = orgClassName[i],
                                _contentElements[i] ? _contentElements[i].style.display = "none" : ""
                        );
                    }
                }

            }
        }

    }
}
export{
	tagChange
}