export default function Footer() {
    return (

        <footer className="border-t border-white/10 py-8">

            <div className="mx-auto max-w-7xl text-center text-gray-500">

                © {new Date().getFullYear()} Jareth.
                Built with Next.js & Tailwind CSS.

            </div>

        </footer>

    );
}