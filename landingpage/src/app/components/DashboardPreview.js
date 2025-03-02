// components/DashboardPreview.js
import Image from "next/image";
import demo from "../assets/demo.webp";

export default function DashboardPreview() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 sm:mt-16 text-center pb-6 sm:pb-10">
          <div className="inline-block border border-dashed border-4 border-gray-400 rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-white">
            <code className="text-2xl sm:text-3xl md:text-4xl">
              &lt;/&gt; Ask any question
            </code>
          </div>
          <p className="mt-4 text-white text-center text-sm sm:text-base">
            Camel uses your live data.
            <br />
            Get tables and charts instantly.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
          <Image
            src={demo}
            alt="User Activity Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
