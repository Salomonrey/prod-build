var fs = require("fs");
module.exports.createMessage = function(name, number) {
  const file = fs.readFileSync(__dirname + "/email.css", "utf8");
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

  <!-- HEADER -->
  <table class="head-wrap" bgcolor="#999999">
    <tr>
      <td></td>
      <td class="header container" >

          <div class="content">
          <table bgcolor="#999999">
            <tr>

              <td align="right"><h6 class="collapse">Basic</h6></td>
            </tr>
          </table>
          </div>

      </td>
      <td></td>
    </tr>
  </table><!-- /HEADER -->


  <!-- BODY -->
  <table class="body-wrap">
    <tr>
      <td></td>
      <td class="container" bgcolor="#FFFFFF">

        <div class="content">
        <table>
          <tr>
            <td>
              <h3>Hi, ` +
    name +
    ` ` +
    number +
    `</h3>
              <p class="lead">Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae.</p>
              <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. consequat vel lacus. Sed iaculis pulvinar ligula, ornare fringilla ante viverra et. In hac habitasse platea dictumst. Donec vel orci mi, eu congue justo. Integer eget odio est, eget malesuada lorem. Aenean sed tellus dui, vitae viverra risus. Nullam massa sapien, pulvinar eleifend fringilla id, convallis eget nisi. Mauris a sagittis dui. Pellentesque non lacinia mi. Fusce sit amet libero sit amet erat venenatis sollicitudin vitae vel eros. Cras nunc sapien, interdum sit amet porttitor ut, congue quis urna.</p>
              <!-- Callout Panel -->
              <p class="callout">
                Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. <a href="#">Click it! &raquo;</a>
              </p><!-- /Callout Panel -->

              <!-- social & contact -->
              <table class="social" width="100%">
                <tr>
                  <td>

                    <!-- column 1 -->
                    <table align="left" class="column">
                      <tr>
                        <td>

                          <h5 class="">Connect with Us:</h5>
                          <p class=""><a href="#" class="soc-btn fb">Facebook</a> <a href="#" class="soc-btn tw">Twitter</a> <a href="#" class="soc-btn gp">Google+</a></p>


                        </td>
                      </tr>
                    </table><!-- /column 1 -->

                    <!-- column 2 -->
                    <table align="left" class="column">
                      <tr>
                        <td>

                          <h5 class="">Contact Info:</h5>
                          <p>Phone: <strong>408.341.0600</strong><br/>
                  Email: <strong><a href="` +
    number +
    `">Подтвердите email</a></strong></p>

                        </td>
                      </tr>
                    </table><!-- /column 2 -->

                    <span class="clear"></span>

                  </td>
                </tr>
              </table><!-- /social & contact -->

            </td>
          </tr>
        </table>
        </div><!-- /content -->

      </td>
      <td></td>
    </tr>
  </table><!-- /BODY -->

  <!-- FOOTER -->
  <table class="footer-wrap">
    <tr>
      <td></td>
      <td class="container">

          <!-- content -->
          <div class="content">
          <table>
          <tr>
            <td align="center">
              <p>
                <a href="#">Terms</a> |
                <a href="#">Privacy</a> |
                <a href="#"><unsubscribe>Unsubscribe</unsubscribe></a>
              </p>
            </td>
          </tr>
        </table>
          </div><!-- /content -->

      </td>
      <td></td>
    </tr>
  </table><!-- /FOOTER -->

  </body>
  </html>`
  );
};
