"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Courtroom Victory",
    caption: "Winning a landmark civil rights case",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Legal Conference",
    caption: "Speaking at National Law Summit 2024",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Client Meeting",
    caption: "Strategic consultation with corporate clients",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Award Ceremony",
    caption: "Receiving Excellence in Law Award",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Pro Bono Work",
    caption: "Community legal aid program",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Office",
    caption: "Personal consultation chamber",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="py-20 bg-[#1a2332]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
            — Moments —
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1a2332]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 font-medium">
                  {image.caption}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c9a962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#c9a962] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-[#c9a962] transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-[#c9a962] transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <p className="text-white text-center mt-4">
              {galleryImages[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
