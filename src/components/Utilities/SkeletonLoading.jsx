// src/components/ui/SkeletonDocs.jsx

import DocsTemplate from "../ui/DocsTemplate";

export default function SkeletonLoading() {
  const SkeletonCard = () => {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full max-w-sm animate-pulse">
        {/* Image */}
        <div className="h-auto w-auto bg-white/10 rounded-lg mb-4" />

        {/* Title */}
        <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />

        {/* Text */}
        <div className="h-3 w-full bg-white/10 rounded mb-1" />
        <div className="h-3 w-5/6 bg-white/10 rounded mb-3" />

        {/* Button */}
        <div className="h-8 w-24 bg-white/10 rounded" />
      </div>
    );
  };

  return (
    <DocsTemplate
      title="Skeleton Loading"

      preview={
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      }

      installCode={`// No installation required (Tailwind CSS)`}

      usageCode={`import Skeleton from "./Skeleton";

export default function App() {
  const loading = true;

  return (
    <>
      {loading ? <Skeleton /> : <RealContent />}
    </>
  );
}`}

      componentCode={`export default function SkeletonCard() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full max-w-sm animate-pulse">
      
      {/* Image */}
      <div className="h-auto w-auto bg-white/10 rounded-lg mb-4" />

      {/* Title */}
      <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />

      {/* Text */}
      <div className="h-3 w-full bg-white/10 rounded mb-1" />
      <div className="h-3 w-5/6 bg-white/10 rounded mb-3" />

      {/* Button */}
      <div className="h-8 w-24 bg-white/10 rounded" />

    </div>
  );
}`}
    />
  );
}