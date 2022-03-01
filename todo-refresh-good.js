const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



// 함수3. 내가 X버튼 누른 to do를 화면 상에서 삭제하기
function deleteToDo(event){
  const li = event.target.parentElement; /* 꼭 event target을 넣어줘야 한다. li가 제대로 정의되어 있지 않으면 컴퓨터가 remove를 읽을 수가 없다. 첫 번째 argument가 얼마나 중요한지 알게 된 이유 ⓑ*/
  li.remove();
}


// 함수2. to do를 화면에 노출시키기
function paintToDo(newTodo){ /* 첫 번째 argument가 얼마나 중요한지 알게 된 이유 ⓐ*/
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo;
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}


// 함수1. to do를 입력 후 엔터를 누르면 submit되지 않게 하기
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); /* saveToDos함수 호출 전에 미리 toDos Array로 newTodo 값을 복사하기. 또한 paintToDo 함수 호출 전에 미리 toDos array에 값을 복사한다.*/
  paintToDo(newTodo); /* 꼭 여기에 newTodo를 넣어야 한다. paintToDo함수에 사용자가 input에 입력한 값이 뭔지 정보가 없기 때문에. */
  saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); /* savedToDos란 localStorage에 저장된 아이템들을 가져온 것을 변수에 저장해 놓은 것.
 */

if(savedToDos !== null){ /* localStorage에 저장된 아이템(아직 String type)이 null이지 않다면 
  = localStorage에 (저장된) 값(아직 String type)이 있다면 */
  const parsedToDos = JSON.parse(savedToDos); /* 여기서 parsedToDos는 마침내 localStorage에 저장된 value가 살아있는 array이자 js object가 된 것! */
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); /* 살아있는 array의 아이템(이건 localStorage에 저장된value)에 대해 
  각각 함수를 실행시킨다.(forEach) => 이건 user가 입력한 input value인 newTodo랑 동일한 것이다. 
  그래서 paintToDo함수를 넣은 것. 어차피 paintToDo에서도 user가 입력한
   value(= newTodo)가 필요하니까 살아있는 array item을 paintToDo에 넣는 것이다.
   마치 이 문장은, paintToDo(parsedToDos);를 item 갯수만큼 실행시키는 것이나 다름없다.*/
}