var express = require('express');
var router = express.Router();

const notifyWorkend = (req, res) => {
  console.log("Alexa から連絡がきたよ");
  res.send();
};


/* POST home page. */
router.POST('/ifttt/notify_workend', notifyWorkend);

module.exports = router;
