import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ease = [0.645, 0.045, 0.355, 1];

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
});

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative bg-grid">
            {/* Subtle radial glow */}
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

            <div className="section-container py-28 md:py-36 lg:py-40">
                <motion.p
                    {...fadeUp(0.6)}
                    className="font-mono text-primary text-sm mb-7 tracking-wider"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    {...fadeUp(0.75)}
                    className="text-[clamp(36px,7vw,68px)] font-extrabold text-accent leading-[1.08] tracking-[-0.03em]"
                >
                    Todkar Nagendra.
                </motion.h1>

                <motion.h2
                    {...fadeUp(0.9)}
                    className="text-[clamp(28px,5.5vw,52px)] font-bold text-slate-dim leading-[1.08] mt-3 tracking-[-0.02em]"
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    {...fadeUp(1.05)}
                    className="max-w-[520px] text-slate-muted mt-8 text-[15px] md:text-base leading-[1.8]"
                >
                    I'm a full stack developer specializing in the{' '}
                    <span className="text-primary">MERN stack</span>. I design and build
                    scalable web applications with clean architecture, RESTful APIs, and
                    modern JavaScript frameworks — currently focused on crafting exceptional
                    digital experiences.
                </motion.p>

                <motion.div
                    {...fadeUp(1.2)}
                    className="mt-14"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 px-7 py-[14px] font-mono text-[13px] text-primary border border-primary rounded hover:bg-primary-dim transition-all duration-300 tracking-wider"
                    >
                        Check out my work
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                </motion.div>

                {/* Fixed social sidebar (desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="hidden lg:flex fixed bottom-0 left-10 xl:left-12 flex-col items-center gap-6 after:content-[''] after:w-px after:h-[90px] after:bg-slate-dim/60"
                >
                    {[
                        { icon: FaGithub, href: 'https://github.com/ttNagendra', label: 'GitHub' },
                        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/todkar-nagendra-33570125b/', label: 'LinkedIn' },
                        { icon: HiOutlineMail, href: 'mailto:nagendrat1533@gmail.com', label: 'Email' },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-slate-muted hover:text-primary hover:-translate-y-[3px] transition-all duration-200 text-lg"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </motion.div>

                {/* Fixed email sidebar (desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="hidden lg:flex fixed bottom-0 right-10 xl:right-12 flex-col items-center gap-6 after:content-[''] after:w-px after:h-[90px] after:bg-slate-dim/60"
                >
                    <a
                        href="mailto:nagendrat1533@gmail.com"
                        className="font-mono text-[11px] text-slate-muted hover:text-primary hover:-translate-y-[3px] transition-all duration-200 tracking-[0.15em]"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        nagendrat1533@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
