// Add new functions, variables here

function BinToDec(num) {
  let b = [];
  for (let i = 0; i < num.length; i++) {
    b.unshift(num[i]);
  }
  for (let j = 0; j < b.length; j++) {
    b[j] = b[j] * Math.pow(2, j);
  }
  let sum = 0;
  for (let k = 0; k < b.length; k++) {
    sum = sum + b[k];
  }
  return sum.toString();
}

function BinToOc(num) {
  let result = DecToOc(BinToDec(num));
  return result;
}

function BinToHex(num) {
  let result = DecToHex(BinToDec(num));
  return result.join("");
}

function DecToHex(num) {
  let remainder = 0;
  let result = [];
  while (num != 0) {
    remainder = num % 16;
    num = Math.floor(num / 16);

    if (remainder == 10) {
      result.push("A");
    } else if (remainder == 11) {
      result.push("B");
    } else if (remainder == 12) {
      result.push("C");
    } else if (remainder == 13) {
      result.push("D");
    } else if (remainder == 14) {
      result.push("E");
    } else if (remainder == 15) {
      result.push("F");
    } else {
      result.push(remainder);
    }
  }
  result.reverse();
  return result.join("");
}

function DecToBin(num) {
  let Bin = [];
  let remainder = 0;
  while (num != 0) {
    remainder = num % 2;
    Bin.unshift(remainder);
    num = parseInt(num / 2);
  }
  let result = parseInt(Bin.join(""));
  return result.toString();
}

function DecToOc(num) {
  let Oc = [];
  remainder = 0;
  while (num != 0) {
    remainder = num % 8;
    Oc.unshift(remainder);
    num = parseInt(num / 8);
  }
  return Oc;
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
  result = parseInt(Oct.join(""));
  return result.toString();
}

function OcToDec(num) {
  let result = BinToDec(OcToBin(num));
  return result;
}

function OcToHex(num) {
  let result = BinToHex(OcToBin(num));
  return result;
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

function HexToBin(num) {
  let result = DecToBin(HexToDec(num));
  return result;
}

function HexToOc(num) {
  let result = BinToOc(HexToBin(num));
  let s = parseInt(result.join(""));
  return s.toString();
}

function main(input) {
  let inp = input.split(" ");
  let N = inp[0];
  let X = inp[1];
  let Y = inp[2];
  if (X == 2 && Y == 10) {
    console.log(BinToDec(N));
  } else if (X == 16 && Y == 2) {
    console.log(HexToBin(N));
  } else if (X == 10 && Y == 2) {
    console.log(DecToBin(N));
  } else if (X == 8 && Y == 2) {
    console.log(OcToBin(N));
  } else if (X == 8 && Y == 10) {
    console.log(OcToDec(N));
  } else if (X == 16 && Y == 10) {
    console.log(HexToDec(N));
  } else if (X == 16 && Y == 8) {
    console.log(HexToOc(N));
  } else if (X == 10 && Y == 16) {
    console.log(DecToHex(N));
  }
  // console.log(OcToDec(N));
  // console.log(DecToOc(HexToDec(N)));
  // console.log(BinToOc(N));
  // console.log(DecToHex(N));
  // console.log(DecToBin(N));
  // console.log(DecToOc(N));
  // console.log(BinToOc(N));
  // console.log(BinToDec(N));
  // console.log(BinToHex(N));
  // console.log(OcToBin(N));
  // console.log(OcToHex(N));
  // console.log(HexToBin(N));
  // console.log(HexToOc(N));
}

//nhị phân:2(binary)
//bát phân:8(Octal)
//thập phân:10(decimal)
//thập lục phân:16(hexa)

//X = HỆ CƠ SỐ NHẬP VÀO
//Y = HỆ CẦN CHUYỂN QUA

module.exports = main;
