// src/components/ui/ScrollToTopDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const PreviewScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 150);
      };

      const container = document.getElementById("preview-scroll");

      if (container) {
        container.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

    const scrollToTop = () => {
      const container = document.getElementById("preview-scroll");
      container?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div
        id="preview-scroll"
        className="relative w-full max-w-md h-[300px] overflow-y-auto scrollbar-hide border border-white/10 rounded-lg p-4"
      >
        {/* Content */}
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-24 bg-white/5 rounded-lg flex items-center justify-center text-sm text-gray-400"
            >
              Section {i + 1}
            </div>
          ))}
        </div>

        {/* Button */}
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            className="sticky bottom-4 float-right mr-4 p-2 rounded-full bg-purple-500 text-white shadow-lg"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <DocsTemplate
      title="Scroll To Top Button"
      preview={<PreviewScrollToTop />}
      installCode={`npm install framer-motion lucide-react`}
      usageCode={`import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div style={{ height: "100vh" }} />
    </>
  );
}`}
      componentCode={
        `import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const PreviewScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        setIsVisible(scrollTop > 150);
      };

      const container = document.getElementById("preview-scroll");

      if (container) {
        container.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

    const scrollToTop = () => {
      const container = document.getElementById("preview-scroll");
      container?.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div
        id="preview-scroll"
        className="relative w-full max-w-md h-[300px] overflow-y-auto scrollbar-hide border border-white/10 rounded-lg p-4"
      >
        {/* Content */}
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-24 bg-white/5 rounded-lg flex items-center justify-center text-sm text-gray-400"
            >
              Section {i + 1}
            </div>
          ))}
        </div>

        {/* Button */}
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            className="sticky bottom-4 float-right mr-4 p-2 rounded-full bg-purple-500 text-white shadow-lg"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </div>
    );
  };
`}
    />
  );
}
