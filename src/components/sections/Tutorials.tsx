import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const tutorials = [
  {
    title: "Automate competitor price monitoring",
    description: "Build an intelligent system that tracks competitor pricing in real-time, helping you stay competitive and responsive in your market. Perfect for e-commerce and SaaS businesses.",
    link: "https://bensbites.com/tutorial/automate-competitor-price-monitoring"
  },
  {
    title: "Set up AI phone agents for customer calls",
    description: "Create an AI-powered phone system that handles customer inquiries 24/7, significantly improving response times and conversion rates while maintaining a personal touch.",
    link: "https://bensbites.com/tutorial/set-up-ai-phone-agents-for-customer-calls"
  },
  {
    title: "Analyze competitors' social media with AI",
    description: "Develop an automated system that monitors and analyzes competitor social media strategies, giving you actionable insights for your own marketing efforts.",
    link: "https://bensbites.com/tutorial/analyze-competitors-social-media"
  },
  {
    title: "Build an AI-powered meeting management system",
    description: "Transform your meeting workflow with AI: automatic transcription, task extraction, and follow-up management in Notion. Save hours on meeting administration.",
    link: "https://bensbites.com/tutorial/build-an-ai-powered-meeting-management-system"
  },
  {
    title: "Create an automated customer reactivation system",
    description: "Build a smart system using Claude and Zapier that identifies and re-engages inactive customers through personalized outreach campaigns.",
    link: "https://bensbites.com/tutorial/create-an-automated-customer-reactivation-system"
  },
  {
    title: "Create consistent illustrations for your brand",
    description: "Implement an AI-powered system for generating on-brand illustrations that maintain consistency across all your marketing materials.",
    link: "https://bensbites.com/tutorial/create-consistent-illustrations-for-your-brand"
  }
];

export const Tutorials = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Featured Tutorials from Ben's Bites</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 ${
                index >= 4 ? 'hidden md:block' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {tutorial.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground">{tutorial.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};