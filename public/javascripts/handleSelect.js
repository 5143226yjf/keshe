/**
 * Created by yjf on 2017/7/12.
 */

var showMed = document.getElementById('showMed');
var showWorker = document.getElementById('showWorker');
var showInOut = document.getElementById('showInOut');
var showCus = document.getElementById('showCus');

var sMedId = document.getElementById('sMedId');
var sWorkerId = document.getElementById('sWorkerId');
var sMed = document.getElementById('sMed');
var sCusId = document.getElementById('sCusId');

var delIndex = 0;
function showInfo(palce, arr, msg, url, delId) {
    if(arr.length === 0){
        alert(msg + "不存在，请重新输入")
    }
    else{
        palce.style.visibility = 'visible';
    }
    arr.forEach(function (val, index, arr) {
        var para=document.createElement('tr');
        for(var key in val){
            if (val.hasOwnProperty(key) === true){
                var node=document.createElement('td');
                var text=document.createTextNode(val[key]);
                node.appendChild(text);
                para.appendChild(node);
            }
        }
        var td = document.createElement('td');
        var del = document.createTextNode('删除');
        td.appendChild(del);
        para.appendChild(td);
        palce.appendChild(para);
        td.onclick = function () {
            console.log('shanc',index);
            arr.splice(index, 1);
            delIndex = index + 2;
            palce.removeChild(palce.childNodes[delIndex]);
            delIndex = delIndex - 1;
            delData(url, delId)
        };
    });
    return delIndex;
}

function delData(url, id) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            delId: id
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
    });
}

function selectMed() {
    console.log(sMedId);
    fetch('/users/selectMed', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            medId: sMedId.value
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            var msg = "药品编号";
            showInfo(showMed, json.data, msg, '/users/delMed', sMedId.value);
        }
    });
}

function selectMedAll(e) {
    fetch('/users/selectMedAll', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            showInfo(showMed, json.data);
        }
    });
}

function selectSala() {
    fetch('/users/selectSala', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            salaId: sWorkerId.value
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            var msg = "员工编号";
            showInfo(showWorker, json.data, msg, '/users/delSala', sWorkerId.value);
        }
    });
}

function selectSalaAll() {
    fetch('/users/selectSalaAll', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            showInfo(showWorker, json.data);
        }
    });
}

function selectInout() {
    fetch('/users/selectInout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            medId: sMed.value
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            var msg = "药品编号";
            showInfo(showInOut, json.data, msg, '/users/delInout', sMed.value);
        }
    });
}

function selectInoutAll() {
    fetch('/users/selectInoutAll', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            showInfo(showInOut, json.data);
        }
    });
}
function selectCum() {
    fetch('/users/selectCum', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cumsId: sCusId.value
        })
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            var msg = "客户编号";
            showInfo(showCus, json.data, msg, '/users/delCum', sCusId.value);
        }
    });
}

function selectCumAll() {
    fetch('/users/selectCumAll', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
        if (json.code == 0) {
            showInfo(showCus, json.data);
        }
    });
}