var express = require('express');
var router = express.Router();

var messages = [];
var messageId = parseInt(1000 + (Math.random() * 1000)).toString();

router.get('/', function(req, res, next) {
  res.status(200).send(JSON.stringify(messages.slice().reverse()));
});

router.post('/message', function(req, res, next) {
  messages.push({
    id: messageId++,
    message: req.body.text,
    time: new Date().getTime(),
    source: req.connection.remoteAddress
  });
  res.status(200).send(JSON.stringify(messages[messages.length - 1]));
});

router.delete('/message/:id', function(req, res, next) {
  var id = req.params.id;
  if (req.headers.token === 'secretToken') {
    var messageIndex = messages.map(function(m) {
      return m.messageId
    }).indexOf(parseInt(id));
    messages.splice(messageIndex, 1);
    res.status(204).send();
  } else
    res.status(401).send("Unauthorized");
});

module.exports = router;