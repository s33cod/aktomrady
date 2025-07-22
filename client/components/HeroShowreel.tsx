import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroShowreel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Portfolio images showcasing AKTOMRADY's work
  const portfolioImages = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F6cd879d01a70410e8f5c88ac2535259b?format=webp&width=800",
      title: "DI PRINT GALAXY - Large Format Printing",
      description:
        "Professional large format printing with our advanced Galaxy machines - delivering sharp, vibrant prints for banners, billboards, and promotional materials.",
      category: "Large Format Printing",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F6240fa66ce584a7fbe18b454b31f967e?format=webp&width=800",
      title: "Referral Marketing Campaign",
      description:
        "Custom promotional materials that help businesses grow through word-of-mouth marketing. Quality prints that make lasting impressions.",
      category: "Marketing Materials",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2Ff88516d601fc42eeaecfe17d53751555?format=webp&width=800",
      title: "Custom Branded Wristbands",
      description:
        "High-quality silicone wristbands with vibrant colors and crisp printing - perfect for events, promotions, and brand awareness campaigns.",
      category: "Branded Items",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2Fd37c17e2a7f5426285e849c88e129f46?format=webp&width=800",
      title: "Multi-Product Showcase",
      description:
        "From custom caps to wristbands and promotional items - we deliver comprehensive branding solutions for all your marketing needs.",
      category: "Product Range",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2Fb2f585e871ee4e0699b70f63d4b022b5?format=webp&width=800",
      title: "Political Campaign Materials",
      description:
        "Professional campaign caps and promotional materials for political parties and candidates - trusted by leading Nigerian political organizations.",
      category: "Political Campaigns",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F4b2f90b1ef084871aa260d3369733a07?format=webp&width=800",
      title: "Premium Custom Caps",
      description:
        "High-quality embroidered and printed caps for political campaigns, corporate events, and promotional purposes.",
      category: "Custom Apparel",
    },
    {
      url: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Business Cards",
      description:
        "Make lasting first impressions with our premium business card printing services.",
      category: "Business Materials",
    },
    {
      url: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Large Format Banners",
      description:
        "Eye-catching banners and signage that make your brand stand out from the crowd.",
      category: "Signage & Banners",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, portfolioImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length,
    );
  };

  const currentImage = portfolioImages[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out w-full h-full"
          style={{
            backgroundImage: `url('${currentImage.url}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 w-full h-full" />

        {/* Animated Brand Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <div className="w-2 h-2 bg-brand-cyan rounded-full opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-2 sm:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-2 sm:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-2 sm:p-3"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headlines */}
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text text-transparent mb-4">
              <span className="text-sm font-semibold tracking-wider uppercase">
                {currentImage.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">AKTOMRADY AGENCIES</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text text-transparent">
                ...prints @ its best
              </span>
            </h1>
          </div>

          {/* Current Slide Content */}
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {currentImage.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {currentImage.description}
            </p>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { icon: "📢", text: "Large Format Prints" },
              { icon: "🎁", text: "Custom Branded Items" },
              { icon: "💌", text: "Invitation Cards" },
              { icon: "💼", text: "Business Materials" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <p className="text-white text-sm font-medium">{service.text}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-cyan to-brand-magenta hover:from-brand-cyan/90 hover:to-brand-magenta/90 text-white font-semibold px-8 py-4 text-lg shadow-lg"
              asChild
            >
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-transparent bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text hover:bg-white hover:text-brand-blue font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              style={{ textShadow: "1px 1px 3px rgba(3, 25, 57, 1)" }}
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <a
              href="tel:+2348029477796"
              className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
            >
              <span className="text-brand-cyan">📞</span>
              <span className="font-semibold">+234.8029477796</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <span className="flex items-center gap-2">
              <span className="text-brand-yellow">📍</span>
              <span>5, Kayode Street, Ogba Lagos</span>
            </span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-brand-cyan scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
