// src/components/ui/CopyButton.jsx
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}