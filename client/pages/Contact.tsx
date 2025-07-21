import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Calculator,
  FileText,
  Users
} from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    quantity: "",
    timeline: "",
    description: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", contactForm);
    setSubmitSuccess(true);
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Quote form submitted:", quoteForm);
    setSubmitSuccess(true);
    setQuoteForm({ 
      name: "", email: "", phone: "", company: "", service: "", 
      quantity: "", timeline: "", description: "", budget: "" 
    });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["+234 813 4466 334", "+234 902 345 6789", "+234 708 123 4567"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: ["info@aktomrady.com", "orders@aktomrady.com", "support@aktomrady.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Locations",
      details: ["Lagos: Plot 123, Victoria Island, Lagos State", "Abuja: Suite 45, Central Business District", "Port Harcourt: 67 Trans Amadi Road"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Services Only"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    "Large Format Prints",
    "Business Cards",
    "Banners & Billboards",
    "Wedding Invitations",
    "Flyers & Brochures",
    "Custom Branded Items",
    "Corporate Materials",
    "Event Materials",
    "Packaging Materials",
    "Other (Please Specify)"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue to-brand-light-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to bring your printing project to life? Get in touch with our expert team today. 
              We're here to help with quotes, consultations, and all your printing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +234 813 4466 334
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white mx-auto mb-4`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-brand-blue mr-3" />
                  <div>
                    <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                    <CardDescription>
                      Have questions? We'd love to hear from you.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+234 xxx xxx xxxx"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us more about your inquiry..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quote Request Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 text-brand-blue mr-3" />
                  <div>
                    <CardTitle className="text-2xl font-bold">Request a Quote</CardTitle>
                    <CardDescription>
                      Get a detailed quote for your printing project.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quote-name">Full Name *</Label>
                      <Input
                        id="quote-name"
                        type="text"
                        placeholder="Your full name"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-email">Email Address *</Label>
                      <Input
                        id="quote-email"
                        type="email"
                        placeholder="your@email.com"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quote-phone">Phone Number *</Label>
                      <Input
                        id="quote-phone"
                        type="tel"
                        placeholder="+234 xxx xxx xxxx"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quote-company">Company/Organization</Label>
                      <Input
                        id="quote-company"
                        type="text"
                        placeholder="Your company name"
                        value={quoteForm.company}
                        onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quote-service">Service Required *</Label>
                      <Select value={quoteForm.service} onValueChange={(value) => setQuoteForm({...quoteForm, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quote-quantity">Quantity</Label>
                      <Input
                        id="quote-quantity"
                        type="text"
                        placeholder="e.g., 1000 pieces"
                        value={quoteForm.quantity}
                        onChange={(e) => setQuoteForm({...quoteForm, quantity: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quote-timeline">Timeline</Label>
                      <Select value={quoteForm.timeline} onValueChange={(value) => setQuoteForm({...quoteForm, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                          <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                          <SelectItem value="flexible">Flexible (1-2 weeks)</SelectItem>
                          <SelectItem value="planning">Just planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quote-budget">Budget Range</Label>
                      <Select value={quoteForm.budget} onValueChange={(value) => setQuoteForm({...quoteForm, budget: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₦50,000</SelectItem>
                          <SelectItem value="50k-100k">₦50,000 - ₦100,000</SelectItem>
                          <SelectItem value="100k-500k">₦100,000 - ₦500,000</SelectItem>
                          <SelectItem value="over-500k">Over ₦500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="quote-description">Project Description *</Label>
                    <Textarea
                      id="quote-description"
                      placeholder="Please describe your project in detail including specifications, materials, colors, etc."
                      value={quoteForm.description}
                      onChange={(e) => setQuoteForm({...quoteForm, description: e.target.value})}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Submitting..." : "Request Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have multiple locations across Nigeria to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                city: "Lagos Office",
                address: "Plot 123, Victoria Island, Lagos State, Nigeria",
                phone: "+234 813 4466 334",
                hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
              },
              {
                city: "Abuja Office",
                address: "Suite 45, Central Business District, Abuja, FCT, Nigeria",
                phone: "+234 902 345 6789",
                hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
              },
              {
                city: "Port Harcourt Office",
                address: "67 Trans Amadi Road, Port Harcourt, Rivers State, Nigeria",
                phone: "+234 708 123 4567",
                hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
              }
            ].map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 text-brand-blue mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">{office.address}</p>
                  <p className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {office.phone}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {office.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
