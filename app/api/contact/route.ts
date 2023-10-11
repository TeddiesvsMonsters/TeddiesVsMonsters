import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  
  const { fullName, email, phone, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Message from ${fullName} <${email}>`,
    text: `${message} from ${fullName}`,
    html: `
    <p>We have a message regarding the following information.</p>
    <table style="border: none;">
    <tbody>
        <tr>
            <th>Name: </th>
            <td> ${fullName}</td>
        </tr>
         <tr>
            <th>Email: </th>
            <td>${email}</td>
        </tr>
         <tr>
            <th>Phone: </th>
            <td>${phone}</td>
        </tr>
         <tr>
            <th>Message:</th>
            <td>${message}</td>
        </tr>
    </tbody>
</table>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}