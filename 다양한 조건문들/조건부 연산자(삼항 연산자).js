const input = prompt('숫자를 입력해주세요.', '')
const number = Number(input)

const result = (number >= 0) ? '0 이상의 숫자입니다.' : '0보다 작은 숫자입니다.'
alert(result)