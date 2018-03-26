var express = require('express');
var router = express.Router();
var snmpReq=require('../snmp_client');
/* GET home page. */
router.get('/', function(req, res, next) {

  console.log();
  snmpReq.send("127.0.0.1","public","1.3.6.1.2.1.2.2.1.2.2",(data)=>{
    res.render('index', { title: 'Express',res: data});
  });
});

module.exports = router;
