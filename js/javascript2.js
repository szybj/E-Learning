window.onload = function(){
	var list2= document.getElementById("tlist2");
	var lis = list2.children;
	var timer;

	//删除节点
	function removeNode(node){
		node.parentNode.removeChild(node);
	}

	//赞
	function praiseBox(box,el){
		var praisesTotal = box.getElementsByClassName("tpraisesTotal")[0];
		var oldTotal = parseInt(praisesTotal.getAttribute("total")) ;
		var txt = el.innerHTML;
		var newTotal;
		if(txt == "赞"){
			newTotal = oldTotal + 1;
			praisesTotal.setAttribute("total", newTotal);
			praisesTotal.innerHTML = (newTotal == 1) ? "我觉得很赞":"我和"+oldTotal+"个人觉得很赞";
			el.innerHTML = "取消赞";
		}else{
			newTotal = oldTotal - 1;
			praisesTotal.setAttribute("total", newTotal);
			praisesTotal.innerHTML = (newTotal == 0) ? "": newTotal+"个人觉得很赞";
			el.innerHTML = "赞";
		}
		praisesTotal.style.display = (newTotal == 0) ? "none":"block";

	}

	//赞回复
	function praiseReply(el){
		var  oldTotal = parseInt(el.getAttribute("total"));
		var  my = parseInt(el.getAttribute("my"));
		var  newTotal;
		if( my == 0 ){

			newTotal = oldTotal + 1;
			el.setAttribute("total", newTotal);
			el.setAttribute("my", 1);
			el.innerHTML = newTotal + " 取消赞";

		}else{
			newTotal = oldTotal - 1;
			el.setAttribute("total", newTotal);
			el.setAttribute("my", 0);
			el.innerHTML = newTotal == 0 ? '赞':newTotal + " 赞";
			
		}
			el.style.display = newTotal == 0 ? "":"block";
	}

	//发表回复
	function replyBox(box,el){

		var list2 = box.getElementsByClassName("tcommentList")[0];
		var textarea = box.getElementsByClassName("tcomment")[0];
		var commentBox = document.createElement("div");
		commentBox.className = "tcommentBox tclearFix";
		commentBox.setAttribute("tuser", "tself");
		commentBox.innerHTML = '<img class="tmyHead" src="images/my.jpg" alt=""/>' +
                '<div class="tcommentContent">' +
                '<p class="tcommentText"><i class="tuser">我：</i>' + textarea.value + '</p>' +
                '<p class="tcommentTime">' +
                getTime() +
                '<a href="javascript:;" class="tcommentPraise" total="0" my="0" style="">赞</a>' +
                '<a href="javascript:;" class="tcommentOperate">删除</a>' +
                '</p>' +
                '</div>'
        list2.appendChild(commentBox);
        textarea.value = "";
        textarea.onblur();
	}

	//操作回复
	function operateReply(el){
		var commentBox = el.parentNode.parentNode.parentNode;   //评论容器
		var box = commentBox.parentNode.parentNode.parentNode;  //分享容器
		var textarea = box.getElementsByTagName("ttextarea")[0];
		var user = commentBox.getElementsByClassName("tuser")[0];
		var txt = el.innerHTML;
		if( txt == "回复"){
			textarea.onfocus();
			textarea.value = "回复" + user.innerHTML;
			textarea.onkeyup();
		}else{
			removeNode(commentBox);
		}
		
	}

	function getTime(){
		var t = new Date();
		var y = t.getFullYear();
		var m = t.getMonth()+1;
		var d = t.getDate();
		var h = t.getHours();
		var mi = t.getUTCMinutes();
		var s = t.getSeconds();
		m = m < 10 ? "0" + m : m;
		d = d < 10 ? "0" + d : d;
		h = h < 10 ? "0" + h : h;
		mi = mi < 10 ? "0" + mi : mi;
		s = s < 10 ? "0" + s : s;

		return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
		
	}

	for (var i = 0; i<lis.length; i++) {
		lis[i].onclick = function(e){
			e = e || window.event;
			var  el = e.target||e.srcElement;
			switch(el.className){
				case "tclose":
                    removeNode(el.parentNode);
                    break;
                //赞
                case "tpraise":
                	praiseBox(el.parentNode.parentNode.parentNode,el);
                	break;
                //回复按钮是灰色的时候
                case "tbtn tbtnOff":
                	clearTimeout(timer);
                	break;
                //回复按钮是蓝色的时候
                case "tbtn":
                	replyBox(el.parentNode.parentNode.parentNode, el)
                	break;
                //赞回复
                case "tcommentPraise":
                	praiseReply(el);
                    break;
                //对评论回复
                case "tcommentOperate":
                	operateReply(el);
                	break;



			}
			
		}

		//评论输入框
		var textarea = lis[i].getElementsByClassName("tcomment")[0];
		textarea.onfocus = function(){
			this.parentNode.className = "ttextBox ttextBoxOn";
			this.value = this.value == "#快来吐槽吧！！！"?"":this.value;
			this.onkeyup();
		}

		textarea.onblur = function(){
			var me = this;
			if(this.value == ""){
				timer = setTimeout(function(){
					me.parentNode.className = "ttextBox";
					me.value = "#快来吐槽吧！！！";
				},300);
				
			}
		}
		//字数统计
		textarea.onkeyup = function(e){
			var len = this.value.length;
			var p = this.parentNode;
			var btn = p.children[1];
			var word = p.children[2];
			if( len == 0 || len > 140 ){
				btn.className = "tbtn ttnOff";
			}else{
				btn.className = "tbtn";
			}
			word.innerHTML = len+"/140";

		}

	}
	
}