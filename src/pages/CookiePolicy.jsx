import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-[#faf4ec] min-h-screen px-6 py-10 text-[#3a3a3a]">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-[#ddd]">
        <h1 className="text-3xl font-bold mb-6 text-[#2f2e2e]">
          Cookie Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help enhance your browsing experience by
            remembering your preferences and actions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Remember your login information</li>
            <li>Store your language and theme preferences</li>
            <li>Understand how you interact with our site</li>
            <li>Improve user experience and functionality</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Essential Cookies:</strong> Necessary for basic
              functionality, such as logging in and navigating the site.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us analyze website
              performance and improve usability.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember choices you make
              like dark/light mode or language preferences.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
          <p>
            You can choose to accept or decline cookies through your browser
            settings. Disabling cookies may affect the functionality of certain
            parts of the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h2>
          <p>
            We may use trusted third-party services (like analytics tools) that
            also store cookies to help us understand site usage and user
            behavior.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Updates to This Policy
          </h2>
          <p>
            We may update this Cookie Policy as needed. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>
            If you have questions regarding our cookie policy, please email us
            at{" "}
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

export default CookiePolicy;
