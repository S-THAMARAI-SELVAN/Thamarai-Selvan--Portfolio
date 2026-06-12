import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!form.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F6F8FA] dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-10">
          <Mail size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Direct contact column */}
          <motion.div
            className="md:col-span-5 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-bold text-[#24292F] dark:text-[#E6EDF3] mb-4">
                Let's stay connected
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#57606A] dark:text-[#8B949E] mb-6">
                Feel free to email me, check out my code repositories on GitHub, or connect with me on LinkedIn. I am always open to discuss development opportunities!
              </p>

              {/* Direct links */}
              <div className="space-y-3">
                <a
                  href="mailto:thamaraiselvansubbiah@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-colors group"
                >
                  <Mail size={16} className="text-[#0969DA] dark:text-[#58A6FF]" />
                  <span className="text-xs font-semibold text-[#24292F] dark:text-[#E6EDF3] group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF] truncate">
                    thamaraiselvansubbiah@gmail.com
                  </span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-colors group"
                >
                  <Github size={16} className="text-[#57606A] dark:text-[#8B949E]" />
                  <span className="text-xs font-semibold text-[#24292F] dark:text-[#E6EDF3] group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF]">
                    github.com (GitHub Profile)
                  </span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-colors group"
                >
                  <Linkedin size={16} className="text-[#0969DA] dark:text-[#58A6FF]" />
                  <span className="text-xs font-semibold text-[#24292F] dark:text-[#E6EDF3] group-hover:text-[#0969DA] dark:group-hover:text-[#58A6FF]">
                    linkedin.com (LinkedIn Profile)
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] p-6 shadow-github-sm dark:shadow-github-dark-sm">
              {submitted ? (
                <div className="text-center py-8 flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 size={32} className="text-[#1a7f37] dark:text-[#3FB950] mb-2" />
                  <h4 className="text-base font-bold text-[#24292F] dark:text-[#E6EDF3]">Message sent!</h4>
                  <p className="text-xs text-[#57606A] dark:text-[#8B949E] max-w-xs">
                    Thank you. I'll read your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-bold bg-[#F6F8FA] hover:bg-[#D0D7DE]/30 dark:bg-[#0D1117] dark:hover:bg-[#30363D] border border-[#D0D7DE] dark:border-[#30363D] text-[#24292F] dark:text-[#E6EDF3]"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-[#57606A] dark:text-[#8B949E]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border bg-[#F6F8FA] dark:bg-[#0D1117] text-sm text-[#24292F] dark:text-[#E6EDF3] focus:outline-none focus:ring-1 focus:ring-[#0969DA] dark:focus:ring-[#58A6FF] transition-all ${
                        errors.name ? 'border-red-500' : 'border-[#D0D7DE] dark:border-[#30363D]'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-[#57606A] dark:text-[#8B949E]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border bg-[#F6F8FA] dark:bg-[#0D1117] text-sm text-[#24292F] dark:text-[#E6EDF3] focus:outline-none focus:ring-1 focus:ring-[#0969DA] dark:focus:ring-[#58A6FF] transition-all ${
                        errors.email ? 'border-red-500' : 'border-[#D0D7DE] dark:border-[#30363D]'
                      }`}
                      placeholder="Your email address"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold text-[#57606A] dark:text-[#8B949E]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border bg-[#F6F8FA] dark:bg-[#0D1117] text-sm text-[#24292F] dark:text-[#E6EDF3] focus:outline-none focus:ring-1 focus:ring-[#0969DA] dark:focus:ring-[#58A6FF] transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#D0D7DE] dark:border-[#30363D]'
                      }`}
                      placeholder="Write your message here"
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Primary submit with border-radius: 12px */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-[12px] text-xs font-bold uppercase tracking-wider bg-[#58A6FF] hover:bg-[#58A6FF]/80 text-white dark:bg-[#58A6FF] dark:hover:bg-[#58A6FF]/80 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
