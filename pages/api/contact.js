export default function (req, res) {
  let nodemailer = require('nodemailer');

  const mailData = {
    from: 'info@j-filipiak.pl',
    to: 'info@j-filipiak.pl',
    subject: `Message From Newsleter Form`,
    text: 'test',
    html: <div>test</div>,
  };

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp-relay.sendinblue.com',
    auth: {
      user: 'info@j-filipiak.pl',
      pass: 'Xibalba123',
    },
    secure: true,
  });

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}
