"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
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

  <div id="products-cars" data-section="products-cars">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "CleanRide",
          name: "Premium Car Detailing Kit",
          price: "₹4,999",
          rating: 4.8,
          reviewCount: "120 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-bag-lying-car-close-up-view-interior-brand-new-modern-luxury-automobile_146671-17396.jpg",
          imageAlt: "Premium car detailing kit box",
        },
        {
          id: "p2",
          brand: "PowerTune",
          name: "Performance Exhaust System",
          price: "₹19,500",
          rating: 4.9,
          reviewCount: "85 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/turbocharged-engine-sports-car-close-up-hood_78492-3880.jpg",
          imageAlt: "Performance car exhaust system",
        },
        {
          id: "p3",
          brand: "LuxWheels",
          name: "Sport Alloy Wheels (Set of 4)",
          price: "₹45,000",
          rating: 4.7,
          reviewCount: "60 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/front-left-wheel-bordeaux-sedan-car_114579-4065.jpg",
          imageAlt: "Glossy black alloy wheels set",
        },
        {
          id: "p4",
          brand: "SoundMax",
          name: "Advanced Car Stereo System",
          price: "₹12,800",
          rating: 4.6,
          reviewCount: "95 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/car-navigation-display-multimedia-panel-auto-route-map_169016-68672.jpg",
          imageAlt: "Advanced car stereo system",
        },
        {
          id: "p5",
          brand: "TechDrive",
          name: "Fast Charge Car Adapter",
          price: "₹1,200",
          rating: 4.5,
          reviewCount: "150 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-electric-car-charging_23-2149146232.jpg",
          imageAlt: "Fast car phone charger usb-c",
        },
        {
          id: "p6",
          brand: "WeatherGuard",
          name: "Premium Waterproof Car Cover",
          price: "₹3,500",
          rating: 4.7,
          reviewCount: "75 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/drops-magenta-foam_23-2147797934.jpg",
          imageAlt: "Premium waterproof car cover",
        },
      ]}
      title="Explore Our Car Accessories"
      description="Find every tool and accessory for your car, available at the best prices. Enhance your driving experience."
    />
  </div>

  <div id="products-bikes" data-section="products-bikes">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "b1",
          brand: "MotoGuard",
          name: "Full-Face Motorcycle Helmet",
          price: "₹7,800",
          rating: 4.9,
          reviewCount: "90 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-with-long-hair-garage-repairing-motorcycle_1321-1383.jpg",
          imageAlt: "Sleek black motorcycle helmet",
        },
        {
          id: "b2",
          brand: "RideX",
          name: "Protective Riding Gloves",
          price: "₹2,500",
          rating: 4.7,
          reviewCount: "65 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-repairing-bicycle_23-2148138405.jpg",
          imageAlt: "Motorcycle riding gloves leather",
        },
        {
          id: "b3",
          brand: "GearUp",
          name: "Armored Motorcycle Jacket",
          price: "₹11,000",
          rating: 4.8,
          reviewCount: "50 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/afro-american-man-his-bicycle_23-2148828194.jpg",
          imageAlt: "Protective motorcycle jacket armored",
        },
        {
          id: "b4",
          brand: "SecureRide",
          name: "Motorcycle Disk Lock",
          price: "₹1,800",
          rating: 4.6,
          reviewCount: "110 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-woman-city-with-electric-scooter_23-2148162586.jpg",
          imageAlt: "Motorcycle disk lock security",
        },
        {
          id: "b5",
          brand: "CommuniMoto",
          name: "Bluetooth Intercom System",
          price: "₹6,000",
          rating: 4.5,
          reviewCount: "40 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/man-helping-woman-put-helmet_23-2147764127.jpg",
          imageAlt: "Motorcycle Bluetooth intercom headset",
        },
        {
          id: "b6",
          brand: "PathFinder",
          name: "LED Auxiliary Lights",
          price: "₹4,200",
          rating: 4.7,
          reviewCount: "55 Reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/man-racing-dirt-bike-fantasy-environment_23-2151500492.jpg",
          imageAlt: "Motorcycle LED auxiliary lights",
        },
      ]}
      title="Bike Gear & Accessories"
      description="Essential gear and accessories for every bike enthusiast. Ride safe, ride in style."
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
