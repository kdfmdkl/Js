let tuoi = Number(prompt("Nhập tuổi: "));

if (isNaN(tuoi)) {
  console.log("Vui lòng nhập số hợp lệ");
} else if (tuoi >= 18) {
  console.log("Được đi làm");
} else {
  console.log("Không được đi làm");
}
