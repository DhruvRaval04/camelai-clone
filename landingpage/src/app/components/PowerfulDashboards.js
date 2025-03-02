// components/PowerfulDashboards.js
import Image from 'next/image';
import dashboard from '../assets/dashboard.webp';
export default function PowerfulDashboards() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 sm:mt-16 text-center pb-6 sm:pb-10">
          <div className="inline-block border border-dashed border-4 border-gray-400 rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-white">
            <code className="text-2xl sm:text-3xl md:text-4xl">
            <span className="mr-1">💡</span>
            <span className="text-2xl sm:text-3xl md:text-4xl">Powerful Dashboards</span>
            </code>
            
          </div>
          <p className="mt-4 text-white text-center text-sm sm:text-base">
            Save any graph to a live dashboard.<br />
            Start a chat to answer ad hoc questions.
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl mt-6 sm:mt-8">
          <Image
            src={dashboard}
            alt="Retention Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
