import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY!); // Non-null assertion since it's required

// Define types for request body
interface SubscriptionRequestBody {
  email: string;
  name: string;
}

// Define response messages
const RESPONSE_MESSAGES = {
  SUCCESS: "Subscription successful.",
  MISSING_FIELDS: "Email and name are required.",
  SERVER_ERROR: "Subscription failed.",
};

// Export the POST handler
export async function POST(request: Request): Promise<Response> {
  try {
    // Parse and validate the request body
    const { email, name }: SubscriptionRequestBody = await request.json();

    if (!email || !name) {
      return new Response(RESPONSE_MESSAGES.MISSING_FIELDS, { status: 400 });
    }

    // Add contact to Resend
    await resend.contacts.create({
      email,
      firstName: name,
      lastName: "",
      unsubscribed: false,
      audienceId: "99a8db01-8610-4f3f-9871-54b767cfedcf", // Replace with your audience ID
    });

    // Send welcome email
    await resend.emails.send({
      from: "shubhayubhowmick@gmail.com", // Replace with your verified email
      to: [email],
      subject: "Welcome to my newsletter!",
      text: `Hi ${name}, thank you for subscribing to my newsletter.`,
      html: `<h1>Hi ${name},</h1><p>Thank you for subscribing to my newsletter. All latest blogs will appear here.</p>`,
    });

    return new Response(RESPONSE_MESSAGES.SUCCESS, { status: 200 });
  } catch (error) {
    console.error("Error handling subscription:", error);
    return new Response(RESPONSE_MESSAGES.SERVER_ERROR, { status: 500 });
  }
}
