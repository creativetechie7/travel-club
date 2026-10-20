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
      showError(usernameError, username, 'Username is required.');
      isValid = false;
    } else {
      clearError(usernameError, username);
    }
    if (password.value.length < 8) {
      showError(
        passwordError,
        password,
        'Password must be at least 8 characters.',
      );
      isValid = false;
    } else {
      clearError(passwordError, password);
    }
    if (!emailPattern.test(email.value.trim())) {
      showError(emailError, email, 'Enter a valid email address.');
      isValid = false;
    } else {
      clearError(emailError, email);
    }
    if (!terms.checked) {
      showError(termsError, terms, 'You must accept the terms.');
      isValid = false;
    } else {
      clearError(termsError, terms);
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

function clearError(inputError, input) {
  inputError.style.display = 'none';
  inputError.textContent = '';
  input.classList.remove('error-border');
}

function showError(inputError, input, message) {
  inputError.style.display = 'inline';
  inputError.textContent = message;
  input.classList.add('error-border');
}

function selectTile(tiles, tile) {
  tiles.forEach(function (innerTile) {
    innerTile.classList.remove('expanded');
  });
  tile.classList.add('expanded');
  //console.log(tile.dataset.city);
  document.getElementById('image-caption').textContent =
    `This shot is from ${tile.dataset.city}`;
}
