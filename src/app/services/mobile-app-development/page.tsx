
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const features = [
  "iOS & Android App Development",
  "Cross-Platform Development (React Native)",
  "Native App Development",
  "App UI/UX Design",
  "Backend & API Development",
  "App Maintenance & Support",
];

const processSteps = [
    { title: "Strategy & Prototyping", description: "We start by defining your app's core features, target audience, and creating interactive prototypes." },
    { title: "Design & Development", description: "Our team designs a beautiful UI and develops a high-performance app using the latest technologies." },
    { title: "Testing & Quality Assurance", description: "We conduct rigorous testing to ensure your app is bug-free, secure, and ready for launch." },
    { title: "Launch & Maintenance", description: "We handle the app store submission process and provide ongoing support to keep your app up-to-date." },
];

const whyChooseUs = [
    { title: "Experienced Developers", description: "Our team of skilled developers has extensive experience building successful mobile apps for various platforms." },
    { title: "User-Centric Design", description: "We focus on creating intuitive and engaging user experiences that keep your users coming back." },
    { title: "End-to-End Service", description: "From idea to launch and beyond, we provide comprehensive services to bring your app vision to life." },
];

const faqs = [
    { question: "How much does it cost to build a mobile app?", answer: "The cost depends on the complexity of the app, the features required, and the platforms you want to target. We can provide a detailed quote after discussing your project." },
    { question: "Should I build a native or cross-platform app?", answer: "The choice depends on your budget, timeline, and performance requirements. We can help you decide which approach is best for your project." },
    { question: "Can you help me with app marketing?", answer: "While our primary focus is on development, we can provide guidance on app store optimization (ASO) and connect you with our marketing partners." },
];

const portfolioProjects = [
  {
    client: "Social Networking App",
    image: "https://picsum.photos/600/400",
    hint: "social media app",
    description: "A feature-rich social media app with real-time chat and photo sharing capabilities.",
    link: "#",
  },
  {
    client: "On-Demand Delivery App",
    image: "https://picsum.photos/600/400",
    hint: "delivery app interface",
    description: "A user-friendly app for an on-demand delivery service, with real-time tracking and payment integration.",
    link: "#",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Mobile App Development
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We build innovative, high-performance, and user-friendly mobile apps for both iOS and Android platforms.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Start Your App Project</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="mobile app"
                alt="Mobile app on a smartphone"
                width={600}
                height={500}
                className="rounded-lg object-cover shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              From Idea to App Store
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Our end-to-end mobile app development services cover everything from initial strategy to launch and ongoing support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="app development process"
                    alt="Team discussing app development"
                    width={600}
                    height={700}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{feature}</h3>
                    <p className="text-muted-foreground">
                      We focus on creating engaging mobile experiences that deliver value to your users and business.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our App Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A transparent roadmap for building successful mobile apps.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="text-center p-6 border-t-4 border-primary rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us for App Development?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Featured Mobile Apps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioProjects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden group">
                            <div className="overflow-hidden">
                                <Image src={project.image} data-ai-hint={project.hint} alt={project.client} width={600} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.client}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>{project.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-none mb-4 group">
                             <div className="p-px bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 rounded-lg group-data-[state=open]:bg-primary transition-all duration-300">
                                <AccordionTrigger className="bg-card text-card-foreground p-6 rounded-lg hover:no-underline flex items-center justify-between text-left group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                                    <span className="text-xl font-bold">{faq.question}</span>
                                    <div className="h-10 w-10 bg-background rounded-full flex items-center justify-center shrink-0 group-data-[state=open]:bg-white transition-all duration-300">
                                        <ArrowRight className="h-6 w-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-90" />
                                    </div>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="text-muted-foreground text-base p-6 bg-card rounded-b-lg">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Build Your Mobile App?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
              Let's talk about your app idea and how we can bring it to life.
            </p>
            <div className="pointer-events-auto">
                <Button asChild size="lg" variant="glitch">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
            </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
