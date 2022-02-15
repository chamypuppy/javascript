  // const day = document.querySelector(".tuesday h1");

  // function dayClicked(){
  //   const clickedClass = "clicked" ;
  //  if (day.classList.contains(clickedClass)) {
  //    day.className = "";
  //  } else {
  //    day.className = clickedClass;
  //  }
  // }

  // day.addEventListener("click", dayClicked); 



//ⓐ 특정 class name만 추가 + classList, remove, add 개념 추가

  // const day = document.querySelector(".tuesday h1");

  // function dayClicked(){
  //   const clickedClass = "clicked" ;
  //  if (day.classList.contains(clickedClass)) {
  //    day.classList.remove(clickedClass);
  //  } else {
  //    day.classList.add(clickedClass);
  //  }
  // }

  // day.addEventListener("click", dayClicked); 



//ⓐ의 if else 문장을 완전히 지워버리고 toggle로 대체

  const day = document.querySelector(".tuesday h1");

  function dayClicked(){
     day.classList.toggle("clicked");
  }

  day.addEventListener("click", dayClicked); 