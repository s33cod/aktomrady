import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Printer,
  Gift,
  Heart,
  Briefcase,
  Monitor,
  Megaphone,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "large-format",
      title: "Large Format Prints",
      description:
        "Professional banners, billboards, and high-quality product stickers that make your brand stand out",
      icon: <Megaphone className="w-8 h-8" />,
      features: [
        "Banners & Billboards",
        "Product Stickers",
        "Posters & Displays",
        "Vehicle Wraps",
        "Building Signage",
      ],
      color: "from-blue-500 to-blue-600",
      badge: "Most Popular",
    },
    {
      id: "branded-items",
      title: "Custom Branded Items & Souvenirs",
      description:
        "Personalized corporate gifts and promotional items that leave lasting impressions",
      icon: <Gift className="w-8 h-8" />,
      features: [
        "Corporate Gifts",
        "Promotional Items",
        "Custom Merchandise",
        "Awards & Trophies",
        "Branded Accessories",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "invitations",
      title: "Wedding & Event Invitations",
      description:
        "Elegant invitations and event materials that set the perfect tone for your special occasions",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Wedding Invitations",
        "Event Cards",
        "Save the Dates",
        "RSVP Cards",
        "Thank You Cards",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "business-materials",
      title: "Business Cards, Flyers & Brochures",
      description:
        "Professional business materials that effectively communicate your brand message",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Business Cards",
        "Flyers & Leaflets",
        "Brochures",
        "Letterheads",
        "Envelopes",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "corporate-solutions",
      title: "Corporate Solutions",
      description:
        "Comprehensive printing solutions for businesses, government agencies, and institutions",
      icon: <Monitor className="w-8 h-8" />,
      features: [
        "Government Printing",
        "Corporate Identity",
        "Annual Reports",
        "Presentations",
        "Training Materials",
      ],
      color: "from-indigo-500 to-indigo-600",
      badge: "Enterprise",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Materials",
      description:
        "Modern digital and print solutions for your marketing campaigns",
      icon: <Printer className="w-8 h-8" />,
      features: [
        "Social Media Graphics",
        "Digital Banners",
        "Email Templates",
        "Web Graphics",
        "QR Code Materials",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Premium Quality & Sharp Prints",
      description:
        "State-of-the-art printing technology ensuring crisp, vibrant results every time",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Tailored Solutions",
      description:
        "Custom solutions for any order size, from single pieces to bulk productions",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Affordable Prices",
      description:
        "Competitive pricing without compromising on quality or service",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Fast & Reliable Delivery",
      description:
        "Quick turnaround times with reliable delivery across Nigeria",
    },
    {
      icon: <Award className="w-6 h-6 text-red-500" />,
      title: "Friendly Expert Support",
      description:
        "Dedicated customer service team ready to help with your printing needs",
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text text-transparent">
                Printing Services
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive printing solutions for businesses, events, and
              personal needs. Trusted by government agencies, banks, and leading
              corporations across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-brand-cyan">
                <CheckCircle size={20} />
                <span className="font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-brand-yellow">
                <Star size={20} />
                <span className="font-semibold">Trusted by 3000+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-brand-magenta">
                <Clock size={20} />
                <span className="font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From large format displays to intimate wedding invitations, we
              provide end-to-end printing solutions for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              >
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 bg-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AKTOMRADY?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a printing company - we're your trusted
              partner in bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-20 bg-gray-50 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, streamlined workflow to get your project from concept to
              completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Share your requirements and vision with our team",
              },
              {
                step: "02",
                title: "Design & Quote",
                description:
                  "We create designs and provide detailed quotations",
              },
              {
                step: "03",
                title: "Production",
                description: "High-quality printing using premium materials",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Fast, reliable delivery to your specified location",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
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
            Join thousands of satisfied customers who trust AKTOMRADY for their
            printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 text-white font-semibold px-8 py-3"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-brand-cyan via-brand-magenta to-brand-yellow hover:bg-white hover:text-brand-blue font-semibold px-8 py-3"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
