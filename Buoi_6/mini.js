// Câu 1
function hello() {
  console.log("Xin chào JavaScript");
}
// Câu 2
function tong() {
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log("Tổng: " + c);
}
// Câu 3
let n = Number(prompt("Nhập N: "));
for (let i = 1; i <= n; i++) {
  console.log(i);
}
// Câu 4
function songuyento() {
  let m = Number(prompt("Nhập N: "));
  if (m <= 1) {
    console.log(m + "Không phải là số nguyên tố");
    return;
  }
  if (n % 2 === 0) {
    console.log(m + "Là số nguyên tố");
  } else {
    console.log(m + "Không phải số nguyên tố");
  }
}
// Câu 5
function tongsochan() {
  let d = Number(prompt("Nhập D: "));
  for (let g = 1; g <= d; g++) {
    if (i % 2 === 0) {
      console.log("Số chắn là: " + i);
      return;
    }
  }
}
