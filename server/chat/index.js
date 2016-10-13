var path = require('path');


module.exports.getChat = function(req, res) {

  console.log('send');
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'app', 'chat', 'bsChat.html'));

};
