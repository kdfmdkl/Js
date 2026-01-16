let chuoi = "nguyenn,van,khan";
// chuyển chuỗi thành mảng
let arrayChuoi = chuoi.split(",");
console.log(arrayChuoi);
// cho thành 2 mảng thì sao ta làm như này

console.log(chuoi.split(",", 2));
// còn khi cho chuôi trống thì sao ta làm như này
console.log(chuoi.split(""));
