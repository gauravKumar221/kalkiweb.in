import { Building, CheckCircle, Rocket } from "lucide-react";
const features = [
    {
        icon: <Building className="h-8 w-8 text-primary"/>,
        title: "Proven Performance",
        description: "Our clients experience significant growth in organic traffic through AI-structured content and summary-optimized keyword strategies.",
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary"/>,
        title: "Expert-Led Implementation",
        description: "100% of our AI SEO solutions are delivered by in-house specialists, ensuring precision, consistency, and real results.",
    },
    {
        icon: <Rocket className="h-8 w-8 text-primary"/>,
        title: "Advanced AI Tooling",
        description: "We leverage premium technical SEO audit tools, proprietary AI prompt frameworks, and advanced LLM-ranking methodologies to give you an edge.",
    },
];
export default function AiSeoSection() {
    return (<section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            AI-Powered SEO: Your Partner for Next-Generation Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            The world of Search Engine Optimization is evolving. AI-driven
            systems are reshaping how people discover information. Traditional
            SEO is no longer enough.
          </p>
          <p className="mt-4 text-muted-foreground">
            At Kalki Web, we merge proven digital marketing strategies with
            cutting-edge AI SEO. We use AI-powered content creation, schema
            markup, and intelligent automation to ensure your brand stands out
            in both human and AI-generated search results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <video src="/images videos/JESE_YEH_VEDIO_BNANI_HAI_HIGH_gwr_video_mvp.mp4" autoPlay loop muted playsInline className="w-full  h-auto     mx-auto object-cover"/>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">
              Why Brands Trust Our AI SEO Services:
            </h3>
            {features.map((feature, index) => (<div key={index} className="flex items-start gap-4">
                {/* <div className="flex-shrink-0">{feature.icon}</div> */}
                <div>
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p className="text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
