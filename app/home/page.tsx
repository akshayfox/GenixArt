"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ImagePlus, Wand2, Zap, ChevronRight, Image } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute top-0 -left-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-0 -right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-blue-500" />
                <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  AI-POWERED IMAGE GENERATION
                </span>
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Transform Your Imagination
                <br />Into Stunning Reality
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Create breathtaking visuals instantly with our advanced AI. Turn your ideas into 
                masterpieces with just a few clicks.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button className="px-8 py-6 btn-gradient-lg rounded-xl">
                  <span className="flex items-center gap-2">
                    Start Creating <ChevronRight className="h-4 w-4" />
                  </span>
                </Button>
                <Button variant="outline" className="px-8 py-6 border-gray-700 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl">
                  View Gallery
                </Button>
              </div>
            </motion.div>

            {/* Example Images Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mt-20"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-2"
                >
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Image className="w-8 h-8 text-white/30" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <ImagePlus className="h-6 w-6" />,
                  title: "Advanced Generation",
                  description: "Create stunning images with our state-of-the-art AI models"
                },
                {
                  icon: <Wand2 className="h-6 w-6" />,
                  title: "Style Control",
                  description: "Fine-tune your creations with precise style controls"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Instant Results",
                  description: "Get your images in seconds with our optimized pipeline"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 p-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Create?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of creators using our AI to bring their ideas to life.
            </p>
            <Button className="px-8 py-6 btn-gradient-lg rounded-xl">
              Get Started Now
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Page;