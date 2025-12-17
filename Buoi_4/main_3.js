let n = Number(prompt("Nhập N: "));
let tong = 0;

for (let i = 1; i <= n; i++) {
  tong += i; // tong = tong + i
}

console.log("Tổng từ 1 đến " + n + " là: " + tong);
