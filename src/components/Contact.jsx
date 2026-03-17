import { useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.645, 0.045, 0.355, 1];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    const inputClass = "w-full px-5 py-3.5 bg-dark-800 border border-glass-border rounded text-accent text-[14px] placeholder:text-slate-dim/60 focus:outline-none focus:border-primary/35 focus:shadow-[0_0_0_2px_rgba(100,255,218,0.06)] transition-all duration-300 font-sans";

    return (
        <section id="contact" className="py-24 md:py-36">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="max-w-[560px] mx-auto text-center"
                >
                    <p className="font-mono text-primary text-[13px] mb-4 tracking-wider">05. What's Next?</p>
                    <h2 className="text-[38px] md:text-[46px] font-bold text-accent mb-5 tracking-[-0.03em] leading-[1.1]">
                        Get In Touch
                    </h2>
                    <p className="text-slate-muted text-[15px] leading-[1.8] mb-12">
                        I'm currently looking for new opportunities. Whether you have a question,
                        a project idea, or just want to say hi — my inbox is always open and I'll
                        do my best to get back to you.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.15, ease }}
                    onSubmit={handleSubmit}
                    className="max-w-[480px] mx-auto space-y-4"
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input
                            type="text" name="name" placeholder="Name" required
                            value={formData.name} onChange={handleChange}
                            className={inputClass}
                        />
                        <input
                            type="email" name="email" placeholder="Email" required
                            value={formData.email} onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                    <textarea
                        name="message" rows="6" placeholder="Message" required
                        value={formData.message} onChange={handleChange}
                        className={`${inputClass} resize-none`}
                    />
                    <button
                        type="submit"
                        className="w-full py-[14px] font-mono text-[13px] text-primary border border-primary rounded hover:bg-primary-dim transition-all duration-300 tracking-wider"
                    >
                        {submitted ? '✓ Message Sent!' : 'Say Hello →'}
                    </button>
                    {submitted && (
                        <motion.p
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary text-[13px] text-center font-mono tracking-wide"
                        >
                            Thanks — I'll reply soon.
                        </motion.p>
                    )}
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-4 mt-14 font-mono text-[11px] text-slate-dim tracking-wider"
                >
                    <a href="mailto:nagendrat1533@gmail.com" className="hover:text-primary transition-colors duration-200">
                        nagendrat1533@gmail.com
                    </a>
                    <span className="text-dark-600">|</span>
                    <a href="tel:+918688563229" className="hover:text-primary transition-colors duration-200">
                        +91 8688563229
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
