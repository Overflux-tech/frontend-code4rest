import React from "react";
import TemplateCard from "./TemplateCard";

export default function TemplateList({ items }) {
  if (!items.length) {
    return <div className="bg-white border rounded p-6 text-center text-gray-500">No templates found for the selected filters.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((t) => (
        <TemplateCard key={t.id} item={t} />
      ))}
    </div>
  );
}
