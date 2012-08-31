var Tuppari = require('tuppari');

var tuppari = new Tuppari({
  applicationId: "d7d01460-0dac-4627-b4d2-3d1c17379aa6",
  accessKeyId: "29b81539-8ffc-4089-bb43-753ecf3c2e72",
  accessSecretKey: "59674451-4f9e-400a-a2e0-da4183302dd6"
});

var channel = tuppari.join('message');

for(var i=0; i < 10; i++) {
  channel.send('text', 'hello world', function (err, res, body) {
    if (err) {
      console.error(err);
    }
    console.log(res.statusCode, body);
  })
};