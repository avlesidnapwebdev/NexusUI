export default function Documents() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>

      <p className="text-gray-400 mb-6">
        Nexus UI provides a collection of reusable UI components that can be
        easily integrated into any React project.
      </p>

      {/* Getting Started */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Getting Started</h2>

      <ol className="list-decimal ml-6 space-y-3 text-gray-400">
        <li>Create a React project (Vite / CRA)</li>
        <li>Install Tailwind CSS</li>
        <li>Browse Nexus UI components</li>
        <li>Copy the component code</li>
        <li>Paste into your project</li>
        <li>Customize styles and logic</li>
      </ol>

      {/* Usage */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Usage</h2>

      <p className="text-gray-400 mb-4">
        Each component is designed to be independent. You can directly copy the
        code and use it in your project.
      </p>

      <div className="bg-black border border-white/10 rounded-lg p-4 text-sm">
        <pre>
          {`import Button from "./Button";

export default function App() {
  return <Button />;
}`}
        </pre>
      </div>

      {/* Customization */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Customization</h2>

      <p className="text-gray-400 mb-4">
        All components are built with Tailwind CSS, making them easy to
        customize.
      </p>

      <ul className="space-y-3 text-gray-400">
        <li>Change colors using Tailwind classes</li>
        <li>Adjust spacing and sizing</li>
        <li>Modify animations and transitions</li>
        <li>Extend with your own logic</li>
      </ul>

      {/* Categories */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Component Categories
      </h2>

      <ul className="space-y-2 text-gray-400">
        <li>• Layout (Navbar, Sidebar, Skeleton)</li>
        <li>• Buttons (Glass, 3D, Gradient)</li>
        <li>• Cards (Flip, 3D, Sliding)</li>
        <li>• Forms (Inputs, Contact Forms)</li>
        <li>• Filters & Date Pickers</li>
        <li>• Notifications (Toasts)</li>
        <li>• Text Animations</li>
        <li>• Background Effects</li>
      </ul>

      {/* Best Practices */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Best Practices</h2>

      <ul className="space-y-3 text-gray-400">
        <li>✔ Keep components modular</li>
        <li>✔ Avoid unnecessary dependencies</li>
        <li>✔ Customize based on project needs</li>
        <li>✔ Optimize performance when needed</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Final Note</h2>

      <p className="text-gray-400">
        Nexus UI is built for developers who value speed, simplicity, and clean
        design. Whether you're building a portfolio, SaaS, or startup project,
        Nexus UI helps you move faster.
      </p>
    </div>
  );
}
