const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint to send email
app.post("/api/send-email-trial", async (req, res) => {
  const { email } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // App Password (not your Gmail password!)
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to yourself
      subject: "New User Email Submission",
      text: `User submitted email: ${email}`,
    });

    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, role, phone, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // App Password (not your Gmail password!)
      },
    });

    // HTML template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <tr>
              <td>
                <h2 style="color: #333;">📩 New Contact Form Submission</h2>
                <p style="color: #555;">You have received a new contact form submission:</p>

                <ul style="list-style: none; padding: 0; color: #444; line-height: 1.6;">
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Role:</strong> ${role}</li>
                  <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
                </ul>

                <p><strong>Message:</strong></p>
                <p style="background: #f3f3f3; padding: 10px; border-radius: 5px; color: #333;">
                  ${message || "No message provided"}
                </p>

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                <p style="font-size: 12px; color: #999;">This message was sent from your website contact form.</p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // send to yourself
      subject: "📩 New Contact Form Submission",
      html: htmlTemplate, // use HTML instead of plain text
    });

    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Server running on port 5000"));
