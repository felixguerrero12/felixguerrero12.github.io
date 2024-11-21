// components/Header.tsx
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaRss } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
            <nav className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <ul className="flex gap-6">
                        <li><Link href="/">Home</Link></li>
                        <a
                            href="/portfolio/resume.pdf"  // Add the repository name to the path
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </ul>

                    <ul className="flex gap-6">
                        <li>
                            <a
                                href="https://detectionsforcatchingbaddies.substack.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-600"
                            >
                                <FaRss />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/felixguerrero12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-600"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/felix-g-94bb4851/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-600"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/nulloop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-blue-600"
                            >
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}