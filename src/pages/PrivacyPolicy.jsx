import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#faf4ec] min-h-screen px-6 py-10 text-[#3a3a3a]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-[#ddd]">
        <h1 className="text-3xl font-bold mb-6 text-[#2f2e2e]">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold  mb-2">1. Introduction</h2>
          <p>
            At Historical Artifacts Tracker, we respect your privacy and are
            committed to protecting any personal information you share with us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and any artifact entries or likes you make on the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>
            We use your information to personalize your experience, provide
            support, display your contributions, and improve our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not sell or trade your personal information. Your data may
            only be shared with third parties necessary for providing core
            functionalities (e.g., database hosting) with strict
            confidentiality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <p>
            We may use cookies to enhance user experience. You can choose to
            disable cookies in your browser settings if you prefer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access or loss.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. Contact us anytime for assistance with your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We reserve the right to update this privacy policy at any time.
            Continued use of the site means you accept those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@artifactstracker.com"
              className="text-[#8b5e3c] hover:underline"
            >
              support@artifactstracker.com
            </a>
            .
          </p>
        </section>

        <p className="mt-10 text-sm text-[#7a6a53] italic">
          Last updated: June 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
