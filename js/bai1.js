document.getElementById("equation").innerHTML =
      "ax<sup>2</sup> + bx + c = 0";

      function addItem() {
        // lay du lieu tu the input
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;

        if (isNaN(a) === true) {
          a = document.getElementById("a").value = "0";
        }
        if (isNaN(b) === true) {
          b = document.getElementById("b").value = "0";
        }
        if (isNaN(c) === true) {
          c = document.getElementById("c").value = "0";
        }

        // chuyen doi kieu du lieu trong input
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);

        // thuc hien tinh toan
        let delta = b ** 2 - 4 * a * c; // tinh delta

        /// giai nghiem
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        if (a === 0) {
          if (b === 0 && c === 0) {
            document.getElementById("notifi").innerHTML =
              "Phương trình có vô số nghiệm";
            document.getElementById("x1").innerHTML = null;
            document.getElementById("x2").innerHTML = null;
          } else if (b === 0 && c != 0) {
            document.getElementById("notifi").innerHTML = vn;
            document.getElementById("x1").innerHTML = null;
            document.getElementById("x2").innerHTML = null;
          } else {
            let x = -c / b;
            document.getElementById("notifi").innerHTML =
              "Phương trình có nghiệm duy nhất: ";
            document.getElementById("x1").innerHTML = "X = " + x;
            document.getElementById("x2").innerHTML = null;
          }
        } else {
          if (delta > 0) {
            // in ra man hinh
            document.getElementById("notifi").innerHTML =
              "Phương Trình có 2 nghiệm phân biệt";
            document.getElementById("x1").innerHTML = "x1 = " + x1;
            document.getElementById("x2").innerHTML = "x2 = " + x2;
          } else if (delta === 0) {
            x3 = -(b / (2 * a));
            // in ra man hinh
            document.getElementById("notifi").innerHTML =
              "Phương Trình có 1 nghiệm kép";
            document.getElementById("x1").innerHTML = "x = " + x3;
            document.getElementById("x2").innerHTML = null;
          } else {
            // in ra man hinh
            document.getElementById("notifi").innerHTML =
              "Phương Trình Vô Nghiệm";
            document.getElementById("x1").innerHTML = null;
            document.getElementById("x2").innerHTML = null;
          }
        }
        // in phuong trinh ra man hinh
        // let equa = a + "x<sup>2</sup>" + " + " + b + "x" + " + " + c + " = 0";
        // document.getElementById("equation").innerHTML = equa;

        // khong in ra so neu a b = 1
        if (a === 1) {
          a = "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }

        if (b === 1 && a != 0) {
          b = " + " + "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        } else if (b === 1 && a === 0) {
          b = "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }

        // khong in ra so neu a b = -1
        if (a === -1) {
          a = "-" + "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (b === -1) {
          b = " - " + "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }

        // doi dau '+' cho b va c
        if (b > 0 && a !== 0) {
          b = " + " + b;
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (c > 0) {
          c = " + " + c;
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }

        /// doi dau '-' cho a, b va c
        if (b < 0) {
          b *= -1;
          b = " - " + b;
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (c < 0) {
          c *= -1;
          c = " - " + c;
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (a < 0) {
          a *= -1;
          a = "-" + a;
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }

        /// c = 0 thi khong in ra man hinh
        if (c === 0) {
          c = "";
          let equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (a === 0) {
          a = "";
          let equa = b + "x" + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        if (b === 0) {
          b = "";
          let equa = a + "x<sup>2</sup>" + b + c + " = 0";
          document.getElementById("equation").innerHTML = equa;
        }
        // xoa du lieu trong input sau khi nhap xong
        //  a = document.getElementById('a').value = " ";
        //  b = document.getElementById('b').value = " ";
        //  c = document.getElementById('c').value = " ";
      }
      // ================== RANDOM =====================
      function randomNumber() {
        let a = (document.getElementById("a").value = Math.round(
          (Math.random() < 0.5 ? -10 : 10) * Math.random()
        ));
        let b = (document.getElementById("b").value = Math.round(
          (Math.random() < 0.5 ? -10 : 10) * Math.random()
        ));
        let c = (document.getElementById("c").value = Math.round(
          (Math.random() < 0.5 ? -10 : 10) * Math.random()
        ));
        document.getElementById("hienthiketqua").disabled = false;
      }
      // Lấy thời gian thực
      function curOfDate() {
        // curDate sẽ lưu trữ thời gian hiện tại
        let curDate = new Date();
        // Lấy Ngày hiện tại
        let day = curDate.getDate();
        if (day < 10) {
          day = "0" + day;
        }
        // Lấy tháng hiện tại
        let month = curDate.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        // Lấy Năm hiện tại
        let year = curDate.getFullYear();
        // Lấy giờ hiện tại
        let hours = curDate.getHours();
        if (hours < 10) {
          hours = "0" + hours;
        }
        // Lấy phút hiện tại
        let minutes = curDate.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        // Lấy giây hiện tại
        let seconds = curDate.getSeconds();
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        console.log(seconds);
        let date = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
        document.getElementById("date").innerHTML = date;
      }
      let realTime = setInterval(curOfDate, 1000);
      // Số lần giải
      let slg = 0;
      document.getElementById("solangiai").innerHTML = slg;
      function soLanGiai() {
        slg++;
        document.getElementById("solangiai").innerHTML = slg;
      }
