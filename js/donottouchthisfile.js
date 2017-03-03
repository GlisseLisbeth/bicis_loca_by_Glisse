var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

window.addEventListener('load',function(){
  element[0].focus();
});
