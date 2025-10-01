import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendEmail, generateContactEmailHTML } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email to restaurant
      const restaurantEmail = process.env.RESTAURANT_EMAIL || process.env.CONTACT_EMAIL || "info@mountroadbilal.com";
      
      try {
        await sendEmail({
          to: restaurantEmail,
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: generateContactEmailHTML(validatedData),
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails - submission is still saved
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for contacting us! We will get back to you soon.",
        submissionId: submission.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
