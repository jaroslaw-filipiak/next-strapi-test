let nodemailer = require('nodemailer');

export default function (req, res) {
  if (req.method === 'POST') {
    // take data from front
    const data = req.body.data;
    const name = req.body.data.name;
    const subject = req.body.data.subject;
    const message = req.body.data.message;

    const mailData = {
      from: 'jarekfilipiak@live.com',
      to: 'info@j-filipiak.pl',
      subject: subject,
      text: message,
    };

    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'jarekfilipiak@live.com',
        pass: 'Unikajmaczety1',
      },
    });

    // const transporter = nodemailer.createTransport({
    //   port: 587,
    //   host: 'smtp-relay.sendinblue.com',
    //   auth: {
    //     user: 'info@j-filipiak.pl',
    //     pass: 'Xibalba123',
    //   },
    //   secure: false,
    // });

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.status(200).json({ message: 'ok' });

    //  process data - send mail
  } else {
    res.status(500).json({ message: 'Only POST method for /api/contact ;/' });
  }
}
