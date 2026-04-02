import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

function BehanceIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8.69 11.697c.488-.237.894-.566 1.216-.986.322-.42.483-.95.483-1.589 0-.79-.2-1.433-.6-1.928-.399-.495-.93-.837-1.593-1.025a5.154 5.154 0 0 0-1.286-.164H2v12h5.108c.674 0 1.277-.084 1.81-.253.533-.168.982-.415 1.35-.738.367-.325.648-.731.844-1.22.195-.487.293-1.053.293-1.697 0-.765-.162-1.41-.486-1.934a3.165 3.165 0 0 0-1.229-1.166zM4.56 8.14h2.24c.382 0 .692.096.929.29.237.193.356.51.356.95 0 .475-.119.804-.356.987-.237.184-.547.276-.929.276H4.56V8.14zm2.536 7.725H4.56v-3.148h2.536c.482 0 .861.126 1.136.378.275.252.413.647.413 1.187 0 .529-.138.926-.413 1.19-.275.262-.654.393-1.136.393zM14.06 8.7h5.88v1.43h-5.88zM18.236 11.345c-.86 0-1.588.139-2.185.417-.597.278-1.084.654-1.462 1.129a4.57 4.57 0 0 0-.836 1.623 6.785 6.785 0 0 0-.265 1.89c0 .644.091 1.253.274 1.826.183.573.468 1.072.856 1.497.387.425.88.762 1.478 1.011.599.25 1.312.375 2.141.375 1.16 0 2.12-.27 2.88-.81.758-.54 1.262-1.35 1.512-2.431h-2.361c-.086.303-.287.588-.603.853-.316.267-.773.4-1.369.4-.658 0-1.163-.164-1.517-.49-.354-.326-.558-.86-.612-1.601H22.8c.043-.701-.01-1.375-.16-2.024a4.72 4.72 0 0 0-.701-1.717 3.642 3.642 0 0 0-1.413-1.194c-.58-.292-1.344-.438-2.29-.438zm-2.055 3.59c.011-.197.053-.412.127-.645.075-.232.19-.448.346-.645.156-.198.36-.365.612-.501.253-.136.568-.204.946-.204.572 0 1.003.15 1.293.45.291.3.477.816.557 1.545h-3.881z" />
    </svg>
  );
}

export function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitError('');

      const response = await fetch('https://formsubmit.co/ajax/koushikamahendran2003@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from portfolio contact form',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit form.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch {
      setSubmitError('Could not send your message right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'koushikamahendran2003@gmail.com',
      link: 'mailto:koushikamahendran2003@gmail.com',
      color: '#C4B5FD',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: '/in/koushika1312',
      link: 'https://www.linkedin.com/in/koushika1312/',
      color: '#B8D4E8',
    },
    {
      icon: <BehanceIcon className="h-6 w-6" />,
      label: 'Behance',
      value: '/koushika',
      link: 'https://www.behance.net/koushika',
      color: '#A8D5BA',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-[#FAFAF9] via-[#F5F3EF] to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(196, 181, 253, 0.08) 0%, transparent 70%)',
          y,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 213, 186, 0.08) 0%, transparent 70%)',
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.span
              className="text-[2.5rem] sm:text-[3rem] bg-gradient-to-r from-[#C4B5FD] via-[#B8D4E8] to-[#A8D5BA] bg-clip-text text-transparent inline-block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring', delay: 0.1 }}
            >
              Get In Touch
            </motion.span>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#C4B5FD] to-[#A8D5BA] mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-[#9CA3AF] max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Open to UI/UX, graphic design, and prompt-based frontend collaboration opportunities.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-[#374151] mb-3">Let's work together</h3>
                <p className="text-[#9CA3AF] mb-4 leading-relaxed">
                  I help teams build clear and user-friendly digital experiences. If you need support with
                  interface design, user flows, visual communication, or AI-assisted frontend workflows,
                  I would love to discuss your project.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E8E6E1] hover:border-[#C4B5FD]/50 hover:shadow-xl hover:shadow-[#C4B5FD]/10 transition-all group"
                  >
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${info.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div style={{ color: info.color }}>
                        {info.icon}
                      </div>
                    </motion.div>
                    <div>
                      <div className="text-[#9CA3AF] text-[0.9rem]">{info.label}</div>
                      <div className="text-[#374151]">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-br from-[#C4B5FD]/10 via-[#B8D4E8]/10 to-[#A8D5BA]/10 p-5 rounded-2xl border border-[#C4B5FD]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-[#374151] mb-3">Available for</h4>
                <ul className="space-y-2.5">
                  {['UI/UX Design', 'Graphic Design', 'Wireframing and Prototyping', 'Prompt-based Frontend Collaboration'].map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3 text-[#374151]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      >
                        <CheckCircle className="h-5 w-5 text-[#A8D5BA]" />
                        <span className="text-[0.95rem]">{item}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-[#E8E6E1]"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="flex flex-col items-center justify-center h-full min-h-[350px] text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <CheckCircle className="h-20 w-20 text-[#A8D5BA] mb-6" />
                  </motion.div>
                  <h3 className="text-[#374151] mb-3">Message Sent!</h3>
                  <p className="text-[#9CA3AF]">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-2 border-[#E8E6E1] focus:border-[#C4B5FD] bg-white/50"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2 border-[#E8E6E1] focus:border-[#C4B5FD] bg-white/50"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="mt-2 min-h-[150px] border-[#E8E6E1] focus:border-[#C4B5FD] bg-white/50"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#C4B5FD] to-[#B8D4E8] hover:from-[#B8A5ED] hover:to-[#A8C4D8] text-[#374151] shadow-lg shadow-[#C4B5FD]/30"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {submitError && (
                    <p className="text-[0.85rem] text-red-500 text-center">
                      {submitError}
                    </p>
                  )}

                  <p className="text-[0.85rem] text-[#9CA3AF] text-center">
                    Demo form is active and submits via FormSubmit.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}