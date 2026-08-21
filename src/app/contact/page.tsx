
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Phone, MessageCircle, ArrowRight, Plus, Minus, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqs = [
    { 
        question: "What does a Creative Brand Marketing Company do?", 
        answer: "A creative brand marketing company helps businesses build a strong brand identity and connect with their target audience through strategic marketing initiatives. This includes services like branding, web design, content creation, SEO, and social media management." 
    },
    { 
        question: "Why should I choose Kalki Web as my Brand Marketing Agency?", 
        answer: "Kalki Web offers a unique blend of creative design, technical expertise, and data-driven marketing strategies. We are committed to delivering measurable results and building long-term partnerships with our clients." 
    },
    { 
        question: "Do you offer complete digital marketing services under one roof?", 
        answer: "Yes, Kalki Web provides end-to-end digital marketing — from branding and website development to SEO, social media, and paid campaigns — all customized for your goals." 
    },
    { 
        question: "Can a Creative Brand Marketing Agency help small businesses grow?", 
        answer: "Absolutely. We specialize in helping small and medium-sized businesses establish a strong online presence and compete effectively in the digital marketplace. Our scalable solutions are designed to grow with your business." 
    },
    {
        question: "How can I get started with Kalki Web?",
        answer: "Getting started is easy! Simply contact us through our website or give us a call to schedule a free consultation. We'll discuss your business goals and how we can help you achieve them."
    }
];

export default function ContactPage() {
  return (
    <>
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">Get in Touch</h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            We'd love to hear from you. Whether you have a question about our services or want to start a project, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <Card>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:9304987505" className="hover:text-primary transition-colors">+91 9304987505</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:kalkiweb06@gmail.com" className="hover:text-primary transition-colors">kalkiweb06@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-primary" />
                <a href="https://www.linkedin.com/in/gaurav-kumar-307484238/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Gaurav Kumar on LinkedIn</a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <span>Dak Bunglow, Lodipur, Patna, Bihar 800001</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" variant="glitch">
              <a href="https://wa.me/919304987505" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <section className="py-16 md:py-24">
            <div className="rounded-lg overflow-hidden">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.86470487926!2d85.13739797593605!3d25.609405916386553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f3ab7a1e35%3A0x809a0a486c91353a!2sDak%20Bungalow%20Chauraha!5e0!3m2!1sen!2sin!4v1725350371333!5m2!1sen!2sin"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-muted text-foreground rounded-2xl border border-border">
              <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <Image src="https://picsum.photos/seed/faq-main/600/700" data-ai-hint="team discussion coffee" alt="Team discussing" width={600} height={700} className="rounded-2xl object-cover" />
                        <div className="absolute bottom-8 left-8">
                             <Image src="https://picsum.photos/seed/faq-inset/400/250" data-ai-hint="man smiling" alt="Team member" width={400} height={250} className="rounded-2xl object-cover border-4 border-muted" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-semibold text-sm">FAQS</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">Let us Address your <span className="text-primary">Questions</span> Today!</h2>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="border border-border rounded-lg bg-card">
                                    <AccordionTrigger className="hover:no-underline text-lg p-6 group">
                                        <span className="flex-1 text-left">{faq.question}</span>
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary">
                                            <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden text-foreground" />
                                            <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block text-foreground" />
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base pt-0 p-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
              </div>
          </section>
        
      </div>
    </>
  );
}
