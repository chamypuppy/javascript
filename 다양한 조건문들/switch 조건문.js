const input = Number(prompt('숫자를 입력하세요', '숫자'))

switch (input % 2) {
  case 0:
    alert('짝수입니다.')
    break

  case 1:
    alert('홀수입니다.')
    break

  default:
    alert('숫자가 아닙니다.')
    break
}