
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

type ContactFormState = {
    message?: string | null;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    } | null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Send email using Resend
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain
      to: ['bhavukagrawal1409@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      errors: null,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      errors: {
        message: ['Failed to send message. Please try again later.'],
      },
    };
  }
}
