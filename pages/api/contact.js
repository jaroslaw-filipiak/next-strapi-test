let nodemailer = require('nodemailer');

export default function (req, res) {
  if (req.method === 'POST') {
    // take data from front
    const data = req.body.data;
    const name = req.body.data.name;
    const subject = req.body.data.subject;
    const message = req.body.data.message;

    const mailData = {
      from: '',
      to: '',
      subject: subject,
      text: message,
    };

    const transporter = nodemailer.createTransport({
      service: '',
      auth: {
        user: '',
        pass: '',
      },
    });

    // const transporter = nodemailer.createTransport({
    //   port: 587,
    //   host: 'smtp-relay.sendinblue.com',
    //   auth: {
    //     user: '',
    //     pass: '',
    //   },
    //   secure: false,
    // });

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else {
        console.log(info);
      }
    });

    res.status(200).json({ status: 'ok' });

    //  process data - send mail
  } else {
    res.status(500).json({ message: 'Only POST method are allowed' });
  }
}
