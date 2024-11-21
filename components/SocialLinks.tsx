// components/SocialLinks.tsx
export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-6">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
            >
                GitHub
            </a>
            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
            >
                LinkedIn
            </a>
            <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
            >
                Twitter
            </a>
        </div>
    );
}