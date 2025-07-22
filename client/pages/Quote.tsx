import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Calculator,
  FileText,
  Send,
  CheckCircle,
  Upload,
  Clock,
  Users,
  Printer,
  Star,
  Phone,
  Mail,
} from "lucide-react";

export default function Quote() {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    projectType: "",
    quantity: "",
    dimensions: "",
    colors: "",
    timeline: "",
    description: "",
    budget: "",
    deliveryAddress: "",
    additionalServices: [] as string[],
    hasDesign: "",
    designFile: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quoteForm,
          message: quoteForm.description,
          service: quoteForm.services.join(", "),
          formType: "quote",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        // Reset form
        setQuoteForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          projectType: "",
          quantity: "",
          dimensions: "",
          colors: "",
          timeline: "",
          description: "",
          budget: "",
          deliveryAddress: "",
          additionalServices: [],
          hasDesign: "",
          designFile: null,
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(
          result.message || "Failed to send quote request. Please try again.",
        );
      }
    } catch (error) {
      console.error("Quote form error:", error);
      alert(
        "Failed to send quote request. Please check your connection and try again.",
      );
    }

    setIsSubmitting(false);
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuoteForm((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }));
    } else {
      setQuoteForm((prev) => ({
        ...prev,
        services: prev.services.filter((s) => s !== service),
      }));
    }
  };

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setQuoteForm((prev) => ({
        ...prev,
        additionalServices: [...prev.additionalServices, service],
      }));
    } else {
      setQuoteForm((prev) => ({
        ...prev,
        additionalServices: prev.additionalServices.filter(
          (s) => s !== service,
        ),
      }));
    }
  };

  const services = [
    {
      id: "large-format",
      name: "Large Format Prints (Banners, Billboards, Stickers)",
      icon: "📢",
    },
    { id: "business-cards", name: "Business Cards", icon: "💼" },
    { id: "flyers-brochures", name: "Flyers & Brochures", icon: "📋" },
    {
      id: "wedding-invitations",
      name: "Wedding & Event Invitations",
      icon: "💌",
    },
    {
      id: "branded-items",
      name: "Custom Branded Items & Souvenirs",
      icon: "🎁",
    },
    { id: "caps-apparel", name: "Custom Caps & Apparel", icon: "🧢" },
    { id: "wristbands", name: "Custom Wristbands", icon: "⌚" },
    {
      id: "political-materials",
      name: "Political Campaign Materials",
      icon: "🗳️",
    },
    { id: "corporate-materials", name: "Corporate Materials", icon: "🏢" },
    { id: "packaging", name: "Custom Packaging & Bags", icon: "📦" },
  ];

  const additionalServices = [
    "Design Services",
    "Urgent/Express Delivery",
    "Installation Services",
    "Multiple Delivery Locations",
    "Custom Finishing (Lamination, Binding, etc.)",
    "Photography for Materials",
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Your{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow bg-clip-text text-transparent">
                Free Quote
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get a detailed, personalized
              quote for your printing project. Our experts will review your
              requirements and provide competitive pricing within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Clock size={20} />
                <span className="font-semibold">24-hour response</span>
              </div>
              <div className="flex items-center gap-2 text-brand-yellow">
                <Star size={20} />
                <span className="font-semibold">Free consultation</span>
              </div>
              <div className="flex items-center gap-2 text-brand-magenta">
                <CheckCircle size={20} />
                <span className="font-semibold">No obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitSuccess && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <h3 className="text-green-800 font-semibold">
                    Quote Request Submitted Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for your request. Our team will review your
                    requirements and get back to you within 24 hours with a
                    detailed quote.
                  </p>
                </div>
              </div>
            )}

            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow text-white rounded-t-lg">
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 mr-3" />
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      Project Details
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      Please provide detailed information about your printing
                      project for an accurate quote.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-brand-cyan" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={quoteForm.name}
                          onChange={(e) =>
                            setQuoteForm({ ...quoteForm, name: e.target.value })
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={quoteForm.email}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              email: e.target.value,
                            })
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+234 xxx xxx xxxx"
                          value={quoteForm.phone}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              phone: e.target.value,
                            })
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company name"
                          value={quoteForm.company}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              company: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Printer className="w-5 h-5 mr-2 text-brand-magenta" />
                      Services Required *
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <Checkbox
                            id={service.id}
                            checked={quoteForm.services.includes(service.id)}
                            onCheckedChange={(checked) =>
                              handleServiceChange(
                                service.id,
                                checked as boolean,
                              )
                            }
                          />
                          <label
                            htmlFor={service.id}
                            className="flex items-center space-x-2 cursor-pointer flex-1"
                          >
                            <span className="text-lg">{service.icon}</span>
                            <span className="text-sm font-medium">
                              {service.name}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Specifications */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand-yellow" />
                      Project Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select
                          value={quoteForm.projectType}
                          onValueChange={(value) =>
                            setQuoteForm({ ...quoteForm, projectType: value })
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-time">
                              One-time Project
                            </SelectItem>
                            <SelectItem value="ongoing">
                              Ongoing Campaign
                            </SelectItem>
                            <SelectItem value="bulk-order">
                              Bulk Order
                            </SelectItem>
                            <SelectItem value="rush-job">Rush Job</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          type="text"
                          placeholder="e.g., 1000 pieces, 50 sq meters"
                          value={quoteForm.quantity}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              quantity: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dimensions">Dimensions/Size</Label>
                        <Input
                          id="dimensions"
                          type="text"
                          placeholder="e.g., A4, 2m x 1m, Custom size"
                          value={quoteForm.dimensions}
                          onChange={(e) =>
                            setQuoteForm({
                              ...quoteForm,
                              dimensions: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="colors">Colors/Printing</Label>
                        <Select
                          value={quoteForm.colors}
                          onValueChange={(value) =>
                            setQuoteForm({ ...quoteForm, colors: value })
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select color option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-color">
                              Full Color (CMYK)
                            </SelectItem>
                            <SelectItem value="black-white">
                              Black & White
                            </SelectItem>
                            <SelectItem value="single-color">
                              Single Color
                            </SelectItem>
                            <SelectItem value="two-color">Two Color</SelectItem>
                            <SelectItem value="pantone">
                              Pantone Colors
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="timeline">Timeline *</Label>
                      <Select
                        value={quoteForm.timeline}
                        onValueChange={(value) =>
                          setQuoteForm({ ...quoteForm, timeline: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">
                            Urgent (1-2 days)
                          </SelectItem>
                          <SelectItem value="standard">
                            Standard (3-5 days)
                          </SelectItem>
                          <SelectItem value="flexible">
                            Flexible (1-2 weeks)
                          </SelectItem>
                          <SelectItem value="planning">
                            Just planning ahead
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        value={quoteForm.budget}
                        onValueChange={(value) =>
                          setQuoteForm({ ...quoteForm, budget: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">
                            Under ₦25,000
                          </SelectItem>
                          <SelectItem value="25k-50k">
                            ₦25,000 - ₦50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            ₦50,000 - ₦100,000
                          </SelectItem>
                          <SelectItem value="100k-500k">
                            ₦100,000 - ₦500,000
                          </SelectItem>
                          <SelectItem value="over-500k">
                            Over ₦500,000
                          </SelectItem>
                          <SelectItem value="not-sure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <Label className="text-base font-semibold">
                      Additional Services
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      {additionalServices.map((service) => (
                        <div
                          key={service}
                          className="flex items-center space-x-3"
                        >
                          <Checkbox
                            id={`additional-${service}`}
                            checked={quoteForm.additionalServices.includes(
                              service,
                            )}
                            onCheckedChange={(checked) =>
                              handleAdditionalServiceChange(
                                service,
                                checked as boolean,
                              )
                            }
                          />
                          <label
                            htmlFor={`additional-${service}`}
                            className="text-sm cursor-pointer"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Design and Delivery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="hasDesign">Do you have a design?</Label>
                      <Select
                        value={quoteForm.hasDesign}
                        onValueChange={(value) =>
                          setQuoteForm({ ...quoteForm, hasDesign: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select design status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="have-design">
                            Yes, I have a design ready
                          </SelectItem>
                          <SelectItem value="need-design">
                            No, I need design services
                          </SelectItem>
                          <SelectItem value="need-help">
                            I have ideas but need help
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="deliveryAddress">Delivery Address</Label>
                      <Input
                        id="deliveryAddress"
                        type="text"
                        placeholder="Where should we deliver?"
                        value={quoteForm.deliveryAddress}
                        onChange={(e) =>
                          setQuoteForm({
                            ...quoteForm,
                            deliveryAddress: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your project in detail including any specific requirements, materials, finishing options, or special instructions..."
                      value={quoteForm.description}
                      onChange={(e) =>
                        setQuoteForm({
                          ...quoteForm,
                          description: e.target.value,
                        })
                      }
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 text-white font-semibold px-12 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting
                        ? "Submitting Quote Request..."
                        : "Get My Free Quote"}
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      * We'll respond with a detailed quote within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Need Help or Have Questions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <a
                  href="tel:+2348029477796"
                  className="text-brand-cyan hover:text-brand-magenta transition-colors font-medium"
                >
                  +234.8029477796
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-magenta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-brand-magenta" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <a
                  href="mailto:info@aktomrady.com"
                  className="text-brand-magenta hover:text-brand-cyan transition-colors font-medium"
                >
                  info@aktomrady.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-yellow" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  5, Kayode Street, Ogba
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
