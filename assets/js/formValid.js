let form_email = document.querySelector(".form_email1");
let form_phone = document.querySelector(".form_phone1");
let form_name = document.querySelector(".form-control");


let valid = () => {
  form_name.addEventListener("focus", () => {
    if(form_name.value == "") {
      form_name.style.border = "1px solid red"
    }
    else {
      form_name.style.border = "1px solid green"
    }
  });
  form_name.addEventListener("input", () => {
    if(form_name.value == "") {
      form_name.style.border = "1px solid red"
    }
    else {
      form_name.style.border = "1px solid green"
    }
  });


  form_email.addEventListener("focus", () => {
    if(form_email.value == "") {
      form_email.style.border = "1px solid red"
    }
    else {
      form_email.style.border = "1px solid green"
    }
  });
  form_email.addEventListener("input", () => {
    if(form_email.value == "") {
      form_email.style.border = "1px solid red"
    }
    else {
      form_email.style.border = "1px solid green"
    }
  });


  form_phone.addEventListener("focus", () => {
    if(form_phone.value == "") {
      form_phone.style.border = "1px solid red"
    }
    else {
      form_phone.style.border = "1px solid green"
    }
  });
  form_phone.addEventListener("input", () => {
    if(form_phone.value == "") {
      form_phone.style.border = "1px solid red"
    }
    else {
      form_phone.style.border = "1px solid green"
    }
  });
}

valid();

function checkParams() {
  var fio = $('.form-control').val();
  var email = $('.form_email1').val();
  var phone = $('.form_phone1').val();
  if(fio.length != 0 && email.length != 0 && phone.length != 0) {
      $('.contact__btn').removeAttr('disabled');
  } else {
      $('.contact__btn').attr('disabled', 'disabled');
  }
}

$(function(){
 $('.contact__chek').on('change', function(){
 if($('.contact__chek').prop('checked')){
 $('.contact__btn').attr('disabled', false);
 }else{
 $('.contact__btn').attr('disabled', true);
 }
 });
});

function mask1(event) {
  var matrix = "+7___-___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
  });

  if (event.type == "blur") {
    if (this.value.length == 2) this.value = "";
  }
}

form_phone.addEventListener("input", mask1, false);
form_phone.addEventListener("focus", mask1, false);
form_phone.addEventListener("blur", mask1, false);