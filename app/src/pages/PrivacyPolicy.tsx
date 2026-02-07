import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - SARMAK"
        description="SARMAK's privacy policy outlines how we collect, use, and protect your personal information."
      />

      <section className="relative pt-32 pb-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-white mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-white/70">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="body-md">
                  SARMAK (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="body-md mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information (name, email, phone number, company)</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="body-md mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">4. Information Sharing</h2>
                <p className="body-md">
                  We do not sell your personal information. We may share your information with 
                  trusted third-party service providers who assist us in operating our website 
                  and conducting our business.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">5. Security</h2>
                <p className="body-md">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p className="body-md mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
                <p className="body-md">
                  If you have any questions about this Privacy Policy, please contact us at 
                  info@sarmak.in.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
                <p className="body-md">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page.
                </p>
              </div>

              <p className="text-white/50 text-sm">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
