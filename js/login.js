$(function(){
      /* 회원가입 버튼 누르면 페이지 바뀌게 */
      $('.sign').on('click',function(){
        location.href = 'agree.html'
    })

})


function idpwCheck(){
  var reg_email = /^([0-9a-zA-Z-_]+)@([0-9a-zA-Z-_]+)(\.[0-9a-zA-Z-_]+){1,2}$/;
  var idVal = document.getElementById('user_id');
  var pwVal = document.getElementById('user_pw');
  if(!idVal.value){
    alert('아이디를 입력하세요!');
    idVal.focus();
    return false;
  }else if(!reg_email.test($('#user_id').val())){
    alert('이메일 형식이 아닙니다!')
    idVal.focus()
    return false;
  }
  if(!pwVal.value){
    alert('비밀번호를 입력하세요!');
    pwVal.focus();
    return false;
  }
  frm.submit()
}