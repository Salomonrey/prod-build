var nodemailer = require("nodemailer");
var message = require("./message");

module.exports.sendMail = async function(name, number) {
  let smtpTransport;
  let output = await message.createMessage(name, number);
  try {
    smtpTransport = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: "salihanski@gmail.com",
        pass: "Qwerty12#$"
      }
    });
  } catch (e) {
    return console.log("Error: " + e.name + ":" + e.message);
  }

  let mailOptions = {
    from: '"Салиховский сайт" <salihanski@gmail.com>',
    to: "georgegreek12331@gmail.com",
    subject: "Обращение с сайта",
    text: "Это проверочное сообщение",
    html: output
  };

  return { smtpTransport: smtpTransport, mailOptions: mailOptions };
};
