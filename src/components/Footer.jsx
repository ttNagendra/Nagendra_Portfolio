import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="py-8 text-center">
            {/* Mobile social links only */}
            <div className="flex items-center justify-center gap-7 mb-6 lg:hidden">
                <a href="https://github.com/nagendrat1533" target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-primary transition-colors duration-200" aria-label="GitHub">
                    <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/nagendrat1533" target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                </a>
                <a href="mailto:nagendrat1533@gmail.com" className="text-slate-muted hover:text-primary transition-colors duration-200" aria-label="Email">
                    <HiOutlineMail size={18} />
                </a>
            </div>
            <a
                href="https://github.com/nagendrat1533"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-slate-dim hover:text-primary transition-colors duration-200 tracking-wider"
            >
                Designed & Built by Todkar Nagendra
            </a>
        </footer>
    );
}
