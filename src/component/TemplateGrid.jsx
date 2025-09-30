import React from 'react'
import TemplateGridCard from './TemplateGridCard'

const TemplateGrid = ({ items }) => {
    if (!items.length) {
        return <div className="bg-white border rounded p-6 text-center text-gray-500">No templates found for the selected filters.</div>;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {items.map((item) => (
                <TemplateGridCard key={item.id} item={item} />
            ))}
        </div>

    )
}

export default TemplateGrid