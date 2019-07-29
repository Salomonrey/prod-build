var mail = require("../mailer");

module.exports.sendMail = async function(req, res) {
 
  mail.sendMail(req.body.name,req.body.number).then(result => {
    var send = result.smtpTransport.sendMail(result.mailOptions, function(
      error,
      info
    ) {
      if (error) {
        console.log(error);
        return res.json({ success: false, msg: "Message not send." });
      } else {
        console.log(info.response);
        return res.json({ success: true, msg: "Message send." });
      }
    });
  });
};
