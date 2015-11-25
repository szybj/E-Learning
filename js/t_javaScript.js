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

