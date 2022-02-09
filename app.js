const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("cake");
console.log(toBuy);
console.log(toBuy[3]);


const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
// 14, 15줄은 같은 표현 방법
player.lastName = "potato";
console.log(player);
player.points = 100;
console.log(player);
player.points = player.points + 15;
console.log(player);
// array에서 항목을 추가할 때는 array이름.push("띠리리");
// Object에서 항목을 추가할 때는 Object이름.원하는항목이름 = "띠로리";
// Object에서는 const 안에 것을 업데이트하는 것은 가능 (19줄)