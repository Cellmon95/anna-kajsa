import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

type email = {
  name: string;
  email: string;
  title: string;
  subject: string;
  content: string;
};
const formDataSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  title: z.string().min(1),
  subject: z.string().min(1),
  content: z.string().min(1),
});

const resend = new Resend(process.env.RESEND_KEY);
export async function POST(request: any) {
  const formData: email = await request.json();
  if (formDataSchema.safeParse(formData).success) {
    try {
      //@ts-ignore
      const data = await resend.emails.send({
        from: 'anna-kajsa-test <onboarding@anna-kajsa.se>',
        to: [formData.email],
        subject: formData.subject,
        react: EmailTemplate({
          name: formData.name,
          email: formData.email,
          content: formData.content,
        }),
      });
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Internal server error' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ message: 'Ivalid data' }, { status: 400 });
  }
}
