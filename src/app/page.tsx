"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

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
          name: "Home",          id: "/"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Services",          id: "/services"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "Gallery",          id: "/gallery"},
        {
          name: "Contact Us",          id: "/contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2x1m05"
      logoAlt="Uttam Motors Logo"
      brandName="Uttam Motors"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Uttam Motors"
      description="Your Trusted Partner for Quality Automotive Products & Accessories. Driving Excellence for Over Two Decades."
      buttons={[
        {
          text: "Explore Products",          href: "/products"},
        {
          text: "Our Services",          href: "/services"},
      ]}
      buttonAnimation="slide-up"
      imageSrc="https://img.b2bpic.net/premium-photo/car-audio-car-speakers-subwoofer-accessories-tuning-solated-white-background-banner_175390-865.jpg?id=26016013"
      imageAlt="Luxurious sports car in a dark garage"
      showDimOverlay={true}
      ariaLabel="Hero section with Uttam Motors logo and call to action"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Driving Excellence for Over 20 Years"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/brutal-tattooed-bearded-mechanic-specialist-repairs-car-engine-which-is-raised-hydraulic-lift-garage-service-station_613910-19599.jpg",          alt: "Vintage car in a classic workshop setting"},
      ]}
      buttons={[
        {
          text: "Learn More About Us",          href: "/about"},
      ]}
    />
  </div>

  <div id="services-home" data-section="services-home">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",          title: "Advanced Diagnostics",          author: "Expert Technicians",          description: "Utilizing state-of-the-art equipment to accurately pinpoint any issues, ensuring precise and efficient repairs.",          tags: [
            "Car",            "Bike"],
          imageSrc: "https://img.b2bpic.net/premium-photo/leather-seat-vintage-motorcycle_38052-2666.jpg?id=21040445",          imageAlt: "Car diagnostic screen in a modern workshop"},
        {
          id: "s2",          title: "Custom Installations",          author: "Performance Specialists",          description: "Expert fitting of performance parts, audio systems, and aesthetic enhancements to personalize your ride.",          tags: [
            "",            ""],
          imageSrc: "https://img.b2bpic.net/premium-photo/high-angle-view-toy-car-with-hand-tools-table_175932-5217.jpg?id=113584134",          imageAlt: "Custom car interior being installed"},
        {
          id: "s3",          title: "Luxury Detailing",          author: "Detailing Masters",          description: "Comprehensive cleaning, polishing, and protection services that restore your vehicle's showroom shine.",          tags: [
            "Clean",            "Shine"],
          imageSrc: "https://img.b2bpic.net/premium-vector/extensive-collection-automotive-vehicles-repair-tools-car-parts-as-flat-silhouettes_870512-17171.jpg?id=425033087",          imageAlt: "Professional car detailing with polishing"},
      ]}
      title="Our Premium Services"
      description="From routine maintenance to performance upgrades, our certified experts ensure your vehicle receives the best care, keeping you on the road with confidence."
      buttons={[
        {
          text: "View All Services",          href: "/services"},
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Legacy in Numbers"
      tag="Driven by Success"
      metrics={[
        {
          id: "m1",          value: "20+",          description: "Years of Experience"},
        {
          id: "m2",          value: "100+",          description: "Satisfied Customers"},
        {
          id: "m3",          value: "100+",          description: "Premium Products"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Our customers speak for us. See what they say about their Uttam Motors experience."
      rating={5}
      author="Happy Customers"
      avatars={[
        {
          src: "https://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41015.jpg?id=10706613",          alt: "Sarah Johnson"},
        {
          src: "https://img.b2bpic.net/free-photo/indian-satisfied-woman-clapping-hands-feeling-proud-milestone_482257-122316.jpg?id=417583905",          alt: "Michael Chen"},
        {
          src: "https://img.b2bpic.net/free-photo/pretty-indian-girl-black-saree-dress-posed-restaurant-with-mobile-phone-hand_627829-1979.jpg?id=25957517",          alt: "Emily Rodriguez"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-happy-woman-outdoors_23-2149042138.jpg",          alt: "David Kim"},
        {
          src: "http://img.b2bpic.net/free-photo/young-digital-nomad-traveling-winter-time_23-2149207258.jpg",          alt: "Young digital nomad traveling in winter time"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="trust-partners" data-section="trust-partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "AutoDrive",        "PowerTune",        "MotoGear",        "SoundMax",        "LuminX",        "CleanRide",        "LuxAuto"]}
      title="Trusted Brands & Partners"
      description="We partner with leading automotive brands to bring you the best quality products."
      speed={50}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ku13zm"
      logoAlt="uttam motors logo minimalist automotive"
      logoText="Uttam Motors"
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Products",              href: "/products"},
            {
              label: "Services",              href: "/services"},
            {
              label: "About Us",              href: "/about"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "/contact"},
            {
              label: "FAQ",              href: "/contact#faq"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Location",              href: "https://maps.app.goo.gl/YourGoogleMapsLinkHere"},
            {
              label: "Call Us: 02812227978",              href: "tel:+912812227978"},
          ],
        },
      ]}
      copyrightText="© 2026 Uttam Motors. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
