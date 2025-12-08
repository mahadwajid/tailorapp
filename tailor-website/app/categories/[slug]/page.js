import Image from "next/image"
import Link from "next/link"

// Subcategory data for each main category
const categoryData = {
  "mens-clothing": {
    title: "Men's Clothing",
    subtitle: "Explore all in mens clothing",
    subcategories: [
      { name: "Casual Shirts", image: "/images/Casual.png" },
      { name: "Formal Wear", image: "/images/Formal.png" },
      { name: "Activewear", image: "/images/Activewear.png" },
      { name: "Outerwear", image: "/images/Outerwear.png" },
      { name: "Chinos", image: "/images/Chinos.png" },
      { name: "Dress Shirts", image: "/images/Dress Shirts.png" },
      { name: "Joggers", image: "/images/Joggers.png" },
      { name: "Coats", image: "/images/Coats.png" }
    ]
  },
  "womens-clothing": {
    title: "Women's Clothing",
    subtitle: "Explore all in womens clothing",
    subcategories: [
      { name: "Casual Shirts", image: "/images/Casual.png" },
      { name: "Formal Wear", image: "/images/Formal.png" },
      { name: "Activewear", image: "/images/Activewear.png" },
      { name: "Outerwear", image: "/images/Outerwear.png" },
      { name: "Dresses", image: "/images/Women Clothing.png" },
      { name: "Tops", image: "/images/Casual.png" },
      { name: "Skirts", image: "/images/Formal.png" },
      { name: "Coats", image: "/images/Coats.png" }
    ]
  },
  "kids-clothing": {
    title: "Kids' Clothing",
    subtitle: "Explore all in kids clothing",
    subcategories: [
      { name: "Shirts", image: "/images/Casual.png" },
      { name: "Dresses", image: "/images/Women Clothing.png" },
      { name: "Uniforms", image: "/images/Formal.png" },
      { name: "Activewear", image: "/images/Activewear.png" },
      { name: "Outerwear", image: "/images/Outerwear.png" },
      { name: "Pants", image: "/images/Chinos.png" },
      { name: "Joggers", image: "/images/Joggers.png" },
      { name: "Coats", image: "/images/Coats.png" }
    ]
  },
  "traditional": {
    title: "Traditional",
    subtitle: "Explore all in traditional clothing",
    subcategories: [
      { name: "Shalwar Kameez", image: "/images/Women Clothing.png" },
      { name: "Kurta", image: "/images/Casual.png" },
      { name: "Sherwani", image: "/images/Formal.png" },
      { name: "Dupatta", image: "/images/Outerwear.png" },
      { name: "Waistcoat", image: "/images/Coats.png" },
      { name: "Traditional Pants", image: "/images/Chinos.png" },
      { name: "Traditional Shirts", image: "/images/Dress Shirts.png" },
      { name: "Traditional Coats", image: "/images/Coats.png" }
    ]
  },
  "accessories": {
    title: "Accessories",
    subtitle: "Explore all in accessories",
    subcategories: [
      { name: "Scarves", image: "/images/Outerwear.png" },
      { name: "Ties", image: "/images/Formal.png" },
      { name: "Belts", image: "/images/Chinos.png" },
      { name: "Hats", image: "/images/Coats.png" },
      { name: "Bags", image: "/images/Casual.png" },
      { name: "Watches", image: "/images/Dress Shirts.png" },
      { name: "Sunglasses", image: "/images/Activewear.png" },
      { name: "Gloves", image: "/images/Joggers.png" }
    ]
  },
  "winter": {
    title: "Winter",
    subtitle: "Explore all in winter clothing",
    subcategories: [
      { name: "Sweaters", image: "/images/Casual.png" },
      { name: "Coats", image: "/images/Coats.png" },
      { name: "Jackets", image: "/images/Outerwear.png" },
      { name: "Thermal Wear", image: "/images/Activewear.png" },
      { name: "Winter Pants", image: "/images/Chinos.png" },
      { name: "Winter Shirts", image: "/images/Dress Shirts.png" },
      { name: "Winter Joggers", image: "/images/Joggers.png" },
      { name: "Winter Accessories", image: "/images/Formal.png" }
    ]
  }
}

export default async function CategoryDetail({ params }) {
  const { slug } = await params
  const category = categoryData[slug]

  if (!category) {
    return (
      <section className="w-full bg-white py-12 pt-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-gelica font-black text-[42px] text-black mb-4">Category Not Found</h1>
          <Link href="/categories" className="text-[#9A54FD] hover:underline">
            ← Back to Categories
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ==================== CATEGORY DETAIL SECTION ==================== */}
      <section className="w-full bg-white py-12 pt-32">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Heading */}
          <div className="mb-12">
            <Link 
              href="/categories" 
              className="inline-block mb-4 text-[#9A54FD] hover:underline font-satoshi text-[14px]"
            >
              ← Back to Categories
            </Link>
            <h1 className="font-gelica font-black text-[42px] md:text-[48px] text-black mb-2">
              {category.title}
            </h1>
            <p className="font-satoshi text-[18px] text-gray-600">
              {category.subtitle}
            </p>
          </div>

          {/* Subcategory Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {category.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="relative group rounded-[16px] overflow-hidden shadow-md cursor-pointer aspect-square"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <h3 className="font-gelica font-black text-[16px] md:text-[18px]">{subcategory.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

