let express = require('express');
let router = express.Router();
const Ut = require('../common/util');
router.post('/openid', async (req, res) => {
  try {
    console.log(req.body);
    let appId = 'wx2ea33ff02ba80a2e';
    let secret = 'b4c2a5628a1377497c1ab66f2b044a29';
    let { js_code } = req.body;
    let opts = {
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
    };
    let r1 = await Ut.promiseReq(opts);
    r1 = JSON.parse(r1);
    console.log(r1);
    res.json(r1);
  } catch (e) {
    console.log(e);
    res.json('');
  }
});
module.exports = router;
