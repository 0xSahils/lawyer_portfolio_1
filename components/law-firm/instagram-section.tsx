import Image from "next/image";
import Link from "next/link";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
  {
    image: "/images/insta-1.jpg",
    likes: 245,
    comments: 18,
    link: "#",
  },
  {
    image: "/images/insta-2.jpg",
    likes: 189,
    comments: 12,
    link: "#",
  },
  {
    image: "/images/insta-3.jpg",
    likes: 312,
    comments: 24,
    link: "#",
  },
  {
    image: "/images/insta-4.jpg",
    likes: 178,
    comments: 9,
    link: "#",
  },
  {
    image: "/images/insta-5.jpg",
    likes: 267,
    comments: 21,
    link: "#",
  },
  {
    image: "/images/insta-6.jpg",
    likes: 198,
    comments: 15,
    link: "#",
  },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
            — Social Media —
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a2332] mb-4">
            Follow Me on Instagram
          </h2>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center gap-2 text-[#1a2332] hover:text-[#c9a962] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @johnmehta.law
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              target="_blank"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1a2332]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1 text-white text-sm">
                  <Heart className="w-4 h-4 fill-white" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1 text-white text-sm">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
