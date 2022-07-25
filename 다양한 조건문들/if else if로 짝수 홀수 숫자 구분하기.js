const a = Number(prompt('숫자를 입력해주세요.', ''))

if( a % 2 === 0) {
  alert('짝수입니다.')
} else if( a % 2 === 1 ) {
  alert('홀수입니다.')
} else {
  alert('숫자가 아닙니다.')
}