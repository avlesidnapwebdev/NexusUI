import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

export default function Components() {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case "split":
        return <h2 className="text-5xl">S P L I T</h2>;

      case "circular":
        return <h2 className="text-5xl">◯ Circular</h2>;

      default:
        return (
          <h2 className="text-5xl font-semibold">
            Isn't this so cool?!
          </h2>
        );
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {type} Text
      </h1>

      <div className="border border-white/10 rounded-xl p-10 text-center">
        {renderContent()}
      </div>
    </Layout>
  );
}