import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem(
      "aktomrady-cookies-accepted",
    );
    if (!hasAcceptedCookies) {
      // Show notification after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("aktomrady-cookies-accepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("aktomrady-cookies-accepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-brand-cyan mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                We use cookies
              </h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-gradient-to-r from-brand-cyan to-brand-magenta hover:from-brand-cyan/90 hover:to-brand-magenta/90 text-white"
            >
              Accept All
            </Button>
            <button
              onClick={declineCookies}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close cookie notification"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
