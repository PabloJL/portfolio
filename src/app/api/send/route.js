// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
const fromEmail = process.env.REACT_APP_FROM_EMAIL;

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["jljp701@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body </p>{" "}
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
