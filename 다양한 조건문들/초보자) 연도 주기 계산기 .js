const rawInput = prompt('태어난 해를 입력해주세요.', '')
const year = Number(rawInput)


let 간

const e = year % 10

if (e === 0) {
  간 = '경'
} else if (e === 1) {
  간 = '신'
} else if (e === 2) {
  간 = '임'
} else if (e === 3) {
  간 = '계'
} else if (e === 4) {
  간 = '갑'
} else if (e === 5) {
  간 = '을'
} else if (e === 6) {
  간 = '병'
} else if (e === 7) {
  간 = '정'
} else if (e === 8) {
  간 = '무'
} else if (e === 9) {
  간 = '기'
}

let 띠

const r = year % 12

if (r === 0) {
  띠 = '신'
} else if (r === 1) {
  띠 = '유'
} else if (r === 2) {
  띠 = '술'
} else if (r === 3) {
  띠 = '해'
} else if (r === 4) {
  띠 = '자'
} else if (r === 5) {
  띠 = '축'
} else if (r === 6) {
  띠 = '인'
} else if (r === 7) {
  띠 = '묘'
} else if (r === 8) {
  띠 = '진'
} else if (r === 9) {
  띠 = '사'
} else if (r === 10) {
  띠 = '오'
} else if (r === 11) {
  띠 = '미'
}


alert(`${year}년에 태어났으면 ${간}${띠} 년 입니다.`)