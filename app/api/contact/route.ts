import { NextRequest, NextResponse } from 'next/server';
import {
  validateContactForm,
  hasFormErrors,
  type ContactFormData
} from '@/lib/validations/contact-form';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request body
    const formData: ContactFormData = {
      fullName: body.fullName || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      serviceInterest: body.serviceInterest || '',
      message: body.message || ''
    };

    // Server-side validation
    const errors = validateContactForm(formData);

    if (hasFormErrors(errors)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors
        },
        { status: 400 }
      );
    }

    // Log form submission (placeholder for email service)
    console.log('📧 Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceInterest: formData.serviceInterest,
      message: formData.message
    });

    // TODO: In production, integrate with email service (SendGrid, AWS SES, etc.)
    // Example:
    // await sendEmail({
    //   to: 'hello@nextswitch.com',
    //   subject: `New Contact Form Submission from ${formData.fullName}`,
    //   body: formatEmailBody(formData)
    // });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. We'll get back to you soon."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
