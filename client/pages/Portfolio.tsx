import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Building2,
  Landmark,
  Home,
  Hospital,
  Building,
  Award,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Portfolio() {
  const majorClients = [
    {
      name: "Lagos State Government",
      category: "Government",
      icon: <Landmark className="w-8 h-8" />,
      description:
        "Comprehensive printing solutions for government communications, campaigns, and official materials",
      projects: [
        "Electoral Materials",
        "Public Awareness Campaigns",
        "Official Documents",
        "Signage & Banners",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Ekiti State Government",
      category: "Government",
      icon: <Building2 className="w-8 h-8" />,
      description:
        "State-wide printing services for administrative and public communication needs",
      projects: [
        "Government Publications",
        "Public Information Materials",
        "Event Materials",
        "Official Stationery",
      ],
      color: "from-green-600 to-green-700",
    },
    {
      name: "JAADOL Homes",
      category: "Real Estate",
      icon: <Home className="w-8 h-8" />,
      description:
        "Premium real estate marketing materials and property branding solutions",
      projects: [
        "Property Brochures",
        "Sales Materials",
        "Site Signage",
        "Marketing Collaterals",
      ],
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "JAAD Hospital Needs",
      category: "Healthcare",
      icon: <Hospital className="w-8 h-8" />,
      description:
        "Healthcare facility branding and patient communication materials",
      projects: [
        "Medical Forms",
        "Patient Information",
        "Facility Signage",
        "Health Campaigns",
      ],
      color: "from-red-600 to-red-700",
    },
    {
      name: "Polaris Bank",
      category: "Banking",
      icon: <Building className="w-8 h-8" />,
      description:
        "Corporate banking materials and customer communication solutions",
      projects: [
        "Banking Forms",
        "Marketing Materials",
        "Branch Signage",
        "Customer Communications",
      ],
      color: "from-indigo-600 to-indigo-700",
    },
    {
      name: "Stanbic Bank",
      category: "Banking",
      icon: <Building className="w-8 h-8" />,
      description: "Enterprise banking solutions and promotional materials",
      projects: [
        "Corporate Materials",
        "Promotional Items",
        "ATM Signage",
        "Customer Guides",
      ],
      color: "from-orange-600 to-orange-700",
    },
    {
      name: "Leading Nigerian Political Parties",
      category: "Political",
      icon: <Award className="w-8 h-8" />,
      description: "Campaign materials and political communication solutions",
      projects: [
        "Campaign Banners",
        "Promotional Materials",
        "Event Signage",
        "Voter Information",
      ],
      color: "from-yellow-600 to-yellow-700",
    },
  ];

  const portfolioCategories = [
    {
      id: "government",
      title: "Government Projects",
      description:
        "Official materials for government agencies and public institutions",
      count: "50+ Projects",
    },
    {
      id: "corporate",
      title: "Corporate Solutions",
      description:
        "Business materials for banks, corporations, and enterprises",
      count: "200+ Projects",
    },
    {
      id: "healthcare",
      title: "Healthcare Materials",
      description:
        "Medical forms, patient information, and healthcare communications",
      count: "30+ Projects",
    },
    {
      id: "political",
      title: "Political Campaigns",
      description: "Campaign materials and political communication solutions",
      count: "100+ Projects",
    },
    {
      id: "events",
      title: "Events & Weddings",
      description:
        "Invitations, event materials, and special occasion printing",
      count: "500+ Projects",
    },
    {
      id: "commercial",
      title: "Commercial Printing",
      description:
        "Business cards, flyers, brochures, and promotional materials",
      count: "1000+ Projects",
    },
  ];

  const testimonials = [
    {
      name: "Lagos State Ministry of Information",
      role: "Public Communications",
      content:
        "AKTOMRADY has been instrumental in delivering high-quality printing solutions for our public awareness campaigns. Their attention to detail and timely delivery is exceptional.",
      rating: 5,
    },
    {
      name: "Polaris Bank",
      role: "Marketing Department",
      content:
        "The quality of their work and professional service has made them our go-to printing partner. They understand our brand requirements perfectly.",
      rating: 5,
    },
    {
      name: "JAADOL Homes",
      role: "Sales & Marketing",
      content:
        "From property brochures to large format signage, AKTOMRADY delivers consistent quality that helps us present our properties professionally.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F294ded20d7fb404cac9417c410910559)`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Trusted by government agencies, major banks, healthcare
              institutions, and leading corporations across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span>5000+ Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Major Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to serve some of Nigeria's most prestigious
              organizations, delivering exceptional printing solutions that meet
              the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorClients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${client.color} flex items-center justify-center text-white mb-4`}
                  >
                    {client.icon}
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">
                      {client.name}
                    </CardTitle>
                    <Badge variant="secondary">{client.category}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Projects:
                    </h4>
                    {client.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {project}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio across various industries and
              project types
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="government">Government</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-brand-blue text-white">
                        {category.count}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-brand-blue" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="government">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {majorClients
                  .filter((client) => client.category === "Government")
                  .map((client, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <CardTitle>{client.name}</CardTitle>
                        <CardDescription>{client.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {client.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {project}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {majorClients
                  .filter((client) =>
                    ["Banking", "Real Estate", "Healthcare"].includes(
                      client.category,
                    ),
                  )
                  .map((client, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <CardTitle>{client.name}</CardTitle>
                        <CardDescription>{client.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {client.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {project}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Commercial Projects
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We've completed over 1000 commercial printing projects
                  including business cards, flyers, brochures, promotional
                  materials, and custom branded items for businesses across
                  Nigeria.
                </p>
                <Button
                  className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
                  asChild
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create professional printing solutions that make an
            impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-3"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-3"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
