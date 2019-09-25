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
        pass: "bcnpvmwfsurckyol"
      }
    });
  } catch (e) {
    return console.log("Error: " + e.name + ":" + e.message);
  }

  let mailOptions = {
    from: '"fsstudio.kz',
    to: "salih@salger.ru",
    subject: "Обращение с сайта",
    text: "Это проверочное сообщение",
    html: output
  };

  return { smtpTransport: smtpTransport, mailOptions: mailOptions };
};

// armada@free-style.kz