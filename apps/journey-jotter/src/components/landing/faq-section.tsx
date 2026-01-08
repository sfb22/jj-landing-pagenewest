"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const faqs = [
  {
    question: "How much time will it take to create a journal entry?",
    answer: (
      <>
        <p>
          Just <strong>5 minutes a day</strong>. That’s all it takes to capture
          the highlights, laughs, and little moments you don’t want to forget.
          Journey Jotter’s quick prompts do the heavy lifting — you just relive
          the day.
        </p>
      </>
    ),
  },
  {
    question: "Can I export my journal?",
    answer: (
      <>
        <p>
          Yep! You can share your journal entries directly with friends and
          family, or export them as screenshots to post on your Instagram Story.
          Perfect for showing off your adventures and keeping your memories
          alive.
        </p>
      </>
    ),
  },
  {
    question: "Is Journey Jotter available on the App Store?",
    answer: (
      <>
        <p>
          Yes! 🎉 Journey Jotter is <strong>now live on the App Store</strong> —
          ready for you to start capturing your travels in minutes. Just search
          Journey Jotter and start keeping the unforgettable… unforgettable.
        </p>
      </>
    ),
  },
  {
    question: "How long is the free trial?",
    answer: (
      <>
        <p>
          You’ll get a 3-day free trial to see how effortless journaling can be.
          Try it out, fall in love with it, and if it’s not for you, you can{" "}
          <strong>cancel anytime. No strings attached.</strong>
        </p>
      </>
    ),
  },
  {
    question: "Is my journal data private and secure?",
    answer:
      "Yes, your privacy is important to us. All your journal entries and personal information are securely stored with industry-standard encryption to ensure your data is protected at all times.",
  },
  {
    question: "Can I use Journey Jotter offline?",
    answer: (
      <>
        You’ll need an internet connection to use the{" "}
        <strong>Journey Jotter travel assistant</strong> — that’s how the magic
        happens. ✨ But don’t worry, you can still{" "}
        <strong>manually journal offline</strong>, old-school style. Your
        entries will sync once you’re back online.
      </>
    ),
  },
  {
    question: "Do I need to pay to use Journey Jotter?",
    answer: (
      <>
        <div>
          You can use Journey Jotter as a{" "}
          <strong>free digital travel journal</strong>. Write, reflect, and
          store your adventures all in one place. ✍️
        </div>
        <div className="mt-5">
          But where it really shines is with our
          <strong> AI-powered Journey Jotter</strong>
          assistant. Paid Journey Jotters get access to smart prompts and
          beautifully written summaries that turn your quick notes into
          meaningful stories — all in your voice. Basically, it’s like having
          your own travel writer in your pocket.
        </div>
      </>
    ),
  },
  {
    question: "Can I add photos or voice notes to my journal entries?",
    answer:
      "Absolutely! You can add photos and voice notes to bring your memories to life. Whether it’s the view from your hostel balcony or a funny story told by a new friend, Journey Jotter helps you capture every detail, not just the words.",
  },
  {
    question: "What travel trips can I use Journey Jotter for?",
    answer:
      "Anything and everything. ✈️ Journey Jotter is perfect for backpacking adventures, city breaks, gap years, road trips, chilled beach holidays and once-in-a-lifetime getaways. Whether you’re exploring the world or just escaping for the weekend, it’s built to keep your experiences unforgettable,  wherever the journey takes you.",
  },
];

export function FAQSection() {
  return (
    <div className="container max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="px-4 py-2 transition-all duration-200"
          >
            <AccordionTrigger className="text-left text-xl md:text-2xl font-bold text-stone-700 hover:text-[#FF6F3C] hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-stone-600 text-base md:text-lg leading-relaxed pt-2">
              <div className="pl-2 border-l-2 border-[#FF6F3C]/50">
                {faq.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
