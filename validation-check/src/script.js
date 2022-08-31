// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
console.log('됨?')
let elInputUsername = document.querySelector('#username')
let elInputPassword = document.querySelector('#password')
let elInputRePass = document.querySelector('#password-retype')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elmatchMessage = document.querySelector('.mismatch-message')

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide')
    elFailureMessage.classList.add('hide')
  }
  else {
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')
  }
}

// elInputPassword.onkeyup = function () {
//   if (isMatch(elInputPassword.value, elInputRePass.value)) {
//     elmatchMessage.classList.add('hide')
//   }
// }

elInputRePass.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputRePass.value)) {
    elmatchMessage.classList.add('hide')
  } else {
    elmatchMessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (password1 == password2) {
    return true;
  } else {
    return false;
  }
}
