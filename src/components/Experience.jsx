import { motion } from 'framer-motion';

const ease = [0.645, 0.045, 0.355, 1];

const experiences = [
    {
        role: 'Front-End Software Engineering Simulation',
        company: 'Forage',
        period: '2025',
        points: [
            'Completed front-end engineering job simulation focused on modern web development practices',
            'Built responsive interfaces and applied software engineering principles at scale',
        ],
    },
    {
        role: 'Generative AI Job Simulation',
        company: 'BCG X',
        period: '2025',
        points: [
            'Built an AI-powered financial chatbot using Python and financial data analysis',
            'Gained hands-on experience with generative AI, NLP, and data-driven applications',
        ],
    },
    {
        role: 'Full Stack Web Developer',
        company: 'Personal Projects',
        period: '2026 — Present',
        points: [
            'Designed and built multiple production-ready web applications using the MERN stack',
            'Implemented JWT authentication, RESTful APIs, and real-time dashboards',
            'Achieved 100/100 Lighthouse performance score on e-commerce project',
            'Reduced server response time by 40% through API and database optimization',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-36">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="section-heading"
                    data-num="04"
                >
                    Where I've Worked
                </motion.h2>

                <div className="max-w-[680px]">
                    {/* Left border timeline */}
                    <div className="relative border-l border-dark-600 pl-8 md:pl-10 space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.4, delay: i * 0.1, ease }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(2.5rem+5px)] top-[7px] w-[10px] h-[10px] rounded-full bg-dark-950 border-2 border-primary" />

                                <h3 className="text-[15px] md:text-base font-semibold text-accent leading-snug">
                                    {exp.role}{' '}
                                    <span className="text-primary font-medium">@ {exp.company}</span>
                                </h3>
                                <p className="font-mono text-slate-dim text-[12px] mt-1.5 mb-4 tracking-wider">{exp.period}</p>
                                <ul className="space-y-2.5">
                                    {exp.points.map((point, j) => (
                                        <li key={j} className="flex gap-3 text-[13px] md:text-[14px] text-slate-muted leading-[1.75]">
                                            <span className="text-primary mt-[6px] shrink-0 text-[10px]">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
