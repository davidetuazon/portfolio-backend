const nodeMailer = require("nodemailer");
const sanitizeHtml = require("sanitize-html");

exports.contactForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ error: "Name is required" });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }
    if (!message || message.trim() === '') {
        return res.status(400).json({ error: "Message is required" });
    }

    const cleanMessage = sanitizeHtml(message, {
        allowedTags: [],
        allowedAttributes: {}
    });

    try {
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_EMAIL_SECRET,
                pass: process.env.APP_PASS_SECRET
            }
        })

        await transporter.sendMail({
            from: `"${name}" <${process.env.USER_EMAIL_SECRET}>`,
            to: process.env.USER_EMAIL_SECRET,
            subject: 'Portfolio Contact Form',
            text: cleanMessage,
            replyTo: email
        });

    console.log("Contact form submitted: ", { name, email, message });
    res.status(200).json({ success: true, message: "Message received" });  
        
    } catch (e) {
        console.error("Error sending mail: ", e);
        return res.status(500).json({ error: "Failed to send email" });
    }
};
