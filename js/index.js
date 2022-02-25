//Bai test 1
let OppositeNumber;
function findOppositeNumber(n, inputNumber) {
  if (n < 4 || n > 20 || n % 2 != 0) {
    console.log("please check n");
  }
  if (inputNumber < 0 || inputNumber > n - 1) {
    console.log("please check inputNumber");
  }
  if (inputNumber < n / 2) {
    OppositeNumber = inputNumber + n / 2;
  } else {
    OppositeNumber = inputNumber - n / 2;
  }
  return OppositeNumber;
}
findOppositeNumber(12, 3);
console.log(OppositeNumber);

//Bai test 2
let str3 = [],
    str1 = [],
    str2 = [];
let n = str1.length + str2.length;
function Addstring(str1, str2) {
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 == 0) {
      str3[i] = str1[i / 2];
    }
    if (i % 2 != 0)
    {
      str3[i] = str2[(i - 1) / 2];
    }
  }
  return str3;
}
Addstring("abc", "123");
console.log(str3);

//Bai test 3
var countcheck = 1;

function luckyNumber () {
  //let countcheck = 1;
  //if (countcheck < 3) {
    let luckynum = Math.floor(Math.random() * 10);
    const temp = document.getElementById("numberInput").value;
    let inputNum = parseInt(temp);
    if ((inputNum < 0) || (inputNum > 10)) {
      /*document.getElementById("numberInput").placeholder =
        "Nhập lại số thỏa điều kiện";*/
        alert("nhap lai so can check");
        return false;
    }
    if (inputNum == luckynum) {
      document.getElementById("forminputnum").style.display = "none";
      document.getElementById("congrat").style.display = "block";
      document.getElementById("condo").style.display = "none";
      //document.getElementById("overload").style.display = "none";
    } else {
      document.getElementById("forminputnum").style.display = "none";
      document.getElementById("congrat").style.display = "none";
      document.getElementById("condo").style.display = "block";
      document.getElementById("luckynumber").innerHTML = luckynum;
      //document.getElementById("overload").style.display = "none";
      //countcheck += 1;
      //return countcheck;
    }
  /*} else {
    document.getElementById("forminputnum").style.display = "none";
    document.getElementById("congrat").style.display = "none";
    document.getElementById("condo").style.display = "none";
    document.getElementById("overload").style.display = "block";
  }*/
}
//luckyNumber();

function backToInputNum() {
  document.getElementById("forminputnum").style.display = "block";
  document.getElementById("congrat").style.display = "none";
  document.getElementById("condo").style.display = "none";
  //luckyNumber();
  return countcheck++;
}
console.log(countcheck);