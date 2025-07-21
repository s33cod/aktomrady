import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📞</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us Page</h1>
          <p className="text-gray-600 mb-8">
            This page is coming soon! We're setting up the best ways for you to reach us.
          </p>
          <Button 
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90"
          >
            Go Back
          </Button>
        </div>
      </div>
    </Layout>
  );
}
