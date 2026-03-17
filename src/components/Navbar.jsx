import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { num: '01', name: 'About', href: '#about' },
    { num: '02', name: 'Skills', href: '#skills' },
    { num: '03', name: 'Projects', href: '#projects' },
    { num: '04', name: 'Experience', href: '#experience' },
    { num: '05', name: 'Contact', href: '#contact' },
];

const ease = [0.645, 0.045, 0.355, 1];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-dark-950/85 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]'
                : 'bg-transparent'
                }`}
        >
            <nav className="flex items-center justify-between h-[76px] px-6 sm:px-10 md:px-12 max-w-[1400px] mx-auto">
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => handleClick(e, '#')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="group"
                >
                    <div className="w-[42px] h-[42px] rounded border-[1.5px] border-primary flex items-center justify-center font-mono text-[13px] text-primary font-semibold tracking-wider group-hover:bg-primary-dim group-hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] transition-all duration-300">
                        TN
                    </div>
                </motion.a>

                {/* Desktop nav */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="hidden md:flex items-center gap-1"
                >
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="px-3.5 py-2 text-[13px] font-mono text-slate-muted hover:text-primary transition-colors duration-200 tracking-wide"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <span className="text-primary">{link.num}.</span>{' '}
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1XNJ5dyvaB2wi-hDRInKKmjJxiKFtUDsR/view?usp=drive_link"
                        target="_blank"
                        className="ml-4 px-5 py-2.5 text-[13px] font-mono text-primary border border-primary rounded hover:bg-primary-dim transition-all duration-200 tracking-wide"
                    >
                        Resume
                    </a>
                </motion.div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-primary p-2 hover:bg-primary-dim rounded transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
                </button>
            </nav>

            {/* Mobile panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm md:hidden z-40"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[min(70vw,360px)] bg-dark-900 z-50 flex flex-col items-center justify-center gap-8 shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)]"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.06 }}
                                    className="font-mono text-[15px] text-accent hover:text-primary transition-colors duration-200"
                                >
                                    <span className="block text-primary text-xs mb-1 text-center">{link.num}.</span>
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-2 px-8 py-3 text-sm font-mono text-primary border border-primary rounded hover:bg-primary-dim transition-all duration-200"
                            >
                                Resume
                            </motion.a>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
