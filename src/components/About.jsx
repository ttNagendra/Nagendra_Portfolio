import { motion } from 'framer-motion';
import profilePic from '../assets/profile1.jpg';

const ease = [0.645, 0.045, 0.355, 1];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-36">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="section-heading"
                    data-num="01"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease }}
                    >
                        <div className="space-y-5 text-slate-muted text-[15px] leading-[1.85]">
                            <p>
                                Hello! I'm Nagendra, a full stack developer based in{' '}
                                <span className="text-primary">Kurnool, Andhra Pradesh</span>. I specialize
                                in building scalable web applications using the MERN stack — MongoDB, Express.js,
                                React.js, and Node.js.
                            </p>
                            <p>
                                I graduated with a <span className="text-primary">B.Tech in Computer Science</span>{' '}
                                from G. Pullaiah College of Engineering and Technology (JNTU) with a{' '}
                                <span className="text-primary">CGPA of 8.17/10</span>. My focus has been on writing
                                clean, efficient code and building applications with strong foundations in
                                data structures, algorithms, and modern web architecture.
                            </p>
                            <p>
                                I've built production-ready applications featuring JWT authentication, REST APIs,
                                real-time dashboards, and responsive design. I've also explored machine learning
                                with Python and completed job simulations with{' '}
                                <span className="text-primary">BCG X</span> and{' '}
                                <span className="text-primary">Forage</span>.
                            </p>
                        </div>

                        <p className="text-slate-muted text-[15px] mt-6 mb-4">
                            Here are a few technologies I've been working with recently:
                        </p>

                        <ul className="grid grid-cols-2 gap-x-6 gap-y-[10px] font-mono text-[13px] list-none">
                            {[
                                'JavaScript (ES6+)',
                                'React.js / Next.js',
                                'Node.js / Express',
                                'MongoDB / SQLite',
                                'Python / Flask',
                                'Git / GitHub',
                                'REST APIs',
                                'Tailwind CSS',
                            ].map((skill) => (
                                <li key={skill} className="flex items-start gap-2.5 text-slate-muted leading-[1.6]">
                                    <span className="text-primary text-[11px] mt-[5px] shrink-0">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Profile image area */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.15, ease }}
                        className="relative group mx-auto md:mx-0 mt-4"
                    >
                        <div className="relative w-[250px] h-[250px] md:w-[270px] md:h-[270px]">
                            <div className="absolute inset-0 border-2 border-primary/60 rounded translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]" />
                            <div className="relative z-10 w-full h-full rounded bg-dark-800 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/[0.08] group-hover:bg-transparent transition-all duration-300 z-10 mix-blend-screen" />
                                <img
                                    src={profilePic}
                                    alt="Todkar Nagendra"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
