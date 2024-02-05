import fs from 'fs';
import nodemailer from 'nodemailer';
import { nodemailerUser, nodemailerPassword } from './../config/index.js';

export default async function sendEmail(cluster, adminUser, subject, to) {
  try {
    const htmlTemplate = fs.readFileSync('./shared/templates/mail-cluster-overload.html', 'utf8');
    const emailContent = htmlTemplate
      .replace('[Name]', adminUser?.first_name + ' ' + adminUser?.last_name)
      .replace('[ID]', cluster?._id)
      .replace('[Age]', cluster?.age)
      .replace('[Nodes]', cluster?.number_of_nodes || 'N/A')
      .replace('[Min Pods]', cluster?.min_pods)
      .replace('[Max Pods]', cluster?.max_pods)
      .replace('[Replicas]', cluster?.replicas)
      .replace('[Load]', cluster?.load)
      .replace('[Load Threshold]', cluster?.load_threshold)
      .replace('[Date Time]', cluster?.createdAt.toLocaleString('sr-RS', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: nodemailerUser,
        pass: nodemailerPassword
      }
    });

    return await transporter.sendMail({
      from: 'Cloudberry',
      to: to,
      subject: subject,
      html: emailContent
    });
  } catch (err) {
    console.error('Error sending email:', err);
  }
}