// Câu 1
let arr = [3, 5, 7, 15, 20];
let tong = 0;

for (let i = 0; i < arr.length; i++) {
  tong += arr[i];
}

console.log("Tổng các phần tử là:", tong);
// Câu 2
let n = Number(prompt("Nhập n: "));
let arr_l = [];

for (let i = 1; i <= n; i++) {
  arr_l.push(i);
}
console.log("Mảng từ 1 đến n:", arr_l);
let max = [0];
for (let x of arr_l) {
  if (x > max) {
    max = x;
  }
}
console.log("Giá trị lớn nhất trong mảng là:", max);

// Câu 3
let diem = [7, 8, 9, 4, 6];
for (let i = 0; i < diem.length; i++) {
  if (diem[i] >= 8) {
    console.log("Phần tử đạt điểm đậu:", diem[i]);
  }
}
// Câu 4
let mang = [2, 4, 6, 8, 10, 11, 13];
let dem = 0;
for (let x of mang) {
  if (x % 2 === 0) {
    dem++;
  }
}
console.log("Số chẵn trong mảng là:", x);
