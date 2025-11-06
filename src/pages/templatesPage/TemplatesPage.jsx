import React, { useMemo, useState, useEffect } from "react";
import HeaderFilters from "../../component/HeaderFilters";
import Sidebar from "../../component/Sidebar";
import SortTabs from "../../component/SortTabs";
import TemplateList from "../../component/TemplateList";
import Pagination from "../../component/Pagination";
import TemplateGrid from "../../component/TemplateGrid";
import { useLocation } from "react-router-dom";
import api from "../../utils/axiosInstance";
import endPointApi from "../../utils/endPointApi";

const ALL_TEMPLATES = [
    {
        id: 1,
        title: "Face Serum — WordPress Responsive",
        category: "Cosmetics",
        themeType: "WordPress Theme",
        platform: "WordPress",
        description: "It’s the Concentrated Power Your Skin Craves, Packed With Nutrients And Hydration To Reveal A Radiant, Youthful Glow.",
        price: 39,
        oldPrice: 59,
        sales: 1524,
        rating: 4.8,
        updated: "2025-08-10",
        image: "/images/wordpress1.png"
    },
    {
        id: 2,
        title: "Halloween — WordPress Responsive",
        category: "Monster Party",
        themeType: "WordPress Theme",
        platform: "WordPress",
        description: "It’s A Celebration Of The Eerie, The Unknown, And The Chance To Laugh In The Face Of Fear.",
        price: 45,
        oldPrice: null,
        sales: 1254,
        rating: 4.6,
        updated: "2025-09-01",
        image: "/images/wordpress2.png"
    },
    {
        id: 3,
        title: "Lingerie Photography — WordPress Responsive",
        category: "Luxe Lingerie",
        themeType: "WordPress Theme",
        platform: "WordPress",
        description: "Beauty Begins The Moment You Decide To Be Yourself, And Lingerie Is The Perfect Expression Of That.",
        price: 39,
        oldPrice: null,
        sales: 3568,
        rating: 4.9,
        updated: "2025-07-22",
        image: "/images/wordpress3.png"
    },
    {
        id: 4,
        title: "Electric Scooter — WordPress Responsive",
        category: "Scooter",
        themeType: "WordPress Theme",
        platform: "WordPress",
        description: "It Gives Us The Freedom To Travel Effortlessly While Minimizing Our Environmental Impact.",
        price: 39,
        oldPrice: null,
        sales: 9562,
        rating: 4.7,
        updated: "2025-05-30",
        image: "/images/wordpress4.png"
    },
    {
        id: 5,
        title: "Real Estate Pro — HTML Responsive",
        category: "Real Estate",
        themeType: "HTML Theme",
        platform: "HTML",
        description: "Modern real estate HTML theme with listing and agent pages.",
        price: 24,
        oldPrice: 39,
        sales: 803,
        rating: 4.5,
        updated: "2025-09-10",
        image: "/images/wordpress1.png"
    },
    {
        id: 6,
        title: "Photography Portfolio — Shopify",
        category: "Photography",
        themeType: "Shopify Theme",
        platform: "Shopify",
        description: "A minimal Shopify theme designed for photographers and portfolios.",
        price: 49,
        oldPrice: 69,
        sales: 410,
        rating: 4.4,
        updated: "2025-06-28",
        image: "/images/wordpress4.png"
    },
    {
        id: 7,
        title: "Medical Clinic — WooCommerce",
        category: "Medical",
        themeType: "WooCommerce Theme",
        platform: "WooCommerce",
        description: "Professional theme for medical centres and clinics.",
        price: 59,
        oldPrice: 79,
        sales: 220,
        rating: 4.3,
        updated: "2025-04-11",
        image: "/images/wordpress3.png"
    },
    {
        id: 8,
        title: "Education LMS — HTML5",
        category: "Education",
        themeType: "HTML Theme",
        platform: "HTML",
        description: "HTML template optimized for online courses and LMS.",
        price: 29,
        oldPrice: null,
        sales: 610,
        rating: 4.2,
        updated: "2025-03-20",
        image: "/images/wordpress2.png"
    },
    {
        id: 9,
        title: "Restaurant — WordPress Responsive",
        category: "Food & Beverage",
        themeType: "WordPress Theme",
        platform: "WordPress",
        description: "Beautiful menus, reservation forms and gallery layouts.",
        price: 39,
        oldPrice: 49,
        sales: 1340,
        rating: 4.6,
        updated: "2025-01-07",
        image: "/images/wordpress3.png"
    },
    {
        id: 10,
        title: "Fashion Store — Shopify",
        category: "eCommerce",
        themeType: "Shopify Theme",
        platform: "Shopify",
        description: "A stylish Shopify theme for fashion and apparel stores.",
        price: 69,
        oldPrice: null,
        sales: 980,
        rating: 4.8,
        updated: "2025-09-15",
        image: "/images/wordpress1.png"
    },
];
export default function TemplatesPage() {
    const location = useLocation();
    const platformState = location.state?.platform || "";
    // Filters
    const [platforms, setPlatforms] = useState("WordPress");
    const [themes, setThemes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]); // not used heavily here
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [compatibleWith, setCompatibleWith] = useState([]);
    const [onSaleOnly, setOnSaleOnly] = useState(false);
    const [updatedRecentlyOnly, setUpdatedRecentlyOnly] = useState(false);

    // Sorting & pagination
    const [sortBy, setSortBy] = useState("best-seller");
    const [viewType, setViewType] = React.useState("list");
    const [currentPage, setCurrentPage] = useState(0);

    console.log('platformState', platformState)
    // Reset page when filters change
    useEffect(() => setCurrentPage(0), [platformState, selectedCategories, selectedFeatures, selectedColors, compatibleWith, onSaleOnly, updatedRecentlyOnly, sortBy]);

    // Filtering logic
    const filtered = useMemo(() => {
        const daysAgo = (d) => {
            const a = new Date();
            a.setDate(a.getDate() - d);
            return a;
        };

        let list = themes.filter((t) => {
            if (platformState && t.platform.toLowerCase() !== platformState.toLowerCase()) return false;
            if (selectedCategories.length && !selectedCategories.includes(t.platform)) return false;
            if (onSaleOnly && !t.isSaleOn) return false;
            if (updatedRecentlyOnly) {
                const updatedDate = new Date(t.updatedAt || t.updated);
                if (updatedDate < daysAgo(180)) return false;
            }
            return true;
        });

        // Sorting
        if (sortBy === "best-seller") list = list.sort((a, b) => b.sales - a.sales);
        else if (sortBy === "best-rated") list = list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        else if (sortBy === "latest") list = list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        return list;
    }, [themes, platformState, selectedCategories, onSaleOnly, updatedRecentlyOnly, sortBy]);


    // ✅ Reset page when view type changes
    useEffect(() => {
        setCurrentPage(0);
    }, [viewType]);

    // ✅ Items per page based on view type
    const ITEMS_PER_PAGE = viewType === "grid" ? 12 : 4;

    // ✅ Page count
    const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    // ✅ Current items
    const currentItems = useMemo(() => {
        const start = currentPage * ITEMS_PER_PAGE;

        // Prevent slicing beyond the array length
        if (start >= filtered.length) {
            return filtered.slice(0, ITEMS_PER_PAGE);
        }

        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, currentPage, ITEMS_PER_PAGE]);

    console.log('themes----------', themes)
    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const params = new URLSearchParams();
                if (selectedCategories) params.append("platform", selectedCategories.join(","));
                if (onSaleOnly) params.append("isSaleOn", true);
                if (compatibleWith.length) params.append("designSoftware", compatibleWith.join(","));

                const res = await api.get(`${endPointApi.getAllTab}?${params.toString()}`);
                setThemes(res.data);
            } catch (error) {
                console.error("Error fetching themes:", error);
            }
        };

        fetchThemes();
    }, [platformState, onSaleOnly, selectedFeatures, selectedCategories]);


    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
                {/* Header Filters */}
                <HeaderFilters platform={platforms} setPlatforms={setPlatforms} />
                <div className="mt-6 flex flex-col lg:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="w-full lg:w-72">
                        <Sidebar
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            onSaleOnly={onSaleOnly}
                            setOnSaleOnly={setOnSaleOnly}
                            updatedRecentlyOnly={updatedRecentlyOnly}
                            setUpdatedRecentlyOnly={setUpdatedRecentlyOnly}
                            selectedFeatures={selectedFeatures}
                            setSelectedFeatures={setSelectedFeatures}
                            selectedColors={selectedColors}
                            setSelectedColors={setSelectedColors}
                            compatibleWith={compatibleWith}
                            setCompatibleWith={setCompatibleWith}
                            viewType={viewType}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <SortTabs
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            viewType={viewType}
                            setViewType={setViewType}
                            resultsCount={filtered.length}
                        />

                        {/* Templates */}
                        {viewType === "list" ? (
                            <TemplateList items={currentItems} />
                        ) : (
                            <TemplateGrid items={currentItems} />
                        )}

                        {/* Pagination */}
                        <div className="mt-6">
                            <Pagination
                                pageCount={pageCount}
                                currentPage={currentPage}
                                onPageChange={(selected) => setCurrentPage(selected)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
