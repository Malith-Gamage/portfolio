import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Linkedin, Github, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xwlkwzlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setError(data.errors.map((err) => err.message).join(', '));
        } else {
          setError('Oops! There was a problem submitting your form.');
        }
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <MessageSquare className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an internship or job opportunity, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Contact Information
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                BSc (Hons) in Software Engineering Undergraduate at Sabaragamuwa University of Sri Lanka. Open for internships, software engineering roles, and project collaborations.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Email Direct</p>
                    <a href="mailto:wgmgeewinda@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      wgmgeewinda@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Phone / WhatsApp</p>
                    <a href="tel:+94767707507" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      +94 76 770 7507
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-white">
                      Monaragala, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Social Links</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Malith-Gamage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/malith-gamage-715b7b280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-sm">
                    Thank you! Your message has been sent successfully. I will get back to you shortly.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    id="contact-subject-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 disabled:opacity-50"
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
