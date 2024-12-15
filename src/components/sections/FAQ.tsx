import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if our processes change?",
    answer: "That's expected and exactly why we build flexibility into every automation. Unlike rigid solutions, our systems are modular and well-documented, making them easy to modify as your business evolves."
  },
  {
    question: "How quickly can we implement automation?",
    answer: "You can expect to see your first automation live within 2-3 weeks. We start with quick wins that show immediate ROI, then scale from there. Complex processes might take longer, but we'll always begin with something that delivers value fast. Our approach focuses on rapid implementation without sacrificing quality or reliability."
  },
  {
    question: "Do we have experience in your industry?",
    answer: "While we work across industries, what matters more is the process we're automating. Whether it's customer service, data analysis, or workflow automation, the principles remain similar. We bring fresh perspectives from diverse industries while quickly learning your specific needs. Many clients have found that cross-industry experience actually leads to more innovative solutions."
  },
  {
    question: "Do you need technical knowledge to maintain these automations?",
    answer: "No. Every solution comes with clear documentation and training for your team. More importantly, we ensure your team understands not just how to use the automation, but how to modify it as your needs change."
  },
  {
    question: "What happens after the automation is built?",
    answer: "We don't just build and disappear. Every project includes a handover process, team training, and documentation. We'll stick around to ensure everything runs smoothly and your team is confident in managing the system. Many clients choose to have regular check-ins where we optimize their automations based on real usage data and evolving needs."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-center">Some questions, some answers</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};