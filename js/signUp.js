$(function(){
    //회원가입 x 버튼 누르면 없어지게
    $('section.signUp div.x_btn').on('click',function(){
        location.href = 'login.html';
    });
    
    $('#frm').submit(function(){
        //정규화규칙코드
		var reg_email = /^([0-9a-zA-Z-_]+)@([0-9a-zA-Z-_]+)(\.[0-9a-zA-Z-_]+){1,2}$/;
		var reg_num = /^[0-9]{11,12}$/;
        var reg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;

        if(!$("#user_id").val()){
			creTxt("user_id",0);
			return false;
		}else if(!reg_email.test($("#user_id").val())){
			creTxt("user_id",1);
			return false;
		}
        if(!$('#user_pw').val()){
            creTxt('user_pw',2);
            return false;
        }if(!reg.test($("#user_pw").val())){
            creTxt('user_pw',3)
            return false;
        }
        if(!$('#user_pw_cfr').val()){
            creTxt('user_pw_cfr',4);
            return false;
        }if($('#user_pw_cfr').val() !=$('#user_pw').val()){
            creTxt('user_pw_cfr',5);
            return false;
        }

        if(!$('#user_nm').val()){
            creTxt('user_nm',6);
            return false;
        }
        if(!$("#numb").val()){
			creTxt("numb",7);					
			return false;
		}if(!reg_num.test($("#numb").val())){
			creTxt("numb",8);
			return false;
		}

        if(!$("#phone_cfr").val()){
			creTxt("phone_cfr",9);					
			return false;
		}
        
        function creTxt(target,num){
            var target = "#" + target;
            var txt = new Array();
            txt[0] = "아이디는 필수입력 사항입니다.";
            txt[1] = "이메일 형식이 올바르지 않습니다.";
            txt[2] = "비밀번호는 필수입력 사항입니다.";
            txt[3] = "형식을 올바르게 작성해주세요";	
            txt[4] = "비밀번호확인은 필수입력 사항입니다.";
            txt[5] = "비밀번호가 일치하지 않습니다.";
            txt[6] = "회원명은 필수입력 사항입니다.";
            
            txt[7] = "전화번호는 필수입력 사항입니다.";
            txt[8] = "'-'를 빼고 입력하시고 번호를 다시 확인해주세요";		
            txt[9] = '인증번호 입력은 필수 사항입니다'
            	
            $("#frm input").focus(function(){
                $(this).parent().next('div.on').remove();
            });


            if(!$(target).parent().next().hasClass("on")){
                $(target).parent().after('<div>' + txt[num] + '</div>').next().addClass("on").focus();	
            }
            
        }

    })
})