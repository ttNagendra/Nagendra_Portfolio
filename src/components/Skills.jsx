import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaWordpress, FaJava, FaDatabase
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiBootstrap, SiFlask, SiPostman, SiVercel, SiVite } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', icon: FaJs },
            { name: 'Python', icon: FaPython },
            { name: 'Java', icon: FaJava },
            { name: 'SQL', icon: FaDatabase },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', icon: FaReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'CSS3', icon: FaCss3Alt },
            { name: 'Tailwind', icon: SiTailwindcss },
            { name: 'Bootstrap', icon: SiBootstrap },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'Express', icon: SiExpress },
            { name: 'Flask', icon: SiFlask },
            { name: 'REST APIs', icon: FaNodeJs },
        ],
    },
    {
        title: 'Tools & Databases',
        skills: [
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Git', icon: FaGitAlt },
            { name: 'Postman', icon: SiPostman },
            { name: 'Vercel', icon: SiVercel },
            { name: 'Vite', icon: SiVite },
            { name: 'WordPress', icon: FaWordpress },
        ],
    },
];

const ease = [0.645, 0.045, 0.355, 1];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-36">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease }}
                    className="section-heading"
                    data-num="02"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillCategories.map((cat, catIndex) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.4, delay: catIndex * 0.1, ease }}
                            className="hover-card p-6"
                        >
                            <h3 className="font-mono text-primary text-[13px] mb-5 tracking-[0.05em] uppercase">
                                {cat.title}
                            </h3>
                            <div className="space-y-3.5">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 text-slate-muted text-[13px] hover:text-accent transition-colors duration-200 group/skill"
                                    >
                                        <skill.icon
                                            className="text-slate-dim group-hover/skill:text-primary transition-colors duration-200 shrink-0"
                                            size={15}
                                        />
                                        <span className="tracking-wide">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
