import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { absoluteUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Cookie Policy — Next Switch",
  description:
    "Learn about how Next Switch uses cookies and similar technologies to enhance your browsing experience on our website.",
  keywords: [
    "Next Switch cookie policy",
    "cookie consent",
    "privacy policy",
    "data protection",
    "website cookies",
  ],
  openGraph: {
    title: "Cookie Policy — Next Switch",
    description:
      "Learn about how Next Switch uses cookies and similar technologies to enhance your browsing experience.",
    url: absoluteUrl("/cookies"),
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch Cookie Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy — Next Switch",
    description:
      "Learn about how Next Switch uses cookies and similar technologies.",
    images: [absoluteUrl("/og.png")],
  },
  alternates: {
    canonical: absoluteUrl("/cookies"),
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm text-white/40 mb-12">
          Last updated: July 2026
        </p>

        <div className="space-y-8 text-sm text-white/70 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help the website remember your preferences, understand how you use the
              site, and deliver a better browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              How We Use Cookies
            </h2>
            <p className="mb-4">
              Next Switch uses cookies for the following purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                <div>
                  <strong className="text-white">Necessary Cookies</strong>
                  <p className="mt-0.5">
                    Essential for the website to function. These enable basic features
                    like page navigation and access to secure areas. The website cannot
                    function properly without them.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                <div>
                  <strong className="text-white">Analytics Cookies</strong>
                  <p className="mt-0.5">
                    Help us understand how visitors interact with our website by
                    collecting anonymous information about page visits, time spent,
                    and navigation patterns. This data helps us improve the site.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                <div>
                  <strong className="text-white">Marketing Cookies</strong>
                  <p className="mt-0.5">
                    Used to track visitors across websites to deliver relevant
                    advertisements and measure campaign effectiveness.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Managing Your Consent
            </h2>
            <p>
              When you first visit our website, a cookie consent banner will appear
              allowing you to choose which categories of cookies you accept. You can
              change your preferences at any time by accessing the cookie settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Third-Party Cookies
            </h2>
            <p>
              We may use third-party services such as Google Analytics that set their
              own cookies. These third parties have their own privacy policies
              governing the use of your data. We encourage you to review their
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              How to Disable Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their settings.
              You can block or delete cookies, but please note that disabling
              necessary cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will be
              posted on this page with an updated revision date. If we make
              significant changes, we will notify you through a notice on our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
              <a
                href="mailto:hello@nextswitch.org"
                className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
              >
                hello@nextswitch.org
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
