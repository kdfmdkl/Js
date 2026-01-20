function toMessage(messenger) {
  let a = "qwertyuiopasdfghjklzxcvbnm";
  let b = "mnbvcxzlkjhgfdsapoiuytrewq";
  let result = "";
  // Duyệt qua từng ký tự trong chuỗi messenger
  for (let i = 0; i < messenger.length; i++) {
    let chart = messenger[i].toLowerCase();
    if (a.includes(chart)) {
      let index = a.indexOf(chart);
      result += b[index];
    } else {
      result += chart;
    }
  }
  return result;
}
let messengerr = prompt("Nhập tin nhắn cần mã hóa: ");
let encodedMessage = toMessage(messengerr);
alert("Tin nhắn đã mã hóa thành công: " + encodedMessage);
