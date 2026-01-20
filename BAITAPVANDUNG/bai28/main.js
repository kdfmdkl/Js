function tachchu(inputmang) {
  let number = "";
  let chuoi = "";
  for (let i = 0; i < inputmang.length; i++) {
    let char = inputmang[i];
    if (!isNaN(char)) {
      number += char;
    } else {
      chuoi += char;
    }
  }
  return [number, chuoi];
}
let inputmang = alert("Nhập vào chuỗi hỗn hợp chữ và số:");
let result = tachchu(inputmang);
console.log("Chuỗi số: " + result[0]);
console.log("Chuỗi chữ: " + result[1]);
