import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Randzy</h3>
          <p className="text-gray-300">Your go-to platform for random tools and generators.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link href="/tools" className="block hover:text-blue-300">All Tools</Link>
            <Link href="/random-number" className="block hover:text-blue-300">Random Number</Link>
            <Link href="/name-picker" className="block hover:text-blue-300">Name Picker</Link>
          </nav>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="space-y-2">
            <Link href="/about" className="block hover:text-blue-300">About Us</Link>
            <Link href="/contact" className="block hover:text-blue-300">Contact</Link>
            <Link href="/privacy" className="block hover:text-blue-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Randzy.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}