var express = require('express');
var router = express.Router();
var snmpReq=require('../snmp_client');
var data=require('../base_serials');
/* GET home page. */

router.get('/', function(req, res, next) {
var base111=bases().base111;
  snmpReq.send(base111.routers[0].address,"public","1.3.6.1.2.1.2.2.1.2.2",(data)=>{
    res.render('index', { title: 'Express',res: data});
  });
});

router.post('/getData', function(req, res, next) {
  res.json({data: new data()});
});

module.exports = router;
