let diem = Number(prompt("Nhập điểm: "));
if (diem >= 8) {
  console.log("Xếp loại Giỏi");
} else if (diem >= 6.5) {
  console.log("Xếp loại khá");
} else if (diem >= 5) {
  console.log("Xếp loại TB");
} else {
  console.log("Xếp loại yếu");
}
