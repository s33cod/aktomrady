import { useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Calculator,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: { text: string; action: string }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to AKTOMRADY Agencies! I'm here to help you with your printing needs. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      options: [
        { text: "Get a Quote", action: "quote" },
        { text: "Our Services", action: "services" },
        { text: "Contact Info", action: "contact" },
        { text: "Business Hours", action: "hours" },
      ],
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const quickResponses = {
    quote: {
      text: "I'd be happy to help you get a quote! 📋 You can either fill out our detailed quote form or tell me about your project. What type of printing do you need?",
      options: [
        { text: "Large Format Prints", action: "large-format" },
        { text: "Business Cards", action: "business-cards" },
        { text: "Wedding Invitations", action: "wedding" },
        { text: "Custom Branded Items", action: "branded" },
        { text: "Get Full Quote Form", action: "quote-form" },
      ],
    },
    services: {
      text: "We offer a comprehensive range of printing services! 🎨 Here are our main categories:",
      options: [
        { text: "Large Format Printing", action: "large-format-info" },
        { text: "Business Materials", action: "business-info" },
        { text: "Custom Branded Items", action: "branded-info" },
        { text: "Political Campaigns", action: "political-info" },
        { text: "View All Services", action: "services-page" },
      ],
    },
    contact: {
      text: "Here's how you can reach us! 📞",
      options: [
        { text: "Call Us: +234.8029477796", action: "call" },
        { text: "Email: info@aktomrady.com", action: "email" },
        { text: "WhatsApp Us", action: "whatsapp" },
        { text: "Visit Our Office", action: "address" },
      ],
    },
    hours: {
      text: "Our business hours are: 🕒\n\nMonday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Emergency Services Only\n\nWe're always here to help!",
      options: [
        { text: "Contact Us Now", action: "contact" },
        { text: "Get a Quote", action: "quote" },
      ],
    },
  };

  const addMessage = (
    text: string,
    isBot: boolean = false,
    options?: { text: string; action: string }[],
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleOptionClick = (action: string) => {
    switch (action) {
      case "quote-form":
        window.open("/quote", "_blank");
        addMessage(
          "I've opened our quote form in a new tab! Fill it out and we'll get back to you within 24 hours. 🚀",
          true,
        );
        break;
      case "services-page":
        window.open("/services", "_blank");
        addMessage(
          "I've opened our services page! You can see all our printing capabilities there. 📖",
          true,
        );
        break;
      case "call":
        window.open("tel:+2348029477796", "_self");
        break;
      case "email":
        window.open("mailto:info@aktomrady.com", "_self");
        break;
      case "whatsapp":
        window.open("https://wa.me/2348029477796", "_blank");
        break;
      case "address":
        addMessage(
          "📍 Visit us at:\n5, Kayode Street, Ogba\nLagos Mainland, OGBA LAGOS\nNigeria\n\nWe'd love to see you!",
          true,
        );
        break;
      case "large-format":
        addMessage(
          "Great choice! 📢 Our large format printing includes banners, billboards, and high-quality stickers. What size do you need?",
          true,
          [
            { text: "Get Quote for Large Format", action: "quote-form" },
            { text: "Learn More", action: "services-page" },
          ],
        );
        break;
      case "business-cards":
        addMessage(
          "Perfect! 💼 We create professional business cards that make lasting impressions. What quantity do you need?",
          true,
          [
            { text: "Get Business Card Quote", action: "quote-form" },
            { text: "See Our Work", action: "portfolio" },
          ],
        );
        break;
      case "wedding":
        addMessage(
          "How romantic! 💌 We design beautiful wedding invitations and event materials. When is your special day?",
          true,
          [
            { text: "Get Wedding Quote", action: "quote-form" },
            { text: "See Wedding Samples", action: "portfolio" },
          ],
        );
        break;
      case "branded":
        addMessage(
          "Excellent! 🎁 We create custom branded items like caps, wristbands, and promotional materials. What type of items do you need?",
          true,
          [
            { text: "Get Branded Items Quote", action: "quote-form" },
            { text: "View Our Products", action: "portfolio" },
          ],
        );
        break;
      case "portfolio":
        window.open("/portfolio", "_blank");
        addMessage(
          "Check out our portfolio in the new tab! You'll see work for government agencies, banks, and many satisfied clients. ✨",
          true,
        );
        break;
      default:
        if (quickResponses[action as keyof typeof quickResponses]) {
          const response =
            quickResponses[action as keyof typeof quickResponses];
          addMessage(response.text, true, response.options);
        }
        break;
    }
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    addMessage(currentMessage);
    setCurrentMessage("");

    // Simple bot response
    setTimeout(() => {
      addMessage(
        "Thank you for your message! 😊 For the quickest response, please use the options above or contact us directly at +234.8029477796. Our team will get back to you soon!",
        true,
        [
          { text: "Get a Quote", action: "quote" },
          { text: "Call Us Now", action: "call" },
          { text: "Our Services", action: "services" },
        ],
      );
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 z-50 bg-gradient-to-r from-brand-cyan to-brand-magenta hover:from-brand-cyan/90 hover:to-brand-magenta/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-brand-cyan to-brand-magenta text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">AKTOMRADY Chat</h3>
                  <p className="text-xs text-white/90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.options && (
                    <div className="mt-2 space-y-1">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option.action)}
                          className="block w-full text-left text-xs bg-white/20 hover:bg-white/30 rounded px-2 py-1 transition-colors"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-r from-brand-cyan to-brand-magenta hover:from-brand-cyan/90 hover:to-brand-magenta/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
