var path = require('path');


module.exports.getChat = function(req, res) {

  //res.sendFile(path.join(__dirname, '..', '..', 'public', 'app', 'chat', 'bsChat.html'));
  console.log('join chat');
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));

};
