const a = Number(prompt('첫 번째 숫자', ''))
const b = Number(prompt('두 번째 숫자', ''))

if (a>b) {
  alert('첫 번째로 입력한 숫자가 더 큽니다.')
} else if (a===b) {
  alert('두 숫자가 같습니다.')
} else {
  alert('두 번째로 입력한 숫자가 더 큽니다.')
}