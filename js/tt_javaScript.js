
 function $( id ){
    return typeof id === 'string'?document.getElementById( id ):id;
    }

    //获取class

    function getElementsByClassName( node,classname ){
    	if( node.getElementsByClassName ){
    		//使用现有的方法
    		return node.getElementsByClassName( classname );
    	}else{
    		var results = new Array();
    		var elems = node.getElementsByTagName('*');
    		for( var i = 0; i<elems.length; i++ ){
    			if( elems[i].className.indexOf( classname ) != -1 ){
    				results[results.length] = elems[i];
    			}
    		}

    		return results;
    	}
    }


function t_left(){
	var oLeftUl = document.getElementById('t_leftul');
	var aLeftLi = oLeftUl.getElementsByTagName('li');

	for( var i = 0; i<aLeftLi.length; i++ ){
		if( i%2 == 0 ){
			aLeftLi[i].className = 'new_color';
		}else{
			aLeftLi[i].className = '';
		}

		aLeftLi[i].onmouseover = function(){
		oldColor = this.className;
		this.className = 'across';
	}

		aLeftLi[i].onmouseout = function(){
			
			this.className = oldColor;
		}

	}

}


function t_top(){
	var oTuser = document.getElementById('t_user');
	var oTlist = document.getElementById('t_list');
	var timer = null

  	oTuser.onmouseover = oTlist.onmouseover  = function(){

		oTlist.style.display = 'block';
		/*startMove( oTlist, 'alpha', '100',function(){
			alert(1);
		});*/
		clearInterval( timer );
	}

	oTuser.onmouseout = oTlist.onmouseout = function(){
		timer = setInterval( function(){
			oTlist.style.display = 'none';
		},500)
	}

	

	//鼠标滑过改变颜色
	var oUl = document.getElementById('t_list').getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oldColor = null;

	for( var i = 0; i<aLi.length; i++ ){
		if( i%2 == 0 ){
			aLi[i].className = 'new_color';
		}else{
			aLi[i].className = '';
		}

		aLi[i].onmouseover = function(){
		oldColor = this.className;
		this.className = 'across';
	}

	aLi[i].onmouseout = function(){
		
		this.className = oldColor;
	}

	}
}




function t_onlineLessons(){
	var oCourseBoxUl = document.getElementById('t_course_boxul');
	var aCourseBoxLi = oCourseBoxUl.getElementsByTagName('li');
	
	for( var i = 0; i<aCourseBoxLi.length; i++ ){
		
		aCourseBoxLi[i].onmouseover = function(){
			this.className = 'across_border';
		}

		aCourseBoxLi[i].onmouseout = function(){
			this.className = '';
		}
	}
}


function prepareList(){
	
	var prepareH3 = $('prepareListBox').getElementsByTagName('h3');
	var prepareUl = $('prepareListBox').getElementsByTagName('ul');
	var prepareLi = $('prepareListBox').getElementsByTagName('li');
	var prepareA = $('prepareListBox').getElementsByTagName('a');

/*	
	var oBtn = $('contentLink');
	

	function show(){
		var oMask = document.createElement('div');
		oMask.id = 'mask';

		//获取页面的高和宽
		var sHeight = document.documentElement.scrollHeight;
		var sWidth = document.documentElement.scrollWidth;

		//获取页面可视区的宽高
		var wHeight = document.documentElement.clientHeight;
		//由于页面时纵向的，所以把可视区的宽看做是页面的宽度
		
		oMask.style.height = sHeight + 'px';
		oMask.style.width = sWidth + 'px';
		document.body.appendChild(oMask);
		
		var oContent = document.createElement('div');
			oContent.id='content'
			oContent.innerHTML = "<div class='content'></div><div id='close'></div>";
		document.body.appendChild(oContent);

		//获取弹出框的宽和高
		var dHeight = oContent.offsetHeight;
		var dWidth = oContent.offsetWidth;
		
		oContent.style.top = ( sHeight-dHeight )/2 + 'px';
		oContent.style.left = ( sWidth-dWidth )/2 + 'px';

			
			var oClose = $('close');

			oClose.onclick = function(){
				document.body.removeChild(oMask);
				document.body.removeChild(oContent);
			}
	}
	
	
		oBtn.onclick = function(){
			show();
		
	}
	
*/


	if( prepareH3.length!=prepareUl.length ){ reyturn;}
	for( var i = 0; i<prepareH3.length; i++ ){

		prepareH3[i].index = i;

		prepareH3[i].onmouseover = function(){
			if( this.className =='') {
				this.className = 'acrossH3';
			}						
		}

		prepareH3[i].onmouseout = function(){
			if( prepareUl[this.index].style.display == 'block' ){
				
			}else{
				this.className = '';
			}	
		}

		prepareH3[i].onclick = function(){

		if( prepareUl[this.index].style.display == 'block'){
				prepareUl[this.index].style.display = 'none';
				this.className='';
			}else{this.className='';
				for( var j = 0; j<prepareH3.length; j++ ){

					prepareUl[j].style.display = 'none';
					prepareH3[j].className = '';
				}
				prepareUl[this.index].style.display = 'block';
				this.className='acrossH3';
			}
	}
}
	for( var i = 0 ; i < prepareLi.length; i++ ){
		prepareLi[i].onmouseover = function(){
			this.className = 'across';
		}

		prepareLi[i].onmouseout = function(){
			this.className = '';
		}
	}
}


/*var aLayerThickness = getElementsByClassName( boxSet,'layerThickness' );
for( var i = 0; i<aLayerThickness.length; i++ ){
	var aPlayTitle = getElementsByClassName( boxSet,'playTitle' );
	for( var j = 0; j<aPlayTitle.length; j++ ){

	}
}
var aPlayTitle = getElementsByClassName( boxSet,'playTitle' );
alert(aPlayTitle .length);*/


 //自动居中 - 登录浮层( el = Element )
    function autoCenter( el ){

        //获取页面可视区的宽高
        var wHeight = document.documentElement.clientHeight;
        var wWidth= document.documentElement.clientWidth;

        //获取弹出框的宽和高
        var dHeight = el.offsetHeight;
        var dWidth = el.offsetWidth;

        el.style.top = ( wHeight-dHeight )/2 + 'px';
        el.style.left = ( wWidth-dWidth )/2 + 'px';

    }

    //自动全屏 - 遮罩
    function fillToBody( el ){
        el.style.height = document.documentElement.scrollHeight+ 'px';
        el.style.width= document.documentElement.scrollWidth + 'px';
    }

    var mouseOffsetX = 0;   //偏移
    var mouseOffsetY = 0;

    var isDraging = false; //标记是否拖拽

    //鼠标事件1-在标题栏上按下( 要计算鼠标相对拖拽元素的左上角坐标，并且标记元素为可拖动)

    $('contentTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showContent').offsetTop;
        mouseOffsetX = e.pageX - $('showContent').offsetLeft;
        isDraging = true;

    })

    $('videoTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showVideo').offsetTop;
        mouseOffsetX = e.pageX - $('showVideo').offsetLeft;
        isDraging = true;

    })

    $('dataTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showData').offsetTop;
        mouseOffsetX = e.pageX - $('showData').offsetLeft;
        isDraging = true;

    })

    $('homeworkTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showHomework').offsetTop;
        mouseOffsetX = e.pageX - $('showHomework').offsetLeft;
        isDraging = true;

    })

    $('testTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showTest').offsetTop;
        mouseOffsetX = e.pageX - $('showTest').offsetLeft;
        isDraging = true;

    })

    $('releaseTitle').addEventListener('mousedown',function(e){
        var e = e || window.event;
        mouseOffsetY = e.pageY - $('showRelease').offsetTop;
        mouseOffsetX = e.pageX - $('showRelease').offsetLeft;
        isDraging = true;

    })
    //鼠标事件2-鼠标移动时( 要检测元素是否可标记为移动，如果是，则更新元素位置到当前鼠标的位置【要减去第一步的偏移量】)
    document.onmousemove = function( e ){
        var e = e||window.event;
        
        var mouseX = e.pageX;     //鼠标当前的位置
        var mouseY = e.pageY;

        var moveX = 0;    //浮层元素的新位置
        var moveY = 0;  

        if( isDraging === true ){
            moveX = mouseX - mouseOffsetX;
            moveY = mouseY - mouseOffsetY;

            //范围限定 moveX > 0 并且 moveX < (页面最大宽度 - 浮层的宽度)
            //范围限定 moveY > 0 并且 moveY < (页面最大高度 - 浮层的高度)

            var wHeight = document.documentElement.clientHeight;
            var wWidth= document.documentElement.clientWidth;

            //获取弹出框的宽和高
            var dHeight = $('showContent').offsetHeight;
            var dWidth = $('showContent').offsetWidth;

           
           /* var dHeight = $('showVideo').offsetHeight;
            var dWidth = $('showVideo').offsetWidth;

            var dHeight = $('showData').offsetHeight;
            var dWidth = $('showData').offsetWidth;

            var dHeight = $('showHomework').offsetHeight;
            var dWidth = $('showHomework').offsetWidth;

            var dHeight = $('showTest').offsetHeight;
            var dWidth = $('showTest').offsetWidth;

            var dHeight = $('showRelease').offsetHeight;
            var dWidth = $('showRelease').offsetWidth;
*/
       
            var  maxY= wHeight - dHeight;
            var maxX= wWidth - dWidth;

            moveX = Math.min( maxX,Math.max(0,moveX));
            moveY = Math.min( maxY,Math.max(0,moveY));

            $('showContent').style.left = moveX + 'px';
            $('showContent').style.top = moveY + 'px';

            $('showVideo').style.left = moveX + 'px';
            $('showVideo').style.top = moveY + 'px';

            $('showData').style.left = moveX + 'px';
            $('showData').style.top = moveY + 'px';

            $('showHomework').style.left = moveX + 'px';
            $('showHomework').style.top = moveY + 'px';

            $('showTest').style.left = moveX + 'px';
            $('showTest').style.top = moveY + 'px';

            $('showRelease').style.left = moveX + 'px';
            $('showRelease').style.top = moveY + 'px';

        }
    }
    //鼠标事件3-鼠标松开的时候( 标记元素为不可拖动即可)
    document.onmouseup = function(){
        isDraging = false;

    }

function showContent(){
    $('showContent').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showContent') );
    fillToBody( $('mask') );
}
function showVideo(){
    $('showVideo').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showVideo') );
    fillToBody( $('mask') );
}

function showData(){
    $('showData').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showData') );
    fillToBody( $('mask') );
}

function showHomework(){
    $('showHomework').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showHomework') );
    fillToBody( $('mask') );
}

function showTest(){
    $('showTest').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showTest') );
    fillToBody( $('mask') );
}

function showRelease(){
    $('showRelease').style.display = 'block';
    $('mask').style.display = 'block';
    autoCenter( $('showRelease') );
    fillToBody( $('mask') );
}


function hidden(){
    $('showContent').style.display = 'none';
    $('showVideo').style.display = 'none';
    $('showData').style.display = 'none';
    $('showHomework').style.display = 'none';
    $('showTest').style.display = 'none';
    $('showRelease').style.display = 'none';
    $('mask').style.display = 'none';
}

function fnabc(){
    alert("a");
    
};

window.onresize = function(){
    autoCenter( $('showContent') );
    autoCenter( $('showVideo') );
    autoCenter( $('showData') );
    autoCenter( $('showHomework') );
    autoCenter( $('showTest') );
    autoCenter( $('showRelease') );
    fillToBody( $('mask') );
}


