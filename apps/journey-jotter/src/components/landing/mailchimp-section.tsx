import { LoopsForm } from "./loops-form";

export function MailchimpSection() {
  return (
    <section className="bg-[#073040] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl text-white">
            Join our{" "}
            <span className="text-mint-green-400 italic">waitlist</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Be the first to know when we launch and get exclusive early access
            to our journey-tracking app.
          </p> */}
          <LoopsForm title="Join The Waitlist" />
        </div>
      </div>
    </section>
  );
}
