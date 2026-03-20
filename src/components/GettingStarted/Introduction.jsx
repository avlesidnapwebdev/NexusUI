export default function Introduction() {
  return (
    <div className="max-w-4xl">

      <h1 className="text-4xl font-bold mb-6">Introduction</h1>

      <p className="text-gray-400 mb-6">
        Nexus UI is a modern, component-based UI library designed for developers 
        who want fast, beautiful, and reusable UI elements without complexity.
      </p>

      <p className="text-gray-400 mb-6">
        Unlike traditional UI frameworks, Nexus UI focuses on 
        <span className="text-white"> copy-paste simplicity</span>. 
        Every component is standalone, customizable, and built using 
        modern technologies like React and Tailwind CSS.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Nexus UI?</h2>

      <ul className="space-y-3 text-gray-400">
        <li>No installation required — just copy and paste</li>
        <li>Beautiful modern UI designs</li>
        <li>Fully reusable components</li>
        <li>Built for speed and performance</li>
        <li>Responsive and mobile-friendly</li>
        <li>Easy to understand and customize</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Philosophy</h2>

      <p className="text-gray-400 mb-6">
        Nexus UI follows a simple philosophy:
        <br />
        <span className="text-white">
          “Build fast. Copy smart. Customize freely.”
        </span>
      </p>

      <p className="text-gray-400">
        You don’t need heavy dependencies or complex setups. 
        Just pick a component, copy it into your project, 
        and make it yours.
      </p>

    </div>
  );
}