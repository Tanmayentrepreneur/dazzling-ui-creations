import { motion } from "framer-motion";

const challenges = [
  {
    title: '"We\'ve tried various AI tools, but they\'re just creating more work, not less."',
    description: "Let me guess - you've got a ChatGPT subscription, tried a few custom GPTs, maybe even built some basic automations. But instead of saving time, your team is now juggling multiple systems, double-checking AI outputs, and manually fixing errors. This is what happens when tools are adopted without strategy. We help you cut through the AI noise and build automation that actually reduces work."
  },
  {
    title: '"Our processes are too complex for basic automation tools."',
    description: "\"Just use this no-code AI tool!\" they say. But your business isn't that simple, is it? You have custom workflows, specific compliance needs, and multiple systems interacting. We specialize in these scenarios, transforming complex processes into simple automations. Whether it's a 15-step approval workflow or a customer journey across six tools, we create solutions that manage complexity effortlessly. Your unique processes are not obstacles; they're opportunities for valuable automation."
  },
  {
    title: '"I want to use AI, but I just don\'t have the time or team"',
    description: "Your developers are busy building your product, your ops team is managing growth, and your customer service team is handling increasing support volume. You know AI could help, but who will build and manage it? That's where we come in. We take care of everything—from identifying the right processes to automate to building solutions that run smoothly in the background. While your sales team closes deals, our automation nurtures leads. You focus on what you do best, and we'll ensure AI works for you."
  }
];

export const Challenges = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-12">Sound familiar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-2xl h-full flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};