
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const features = [
  "Data Entry & Management",
  "Virtual Assistant Services",
  "Customer Support & Helpdesk",
  "Bookkeeping & Accounting",
  "HR & Payroll Administration",
  "Content Moderation",
];

const processSteps = [
    { title: "Needs Analysis", description: "We conduct a thorough analysis of your back-office needs to identify areas where we can add the most value." },
    { title: "Process Design", description: "We design and document streamlined processes and workflows tailored to your business operations." },
    { title: "Team Onboarding", description: "We train and onboard a dedicated team of professionals to manage your back-office tasks efficiently." },
    { title: "Performance & Reporting", description: "We provide regular performance reports and hold review meetings to ensure quality and continuous improvement." },
];

const whyChooseUs = [
    { title: "Increased Efficiency", description: "Free up your core team to focus on strategic initiatives by outsourcing time-consuming back-office tasks." },
    { title: "Cost Savings", description: "Reduce operational costs by leveraging our skilled and cost-effective back-office support services." },
    { title: "Scalability & Flexibility", description: "Our services are scalable and flexible, allowing you to adapt to changing business needs without the overhead." },
];

const faqs = [
    { question: "What kind of businesses can benefit from back-office services?", answer: "Businesses of all sizes, from startups to large enterprises, can benefit from outsourcing back-office tasks to improve efficiency, reduce costs, and focus on growth." },
    { question: "Is my data secure?", answer: "Absolutely. We adhere to strict data security protocols and confidentiality agreements to ensure your business information is always protected." },
    { question: "Can you customize your services to my specific needs?", answer: "Yes, we pride ourselves on providing tailored solutions. We work closely with you to understand your specific requirements and create a customized service plan." },
];

const portfolioProjects = [
  {
    client: "Startup Operations Support",
    image: "https://picsum.photos/600/400",
    hint: "team working office",
    description: "Provided comprehensive back-office support for a fast-growing startup, including data management and customer service.",
    link: "#",
  },
  {
    client: "E-commerce Order Processing",
    image: "https://picsum.photos/600/400",
    hint: "warehouse logistics",
    description: "Managed order processing and inventory management for a high-volume e-commerce store, ensuring timely fulfillment.",
    link: "#",
  },
];


export default function BackOfficePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                Efficient Back Office Services
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Streamline your operations, reduce costs, and free up your team to focus on growth with our reliable and professional back-office support services.
              </p>
              <Button asChild size="lg" variant="glitch">
                <Link href="/contact">Optimize Your Operations</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/500"
                data-ai-hint="office administration"
                alt="Back office support concept"
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
              Focus on What Matters Most
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Let our expert team handle your essential but time-consuming back-office tasks with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://picsum.photos/600/700"
                    data-ai-hint="business process"
                    alt="Business process flowchart"
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
                      Our reliable back-office solutions help you save time and money while improving operational efficiency.
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Back Office Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">A seamless approach to integrating with your team.</p>
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Back Office Support?</h2>
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
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">Case Studies</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Ready to Improve Your Efficiency?</h2>
            <p className="max-w-[600px] mt-4 mb-8 text-lg">
              Let's discuss how our back-office services can support your business goals.
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
