document.addEventListener('DOMContentLoaded', function () {
  /* Q2*/
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

  /* Q3 */
  // Inputs
  const username = document.getElementById('username');
  const usernameError = document.getElementById('error-username');
  const password = document.getElementById('password');
  const passwordError = document.getElementById('error-password');
  const email = document.getElementById('email');
  const emailError = document.getElementById('error-email');
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const terms = document.getElementById('terms');
  const termsError = document.getElementById('error-terms');
  const signUpForm = document.getElementById('signup-form');
  // Submission Checks
  signUpForm.addEventListener('submit', function (event) {
    let isValid = true;
    event.preventDefault();
    if (username.value.trim() === '') {
      usernameError.style.display = 'inline';
      usernameError.textContent = 'Username is required.';
      username.classList.add('error-border');
      isValid = false;
    } else {
      usernameError.style.display = 'none';
      usernameError.textContent = '';
      username.classList.remove('error-border');
    }
    if (password.value.length < 8) {
      passwordError.style.display = 'inline';
      passwordError.textContent = 'Password must be at least 8 characters.';
      password.classList.add('error-border');
      isValid = false;
    } else {
      passwordError.style.display = 'none';
      passwordError.textContent = '';
      password.classList.remove('error-border');
    }
    if (!emailPattern.test(email.value.trim())) {
      emailError.style.display = 'inline';
      emailError.textContent = 'Enter a valid email address.';
      email.classList.add('error-border');
      isValid = false;
    } else {
      emailError.style.display = 'none';
      emailError.textContent = '';
      email.classList.remove('error-border');
    }
    if (!terms.checked) {
      termsError.style.display = 'inline';
      termsError.textContent = 'You must accept the terms.';
      terms.classList.add('error-border');
      isValid = false;
    } else {
      termsError.style.display = 'none';
      termsError.textContent = '';
      terms.classList.remove('error-border');
    }
    if (isValid) {
      alert('Submitted! :)');
    }
  });

  /* Q4 */
  const tiles = document.querySelectorAll('.thumb');
  // console.log(tiles);
  tiles.forEach(function (tile) {
    // On click
    tile.addEventListener('click', function () {
      selectTile(tiles, tile);
    });
    tile.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        selectTile(tiles, tile);
      }
    });
  });
});

function selectTile(tiles, tile) {
  tiles.forEach(function (innerTile) {
    innerTile.classList.remove('expanded');
  });
  tile.classList.add('expanded');
  //console.log(tile.dataset.city);
  document.getElementById('image-caption').textContent =
    `This shot is from ${tile.dataset.city}`;
}
