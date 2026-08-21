
import { Button } from "@/components/ui/button";
import { CheckCircle, PlusCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const features = [
  "AI-Powered Chatbots & Virtual Assistants",
  "Machine Learning Model Development",
  "Natural Language Processing (NLP)",
  "Predictive Analytics & Data Insights",
  "AI-Powered Automation",
  "Computer Vision Solutions",
];

const processSteps = [
    { title: "AI Strategy Consulting", description: "We start by understanding your business goals to develop a custom AI strategy that drives real-world results." },
    { title: "Data Preparation & Modeling", description: "Our experts collect, clean, and prepare your data to build and train robust machine learning models." },
    { title: "Solution Development & Integration", description: "We develop and seamlessly integrate AI solutions into your existing workflows and systems." },
    { title: "Monitoring & Optimization", description: "We continuously monitor performance and optimize your AI models to ensure they deliver ongoing value." },
];

const whyChooseUs = [
    { title: "Expert Team", description: "Our team of AI specialists and data scientists has a proven track record of delivering successful AI projects." },
    { title: "Custom Solutions", description: "We don't believe in one-size-fits-all. Every solution is tailored to your unique business needs." },
    { title: "Ethical AI", description: "We are committed to building responsible and ethical AI that is fair, transparent, and secure." },
];

const faqs = [
    { question: "How can AI benefit my business?", answer: "AI can help you automate repetitive tasks, gain deeper insights from your data, personalize customer experiences, and make more accurate predictions to drive growth." },
    { question: "What kind of data do I need for an AI project?", answer: "The data required depends on the project, but typically, high-quality, relevant data is essential. We can help you with data strategy and collection." },
    { question: "How long does it take to implement an AI solution?", answer: "The timeline varies depending on the project's complexity. We work with you to establish a clear timeline and milestones from the outset." },
];

const portfolioProjects = [
  {
    client: "AI-Powered Sales Analytics",
    image: "https://picsum.photos/600/400",
    hint: "dashboard analytics",
    description: "An advanced analytics platform that uses AI to forecast sales trends and identify new opportunities.",
    link: "#",
  },
  {
    client: "Customer Service Chatbot",
    image: "https://picsum.photos/600/400",
    hint: "chatbot interface",
    description: "An intelligent chatbot that provides 24/7 customer support, improving response times and user satisfaction.",
    link: "#",
  },
];


export default function AiServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Innovative AI Services
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Leverage the power of Artificial Intelligence to automate processes, gain valuable insights, and create smarter business solutions.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Explore AI Solutions</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="artificial intelligence"
                alt="AI and machine learning concept"
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
              Unlock Your Business's Potential with AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Our AI experts develop custom solutions tailored to your specific business needs and challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="data analytics"
                    alt="Data visualization dashboard"
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
                      We help you integrate cutting-edge AI technologies to drive efficiency, innovation, and growth.
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our AI Development Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A streamlined approach to delivering powerful AI solutions.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Partner with Us for AI?</h2>
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
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Related AI Projects</h2>
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
                        <AccordionItem value={`item-${index}`} key={index} className="border-b border-primary/20 mb-4 group">
                            <AccordionTrigger className="p-6 hover:no-underline flex items-center justify-between text-left">
                                <span className="text-xl font-bold">{faq.question}</span>
                                <div className="h-10 w-10 border border-primary/50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                                    <ArrowRight className="h-6 w-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-90 group-hover:text-primary-foreground" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base p-6 pt-0">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Transform Your Business?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
                Let's explore how our AI services can give you a competitive edge.
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
