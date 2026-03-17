import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const featuredProjects = [
    {
        title: 'JobVault',
        description:
            'A scalable job portal supporting 100+ job listings with JWT authentication and role-based dashboards. Designed RESTful APIs for job posting, application management, and user authentication. Optimized MongoDB schema for database performance.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/ttNagendra/jobvault',
        live: 'https://job-vault-virid.vercel.app/',
        year: '2026',
        align: 'left',
    },
    {
        title: 'ExpenseIQ',
        description:
            'Full stack expense tracking application with CRUD operations and category-based financial analytics. Real-time balance tracking dashboard to visualize income and expenses. Reduced server response time by 40% with optimized APIs.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/ttNagendra/expense-tracker',
        live: 'https://expense-iq-pearl.vercel.app/',
        year: '2025',
        align: 'right',
    },
];

const otherProjects = [
    {
        title: 'DMD Clothing',
        description: 'SEO-optimized React e-commerce storefront with reusable Tailwind components. Achieved 100/100 Google Lighthouse performance score.',
        tech: ['React', 'Tailwind CSS', 'Vite'],
        github: 'https://github.com/ttNagendra/dmd-clothing',
        live: 'https://dmd-clothing.vercel.app/',
    },
    {
        title: 'Restaurant & Hotel Website',
        description: 'Responsive restaurant website with hero image slider, reservation form, testimonials, and event showcase sections.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/ttNagendra/hotel-website',
        live: 'https://hotel-app-two-tau.vercel.app/',
    },
    {
        title: 'Face Mask Detection',
        description: 'Machine learning model that detects face masks using CNN. Trained on custom dataset with high accuracy for real-time detection.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
        github: 'https://github.com/ttNagendra/face-mask-detection',
        live: null,
    },
];

const ease = [0.645, 0.045, 0.355, 1];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-36">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="section-heading"
                    data-num="03"
                >
                    Things I've Built
                </motion.h2>

                {/* Featured projects */}
                <div className="space-y-24 mb-24">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, ease }}
                            className={`relative grid md:grid-cols-12 items-center gap-2`}
                        >
                            {/* Project image/placeholder */}
                            <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:col-start-6 md:row-start-1' : 'md:row-start-1'}`}>
                                <div className="relative rounded overflow-hidden bg-dark-800 aspect-[16/10] group">
                                    <div className="absolute inset-0 bg-primary/[0.06] group-hover:bg-transparent transition-all duration-500" />
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-[80px] font-extrabold text-dark-700/80 font-mono select-none tracking-widest">
                                            {project.title[0]}{project.title[1]}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project content */}
                            <div className={`md:col-span-6 md:row-start-1 relative z-10 ${i % 2 === 1 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'}`}>
                                <p className="font-mono text-primary text-[13px] mb-2 tracking-wider">
                                    Featured Project
                                </p>
                                <h3 className="text-[22px] md:text-[26px] font-bold text-accent mb-5 tracking-[-0.02em]">
                                    <a
                                        href={project.live || project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-primary transition-colors duration-200"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="bg-dark-800 rounded p-6 md:p-7 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] mb-5">
                                    <p className="text-slate-muted text-[14px] leading-[1.8]">
                                        {project.description}
                                    </p>
                                </div>
                                <ul className={`flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12px] text-slate-dim mb-4 ${i % 2 === 1 ? '' : 'md:justify-end'}`}>
                                    {project.tech.map((t) => (
                                        <li key={t} className="tracking-wide">{t}</li>
                                    ))}
                                </ul>
                                <div className={`flex items-center gap-4 ${i % 2 === 1 ? '' : 'md:justify-end'}`}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-200">
                                        <FaGithub size={19} />
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-200">
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other projects heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, ease }}
                    className="text-[22px] font-bold text-accent text-center mb-3 tracking-[-0.02em]"
                >
                    Other Noteworthy Projects
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center font-mono text-primary text-[13px] mb-10 tracking-wider"
                >
                    <a href="https://github.com/ttNagendra" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                        view the archive
                    </a>
                </motion.p>

                {/* Other project cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.1, ease }}
                            className="hover-card p-7 flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-7">
                                <FaFolder className="text-primary" size={36} />
                                <div className="flex items-center gap-3.5">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-200">
                                        <FaGithub size={18} />
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-200">
                                            <FaExternalLinkAlt size={15} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold text-accent mb-3 tracking-[-0.01em]">
                                <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors duration-200">
                                    {project.title}
                                </a>
                            </h4>
                            <p className="text-slate-muted text-[13px] leading-[1.7] mb-auto">
                                {project.description}
                            </p>
                            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-slate-dim mt-5">
                                {project.tech.map((t) => (
                                    <li key={t} className="tracking-wide">{t}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
