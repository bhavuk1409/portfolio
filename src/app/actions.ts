
'use server';

import { z } from 'zod';

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

  // In a real app, you would integrate with an email service (e.g., Resend, SendGrid)
  // or save the message to a database. For this example, we'll just log it.
  console.log('New contact form submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: null,
  };
}
