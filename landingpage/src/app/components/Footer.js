// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../assets/main-camelai.webp';
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Image src={mainLogo} alt="CamelAI Logo" width={120} height={40} />
            <p className="mt-4 text-gray-300 text-sm">
              The AI Data Analyst. Ask questions, get instant charts and insights from your data.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-base text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-base text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/docs" className="text-base text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-base text-gray-300 hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-base text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} camelAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
