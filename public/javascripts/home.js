/**
 * Created by yjf on 2017/7/11.
 */

var select = document.getElementById('select');
var other = document.getElementById('other');

function doSelect() {
    select.style.display = 'inline-block';
    other.style.visibility = 'hidden';
    console.log('asdf')
}
function doOther() {
    other.style.visibility = 'visible';
    select.style.display = 'none';
    console.log('dsfsaf')
}

// 入库

function handleInStock() {
    var inId = document.getElementById('inId');
    var inProduct = document.getElementById('inProduct');
    var inName = document.getElementById('inName');
    var inDate = document.getElementById('inDate');
    var inReleaseDate = document.getElementById('inReleaseDate');
    var inUse = document.getElementById('inUse');
    var inPrice = document.getElementById('inPrice');
    var inCount = document.getElementById('inCount');
    var inSalalor = document.getElementById('inSalalor');
    var inMed = {
        id: inId.value,
        product: inProduct.value,
        name: inName.value,
        date: inDate.value,
        release: inReleaseDate.value,
        use: inUse.value,
        price: inPrice.value,
        count: inCount.value,
        salalor: inSalalor.value
    };
    console.log(12);
    fetch('/users/addMed', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            medInfo: inMed
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        alert(json.msg);
    });
    console.log('确认入库')
}

// 出库

function handleOutStock() {
    var outId = document.getElementById('outId');
    var customerId = document.getElementById('customerId');
    var customerName = document.getElementById('customerName');
    var customerTel = document.getElementById('customerTel');
    var outTime = document.getElementById('outTime');
    var outCount = document.getElementById('outCount');

    var outMed = {
        id: outId.value,
        cusId: customerId.value,
        cusName: customerName.value,
        cusTel: customerTel.value,
        outTime: outTime.value,
        count: outCount.value
    };
    alert(outMed.id);
    fetch('/users/outMed', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            outMedInfo: outMed
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            alert(json.msg)
        }
    });
    console.log('确认出库')
}