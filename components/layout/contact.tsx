"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

const MAX_LENGTH = {
  name: 50,
  email: 100,
  subject: 100,
  message: 1000,
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RATE_LIMIT_MINUTES = 1;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Simple rate limit: store last sent time in localStorage per email
  function canSend(email: string) {
    if (typeof window === 'undefined') return true;
    const key = `contact_last_sent_${email}`;
    const lastSent = localStorage.getItem(key);
    if (!lastSent) return true;
    const diff = Date.now() - parseInt(lastSent, 10);
    return diff > RATE_LIMIT_MINUTES * 60 * 1000;
  }

  function setLastSent(email: string) {
    if (typeof window === 'undefined') return;
    const key = `contact_last_sent_${email}`;
    localStorage.setItem(key, Date.now().toString());
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (form.name.length > MAX_LENGTH.name || form.email.length > MAX_LENGTH.email || form.subject.length > MAX_LENGTH.subject || form.message.length > MAX_LENGTH.message) {
      setError('One or more fields are too long.');
      return;
    }
    if (!canSend(form.email)) {
      setError(`You can only send one message per ${RATE_LIMIT_MINUTES} minute(s). Please wait before sending again.`);
      return;
    }

    setLoading(true);
    // Insert into Supabase
    const { error: supabaseError } = await supabase.from('contacts').insert([
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    ]);
    setLoading(false);
    if (supabaseError) {
      setError('Failed to send message. Please try again later.');
      return;
    }
    setSuccess('Message sent successfully!');
    setLastSent(form.email);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="w-full overflow-x-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10 px-4 py-2 mb-6">
                Get In Touch
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Feel free to reach out if you&apos;d like to collaborate on a project, 
                  discuss potential opportunities, or just want to say hello!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-neutral-400">mbaye.diao@example.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-neutral-400">Dakar, Senegal</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Link href="https://github.com/mbadiao" target="_blank">
                    <div className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group">
                      <Github className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com/in/mbaye-diao" target="_blank">
                    <div className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group">
                      <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                  </Link>
                  <Link href="https://twitter.com/mbadiao" target="_blank">
                    <div className="p-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-emerald-400/50 rounded-lg transition-all duration-300 group">
                      <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
                {success && <div className="mb-4 text-emerald-400 text-sm">{success}</div>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        maxLength={MAX_LENGTH.name}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400/50 transition-colors duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        maxLength={MAX_LENGTH.email}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400/50 transition-colors duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={form.subject}
                      onChange={handleChange}
                      maxLength={MAX_LENGTH.subject}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400/50 transition-colors duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={MAX_LENGTH.message}
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400/50 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-neutral-400 text-sm">
              I typically respond within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;