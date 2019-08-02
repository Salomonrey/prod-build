var fs = require("fs");
const file = fs.readFileSync(__dirname + "/email.css", "utf8");
module.exports.createMessage = function(name, number) {
  return (
    `
  <!DOCTYPE html PUBLIC>
  <head>
  <meta name="viewport" content="width=device-width" />

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>ZURBemails</title>

  <style>` +
    file +
    `</style>

  </head>

  <body bgcolor="#FFFFFF">
	<div>Имя:`+name+`</div>
	<div>Номер:`+number+`</div>
  </body>
  </html>`
  );
};
