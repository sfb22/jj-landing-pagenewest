"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/src/components/landing/footer";
import { TestimonialGrid } from "@/src/components/landing/testimonial-grid";
import { X } from "lucide-react";
import { FAQSection } from "@/src/components/landing/faq-section";
import { DownloadButton } from "@/src/components/landing/download-button";
import { ChevronDown } from "lucide-react";
import { TryForFreeButton } from "./try-for-free-button";

import { PricingSection } from "@/src/components/landing/pricing-section";
import Script from "next/script";
import { LoopsForm } from "@/src/components/landing/loops-form";

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full h-2 bg-stone-100">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-stone-100  rounded-full p-2 ">
        <ChevronDown className="w-7 h-7 text-[#FF6F3C]" />
      </div>
    </div>
  );
};

const PhoneSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="gap-10 lg:gap-16 w-full items-center lg:p-16 lg:max-h-[800px] lg:h-screen relative p-8 py-20">
      <div className="flex-col lg:flex-row flex items-center justify-center  h-full mx-auto">
        {children}
      </div>
    </section>
  );
};

const SplitSectionBackground: React.FC<{
  children?: React.ReactNode;
  imageUrl: {
    mobile: string;
    desktop: string;
  };
}> = ({ children, imageUrl }) => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 max-h-full md:overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: `url("${imageUrl.mobile}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url("${imageUrl.desktop}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {children && children}
    </div>
  );
};

const PhoneComponent = ({ imageUrl }: { imageUrl: string }) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [borderRadius, setBorderRadius] = useState("34px");

  useEffect(() => {
    if (phoneRef.current) {
      const height = phoneRef.current.offsetHeight;
      setBorderRadius(`${height * 0.06}px`);
    }
  }, []);

  return (
    <div
      ref={phoneRef}
      style={{ borderRadius }}
      className="relative h-full aspect-[418/828] [box-shadow:rgba(0,_0,_0,_0.25)_0px_54px_55px,rgba(0,_0,_0,_0.12)_0px_-12px_30px,rgba(0,_0,_0,_0.12)_0px_4px_6px,rgba(0,_0,_0,_0.17)_0px_12px_13px,rgba(0,_0,_0,_0.09)_0px_-3px_5px]"
    >
      <Image
        src={imageUrl}
        alt="Journey Jotter App"
        fill
        style={{ borderRadius }}
        className="object-fill border-4 border-black brightness-95"
        priority
        onError={(e) => {
          console.error("Image failed to load:", e);
        }}
      />
    </div>
  );
};

// aspect-[375/972]

export default function LandingPage() {
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 50);

      // Find the current section
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Add activeSection as dependency

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS6Q8EJYXB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());

          gtag('config', 'G-RS6Q8EJYXB');
        `}
      </Script>

      <div className="flex min-h-screen flex-col text-stone-900 bg-white ">
        <header
          className={`fixed top-0  left-0 right-0 z-20  transition-colors duration-300 text-white    ${
            showButton
              ? "bg-[#FF6F3C]  backdrop-blur-3xl"
              : "bg-black/20  backdrop-blur-none"
          }`}
        >
          <div
            className={`px-3 mx-auto flex h-12 md:h-16 items-center justify-between `}
          >
            <Link href="/" className="flex items-center space-x-2 ml-2">
              <span
                className={`md:font-extrabold font-bold text-lg md:text-3xl ${showButton ? "text-white" : "text-white"}`}
              >
                Journey Jotter
              </span>
            </Link>

            <div className="flex items-center h-full md:gap-4">
              <nav className="hidden md:flex text-lg font-semibold items-center gap-2 h-full">
                <Link
                  href="#how-it-works"
                  className={`
                    transition-all duration-300 ease-in-out
                    h-full flex items-center px-3
                    relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1
                    after:transition-all after:duration-300 after:ease-in-out
                    ${
                      activeSection === "how-it-works"
                        ? "text-[#FF6F3C] font-bold after:bg-[#FF6F3C]"
                        : "text-white hover:text-[#FF6F3C] after:bg-transparent"
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  How it works
                </Link>

                <Link
                  href="#faq"
                  className={`
                    transition-all duration-300 ease-in-out
                    h-full flex items-center px-3
                    relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1
                    after:transition-all after:duration-300 after:ease-in-out
                    ${
                      activeSection === "faq"
                        ? "text-[#FF6F3C] font-bold after:bg-[#FF6F3C]"
                        : "text-white hover:text-[#FF6F3C] after:bg-transparent"
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#faq")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  FAQ
                </Link>
                {/* <Link
                  href="/blog"
                  className={`
                    transition-all duration-300 ease-in-out
                    h-full flex items-center px-3
                    relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1
                    after:transition-all after:duration-300 after:ease-in-out
                    ${
                      activeSection === "blog"
                        ? "text-mint-green-500 font-bold after:bg-mint-green-500"
                        : "text-white hover:text-mint-green-400 after:bg-transparent"
                    }
                  `}
                >
                  Blog
                </Link> */}
              </nav>
              {/* <div className=" hidden md:block">
                <DownloadButton
                  showIcon={false}
                  size="md"
                  className={`
                  transition-all duration-300 ease-in-out mr-2
                  ${showButton ? "md:w-[260px] w-[230px] opacity-100 ml-2" : "w-0 opacity-0 p-0 overflow-hidden border-0 ml-0"}
                `}
                />
              </div>
              <div className="block md:hidden">
                <DownloadButton
                  showIcon={false}
                  size="sm"
                  className={`
                  transition-all duration-300 ease-in-out mr-2
                  ${showButton ? "md:w-[260px] w-[200px] opacity-100 ml-2" : "w-0 opacity-0 p-0 overflow-hidden border-0 ml-0"}
                `}
                />
              </div> */}
              <button
                className="md:hidden flex items-center justify-center p-2 rounded-md text-white hover:text-mint-green-400 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {!isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <X className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed top-12 left-0 right-0 z-40 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "h-[calc(100vh-3rem)] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-start justify-start h-full gap-6 p-6 py-6">
            <Link
              href="#how-it-works"
              className={`
                text-xl font-bold text-stone-900 hover:text-mint-green-400
                transition-colors duration-200
              `}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .querySelector("#how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How it works
            </Link>

            <Link
              href="#faq"
              className={`
                text-xl font-bold text-stone-900 hover:text-mint-green-400
                transition-colors duration-200
              `}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document
                  .querySelector("#faq")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </Link>
            {/* <Link
              href="/blog"
              className={`
                text-xl font-bold text-stone-900 hover:text-mint-green-400
                transition-colors duration-200
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link> */}
          </nav>
        </div>

        {/* <main className="flex-grow relative z-10 mt-8 md:mt-16"> */}
        <main className="flex-grow relative z-10 ">
          {/* Hero */}
          <section id="hero" className="w-full">
            <PhoneSection>
              <SplitSectionBackground
                imageUrl={{
                  mobile: "/stock/hero.png",
                  desktop: "/stock/hero-crop.jpg",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(286deg, rgba(0, 0, 0, 0.00) 0.58%, rgba(0, 0, 0, 0.60) 100%)",
                  }}
                  className="absolute inset-0"
                />
                {/* <div className="absolute inset-0 md:bg-gradient-to-r bg-gradient-to-b from-black/0 via-black/50 to-black/0" /> */}
              </SplitSectionBackground>

              <div className="text-center lg:text-left z-20 w-full max-w-xl mt-0 lg:mt-0">
                <h1 className="text-[40px] font-black  lg:text-5xl xl:text-5xl ">
                  <span className="inline-block text-white  leading-tight">
                    Travel journaling
                  </span>
                  <br />
                  <span className="inline-block text-white leading-tight">
                    has never felt
                  </span>
                  <br />
                  <span className="leading-tight inline-block  italic text-[#FF6F3C] ">
                    this easy.
                  </span>
                </h1>

                <p className="my-6 mx-auto lg:mx-0 lg:px-0 text-xl md:text-xl max-w-lg leading-8 text-white/90 font-normal ">
                  <strong>Journey Jotter</strong> helps you capture every moment
                  in minutes - beautifully summarized in your own voice, so you
                  can keep the unforgettable, unforgettable.
                </p>
                <p className="mb-8 inline-block text-white text-3xl font-bold leading-tight">
                  Coming to iOS
                </p>

                <div className="flex w-full justify-center lg:justify-start">
                  <LoopsForm
                   title="Sign Up For Waitlist Today"
                   transparency
                   />
                </div>
              </div>
              <div className="flex items-end justify-center h-[450px] lg:h-[90%] w-fit max-w-lg md:ml-16 max-h-full py-8  mt-6 md:mt-0">
                <div className="relative h-full translate-x-10 md:translate-x-0">
                  <PhoneComponent imageUrl="/landing/phone-screens/3-new.jpg" />
                </div>
                <div className="relative md:-translate-x-20 -translate-x-10  h-[90%] z-10">
                  <PhoneComponent imageUrl="/landing/phone-screens/2-new.jpg" />
                </div>
              </div>
            </PhoneSection>
          </section>
          <SectionDivider />

          <section id="how-it-works" className="w-full">
            <PhoneSection>
              <div className="flex items-end justify-center md:h-full w-fit max-w-xl md:mr-16 max-h-full pb-8 md:py-8 h-[650px] order-1">
                <PhoneComponent imageUrl="/landing/phone-screens/1-new.jpg" />
              </div>
              <div className="text-center md:text-left z-20 w-full max-w-md order-2">
                <h5 className="text-lg mt-8 font-normal md:text-2xl ">
                  <span className="inline-block text-stone-400 font-normal bg-clip-text uppercase leading-tight ">
                    Travel more, Capture more
                  </span>
                </h5>
                <h1 className="text-3xl mt-4 font-extrabold md:text-5xl ">
                  <span className="inline-block text-stone-900 bg-clip-text leading-tight">
                    Journal in just minutes a day
                  </span>
                </h1>
                <div className="flex items-center justify-center md:justify-start mt-8 mb-8">
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                </div>
                <p className="text-lg md:text-xl leading-8 text-stone-700 font-normal">
                  <strong>Journey Jotter</strong> makes sure you never forget
                  the little things, capturing your day in just 5 minutes. Type
                  or voicenote, and you’re done.
                </p>
              </div>
            </PhoneSection>

            <SectionDivider />

            <PhoneSection>
              <div className="text-center md:text-left z-20 w-full max-w-md order-2 md:order-1">
                <h5 className="text-lg mt-8 font-normal md:text-2xl ">
                  <span className="inline-block text-stone-400 font-normal bg-clip-text uppercase leading-tight ">
                    Engaging Prompts
                  </span>
                </h5>
                <h1 className="text-3xl mt-4 font-extrabold md:text-5xl ">
                  <span className="inline-block text-stone-900 bg-clip-text leading-tight">
                    Not your average journal
                  </span>
                </h1>
                <div className="flex items-center justify-center md:justify-start mt-8 mb-8">
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                </div>
                <p className="text-lg md:text-xl leading-8 text-stone-700 font-normal">
                  <strong>Journey Jotter</strong> feels like chatting with a
                  travel companion. Its thoughtful and quick and easy prompts
                  make journaling fun and effortless, helping you capture the
                  heart of your adventures without overthinking.
                </p>
              </div>
              <div className="flex items-end justify-center md:h-full w-fit max-w-xl md:ml-16 max-h-full pb-8 md:py-8 h-[650px] order-1 md:order-2">
                <PhoneComponent imageUrl="/landing/phone-screens/2-new.jpg" />
              </div>
            </PhoneSection>

            <SectionDivider />

            <PhoneSection>
              <div className="flex items-end justify-center md:h-full w-fit max-w-xl md:mr-16 max-h-full pb-8 md:py-8 h-[650px]">
                <PhoneComponent imageUrl="/landing/phone-screens/3-new.jpg" />
              </div>

              <div className="text-center md:text-left z-20 w-full max-w-md">
                <h5 className="text-lg mt-8 font-normal md:text-2xl ">
                  <span className="inline-block text-stone-400 font-normal bg-clip-text uppercase leading-tight ">
                    Your Story, Your Style
                  </span>
                </h5>
                <h1 className="text-3xl mt-4 font-extrabold md:text-5xl ">
                  <span className="inline-block text-stone-900 bg-clip-text leading-tight">
                    A journal that sounds like you
                  </span>
                </h1>
                <div className="flex items-center justify-center md:justify-start mt-8 mb-8">
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                  <div className="h-3 w-3 bg-[#FF6F3C] rounded-full mr-2" />
                </div>
                <p className="text-lg md:text-xl leading-8 text-stone-700 font-normal">
                  In just minutes, <strong>JJ</strong> turns your trip into a
                  story worth telling - complete with your photos, your voice
                  and all those moments only you could capture
                </p>
              </div>
            </PhoneSection>
          </section>
          <SectionDivider />
          <section
            id="cta"
            className="relative h-screen max-w-screen max-h-[600px]"
          >
            <div
              className="absolute inset-0 w-full h-full -z-10"
              style={{
                backgroundImage: `url("/landing/banner1.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0  bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="container p-4 justify-center items-center">
                <div className="flex flex-col items-center text-center space-y-8 md:space-y-16 -">
                  <h1 className="text-3xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="inline-block text-white leading-tight">
                      Start your story today and
                    </span>
                    <br />
                    <span className="leading-tight inline text-[#FF6F3C] ml-1.5 ">
                      download for free.
                    </span>
                  </h1>
                  {/* <DownloadButton size="xl" /> */}

                  <LoopsForm
                   title="Sign Up For Waitlist Today"
                   transparency
                   />
                  />
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          <section
            id="testimonials"
            className="w-full bg-stone-100 py-20 md:py-32 px-8"
          >
            <div className="text-center mb-20 md:mb-28">
              <h2 className="text-3xl font-extrabold md:text-5xl lg:text-4xl xl:text-5xl">
                Travelers love Journey Jotter
              </h2>
            </div>
            <TestimonialGrid />
          </section>

          <SectionDivider />

          <section
            id="pricing"
            className="w-full bg-stone-50 py-12 md:py-32 px-8"
          >
            <div className="text-center mb-20 md:mb-28">
              <h2 className="text-3xl font-extrabold md:text-5xl lg:text-4xl xl:text-5xl">
                Simple pricing for your adventures
              </h2>
              <p className="text-sm mt-4 md:text-lg lg:text-xl md:mt-8">
                Every plan starts with a 3-day trial. Try JJ, fall in love,
                cancel anytime.
              </p>
            </div>
            <PricingSection />
          </section>

          <section id="faq" className="w-full bg-white py-20 md:py-32 px-8">
            <div className="text-center mb-20 md:mb-28">
              <h2 className="text-3xl font-extrabold md:text-5xl lg:text-4xl xl:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQSection />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
