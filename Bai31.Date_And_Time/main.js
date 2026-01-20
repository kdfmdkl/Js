let a = new Date();
console.log(typeof a);
console.log(a);
// cách 2:
let day = a.getDate();
let month = a.getMonth() + 1; //tháng bắt đầu từ 0
let year = a.getFullYear();
let minutes = a.getMinutes();
let hours = a.getHours();
console.log(
  `Hôm nay là ngày ${day} tháng ${month} năm ${year} , giờ hiện tại là ${hours} giờ ${minutes} phút`,
);

let mayDate = new Date();

let daya = mayDate.setDate(1);
let montha = mayDate.setMonth(1) + 1;
let yeara = mayDate.setFullYear(2024);

console.log(mayDate.toDateString());

let preDay = mayDate.getDate() > 10 ? "0" : "";
let preMonth = mayDate.getMonth() > 10 ? "0" : "";
console.log(
  `Hôm nay là ngày ${preDay}${mayDate.getDate()} tháng ${preMonth}${mayDate.getMonth() + 1} năm ${mayDate.getFullYear()}`,
);

// 3 cách tạo function
// cách 1:
let date = () => {
  console.log("Hello world");
};
// cách 2:
function name() {
  console.log("Hello world");
}
// cách 3:
let dateTime = function () {
  console.log("Hello world");
};
// setTimeout là để làm ngưng chương trình 1 khoàng thời gian nhất định rồi mới thực hiện chạy màn hình
setTimeout((your) => {
  console.log("Hello world" + your);
}, 2000);

let tine = (your) => {
  console.log("Hello world" + your);
};
setTimeout(tine, 3000, " ABC");
