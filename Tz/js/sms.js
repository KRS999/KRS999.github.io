const sms = require('./smsc_api.js');

sms.configure({
  login : 'Login',
  password : 'password',
  hashed: true,
  //ssl : true/false,
  //charset : 'utf-8',
});

sms.test(function (err) {
  if (err) return console.log('error: ' + err);
  console.log('Request')
});

sms.send('mail', {
  phones : '@mail',
  mes : 'Тестовое сообщение',
  subj : 'Тема сообщения',
  sender : '@mail',
}, function (data, raw, err, code) {
  if (err) return console.log(err, 'code: '+code);
  console.log(data); // object
  // console.log(raw); // string in JSON format
});

sms.send_sms({
  phones : ['89380000000'],
  mes : 'Привет!',
  cost : 1
}, function (data, raw, err, code) {
  if (err) return console.log(err, 'code: '+code);
  console.log(data); // object
  console.log(raw); // string in JSON format
});