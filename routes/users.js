var express = require('express');
var router = express.Router();
var datas = require('../db/datas');
var medOp = require('../operation/medOp');
var cumsOp = require('../operation/cumOp');
var inoutOp = require('../operation/inoutOP');
var salaOp = require('../operation/salaOp');

router.get('/',function (req, res, next) {
    res.send('hahah');
});

router.get('/home', function (req, res, next) {
    res.render('home');
});

router.post('/addMed', function (req, res) {
    // var medInfo = req.body.medInfo;
    // console.log(medInfo);
    // datas.push(medInfo);
    // res.json({
    //     code: 1000,
    //     data: '药品入库成功'
    // });
    // return datas;
    medOp.addMed(req, res);
    // inoutOp.update(req, res);
});
router.post('/outMed', function (req, res) {
    // var outMed = req.body.outMedInfo;
    // res.json({
    //     code: 1001,
    //     data: '药品出库成功'
    // });
    cumsOp.addCum(req, res)
});
router.post('/selectMed', function (req, res) {
    // var meds = [];
    // console.log(req.body.medId);
    // datas.meds.map(function (val, index, arr) {
    //     if(val.medId === req.body.medId){
    //         meds.push(arr[index]);
    //     }
    //     return meds;
    // });
    // res.json({
    //     code: 0,
    //     data: meds
    // });
    medOp.queryById(req, res);
});

router.get('/selectMedAll', function (req, res) {
    // var meds = datas.meds;
    // res.json({
    //     code: 0,
    //     data: meds
    // });
    medOp.queryAll(req, res);
});
router.post('/selectSala', function (req, res) {
    salaOp.queryById(req, res)
});

router.get('/selectSalaAll', function (req, res) {
    salaOp.queryAll(req, res);
});
router.post('/selectInout', function (req, res) {
    inoutOp.queryById(req, res);
});

router.get('/selectInoutAll', function (req, res) {
    inoutOp.queryAll(req, res);
});
router.post('/selectCum', function (req, res) {
    cumsOp.queryById(req, res);
});
router.get('/selectCumAll', function (req, res) {
   cumsOp.queryAll(req, res);
});

router.post('/delMed', function (req, res) {
   medOp.delete(req, res);
});
router.post('/delSala', function (req, res) {
    salaOp.delete(req, res);
});
router.post('/delInout', function (req, res) {
    inoutOp.delete(req, res);
});
router.post('/delCum', function (req, res) {
    cumsOp.delete(req, res);
});
module.exports = router;
