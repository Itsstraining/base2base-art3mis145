// Add new functions, variables here

function DecToBin(num) {
  Bin = (num * 1).toString(2);
  return Bin;
  // let Bin = [];
  // for (let i = 0; i < 4; i++) {
  //   if (num % 2 == 0) {
  //     Bin.unshift(0);
  //     num = num / 2;
  //   } else {
  //     Bin.unshift(1);
  //     num = Math.floor(num / 2);
  //   }
  // }
  // return Bin;
}
function BinToDec(num) {
  let n = num.split("");
  let b = [];
  for (let i = 0; i < n.length; i++) {
    b.unshift(n[i]);
  }
  for (let j = 0; j < b.length; j++) {
    b[j] = b[j] * Math.pow(2, j);
  }
  let sum = 0;
  for (let k = 0; k < b.length; k++) {
    sum = sum + b[k];
  }
  return sum;
}

function OcToBin(num) {
  let bin0 = "000";
  let bin1 = "001";
  let bin2 = "010";
  let bin3 = "011";
  let bin4 = "100";
  let bin5 = "101";
  let bin6 = "110";
  let bin7 = "111";
  let Oct = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 0) {
      Oct.push(bin0);
    } else if (num[i] == 1) {
      Oct.push(bin1);
    } else if (num[i] == 2) {
      Oct.push(bin2);
    } else if (num[i] == 3) {
      Oct.push(bin3);
    } else if (num[i] == 4) {
      Oct.push(bin4);
    } else if (num[i] == 5) {
      Oct.push(bin5);
    } else if (num[i] == 6) {
      Oct.push(bin6);
    } else if (num[i] == 7) {
      Oct.push(bin7);
    }
  }
  return Oct;
}
function HexToDec(num) {
  let Hex = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "A") {
      Hex.unshift("10");
    } else if (num[i] == "B") {
      Hex.unshift("11");
    } else if (num[i] == "C") {
      Hex.unshift("12");
    } else if (num[i] == "D") {
      Hex.unshift("13");
    } else if (num[i] == "E") {
      Hex.unshift("14");
    } else if (num[i] == "F") {
      Hex.unshift("15");
    } else {
      Hex.unshift(num[i]);
    }
  }
  for (let j = 0; j < Hex.length; j++) {
    Hex[j] = Hex[j] * Math.pow(16, j);
  }
  let sum = 0;
  for (let k = 0; k < Hex.length; k++) {
    sum = sum + parseInt(Hex[k]);
  }
  return sum;
}
function OctoDec(num) {
  let result = parseInt(num, 8);
  return result;
}

function main(input) {
  let inp = input.split(" ");
  let N = inp[0];
  let X = inp[1];
  let Y = inp[2];
  if (X == 2 && Y == 10) {
    console.log(BinToDec(N));
  } else if (X == 16 && Y == 2) {
    console.log(DecToBin(HexToDec(N));
  } else if (X == 10 && Y == 2) {
    console.log(DecToBin(N));
  } else if (X == 8 && Y == 2) {
    console.log(parseInt(OcToBin(N).join("")));
  } else if (X == 8 && Y == 10) {
    console.log(OctoDec(N));
  }

  // console.log(DecToBin(N).join(""));
  //
  //
  //
}

//nhị phân:2(binary)
//bát phân:8(Octal)
//thập phân:10(decimal)
//thập lục phân:16(hexa)

//X = HỆ CƠ SỐ NHẬP VÀO
//Y = HỆ CẦN CHUYỂN QUA

module.exports = main;
