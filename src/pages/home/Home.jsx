import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/axiosInstance";
import endPointApi from "../../utils/endPointApi";

const categories = [
  {
    title: "WordPress",
    bgColor: "bg-[#21759B]",
    image: "/images/wordpress.png",
  },
  {
    title: "HTML",
    bgColor: "bg-[#F6531E]",
    image: "/images/html (2).png",
  },
  {
    title: "Shopify",
    bgColor: "bg-[#8BC34A]",
    image: "/images/shopify (2).png",
  },
  {
    title: "WooCommerce",
    bgColor: "bg-[#A66CBF]",
    image: "/images/woo (2).png",
  },
  {
    title: "Top",
    bgColor: "bg-[#FEC107]",
    image: "/images/top (2).png",
  },
];

const wordpressThemes = [
  {
    id: 1,
    title: "Face Serum – WordPress Responsive",
    image: "/images/wordpress1.png",
    sales: 1524,
    oldPrice: 59,
    price: 39,
    sale: true,
  },
  {
    id: 2,
    title: "Halloween – WordPress Responsive",
    image: "/images/wordpress2.png",
    sales: 1254,
    price: 39,
    sale: false,
  },
  {
    id: 3,
    title: "Lingerie Photography – WordPress Responsive",
    image: "/images/wordpress3.png",
    sales: 3568,
    price: 39,
    sale: false,
  },
  {
    id: 4,
    title: "Electric Scooter – WordPress Responsive",
    image: "/images/wordpress4.png",
    sales: 9562,
    price: 39,
    sale: false,
  },
];

const HtmlThemes = [
  {
    id: 1,
    title: "Restaurant & Cafe – HTML Theme",
    image: "/images/html1.png",
    sales: 1524,
    oldPrice: 59,
    price: 39,
    sale: false,
  },
  {
    id: 2,
    title: "Flooring – HTML Theme",
    image: "/images/html2.png",
    sales: 1254,
    price: 39,
    sale: false,
  },
  {
    id: 3,
    title: "Hair Cut – HTML Theme",
    image: "/images/html3.png",
    sales: 3568,
    price: 39,
    sale: true,
  },
  {
    id: 4,
    title: "Tattoo Artist – HTML Theme",
    image: "/images/html4.png",
    sales: 9562,
    price: 39,
    sale: false,
  },
];

const shopifyThemes = [
  {
    id: 1,
    title: "Organic & Grocery Shop - Shopify Theme",
    image: "/images/Frame 1 (1).png",
    sales: 1896,
    price: 39,
    sale: false,
  },
  {
    id: 2,
    title: "Lingerie & Bikini - Shopify Theme",
    image: "/images/Frame 2.png",
    sales: 1254,
    oldPrice: 59,
    price: 19,
    sale: true,
  },
  {
    id: 3,
    title: "Organic & Grocery Shop - Shopify Theme",
    image: "/images/wordpress3.png",
    sales: 3568,
    price: 40,
    sale: false,
  },
  {
    id: 4,
    title: "Organic & Grocery Shop - Shopify Theme",
    image: "/images/wordpress4.png",
    sales: 9562,
    price: 39,
    sale: false,
  },
];

const topRelatedThemes = [
  {
    id: 1,
    title: "Mega Shop - WordPress Responsive",
    image: "/images/Frame 1 (1).png",
    sales: 1896,
    price: 39,
    sale: false,
  },
  {
    id: 2,
    title: "Mega Shop - WordPress Responsive",
    image: "/images/Frame 2.png",
    sales: 1254,
    price: 19,
    sale: true,
  },
  {
    id: 3,
    title: "Mega Shop - WordPress Responsive",
    image: "/images/wordpress3.png",
    sales: 3568,
    price: 40,
    sale: false,
  },
  {
    id: 4,
    title: "Mega Shop - WordPress Responsive",
    image: "/images/wordpress4.png",
    sales: 9562,
    price: 39,
    oldPrice: 59,
    sale: false,
  },
];

const insightsThemes = [
  {
    title: "Cooki Drem – Bakery And Receipts HTML Template",
    image: "/images/client1.png",
    date: "10 May, 2025",
    author: "Code4rest",
    description:
      "Look through our list of the best conversion-friendly insights themes.",
    size: "small",
  },
  {
    title: "Nanny – Babysitter And Childcare Services WordPress Theme",
    image: "/images/client3.png",
    date: "10 May, 2025",
    author: "Code4rest",
    description:
      "Look through our list of the best conversion-friendly insights themes.",
    size: "small",
  },
  {
    title: "Clonixo – Lingerie Shopify Fully Responsive Theme",
    image: "/images/client2.png",
    date: "10 May, 2025",
    author: "Code4rest",
    description:
      "Look through our list of the best conversion-friendly insights themes.",
    size: "large",
  },
];

const leftFeatures = [
  {
    icon: "shopping-basket-line",
    title: "ECommerce Ready",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  },
  {
    icon: "computer-line",
    title: "Fully Responsive",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  },
  {
    icon: "rocket-2-line",
    title: "Fastest Page Load",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  }
];
const rightFeatures = [
  {
    icon: "pen-nib-line",
    title: "Translation & RTL",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  },
  {
    icon: "line-chart-line",
    title: "Built-In SEO",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  },
  {
    icon: "customer-service-line",
    title: "Awesome Support",
    description: "Build An Awesome E-Commerce Website With Our Themes"
  }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [tabs, setTabs] = useState([]);

  const filteredThemes =
    selectedPlatform === "All"
      ? tabs
      : tabs.filter((t) => t.platform === selectedPlatform);


  const groupedTabs = tabs.reduce((acc, tab) => {
    if (!acc[tab.platform]) acc[tab.platform] = [];
    acc[tab.platform].push(tab);
    return acc;
  }, {});


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
  };

  const fetchTabs = async () => {
    try {
      const res = await api.get(`${endPointApi.getAllTab}`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: token ? `Bearer ${token}` : "",
        },
      });
      setTabs(res.data);
    } catch (error) {
      console.error("Error fetching tabs:", error);
    }
  };

  const wordpressThemes = tabs.filter(
    (tab) => tab.platform?.toLowerCase() === "wordpress"
  );

  const HtmlThemes = tabs.filter(
    (tab) => tab.platform?.toLowerCase() === "html"
  );

  const reactThemes = tabs.filter(
    (tab) => tab.platform?.toLowerCase() === "react"
  );

  const shopifyThemes = tabs.filter(
    (tab) => tab.platform?.toLowerCase() === "shopify"
  );

  useEffect(() => {
    fetchTabs();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundImage: 'url(/images/main.png)' }}>
        <section
          className="bg-cover bg-center text-white pt-15 pr-15 pl-15 text-center"

        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug text-white">
            Website Templates, Plugins, And Graphics <br /> Digital Marketplace
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Product"
              className="w-full px-4 py-3 pr-32 text-lg bg-white rounded-lg shadow-lg border-0 outline-none text-black"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 bg-black py-2 rounded-lg text-base font-semibold cursor-pointer"
            >
              Search
            </button>
          </div>
        </section>
        {/* Categories Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories?.map((cat, index) => (
              <div className="bg-white shadow rounded-xl text-center hover:shadow-lg transition">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full rounded-t-xl"
                />
                <p className="font-semibold p-1 bg-aliceblue text-black">{cat.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Wordpress Theme */}
      {wordpressThemes.map((theme) => (
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold">WordPress Themes</h2>
          <p className="text-gray-500 mt-2 mb-10">
            Look Through Our List Of The Best Conversion-Friendly WordPress Themes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            <div
              key={theme.id}
              className="bg-white rounded-xl border border-[#E4E4E4] transition duration-300"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={theme.singleImage}
                  alt={theme.title}
                  className="w-full h-52 rounded-t-xl"
                />

                {/* Top-left badge */}
                {/* <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                  HotShot Author
                </span> */}

                {/* Sale badge */}
                {theme.isSaleOn && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    SALE
                  </span>
                )}
              </div>
              {/* Content */}
              <div className="p-4 text-left">

                {/* Title */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                  {theme.title}
                </h3>
                {/* Sales section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Sales */}
                  <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                    <i className="ri-shopping-bag-fill text-black"></i> {theme.sales.toLocaleString()} Sales
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {theme.discountPrice && theme.isSaleOn && (
                      <span className="line-through text-sm text-gray-400">
                        ${theme.discountPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold text-red-600">
                      ${theme.price}
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 font-semibold">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded w-full hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="text-sm px-4 py-2 border rounded w-full hover:bg-gray-100 transition">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* View More */}
          <div className="mt-10">
            <Link
              to="/template-page"
              state={{ platform: "wordpress" }} // 👈 pass platform info
              className="text-sm font-medium underline hover:text-blue-600"
            >
              View More
            </Link>
          </div>
        </section>
      ))}

      {/* React Theme */}
      {reactThemes.map((theme) => (
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold">React Themes</h2>
          <p className="text-gray-500 mt-2 mb-10">
            Look Through Our List Of The Best Conversion-Friendly React Themes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            <div
              key={theme.id}
              className="bg-white rounded-xl border border-[#E4E4E4] transition duration-300"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={theme.singleImage}
                  alt={theme.title}
                  className="w-full h-52 rounded-t-xl"
                />

                {/* Top-left badge */}
                {/* <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                  HotShot Author
                </span> */}

                {/* Sale badge */}
                {theme.isSaleOn && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-left">

                {/* Title */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                  {theme.title}
                </h3>
                {/* Sales section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Sales */}
                  <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                    <i className="ri-shopping-bag-fill text-black"></i> {theme.sales.toLocaleString()} Sales
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {theme.discountPrice && theme.isSaleOn && (
                      <span className="line-through text-sm text-gray-400">
                        ${theme.discountPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold text-red-600">
                      ${theme.price}
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 font-semibold">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded w-full hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="text-sm px-4 py-2 border rounded w-full hover:bg-gray-100 transition">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="mt-10">
            {/* <a href="#" className="text-sm font-medium underline hover:text-blue-600">
            View More
          </a> */}
            <Link
              to="/template-page"
              state={{ platform: "react" }} // 👈 pass platform info
              className="text-sm font-medium underline hover:text-blue-600"
            >
              View More
            </Link>
          </div>
        </section>
      ))}

      {/* HTML Theme */}
      {HtmlThemes.map((theme) => (
        <section className="py-16 bg-[#fdfaf1] text-center">
          <h2 className="text-3xl font-bold">HTML Themes</h2>
          <p className="text-gray-500 mt-2 mb-10">
            Look Through Our List Of The Best Conversion-Friendly HTML Themes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            <div
              key={theme.id}
              className="bg-white rounded-xl transition duration-300"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={theme.singleImage}
                  alt={theme.title}
                  className="w-full h-52 rounded-t-xl"
                />

                {/* Top-left badge */}
                {/* <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                  HotShot Author
                </span> */}

                {/* Sale badge */}
                {theme.isSaleOn && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-left">

                {/* Title */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                  {theme.title}
                </h3>

                {/* Sales section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Sales */}
                  <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                    <i className="ri-shopping-bag-fill text-black"></i> {theme.sales.toLocaleString()} Sales
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {theme.discountPrice && theme.isSaleOn && (
                      <span className="line-through text-sm text-gray-400">
                        ${theme.discountPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold text-red-600">
                      ${theme.price}
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 font-semibold">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded w-full hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="text-sm px-4 py-2 border rounded w-full hover:bg-gray-100 transition">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="mt-10">
            <Link
              to="/template-page"
              state={{ platform: "html" }} // 👈 pass platform info
              className="text-sm font-medium underline hover:text-blue-600"
            >
              View More
            </Link>
          </div>
        </section>
      ))}

      {/* Shopify Theme */}
      {shopifyThemes?.map((theme) => (
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold">Shopify Themes</h2>
          <p className="text-gray-500 mt-2 mb-10">
            Look Through Our List Of The Best Conversion-Friendly WordPress Themes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            <div
              key={theme.id}
              className="bg-white rounded-xl border border-[#E4E4E4] transition duration-300"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={theme.singleImage}
                  alt={theme.title}
                  className="w-full h-52 rounded-t-xl"
                />

                {/* Top-left badge */}
                {/* <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                  HotShot Author
                </span> */}

                {/* Sale badge */}
                {theme.isSaleOn && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-left">

                {/* Title */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                  {theme.title}
                </h3>
                {/* Sales section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Sales */}
                  <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                    <i className="ri-shopping-bag-fill text-black"></i> {theme.sales.toLocaleString()} Sales
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {theme.discountPrice && theme.isSaleOn && (
                      <span className="line-through text-sm text-gray-400">
                        ${theme.discountPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold text-red-600">
                      ${theme.price}
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 font-semibold">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded w-full hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="text-sm px-4 py-2 border rounded w-full hover:bg-gray-100 transition">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="mt-10">
            <Link
              to="/template-page"
              state={{ platform: "shopify" }}
              className="text-sm font-medium underline hover:text-blue-600"
            >
              View More
            </Link>
          </div>
        </section>
      ))}

      {/* Top Related Theme */}
      <section className="pt-0 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold">Top Related Themes</h2>
        <p className="text-gray-500 mt-2 mb-10">
          Look Through Our List Of The Best Conversion-Friendly WordPress Themes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {topRelatedThemes?.map((theme) => (
            <div
              key={theme.id}
              className="bg-white rounded-xl border border-[#E4E4E4] transition duration-300"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-52 rounded-t-xl"
                />

                {/* Top-left badge */}
                {/* <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                  HotShot Author
                </span> */}

                {/* Sale badge */}
                {theme.sale && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
                    SALE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-left">

                {/* Title */}
                <h3 className="text-base font-semibold leading-tight mb-1 truncate">
                  {theme.title}
                </h3>
                {/* Sales section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Sales */}
                  <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
                    <i className="ri-shopping-bag-fill text-black"></i> {theme.sales.toLocaleString()} Sales
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {theme.oldPrice && theme.sale && (
                      <span className="line-through text-sm text-gray-400">
                        ${theme.oldPrice}
                      </span>
                    )}
                    <span className="text-xl font-semibold text-red-600">
                      ${theme.price}
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 font-semibold">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded w-full hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="text-sm px-4 py-2 border rounded w-full hover:bg-gray-100 transition">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Insight section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Client Insights</h2>
        <p className="text-center text-gray-500 mb-10">
          Look Through Our List Of The Best Conversion-Friendly Insights Themes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: two stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
              {insightsThemes
                .filter((item) => item.size === "small")
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-[#E4E4E4] overflow-hidden flex flex-col md:flex-row h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 rounded-t-xl"
                    />
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <span className="bg-yellow-400 px-2 py-1 rounded text-black text-xs font-medium">
                            {item.date}
                          </span>
                          <span className="bg-yellow-400 px-2 py-1 rounded text-black text-xs font-medium">
                            By {item.author}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2 truncate">
                          {item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <button className="bg-black text-white px-4 py-2 mt-4 rounded hover:bg-gray-800 text-sm w-fit">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Right column: featured card */}
          <div className="h-full flex">
            {insightsThemes
              .filter((item) => item.size === "large")
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fdfaf1] rounded-xl shadow overflow-hidden flex flex-col w-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="bg-yellow-400 px-2 py-1 rounded text-black text-xs font-medium">
                          {item.date}
                        </span>
                        <span className="bg-yellow-400 px-2 py-1 rounded text-black text-xs font-medium">
                          By {item.author}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                      <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm mt-4 w-fit">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
              to="/template-page"
              className="text-sm font-medium underline hover:text-blue-600"
            >
              View More
            </Link>
        </div>
      </section>

      <section className="bg-[#fdfaf1] py-16">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get More To Your Email
          </h2>
          <p className="text-muted-foreground text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter and access exclusive content and <br />
            offers available only to MonsterPost subscribers.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className="w-35 p-2 rounded-lg bg-black text-white hover:bg-gray/800 transition duration-300 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reasons To Choose Code4rest
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              With Many Years Of Experience, We've Got Features Built <br />
              Into Every Theme We Know You're Going To Love!
            </p>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Left Column Box */}
            <div className="bg-[#fdfaf1] rounded-2xl p-6 flex flex-col justify-center h-full">
              <div className="space-y-6">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center text-gray-800">
                      <i className={`ri-${feature.icon} text-2xl`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Logo Box */}
            <div className="bg-black rounded-2xl flex items-center justify-center h-full min-h-[440px]">
              <div className="relative text-white font-bold text-8xl">
                C
                <div className="absolute -bottom-2 -right-6 h-6 w-6 rounded-full bg-amber-500"></div>
              </div>
            </div>

            {/* Right Column Box */}
            <div className="bg-[#fdfaf1] rounded-2xl p-6 flex flex-col justify-center h-full">
              <div className="space-y-6">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center text-gray-800">
                      <i className={`ri-${feature.icon} text-2xl`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
