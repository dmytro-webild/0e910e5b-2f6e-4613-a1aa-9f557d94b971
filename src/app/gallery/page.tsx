"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

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

  <div id="gallery-showcase" data-section="gallery-showcase">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "g1",
          brand: "Custom Build",
          name: "Modified Sports Sedan",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/black-business-class-sedan-with-design-wheel_114579-5233.jpg",
          imageAlt: "Custom built sports car showcase",
        },
        {
          id: "g2",
          brand: "Bike Custom",
          name: "Urban Cruiser Motorcycle",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-vector/illustration-classic-motorcycle_1284-51401.jpg",
          imageAlt: "Custom motorcycle unique design",
        },
        {
          id: "g3",
          brand: "Performance",
          name: "High-Performance Engine View",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-motorcycle-parts_23-2150704633.jpg",
          imageAlt: "High performance engine bay clean",
        },
        {
          id: "g4",
          brand: "Luxury",
          name: "Premium Interior Detailing",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-baber-shop-chiar_23-2148506339.jpg",
          imageAlt: "Luxury car interior close-up",
        },
        {
          id: "g5",
          brand: "Wheels",
          name: "Custom Alloy Wheel Close-up",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-worker-repairing-car_23-2150171256.jpg",
          imageAlt: "Sport car wheel close-up brake",
        },
        {
          id: "g6",
          brand: "Accessories",
          name: "Premium Accessory Display",
          price: "N/A",
          rating: 5,
          reviewCount: "",
          imageSrc: "http://img.b2bpic.net/free-photo/different-car-accessories-arrangement_23-2149030414.jpg",
          imageAlt: "Automotive accessories store display",
        },
      ]}
      title="Our Automotive Showcase"
      description="A glimpse into the stunning vehicles we've serviced and the premium products we offer. Witness excellence in every detail."
    />
  </div>

  <div id="gallery-projects" data-section="gallery-projects">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Featured Projects & Customizations"
      description="See how we bring automotive dreams to life with our expert installations and custom work. Each project is a testament to our craftsmanship."
      blogs={[
        {
          id: "blog1",
          category: "Restoration",
          title: "Classic Car Revival",
          excerpt: "A deep dive into the painstaking restoration of a vintage beauty, bringing it back to its original glory.",
          imageSrc: "http://img.b2bpic.net/free-photo/forest-with-abandoned-car_1203-2013.jpg",
          imageAlt: "Classic car restoration workshop",
          authorName: "Uttam Motors",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2x1m05",
          date: "2023-10-26",
        },
        {
          id: "blog2",
          category: "Audio",
          title: "Ultimate Sound System Upgrade",
          excerpt: "Discover how we transformed a standard vehicle into an unparalleled auditory experience with custom audio.",
          imageSrc: "http://img.b2bpic.net/free-photo/auto-business-car-sale-consumerism-people-concept-happy-woman-taking-car-from-dealer-auto-show-salon_146671-14243.jpg",
          imageAlt: "Car audio system installation process",
          authorName: "Uttam Motors",
          authorAvatar: "http://img.b2bpic.net/free-vector/abstract-company-logo-template_1071-57.jpg",
          date: "2023-11-15",
        },
        {
          id: "blog3",
          category: "Styling",
          title: "Aggressive Body Kit Installation",
          excerpt: "Witness the dramatic transformation of a car's exterior with a custom-fitted, aerodynamic body kit.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-car-sketch-style_23-2151138928.jpg",
          imageAlt: "Sport car body kit installation",
          authorName: "Uttam Motors",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6wqmte",
          date: "2023-12-01",
        },
      ]}
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
