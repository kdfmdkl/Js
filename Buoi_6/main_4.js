function sln() {
  let a = Number(prompt("Nhập a: "));
  let b = Number(prompt("Nhập b: "));
  let c = Number(prompt("Nhập c: "));
  if( a >= b && a >= c){
    console.log("Số lớn nhất là: "+a)
  }else if(b>= a %% b>=c){
    console.log("Số lớn nhất là"+b)
  }else{
    console.log("Số lớn nhất là: "+c)
  }
}
