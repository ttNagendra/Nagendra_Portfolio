import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ease = [0.645, 0.045, 0.355, 1];

const certifications = [
    { title: 'Front-End Software Engineering Job Simulation', issuer: 'Forage' },
    { title: 'Generative AI Job Simulation', issuer: 'BCG X' },
    { title: 'Web Development Fundamentals', issuer: 'IBM SkillsBuild' },
    { title: 'Machine Learning with Python', issuer: 'IBM' },
    { title: "CS50's Introduction to Programming with Python", issuer: 'HarvardX' },
];

export default function Certifications() {
    return (
        <section className="py-16 md:py-24">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="section-heading"
                    data-num="05"
                >
                    Certifications
                </motion.h2>

                <div className="max-w-[680px]">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.06, ease }}
                            className="group flex items-start justify-between gap-4 py-4 border-b border-glass-border last:border-0 hover:bg-dark-800/40 px-4 -mx-4 rounded transition-all duration-200 cursor-default"
                        >
                            <div>
                                <h3 className="text-[14px] font-medium text-accent group-hover:text-primary transition-colors duration-200 leading-snug">
                                    {cert.title}
                                </h3>
                                <p className="font-mono text-[11px] text-slate-dim mt-1.5 tracking-wider">{cert.issuer}</p>
                            </div>
                            <FaExternalLinkAlt className="text-slate-dim group-hover:text-primary shrink-0 mt-1 transition-colors duration-200" size={11} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3, ease }}
                    className="mt-10"
                >
                    <a
                        href="https://drive.google.com/drive/folders/1GfF2AlwO5jrDyZ89iOWtUEpnpO-R12c_?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-7 py-[14px] font-mono text-[13px] text-primary border border-primary rounded hover:bg-primary-dim transition-all duration-300 tracking-wider"
                    >
                        View All Certificates
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
