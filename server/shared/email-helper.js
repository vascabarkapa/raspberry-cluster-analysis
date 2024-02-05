import fs from 'fs';
import nodemailer from 'nodemailer';
import { nodemailerUser, nodemailerPassword } from './../config/index.js';

export default async function sendEmail(subject, text) {
  try {
    const htmlTemplate = fs.readFileSync('./shared/templates/mail-cluster-overload.html', 'utf8');
    const emailContent = htmlTemplate;
      // .replace('[Name]', newTicket?.first_name + " " + newTicket?.last_name)
      // .replace('[number of tickets]', newTicket?.number_of_tickets)
      // .replace('[movie title]', repertoryToBuy?.movie?.name)
      // .replace('[date]', repertoryToBuy?.dateTime.toLocaleString('sr-RS', {
      //   day: '2-digit',
      //   month: '2-digit',
      //   year: 'numeric',
      //   hour: '2-digit',
      //   minute: '2-digit'
      // }))
      // .replace('[time]', repertoryToBuy?.dateTime)
      // .replace('[order number]', repertoryToBuy?._id)
      // .replace('[total]', newTicket?.sum_price)
      // .replace('[date purchase]', newTicket?.createdAt.toLocaleString('sr-RS', {
      //   day: '2-digit',
      //   month: '2-digit',
      //   year: 'numeric',
      //   hour: '2-digit',
      //   minute: '2-digit',
      //   second: '2-digit'
      // }));

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: nodemailerUser,
        pass: nodemailerPassword
      }
    });

    return await transporter.sendMail({
      from: 'Cloudberry Systems',
      to: 'vascabarkapa@gmail.com',
      subject: subject,
      html: emailContent
    });
  } catch (err) {
    console.error('Error sending email:', err);
  }
}