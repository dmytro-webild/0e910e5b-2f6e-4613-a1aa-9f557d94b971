"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardFive from '@/components/sections/team/TeamCardFive';

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

  <div id="about-story" data-section="about-story">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Our Journey: Two Decades of Automotive Passion"},
      ]}
      buttons={[
        {
          text: "Contact Our Team",          href: "/contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-mechanic-standing-repair-garage_1170-1532.jpg"
      imageAlt="Team of mechanics in modern workshop"
    />
  </div>

  <div id="our-team" data-section="our-team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "t1",          name: "Rajesh Kumar",          role: "Founder & CEO",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-tailor-workshop_329181-14330.jpg",          imageAlt: "Male automotive founder professional"},
        {
          id: "t2",          name: "Priya Sharma",          role: "Head Mechanic",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-working-laptop_1170-1631.jpg",          imageAlt: "Head mechanic portrait serious"},
        {
          id: "t3",          name: "Amit Patel",          role: "Sales Manager",          imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-looking-away-medium-shot_23-2148266204.jpg",          imageAlt: "Sales manager smiling car dealership"},
      ]}
      title="Meet Our Expert Team"
      description="Our passionate and skilled team is dedicated to providing you with the best advice, exceptional service, and unparalleled automotive solutions."
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
      copyrightText="© 2024 Uttam Motors. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
