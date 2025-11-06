import sgMail from "@sendgrid/mail";


export async function POST(req) {
    try {

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing fields" }),
                { status: 400 }
            );
        }

        const msg = {
            to: process.env.EMAIL_USER,
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,// 你验证过的发件邮箱
            subject: `Website Contact: ${name}`,
            text: `Sender: ${name} <${email}>\n\nMessage:\n${message}`,
            html: `<p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message}</p>`,
        };

        await sgMail.send(msg);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error("SendGrid error:", err);
        return new Response(
            JSON.stringify({ success: false, error: err.message }),
            { status: 500 }
        );
    }
}
