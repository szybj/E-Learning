function getStyle( obj, attr ){
		if( obj.currentStyle ){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle( obj, false )[attr];
		}
	}

	function startMove( obj, attr, iTarget,fn ){

		clearInterval( obj.timer );
		
		obj.timer = setInterval( function(){

			var iCurrentStyle = 0;
			if( attr == 'opacity'){
				iCurrentStyle = parseInt(parseFloat( getStyle( obj,attr))*100);
			}else{
				iCurrentStyle = parseInt( getStyle( obj, attr ));
			}
			

			var iSpeed = ( iTarget - iCurrentStyle)/8;
	    	iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			if( iCurrentStyle == iTarget ){
				
				clearInterval( obj.timer );

				if( fn ){
					fn();
				}
			}else{

				if( attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(iCurrentStyle + iSpeed) +')';
					obj.style.opacity = (iCurrentStyle + iSpeed)/100;
				}else{
					obj.style[attr] = iCurrentStyle + iSpeed + 'px';
				}
			}
		},30)
	}