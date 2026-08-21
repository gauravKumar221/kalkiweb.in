"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  // In a real app, you would send an email or save to a database.
  console.log("New contact form submission:", validatedFields.data);

  return {
    success: true,
    message: "Form submitted successfully.",
  };
}


const careersFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    resume: z.instanceof(File),
    message: z.string().optional(),
});

export async function submitCareerApplication(formData: FormData) {
  const values = {
    name: formData.get('name'),
    email: formData.get('email'),
    resume: formData.get('resume'),
    message: formData.get('message'),
  };

  const validatedFields = careersFormSchema.safeParse(values);

  if (!validatedFields.success) {
      console.log(validatedFields.error);
      return { success: false, message: 'Invalid data provided.' };
  }

  // In a real app, you would upload the file to cloud storage.
  console.log('New career application:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Resume:', validatedFields.data.resume.name, `${(validatedFields.data.resume.size / 1024).toFixed(2)} KB`);
  console.log('Message:', validatedFields.data.message);

  return { success: true, message: 'Application submitted successfully.' };
}
