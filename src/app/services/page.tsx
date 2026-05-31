"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';

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

  <div id="services-full" data-section="services-full">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "fs1",
          title: "Engine Tuning & Performance",
          author: "Optimized Power",
          description: "Unlock your vehicle's full potential with our advanced engine tuning and performance enhancement services.",
          tags: [
            "Engine",
            "Performance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-holding-digital-tablet_107420-95942.jpg",
          imageAlt: "Mechanic performing engine tuning diagnostics",
        },
        {
          id: "fs2",
          title: "Body Shop & Paint",
          author: "Flawless Finish",
          description: "From minor scratches to major collision repairs, we restore your vehicle's aesthetics to factory standards.",
          tags: [
            "Bodywork",
            "Paint",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-hand-is-opening-car-door_1150-6630.jpg",
          imageAlt: "Car body shop paint booth",
        },
        {
          id: "fs3",
          title: "Vehicle Customization",
          author: "Personalized Rides",
          description: "Tailor your car or bike with unique modifications, custom installations, and personalized touches.",
          tags: [
            "Custom",
            "Style",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580562.jpg",
          imageAlt: "Custom car interior leather stitching",
        },
        {
          id: "fs4",
          title: "Electrical System Repair",
          author: "System Experts",
          description: "Diagnosing and repairing complex electrical issues to ensure all your vehicle's systems function perfectly.",
          tags: [
            "Electrical",
            "Diagnostics",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/car-repairman-wearing-white-uniform-standing-holding-wrench-that-is-essential-tool-mechanic_1150-16588.jpg",
          imageAlt: "Automotive electrical repair wiring",
        },
      ]}
      title="Comprehensive Automotive Services"
      description="We offer a full spectrum of services to keep your vehicle running perfectly and looking its best, performed by certified and passionate technicians."
    />
  </div>

  <div id="service-packages" data-section="service-packages">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          title: "Basic Maintenance",
          price: "₹2,500",
          period: "per service",
          features: [
            "Oil Change & Filter",
            "Fluid Top-Up",
            "Tyre Pressure Check",
            "Basic Inspection",
          ],
          button: {
            text: "Book Now",
            href: "/contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/benchman-owner-car-making-deal_114579-2805.jpg",
          imageAlt: "mature woman elegant smiling portrait",
        },
        {
          id: "premium",
          title: "Premium Care",
          price: "₹6,000",
          period: "per service",
          features: [
            "All Basic Features",
            "Full Vehicle Scan",
            "Wheel Alignment",
            "Interior & Exterior Wash",
          ],
          button: {
            text: "Choose Plan",
            href: "/contact",
          },
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2x1m05",
          imageAlt: "mature woman elegant smiling portrait",
        },
        {
          id: "performance",
          title: "Performance Tune-up",
          price: "₹12,000",
          period: "per service",
          features: [
            "All Premium Features",
            "Engine Performance Tuning",
            "Brake System Check",
            "Advanced Detailing",
          ],
          button: {
            text: "Choose Plan",
            href: "/contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/back-black-car-with-red-rear-light_23-2147963062.jpg?_wi=2",
          imageAlt: "mature woman elegant smiling portrait",
        },
      ]}
      title="Service Packages & Pricing"
      description="Choose from our expertly crafted service packages designed for every need and budget, ensuring top-tier care for your vehicle."
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
