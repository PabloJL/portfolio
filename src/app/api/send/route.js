// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
const fromEmail = process.env.REACT_APP_FROM_EMAIL;
const personalEmail = process.env.REACT_APP_PERSONAL_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email, personalEmail],
      subject: subject,
      react: (
        <>
          <p>Thank you for contacting me! </p>
          <p>New message submitted</p>
          <p>{message} </p>{" "}
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
