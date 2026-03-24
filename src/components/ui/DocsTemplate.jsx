// src/components/ui/DocsTemplate.jsx

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function DocsTemplate({
  title,
  preview,
  installCode,
  usageCode,
  componentCode,
}) {
  const [copied, setCopied] = useState("");

  const handleCopy = async (text, key) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="max-w-7xl space-y-10">
      {/* TITLE */}
      <h1 className="bg-[#0a0a0a] border border-white/10 rounded-lg p-5 w-full md:w-fit text-4xl font-bold">
        {title}
      </h1>

      {/* OUTPUT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Output</h2>
      </div>

      {/* PREVIEW BOX */}
      <div className="border border-white/10 rounded-2xl p-10 min-h-[300px] flex items-center justify-center bg-violet-100/5">
        {preview}
      </div>

      {/* INSTALL */}
      {installCode && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Install</h2>

          <div className="relative border border-white/10 rounded-xl p-4 bg-violet-100/5">
            <button
              onClick={() => handleCopy(installCode, "install")}
              className="absolute top-3 right-3"
            >
              {copied === "install" ? <Check size={16} /> : <Copy size={16} />}
            </button>

            <pre className="text-sm text-gray-300">
              <code>{installCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* USAGE */}
      {usageCode && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Usage</h2>

          <div className="relative border border-white/10 rounded-xl p-4 bg-violet-100/5">
            <button
              onClick={() => handleCopy(usageCode, "usage")}
              className="absolute top-3 right-3"
            >
              {copied === "usage" ? <Check size={16} /> : <Copy size={16} />}
            </button>

            <pre className="text-sm text-gray-300">
              <code>{usageCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* COMPONENT CODE */}
      {componentCode && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Code</h2>

          <div className="relative border border-white/10 rounded-xl p-4 bg-violet-100/5">
            <button
              onClick={() => handleCopy(componentCode, "component")}
              className="absolute top-3 right-3"
            >
              {copied === "component" ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}
            </button>

            <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words leading-relaxed">
              <code>{componentCode}</code>
            </pre>
          </div>
        </div>
      )}

      <div className="h-28"></div>
    </div>
  );
}
