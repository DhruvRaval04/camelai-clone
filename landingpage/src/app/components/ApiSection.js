// components/ApiSection.js
import Link from 'next/link';

export default function ApiSection() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to build with camelAI?
            </h2>
            <p className="text-white text-xl mb-8">
              Embed AI-powered analytics directly in your application with our API
            </p>
            <Link href="#" className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100">
              Join API Waitlist
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Natural Language → SQL</h3>
              <p className="text-gray-400">Same powerful query engine that powers camelAI</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Secure Integration</h3>
              <p className="text-gray-400">Enterprise-grade security and permissions</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Flexible Integration</h3>
              <p className="text-gray-400">Full control over the user experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
