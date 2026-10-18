document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('#username, #email, #password');

  inputs.forEach(function (input) {
    /* For each input in inputs */
    input.addEventListener('focus', function () {
      input.style.backgroundColor = '#fffae0';
    });

    input.addEventListener('blur', function () {
      input.style.backgroundColor = '#ffffff';
    });
  });
});
