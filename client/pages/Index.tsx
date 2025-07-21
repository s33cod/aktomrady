import { useState } from "react";
import Layout from "@/components/Layout";
import NetworkAnimation from "@/components/NetworkAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Email submitted:", email);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%234FB3E1;stop-opacity:1" /><stop offset="100%" style="stop-color:%232196F3;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad)"/><circle cx="200" cy="200" r="100" fill="rgba(255,255,255,0.1)"/><circle cx="800" cy="300" r="150" fill="rgba(255,255,255,0.05)"/><circle cx="1000" cy="600" r="80" fill="rgba(255,255,255,0.1)"/></svg>')`
          }}
        />
        
        {/* Network Animation Overlay */}
        <div className="absolute inset-0">
          <NetworkAnimation />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">AKTOMRADY AGENCIES</span>
              <span className="block mt-2">YOUR TRUSTED PRINTING</span>
              <span className="block mt-2">PARTNER</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              We're crafting something special! Our website is currently under construction and will be 
              launching soon. Get ready for an enhanced experience.
            </p>
            
            {/* Email Signup Form */}
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 text-gray-900 bg-white/95 backdrop-blur-sm border-white/20 focus:border-brand-light-blue focus:ring-brand-light-blue"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90 text-white font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Notify Me"}
                </Button>
              </div>
            </form>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-3"
              >
                Learn More
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Printing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From business cards to large format printing, we deliver high-quality results 
              that make your brand stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Cards",
                description: "Professional business cards that make lasting impressions",
                icon: "📇"
              },
              {
                title: "Banners & Signs",
                description: "Eye-catching banners and signage for any occasion",
                icon: "🏷️"
              },
              {
                title: "Brochures",
                description: "Beautifully designed brochures that tell your story",
                icon: "📋"
              },
              {
                title: "Custom Printing",
                description: "Specialized printing solutions for unique requirements",
                icon: "⚙️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today and let's bring your ideas to life.
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-3"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </Layout>
  );
}
