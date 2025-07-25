import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroShowreel from "@/components/HeroShowreel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Email submitted:", email);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Showreel Section */}
      <HeroShowreel />

      {/* Services Preview Section */}
      <section
        className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From large format displays to intimate invitation cards, we
              provide premium printing solutions trusted by government agencies
              and major corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Large Format Prints",
                description:
                  "Premium banners, billboards & sharp quality product stickers",
                icon: "📢",
              },
              {
                title: "Custom Branded Items",
                description:
                  "Personalized corporate gifts & promotional souvenirs",
                icon: "🎁",
              },
              {
                title: "Invitation Cards",
                description:
                  "Elegant invitation cards for weddings & special events",
                icon: "💌",
              },
              {
                title: "Business Materials",
                description: "Professional business cards, flyers & brochures",
                icon: "💼",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section
        className="py-20 bg-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🌟 Trusted by Major Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to serve some of Nigeria's most prestigious
              organizations, delivering exceptional printing solutions that meet
              the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📌 LAGOS STATE GOVT.",
                category: "Government Agency",
                description:
                  "Comprehensive printing solutions for state communications and campaigns",
              },
              {
                title: "📌 EKITI STATE GOVT.",
                category: "Government Agency",
                description:
                  "State-wide printing services for administrative and public needs",
              },
              {
                title: "🏠 JAADOL Homes",
                category: "Real Estate",
                description:
                  "Premium property marketing materials and branding solutions",
              },
              {
                title: "🏥 JAAD Hospital Needs",
                category: "Healthcare",
                description:
                  "Medical forms, patient information, and healthcare communications",
              },
              {
                title: "🏦 Polaris Bank",
                category: "Banking",
                description:
                  "Corporate banking materials and customer communications",
              },
              {
                title: "🏢 Stanbic Bank",
                category: "Banking",
                description:
                  "Enterprise banking solutions and promotional materials",
              },
              {
                title: "🎭 Iganmode Day Ota",
                category: "Cultural Events",
                description:
                  "Annual cultural festival branding and promotional materials in Ogun State",
              },
              {
                title: "🌍 Liberian Clients",
                category: "International",
                description:
                  "Official government communications and printing services for Liberia",
              },
              {
                title: "US American Clients",
                category: "International",
                description:
                  "Corporate printing solutions for US-based businesses and organizations",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {client.title}
                </h3>
                <div className="inline-block bg-brand-blue text-white text-xs px-2 py-1 rounded mb-3">
                  {client.category}
                </div>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              🏛 Plus leading Nigerian political parties and many more...
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
            >
              <Link to="/portfolio">View All Our Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.pexels.com/photos/3826654/pexels-photo-3826654.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AKTOMRADY?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're Nigeria's premier printing partner, delivering excellence
              you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "✔ Premium Quality & Sharp Prints",
                description:
                  "State-of-the-art equipment ensuring superior results every time",
                icon: "🎯",
              },
              {
                title: "✔ Tailored Solutions for Any Order Size",
                description:
                  "From single pieces to bulk orders, we handle projects of all scales",
                icon: "📏",
              },
              {
                title: "✔ Affordable Prices 💸",
                description:
                  "Competitive pricing without compromising on quality or service",
                icon: "💰",
              },
              {
                title: "✔ Fast & Reliable Delivery ⏰",
                description:
                  "Quick turnaround times with nationwide delivery coverage",
                icon: "����",
              },
              {
                title: "✔ Friendly Expert Support 🤝",
                description:
                  "Dedicated customer service team ready to exceed your expectations",
                icon: "👥",
              },
              {
                title: "✔ Proven Track Record",
                description:
                  "3000+ satisfied clients and 8000+ successful projects completed",
                icon: "🏆",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
            Get in touch with our expert team today and let's bring your ideas
            to life.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 text-white font-semibold px-8 py-3"
            asChild
          >
            <Link to="/quote">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
