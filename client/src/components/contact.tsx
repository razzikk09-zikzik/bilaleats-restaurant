import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Phone, MessageSquare } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us! We will get back to you soon.',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 wood-texture relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-brand-light-brown">We'd love to hear from you</p>
        </div>

        <div className="bg-white bg-opacity-95 rounded-2xl p-8 md:p-12 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-brown font-poppins font-semibold">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-2 border-brand-light-brown focus-visible:ring-brand-brown"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-brown font-poppins font-semibold">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="border-2 border-brand-light-brown focus-visible:ring-brand-brown"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-dark-brown font-poppins font-semibold">
                      Phone Number (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="border-2 border-brand-light-brown focus-visible:ring-brand-brown"
                        data-testid="input-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-brand-dark-brown font-poppins font-semibold">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        className="border-2 border-brand-light-brown focus-visible:ring-brand-brown resize-none"
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full btn-hover bg-brand-brown text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-brand-medium-brown"
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>

          {/* Quick Contact Options */}
          <div className="mt-10 pt-10 border-t-2 border-brand-light-brown">
            <h3 className="text-2xl font-poppins font-bold text-brand-brown text-center mb-6">
              Quick Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="tel:+914412345678"
                className="flex items-center justify-center bg-brand-cream p-4 rounded-lg hover:bg-brand-light-brown hover:text-white transition-colors"
                data-testid="link-call"
              >
                <Phone className="mr-3" size={24} />
                <span className="font-semibold">Call Us</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors"
                data-testid="link-whatsapp"
              >
                <MessageSquare className="mr-3" size={24} />
                <span className="font-semibold">WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
