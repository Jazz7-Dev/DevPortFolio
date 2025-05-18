import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function post({ request }) {
  try {
    const { name, email, message } = await request.json();

    const msg = {
      to: process.env.CONTACT_RECEIVER_EMAIL, // Your receiving email address
      from: process.env.CONTACT_SENDER_EMAIL, // Verified sender email address in SendGrid
      subject: `New Contact Form Message from ${name}`,
      text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p>You have received a new message from your website contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    };

    await sgMail.send(msg);

    return {
      status: 200,
      body: { message: 'Message sent successfully' }
    };
  } catch (error) {
    console.error('SendGrid error:', error);
    return {
      status: 500,
      body: { error: 'Failed to send message' }
    };
  }
}
