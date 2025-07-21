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
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Building2,
  Printer,
  Lightbulb,
  Globe,
} from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "AKTOMRADY Agencies established with a vision to revolutionize printing in Nigeria",
    },
    {
      year: "2019",
      title: "First Government Contract",
      description: "Secured first major contract with Lagos State Government",
    },
    {
      year: "2020",
      title: "Expansion to Abuja",
      description: "Opened second office in Nigeria's capital city",
    },
    {
      year: "2021",
      title: "Banking Partnerships",
      description: "Became preferred printing partner for major Nigerian banks",
    },
    {
      year: "2022",
      title: "Technology Upgrade",
      description:
        "Invested in state-of-the-art printing equipment and digital solutions",
    },
    {
      year: "2023",
      title: "Port Harcourt Office",
      description: "Expanded operations to serve the South-South region",
    },
    {
      year: "2024",
      title: "1000+ Clients",
      description: "Reached milestone of serving over 1000 satisfied clients",
    },
    {
      year: "2025",
      title: "Digital Transformation",
      description:
        "Launching advanced digital services and online ordering platform",
    },
  ];

  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Excellence",
      description:
        "We never compromise on quality. Every print job meets our exacting standards for clarity, color accuracy, and durability.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description:
        "We understand deadlines matter. Our efficient processes ensure your projects are delivered on time, every time.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centric",
      description:
        "Our clients' success is our success. We go above and beyond to exceed expectations and build lasting relationships.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We continuously invest in the latest technology and techniques to offer cutting-edge printing solutions.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible printing practices and sustainable business operations.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  const team = [
    {
      name: "Akindele",
      role: "Founder & Owner",
      description:
        "Visionary leader with 15+ years in printing industry, committed to delivering excellence across Nigeria.",
      expertise: [
        "Strategic Leadership",
        "Business Development",
        "Client Relations",
      ],
    },
    {
      name: "Abiala",
      role: "Head of Operations",
      description:
        "Operations expert ensuring smooth workflow and quality control across all our facilities.",
      expertise: [
        "Operations Management",
        "Quality Control",
        "Process Optimization",
      ],
    },
    {
      name: "James",
      role: "Creative Director",
      description:
        "Creative genius behind our design solutions, helping clients bring their vision to life.",
      expertise: ["Graphic Design", "Brand Identity", "Creative Strategy"],
    },
    {
      name: "Niyi",
      role: "Customer Success Manager",
      description:
        "Dedicated to ensuring every client receives exceptional service and support throughout their journey.",
      expertise: [
        "Client Support",
        "Project Management",
        "Customer Experience",
      ],
    },
  ];

  const stats = [
    {
      number: "1000+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "5000+",
      label: "Projects Completed",
      icon: <Printer className="w-6 h-6" />,
    },
    {
      number: "7",
      label: "Years of Excellence",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "3",
      label: "Office Locations",
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F38c5ab870ac54599b5af8dde96f1a993)`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About AKTOMRADY
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nigeria's trusted printing partner since 2018. We've grown from a
              small startup to serving government agencies, major corporations,
              and thousands of satisfied clients across the country.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to becoming Nigeria's premier printing
                company
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AKTOMRADY Agencies was born from a simple vision: to provide
                Nigeria with world-class printing services that rival
                international standards. Founded in 2018 by industry veteran
                Adebayo Ogundimu, we started as a small printing shop with big
                dreams and an unwavering commitment to quality.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What began as a local printing service quickly gained
                recognition for our attention to detail, innovative solutions,
                and exceptional customer service. Our breakthrough came when we
                secured our first government contract with Lagos State, proving
                that we could handle large-scale, high-stakes projects with the
                professionalism and quality they demanded.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Today, we're proud to serve over 1000 clients including
                government agencies, major banks, healthcare institutions, and
                countless businesses and individuals who trust us with their
                most important printing needs. Our success is built on the
                foundation of quality, reliability, and genuine care for our
                clients' success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <Target className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide exceptional printing solutions that help our
                    clients communicate effectively, build their brands, and
                    achieve their goals through superior quality and service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Eye className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be Africa's leading printing company, known for
                    innovation, quality, and customer satisfaction while setting
                    new standards in the printing industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                  <CardTitle>Our Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To empower businesses, organizations, and individuals by
                    bringing their ideas to life through beautiful, high-quality
                    printed materials that make a lasting impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a
              company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4`}
                  >
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth from startup to industry leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-blue rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-brand-blue text-white">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind AKTOMRADY's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-brand-blue font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-light-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose AKTOMRADY?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're more than just a printing company - we're your strategic
              partner in bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Recognition",
                description:
                  "Trusted by government agencies, major banks, and leading corporations across Nigeria",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Track Record",
                description:
                  "Over 5000 successful projects delivered with 99% client satisfaction rate",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description:
                  "Skilled professionals with decades of combined experience in printing and design",
              },
              {
                icon: <Printer className="w-8 h-8" />,
                title: "Advanced Technology",
                description:
                  "State-of-the-art equipment ensuring superior quality and faster turnaround times",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Guarantee",
                description:
                  "We stand behind our work with comprehensive quality assurance and customer support",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Personalized Service",
                description:
                  "Dedicated account managers and customized solutions for every client's unique needs",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience the AKTOMRADY Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their most
            important printing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90 font-semibold px-8 py-3"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3"
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
