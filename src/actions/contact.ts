"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(8).max(20),
  organisation: z.string().trim().max(160).optional(),
  propertyType: z.string().trim().max(80).optional(),
  city: z.string().trim().max(80).optional(),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(1000),
  interest: z.string().trim().max(160).optional(),
  appointmentDate: z.string().trim().max(40).optional(),
});

export async function submitContact(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  
  if (!parsed.success) {
    return { 
      success: false, 
      error: parsed.error.issues[0]?.message ?? "Invalid data" 
    };
  }

  const d = parsed.data;

  // HARDCODE DIRECTLY HERE - NO process.env
  const AIRTABLE_PAT = "patZNWEmDUHAS5wZN.2f64e1d8b436595ec1a4bd5c4d468b8afbe9422b100f8853010a5678d8668a6a";
  const AIRTABLE_BASE_ID = "appn1QAF6GKV1M4cA";

  console.log("Using Base ID:", AIRTABLE_BASE_ID);
  console.log("Using PAT:", AIRTABLE_PAT.substring(0, 10) + "...");

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Contact%20Enquiries`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "First Name": d.firstName,
            "Last Name": d.lastName,
            "Email": d.email,
            "Phone": d.phone,
            "Organisation": d.organisation ?? "",
            "Property Type": d.propertyType ?? "",
            "City": d.city ?? "",
            "Subject": d.subject,
            "Message": d.message,
            "Interest": d.interest ?? "",
            "Appointment Date": d.appointmentDate || undefined,
          },
        }),
      }
    );

    console.log("Airtable Response Status:", airtableRes.status);

    if (!airtableRes.ok) {
      const err = await airtableRes.json();
      console.error("Airtable error details:", err);
      return { 
        success: false, 
        error: err.error?.message || "Failed to save enquiry" 
      };
    }

    const result = await airtableRes.json();
    console.log("Airtable Success:", result);
    
    return { 
      success: true, 
      message: "Enquiry saved successfully"
    };
  } catch (error) {
    console.error("Server error:", error);
    return { 
      success: false, 
      error: "Something went wrong. Please try again." 
    };
  }
}