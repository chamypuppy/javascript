const a = Number(prompt('숫자를 입력해주세요.', ''))

if( a % 2 === 0) {
  alert(`${a}는 짝수입니다.`)
} else if( a % 2 === 1 ) {
  alert(`${a}은 홀수입니다.`)
} else {
  alert(`${a}은 숫자가 아닙니다.`)
}

/* 이때 숫자가 아닌 것을 쓰게 되면 ${a}가 NaN으로 표현이 된다. */