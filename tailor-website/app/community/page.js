import Image from "next/image"

export default function Community() {
  const posts = [
    {
      id: 1,
      user: {
        name: "Elara Moon",
        avatar: "/images/1.png", // Using existing avatar image
        timeAgo: "2h ago"
      },
      image: "/images/C1.png",
      caption: "Check out this amazing silk gown I made for a client!",
      hashtags: ["#SilkDress", "#TailorMade"],
      engagement: {
        likes: 120,
        comments: 45,
        shares: 30
      }
    },
    {
      id: 2,
      user: {
        name: "Elara Moon",
        avatar: "/images/1.png",
        timeAgo: "2h ago"
      },
      image: "/images/C2.png",
      caption: "I'm obsessed with this new fabric I found! Can't wait to use it.",
      hashtags: ["#FabricLove"],
      engagement: {
        likes: 120,
        comments: 45,
        shares: 30
      }
    },
    {
      id: 3,
      user: {
        name: "Elara Moon",
        avatar: "/images/1.png",
        timeAgo: "2h ago"
      },
      image: "/images/C3.png",
      caption: "Just finished this custom suit for Mr. Harrison. What do you think?",
      hashtags: ["#Bespoke"],
      engagement: {
        likes: 120,
        comments: 45,
        shares: 30
      }
    }
  ]

  return (
    <section className="w-full bg-white py-12 pt-32">
      <div className="max-w-[700px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-gelica font-black text-[36px] md:text-[42px] leading-tight text-black mb-2">
            Community Hub
          </h1>
          <p className="font-satoshi text-[15px] text-gray-600">
            Where tailors share work, ideas, and inspiration.
          </p>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-[16px] overflow-hidden">
              
              {/* User Info */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image
                      src={post.user.avatar}
                      alt={post.user.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-satoshi text-[14px] font-medium text-gray-900">
                      {post.user.name}
                    </p>
                    <p className="font-satoshi text-[12px] text-gray-500">
                      {post.user.timeAgo}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-3">
                {/* Caption */}
                <p className="font-satoshi text-[14px] text-gray-800 mb-2 leading-[1.5]">
                  {post.caption}
                </p>
                
                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.hashtags.map((tag, index) => (
                    <span key={index} className="font-satoshi text-[13px] text-[#9A54FD]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center gap-6 pt-2 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#9A54FD] transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span className="font-satoshi text-[13px]">{post.engagement.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#9A54FD] transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-satoshi text-[13px]">{post.engagement.comments}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#9A54FD] transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="font-satoshi text-[13px]">{post.engagement.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
