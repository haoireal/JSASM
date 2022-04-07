function onCheckBox(obj){
    let checkBox = obj.parentElement.parentElement.children[3].children[0];
    checkBox.disabled = !checkBox.disabled;
    console.log(checkBox.disabled);
    if(checkBox.disabled == false){
        checkBox.style.border = '2px solid rgba(86, 216, 228, 1)';
        checkBox.style.cursor = 'text';
        checkBox.value = 1;
        updateMoney(obj);
    }else{
        checkBox.style.border = '2px solid gray';
        checkBox.style.cursor = 'default';
        checkBox.value = null;
        updateMoney(obj);
    }
    checkBox.focus();
    totalMoney();
}

// HÀM TÍNH TỔNG TIỀN

function totalMoney(){
    let sumMoney = 0;
    let sumSL = 0;
    let rowMoney = document.getElementsByClassName('money');
    let rowSL = document.getElementsByClassName('inputsl');
    for (let i = 0; i <rowMoney.length; i++) {
        let money = rowMoney[i].innerText;
        money = parseInt(money);
        if(isNaN(money)) {
            money = 0;
        }        
        sumMoney += money;
    }
    for (let i = 0; i < rowSL.length; i++) {
        let sl = rowSL[i].value;
        sl = parseInt(sl);
        if(isNaN(sl)) {
            sl = 0;
        } 
        sumSL += sl;        
    }
    document.getElementById('sl').innerText = sumSL;
    document.getElementById('sum').innerText = sumMoney.toLocaleString('en') + " $"; 
}

//THAY ĐỔI GIÁ VÀ SỐ LƯỢNG

function updateMoney(obj){
    let row = obj.parentNode.parentNode;
    let amount = row.children[3].children[0].value;
    let price = row.children[2].innerText;

    amount = parseFloat(amount);
    price = parseFloat(price);
    console.log(amount, price);
    let total = price * amount;
    total = parseFloat(total);
    row.children[4].innerHTML = total + ' $';
    if(isNaN(total)){
    row.children[4].innerHTML = 0 + ' $';
    }
    totalMoney();
}

function hideShow() {
    var data = document.getElementById('data').children[0].children;
    console.log(data);
    for(var i = 1; i < data.length-1; i++) {
        if(data[i].style.display == 'none') {
            data[i].style.display = 'block';
        }else {
            data[i].style.display = 'none';
        }
    }
}

function addItem(obj){
    let row = obj.parentElement.parentElement.cloneNode(true);
    
}
/* var watch = null;

function time() {
    var time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var second = time.getSeconds();
    console.log(second);
    document.getElementById('hour').innerHTML = hour;
    if(mins < 10) {
        document.getElementById('mins').innerHTML = '0' + mins;
    }else {
        document.getElementById('mins').innerHTML = mins;
    }
    if(second < 10) {
        document.getElementById('second').innerHTML = '0' + second;
    }else {
        document.getElementById('second').innerHTML = second;
    }
}

watch = setInterval(time, 1000); */
