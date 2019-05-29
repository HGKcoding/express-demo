var express = require('express');
var router = express.Router();

/* 为ant-deisgn-vue-learning写的一个接口 */
router.get('/dashboard/chart', function(req, res, next) {
  res.send([10, 20, 44, 55, 23, 15]);
});

module.exports = router;
