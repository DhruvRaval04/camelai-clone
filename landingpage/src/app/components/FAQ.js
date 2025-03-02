// components/FAQ.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);
  
  const faqs = [
    {
      question: "How is my data stored?",
      answer: "camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our Security Policy and our security blog post.",
      links: [
        { text: "Security Policy", href: "#" },
        { text: "security blog post", href: "#" }
      ]
    },
    {
      question: "Do you train on my data?",
      answer: "No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training.",
      links: []
    },
    {
      question: "Are my app connections secure?",
      answer: "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest.",
      links: []
    },
    {
      question: "How do you pull my data?",
      answer: "camelAI only communicates with your connected apps when you request data in the chat. We do not access or store any data without your request and supervision.",
      links: []
    }
  ];
  
  return (
    <div className="py-16 bg-gradient-to-b from-[#0a0c10] to-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <motion.button
                onClick={() => setOpenItem(openItem === index ? -1 : index)}
                className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="pb-5 pr-12"
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                        {faq.answer.split(' and our ').map((part, i, arr) => {
                          if (i === 0 && faq.links.length > 0) {
                            return (
                              <span key={i}>
                                {part}
                                {faq.links.length > 0 && (
                                  <>
                                    {' and our '}
                                    <Link href={faq.links[0].href} className="text-blue-400 hover:underline">
                                      {faq.links[0].text}
                                    </Link>
                                  </>
                                )}
                              </span>
                            );
                          } else if (i === 1 && faq.links.length > 1) {
                            return (
                              <span key={i}>
                                <Link href={faq.links[1].href} className="text-blue-400 hover:underline">
                                  {part}
                                </Link>
                                {arr.length > 2 && arr.slice(2).join(' and our ')}
                              </span>
                            );
                          }
                          return <span key={i}>{part}</span>;
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
