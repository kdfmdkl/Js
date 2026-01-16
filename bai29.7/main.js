let sth = "Hello world";
// kiểm tra xem có bát đầu là chuỗi Hello không
console.log(sth.startsWith("H", 1)); // nếu sai thì false đúng thì true

// ktra xem có kết thức bằng chuỗi không
if (sth.endsWith("ld")) {
  console.log(" đúng");
} else {
  console.log("sai");
}
