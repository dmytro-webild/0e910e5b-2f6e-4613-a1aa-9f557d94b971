"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Contact Us",
          id: "/contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2x1m05"
      logoAlt="Uttam Motors Logo"
      brandName="Uttam Motors"
    />
  </div>

  <div id="contact-form" data-section="contact-form">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      tag="Connect With Us"
      title="Get in Touch"
      description="Have a question, need a quote, or want to book an appointment? Reach out to us directly or visit our shop."
      imageSrc="http://img.b2bpic.net/free-photo/business-people-using-maps-phones_53876-15135.jpg"
      imageAlt="Stylized map of Rajkot Gujarat"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What are your operating hours?",
          content: "Our shop is open from 9:00 AM to 7:00 PM, Monday to Saturday. We are closed on Sundays.",
        },
        {
          id: "q2",
          title: "Do you offer warranty on products?",
          content: "Yes, most of our products come with a manufacturer's warranty. Please check individual product details or ask our staff for more information.",
        },
        {
          id: "q3",
          title: "How can I book a service appointment?",
          content: "You can book a service appointment by filling out the contact form on our website, calling us directly, or visiting our shop during business hours.",
        },
        {
          id: "q4",
          title: "Do you provide installation services for accessories?",
          content: "Absolutely! Our skilled technicians provide professional installation services for all products purchased from Uttam Motors.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-african-american-woman-green-wall-manager-call-centre-worker-happy-adorable-smiling-welcoming-all-calls_343596-6990.jpg"
      imageAlt="Customer support person answering phone"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Find answers to common queries about our products, services, appointments, and general policies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ku13zm"
      logoAlt="uttam motors logo minimalist automotive"
      logoText="Uttam Motors"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Products",
              href: "/products",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "About Us",
              href: "/about",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "FAQ",
              href: "/contact#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Location",
              href: "https://maps.app.goo.gl/YourGoogleMapsLinkHere",
            },
            {
              label: "Call Us: 02812227978",
              href: "tel:+912812227978",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Uttam Motors. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
