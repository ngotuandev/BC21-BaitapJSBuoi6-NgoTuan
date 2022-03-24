var number = [];
var numberR = [];
var inputEl = document.getElementById("input-phan1");
var inputSoThuc = document.getElementById("input-so-thuc");
function tinhTongSoDuong(array) {
  var sum = 0;
  array.forEach(function (item) {
    if (item > 0) {
      sum += item;
    }
  });
  return sum;
}
function demSoDuong(array) {
  var count = 0;
  array.forEach(function (item) {
    if (item > 0) {
      count++;
    }
  });
  return count;
}
function soNhoNhat(array) {
  var min = Infinity;
  array.forEach(function (item) {
    if (min > item) {
      min = item;
    }
  });
  return min;
}
function soDuongNhoNhat(array) {
  var min = Infinity;
  array.forEach(function (item) {
    if (min > item && item > 0) {
      min = item;
    }
  });
  return min;
}
function timSoChanCuoi(array) {
  var soChanCuoi = 0;
  array.forEach(function (item) {
    if (item % 2 == 0) {
      soChanCuoi = item;
    } else {
      return "";
    }
  });
  return soChanCuoi;
}
function soNguyenToN(n) {
  if (n < 2) return 0;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}
function timSoNguyenTo(array) {
  for (var i = 0; i < array[i]; i++) {
    if (soNguyenToN(array[i]) == 1) return array[i];
  }
  return -1;
}
function checkSoThucSoNguyen(n) {
  let flag = 1;
  if (Math.ceil(n) != Math.floor(n)) flag = 0;
  return flag;
}
function timSoNguyen(array) {
  var soNguyenSoThuc = 0;
  var check = 0;
  array.forEach(function (item) {
    check = checkSoThucSoNguyen(item);
    if (check == 1) {
      soNguyenSoThuc++;
    } else {
      soNguyenSoThuc += "";
    }
  });
  return soNguyenSoThuc;
}
function soDuongSoAm(array) {
  var soDuong = 0;
  var soAm = 0;
  var ketLuan = "";
  array.forEach(function (item) {
    if (item > 0) {
      soDuong++;
    } else if (item < 0) {
      soAm++;
    } else {
      return "";
    }
  });
  if (soDuong > soAm) {
    ketLuan = "Số dương nhiều hơn số âm";
  } else if (soAm > soDuong) {
    ketLuan = "Số âm nhiều hơn số dương";
  } else if ((soAm = soDuong)) {
    ketLuan = "Số âm và số dương bằng nhau";
  } else {
    ketLuan = "Không có số âm và số dương";
  }
  return ketLuan;
}

document.getElementById("btn-phan1").addEventListener("click", function () {
  number.push(inputEl.value * 1);
  inputEl.value = "";
  numberR.push(inputSoThuc.value * 1);
  inputSoThuc.value = "";
  var viTri1 = document.getElementById("input-vitri1").value * 1;
  var viTri2 = document.getElementById("input-vitri2").value * 1;

  [number[viTri1], number[viTri2]] = [number[viTri2], number[viTri1]];

  document.getElementById(
    "ketQuaPhan1"
  ).innerHTML = `<div>Tổng số dương:${tinhTongSoDuong(number)}</div>
  <div>Có ${demSoDuong(number)} số dương</div>
  <div>Số nhỏ nhất là: ${soNhoNhat(number)}</div>
  <div>Số dương nhỏ nhất là: ${soDuongNhoNhat(number)}</div>
  <div>Số chẵn cuối: ${timSoChanCuoi(number)}</div>
  <div>Mảng số thực có ${timSoNguyen(numberR)} số nguyên </div>
  <div>Số Nguyên tố là: ${timSoNguyenTo(number)}</div>
  <div>${soDuongSoAm(number)}</div>
  <div> Mảng ${number} </div>
  <div>Mảng số thực ${numberR}</div>
`;
});
document.getElementById("btn-sap-xep").addEventListener("click", function () {
  number.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "ketQuaSapXep"
  ).innerHTML = `<div>Mảng: ${number}</div>`;
});
