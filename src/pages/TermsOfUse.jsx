import React from 'react';

const TermsOfUse = () => {
    return (
       <div className="bg-[#faf4ec] min-h-screen px-6 py-10 text-[#3a3a3a]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-[#ddd]">
        <h1 className="text-3xl font-bold mb-6 text-[#2f2e2e]">
          Terms of Use
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Historical Artifacts Tracker, you agree to be bound by these Terms of Use. If you do not agree, please refrain from using the application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. User Contributions</h2>
          <p>
            Users may contribute artifacts and information. You are responsible for ensuring the accuracy and authenticity of your submissions. We reserve the right to remove any content deemed inappropriate or misleading.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p>
            All content including images, text, and design elements are either owned by us or used with permission. You may not copy, reproduce, or distribute without proper authorization.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Likes & Interactions</h2>
          <p>
            Users may like and engage with artifact listings. These interactions are tracked and visible to enhance community experience. Abuse of this system may result in account restrictions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Modifications</h2>
          <p>
            We reserve the right to update or change these terms at any time without notice. Continued use after modifications indicates your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:support@artifactstracker.com" className="text-[#8b5e3c] hover:underline">support@artifactstracker.com</a>.
          </p>
        </section>

        <p className="mt-10 text-sm text-[#7a6a53] italic">
          Last updated: June 2025
        </p>
      </div>
    </div>
    );
};

export default TermsOfUse;