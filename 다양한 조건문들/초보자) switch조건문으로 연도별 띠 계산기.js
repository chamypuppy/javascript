const rawInput = prompt('태어난 해를 입력해주세요.', '')
const year = Number(rawInput)
const e = year % 12

let result
switch (e) {
  case 0:
    result = '원숭이'
    break
  case 1:
    result = '닭'
    break
  case 2:
    result = '개'
    break
  case 3:
    result = '돼지'
    break
  case 4:
    result = '쥐'
    break
  case 5:
    result = '소'
    break
  case 6:
    result = '호랑이'
    break
  case 7:
    result = '토끼'
    break
  case 8:
    result = '용'
    break
  case 9:
    result = '뱀'
    break
  case 10:
    result = '말'
    break
  default:
    result = '양'
    break
}

alert(`${year}년에 태어났으면 ${result}띠 입니다.`)