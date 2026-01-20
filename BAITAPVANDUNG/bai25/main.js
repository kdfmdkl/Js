function setpwd() {
  let apwd = prompt("Nhập mật khẩu:");
  if (apwd === null || apwd.length < 6) return false;

  let chuthuong = false;
  let chuhoa = false;
  let so = false;

  for (let i = 0; i < apwd.length; i++) {
    let chart = apwd.charAt(i);
    if (chart >= "a" && chart <= "z") {
      chuthuong = true;
    } else if (chart >= "A" && chart <= "Z") {
      chuhoa = true;
    } else if (chart >= "0" && chart <= "9") {
      so = true;
    }
  }
  return chuthuong && chuhoa && so;
}

function pass() {
  let pwd = prompt("Mời thiết lập mật khẩu: ");
  if (setpwd()) {
    console.log("Mật khẩu hợp lệ: " + pwd);
    return pwd;
  } else {
    alert(`Mật khẩu không hợp lệ. 
1. Có ít nhất 1 chữ thường
2. Có ít nhất 1 chữ hoa
3. Có ít nhất 1 chữ số
4. Có ít nhất 6 ký tự`);
    return pass();
  }
}

let pas = pass();

let login = 0;
while (login < 5) {
  let userpass = prompt("Mời nhập mật khẩu để đăng nhập: ");
  if (userpass === pas) {
    console.log("Đăng nhập thành công");
    break;
  } else {
    login++;
    alert(`Mật khẩu không đúng. Bạn còn ${5 - login} lần thử.`);
  }
  if (login === 5) {
    alert("Tài khoản của bạn đã bị khóa do nhập sai quá nhiều lần.");
  }
}
