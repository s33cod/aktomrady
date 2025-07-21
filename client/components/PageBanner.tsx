interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "small" | "medium" | "large";
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2Ffc8c83fe926f4c9cb82c2681a7881f7a",
  height = "medium",
}: PageBannerProps) {
  const heightClasses = {
    small: "py-16",
    medium: "py-24",
    large: "py-32",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImage}')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-brand-cyan/30 rounded-full animate-pulse" />
        <div
          className="absolute top-20 right-20 w-16 h-16 border-2 border-brand-magenta/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-12 h-12 border-2 border-brand-yellow/30 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
}
