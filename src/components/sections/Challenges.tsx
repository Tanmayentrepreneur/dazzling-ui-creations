import { motion } from "framer-motion";

const challenges = [
  {
    title: "We've tried various AI tools, but they're just creating more work, not less.",
    description: "Let me guess - you've got a ChatGPT subscription, tried a few custom GPTs, maybe even built some basic automations. But instead of saving time, your team is now juggling multiple systems, double-checking AI outputs, and manually fixing errors. This is what happens when tools are adopted without strategy. We help you cut through the AI noise and build automation that actually reduces work."
  },
  {
    title: "Our processes are too complex for basic automation tools.",
    description: "\"Just use this no-code AI tool!\" they say. But your business isn't that simple, is it? You have custom workflows, specific compliance needs, and multiple systems interacting. We specialize in these scenarios, transforming complex processes into simple automations. Whether it's a 15-step approval workflow or a customer journey across six tools, we create solutions that manage complexity effortlessly. Your unique processes are not obstacles; they're opportunities for valuable automation."
  },
  {
    title: "I want to use AI, but I just don't have the time or team",
    description: "Your developers are busy building your product, your ops team is managing growth, and your customer service team is handling increasing support volume. You know AI could help, but who will build and manage it? That's where we come in. We take care of everything—from identifying the right processes to automate to building solutions that run smoothly in the background. While your sales team closes deals, our automation nurtures leads. You focus on what you do best, and we'll ensure AI works for you."
  }
];

export const Challenges = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Sound familiar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path fill="#f6e9ce" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};