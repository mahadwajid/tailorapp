import Image from "next/image"
import Link from "next/link"

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Men's Clothing",
      slug: "mens-clothing",
      subtitle: "Shirts, pants, suits",
      image: "/images/Mens Clothing.png"
    },
    {
      id: 2,
      title: "Women's Clothing",
      slug: "womens-clothing",
      subtitle: "Dresses, tops, skirts",
      image: "/images/Women Clothing.png"
    },
    {
      id: 3,
      title: "Kids' Clothing",
      slug: "kids-clothing",
      subtitle: "Shirts, dresses, uniforms",
      image: "/images/Kids Clothing.png"
    },
    {
      id: 4,
      title: "Traditional",
      slug: "traditional",
      subtitle: "Shalwar kameez, kurta, sherwani",
      image: "/images/Women Clothing.png"
    },
    {
      id: 5,
      title: "Accessories",
      slug: "accessories",
      subtitle: "Scarves, ties, belts",
      image: "/images/Mens Clothing.png"
    },
    {
      id: 6,
      title: "Winter",
      slug: "winter",
      subtitle: "Sweater, Coats",
      image: "/images/FT.png"
    }
  ]

  return (
    <>
      {/* ==================== EXPLORE CATEGORIES SECTION ==================== */}
      <section data-aos="fade-up" className="w-full bg-white py-12 pt-32">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h1 className="font-gelica font-black text-[42px] md:text-[48px] text-black mb-3">
              Explore <span className="bg-gradient-to-r from-[#FF6F61] to-[#9A54FD] bg-clip-text text-transparent">Categories</span>
            </h1>

            <p className="font-satoshi text-[18px] text-gray-600 max-w-[780px] mx-auto leading-[1.6]">
              Easily manage and browse orders for every type of clothing. From men's shirts to
              women's dresses, we've got it organized
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer h-[280px] block"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="font-gelica font-black text-[20px] mb-1">{category.title}</h3>
                  <p className="font-satoshi text-[14px] text-gray-200">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

