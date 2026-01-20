const a = "tôi chăm học, nhưng mà tôi học ngu, nhưng mà tôi sẽ chăm hợn nữa";
let word = 0;
let b = "tôi";
for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + b.length) === b) {
    word++;
  }
}
alert("Số lần xuất hiện của từ tôi là: " + word);
