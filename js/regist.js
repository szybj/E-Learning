var f = false;	
var f2 = false;
function $F(id){
		return document.getElementById(id);
	}
	function $FF(id){
		return document.getElementById(id).value;
	}
		function validate(){
			return valiemail() && valinickname() && valipassword1() && valipassword2() && valicheckcode();
		}
		function valiemail(){
			var txtemail = $F("txtEmail");
			var txtemailV = $FF("txtEmail");
			var txtemail_info=$F("email_info");
	//		var txtemail_info_ok=$F("email_info_ok");
			var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//正则邮箱验证
			txtemail_info.innerHTML="";
	//		txtemail_info_ok.innerHTML="";
			if($("#txtEmail").val()==""){
				txtemail_info.innerHTML="*邮箱不能为空";
				return false;
			}else if(!reg.test(txtemailV)){
				txtemail_info.innerHTML="*邮箱格式不正确";
				return false;
			}
		}
		function valinickname(){
			var txtNickNameV=$FF("txtNickName");
			var txtNickName_info=$F("nickname_info");
	//		var txtNickName_info_ok=$F("nickname_info_ok");
			var reg=/^[\u4E00-\u9FA5a-z0-9]{3,10}$/;
			txtNickName_info.innerHTML="";
		//	txtNickName_info_ok.innerHTML="";
			if(txtNickNameV==""){
				txtNickName_info.innerHTML="*姓名不能为空";
				return false;
			}
		}
		
		function valinickid(){
			var txtNickIdV=$FF("txtNickId");
			var txtNickId_info=$F("nickid_info");
	//		var txtNickName_info_ok=$F("nickname_info_ok");
			var reg=/^[\u4E00-\u9FA5a-z0-9]{3,10}$/;
			txtNickId_info.innerHTML="";
		//	txtNickName_info_ok.innerHTML="";
			if(txtNickIdV==""){
				txtNickId_info.innerHTML="*学号不能为空";
				return false;
			}
		}
		
		function valinickcs(){
			var txtNickcsV=$FF("txtNickcs");
			var txtNickcs_info=$F("nickcs_info");
	
			var reg=/^[\u4E00-\u9FA5a-z0-9]{3,10}$/;
			txtNickcs_info.innerHTML="";
		
			if(txtNickcsV==""){
				txtNickcs_info.innerHTML="*内容不能为空";
				return false;
			}
		}
		
		function valinicks(){
			var txtNicksV=$FF("txtNicks");
			var txtNicks_info=$F("nicks_info");
	//		var txtNickName_info_ok=$F("nickname_info_ok");
			var reg=/^[\u4E00-\u9FA5a-z0-9]{3,10}$/;
			txtNicks_info.innerHTML="";
		//	txtNickName_info_ok.innerHTML="";
			if(txtNicksV==""){
				txtNicks_info.innerHTML="*姓名不能为空";
				return false;
			}
		}
		
		
		
		
		
		
		function valipassword1(){
			var txtPasswordV=$FF("txtPassword");
			var txtPassword_info=$F("password_info");
			var txtPassword_info_ok=$F("password_info_ok");
			var reg=/^[\u4E00-\u9FA5A-Za-z0-9]{6,20}$/;
			txtPassword_info.innerHTML="";
			txtPassword_info_ok.innerHTML="";
			if(txtPasswordV==""){
				txtPassword_info.innerHTML="*密码不能为空";
				return false;
			}else if(!reg.test(txtPasswordV)||txtPasswordV.length>20){
				txtPassword_info.innerHTML="*密码不符合要求";
				return false;
			}else{
				txtPassword_info_ok.innerHTML="√密码符合要求";
				return true;
			}
		}
		function valipassword2(){
			var txtPasswordV = $FF("txtPassword");
			var txtRepeatPassV = $FF("txtRepeatPass");
			var txtRepeatPass_info=$F("password1_info");
			var txtRepeatPass_info_ok=$F("password1_info_ok");
			txtRepeatPass_info.innerHTML="";
			txtRepeatPass_info_ok.innerHTML="";
			if(txtRepeatPassV==""){
				txtRepeatPass_info.innerHTML="*密码确认不能为空";
				return false;
			}else if(txtRepeatPassV!=txtPasswordV){
				txtRepeatPass_info.innerHTML="*俩次输入的密码不一致";
				return false;
			}else{
				txtRepeatPass_info_ok.innerHTML="√俩次输入密码一致";
				return true;
			}
		}
		function valicheckcode(){
				$("#number_info").text("");
				$("#number_info_ok").text("");
				if($("#txtVerifyCode").val() ==""){
					$("#number_info").text("*验证码为空");
					return false;
				}
				$.ajax({
					type:'post',
					url:"vcode/checkvcode",
					data:"code="+$("#txtVerifyCode").val(),
					dataType:"json",
				//	async:false,
					success:function(data){
					if(data.flag){
						$("#number_info_ok").text("√验证码正确");
						f2 =  true;
					}else{
						$("#number_info").text("*验证码不正确");
						f2 =  false;
					}
				},
					
				});	
				if(f2){
					return true;
				}else {
					return false;
				}
				
		}
		
		function login(){
			
		}