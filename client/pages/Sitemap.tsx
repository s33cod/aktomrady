import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Settings,
  Briefcase,
  Users,
  Phone,
  Calculator,
  Shield,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SiteMapItem {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lastModified: string;
  priority: number;
}

export default function Sitemap() {
  const baseUrl = window.location.origin;

  const siteMapItems: SiteMapItem[] = [
    {
      path: "/",
      title: "Home",
      description:
        "Welcome to AKTOMRADY - Professional printing services in Lagos, Nigeria",
      icon: <Home className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 1.0,
    },
    {
      path: "/services",
      title: "Our Services",
      description:
        "Comprehensive printing services including large format prints, business cards, banners and more",
      icon: <Settings className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.9,
    },
    {
      path: "/portfolio",
      title: "Portfolio",
      description:
        "Browse our extensive portfolio of completed printing projects and success stories",
      icon: <Briefcase className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.8,
    },
    {
      path: "/about",
      title: "About Us",
      description:
        "Learn about AKTOMRADY's history, mission, and commitment to quality printing",
      icon: <Users className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.7,
    },
    {
      path: "/contact",
      title: "Contact Us",
      description:
        "Get in touch with our team for inquiries, support, and consultations",
      icon: <Phone className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.8,
    },
    {
      path: "/quote",
      title: "Get a Quote",
      description:
        "Request a detailed quote for your printing project with our online form",
      icon: <Calculator className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.8,
    },
    {
      path: "/privacy-policy",
      title: "Privacy Policy",
      description:
        "Our commitment to protecting your privacy and personal information",
      icon: <Shield className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.3,
    },
    {
      path: "/terms-of-service",
      title: "Terms of Service",
      description: "Terms and conditions for using our services and website",
      icon: <FileText className="w-5 h-5" />,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.3,
    },
  ];

  const generateXMLSitemap = () => {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteMapItems
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.path}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <priority>${item.priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    const blob = new Blob([xmlContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Site{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text text-transparent">
                Map
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Navigate through all pages and sections of our website. Find
              exactly what you're looking for with our comprehensive site
              directory.
            </p>
            <Button
              size="lg"
              onClick={generateXMLSitemap}
              className="bg-white text-transparent bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text hover:bg-gradient-to-r hover:from-brand-cyan hover:via-brand-magenta hover:to-brand-yellow hover:text-white font-semibold px-8 py-3"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download XML Sitemap
            </Button>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Website Navigation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All pages and sections organized for easy browsing and search
              engine optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteMapItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-blue to-brand-light-blue flex items-center justify-center text-white mr-3">
                      {item.icon}
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Priority: {item.priority}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-brand-blue group-hover:text-white transition-colors"
                    >
                      <Link to={item.path}>
                        Visit Page
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-brand-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  XML Sitemap Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Our XML sitemap helps search engines discover and index all
                    pages on our website efficiently. It includes metadata about
                    each page such as priority, last modification date, and
                    update frequency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-brand-blue mb-2">
                        {siteMapItems.length}
                      </div>
                      <p className="text-gray-600">Total Pages</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-brand-magenta mb-2">
                        Weekly
                      </div>
                      <p className="text-gray-600">Update Frequency</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-brand-cyan mb-2">
                        SEO
                      </div>
                      <p className="text-gray-600">Optimized</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">
                    For Developers & SEO
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    The XML sitemap follows the sitemaps.org protocol and
                    includes:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page URLs with absolute paths</li>
                    <li>• Last modification dates</li>
                    <li>• Priority values (0.1 to 1.0)</li>
                    <li>• Change frequency indicators</li>
                    <li>• UTF-8 encoding for international characters</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
