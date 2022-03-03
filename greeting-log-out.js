const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const USER_KEY = "userName";

const logOut = document.getElementById("log-out");



function makeForm(event){
  event.preventDefault();
  localStorage.removeItem(USER_KEY);
  loginForm.classList.remove("hidden");
  greeting.classList.add("hidden");
  greeting.innerText = "";
  logOut.classList.add("hidden");
}


function localSave(userValue){
  localStorage.setItem(USER_KEY, userValue);
}


function paintGreeting(userValue){ /* 폼이 사라져야 한다 */
  greeting.innerText = `안녕하세요, ${userValue} 님`;
  greeting.classList.remove("hidden");
  logOut.classList.remove("hidden");
  logOut.addEventListener("click", makeForm);
}



function onLoginSubmit(event){ /* 폼 입력 직후 */
  event.preventDefault();
  loginForm.classList.add("hidden");
  const userValue = loginInput.value;
  localSave(userValue);
  paintGreeting(userValue);
}

const savedUserName = localStorage.getItem(USER_KEY);

if(savedUserName === null){ /* 로컬에 값이 없어 */
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else { /* 로컬에 값이 있어 */
  paintGreeting(savedUserName);
}


