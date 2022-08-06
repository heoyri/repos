//약관동의
function check(){
	var frm = document.frm;
	if(!frm.agree1.checked){
		alert("약관에 동의하세요!");
		frm.agree1.focus();
		return;
	}
	if(!frm.agree2.checked){
		alert("개인정보에 동의하세요!");
		frm.agree2.focus();
		return;
	}
	location.href = 'signUp.html';	
}

function allCheck(){
	//with()함수: document객체의 scope 자동호출의 의미 현재여기서는 자동호출처리됨
	with(document.frm){
		if(all.checked){
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = true;
				}
			}
		}else{
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = false;
				}
			}
		}
	}
}
