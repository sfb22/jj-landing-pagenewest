"use client";

import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { useRouter } from "next/navigation";

// Common feature list for all plans
const commonFeatures = [
  "Your own travel sidekick (JJ that journals for you)",
  "Unlimited photo memories",
  "Safe and sound backups",
];

const pricingPlans = [
  {
    name: "Weekly",
    price: "4.49",
    currency: "£",
    interval: "week",
    description:
      "Perfect for short-term travelers looking to document quick trips.",
    features: commonFeatures,
  },
  {
    name: "Monthly",
    price: "9.99",
    currency: "£",
    interval: "month",
    description: "Perfect for backpackers and digital nomads.",
    features: commonFeatures,
  },
  {
    name: "Yearly",
    price: "89.99",
    currency: "£",
    interval: "year",
    description:
      "Ideal for frequent travelers who want to keep a journal of all their adventures throughout the year.",
    features: commonFeatures,
  },
];

export function PricingSection() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        {pricingPlans.map((plan, index) => {
          const isMiddle = index === 1;
          return (
            <Card
              key={index}
              className={`relative p-8 rounded-3xl transition-shadow duration-300 hover:shadow-xl flex flex-col h-full bg-white border-2 ${
                isMiddle
                  ? "border-[#FF6F3C] shadow-lg"
                  : "shadow-none   border-big-stone-100"
              }`}
            >
              {index === 2 && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#FF6F3C] text-white">
                    Best Value - Save 25% Annually!
                  </Badge>
                </div>
              )}
              {isMiddle && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#FF6F3C] text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-stone-700 text-base font-normal">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold text-stone-900">
                    {plan.currency}
                    {plan.price}
                  </span>
                  <span className="text-stone-700 ml-2">/ {plan.interval}</span>
                </div>
              </div>

              {/* Feature list */}
              <ul className="mb-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`h-5 w-5 mr-2 ${
                        isMiddle ? "text-[#FF6F3C]" : "text-[#FF6F3C]"
                      }`}
                    />
                    <span className="text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={isMiddle ? "default" : "outline"}
                className={`w-full rounded-full font-semibold text-lg py-6 ${
                  isMiddle
                    ? "bg-gradient-to-r from-[#FF6F3C] to-[#FF6F3C] text-white font-bold hover:bg-mint-green-600 transition-colors duration-300"
                    : "bg-white text-stone-800 hover:bg-stone-100 transition-colors duration-300"
                }`}
                onClick={() => router.push("/app")}
              >
                Get Started
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// New component: PricingSectionSingle
export function PricingSectionSingle() {
  const router = useRouter();
  // Only show the Monthly plan (index 1)
  const plan = pricingPlans[1];
  const isMiddle = true;
  return (
    <div className="mx-auto max-w-3xl ">
      <div className="flex flex-col md:flex-row md:items-stretch gap-8 border-2 shadow-md bg-white rounded-3xl  border-big-stone-100 p-8">
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-3xl   p-8 relative mb-6 md:mb-0">
          <div className="flex items-baseline mb-2">
            <span className="text-8xl font-medium text-stone-700">
              {plan.currency}
              {plan.price}
            </span>
          </div>
          <div className="text-stone-500 text-xl my-2">User / Month</div>
        </div>
        <div className="flex-1 flex flex-col justify-center bg-white  p-8">
          {/* Feature list for single plan card */}
          <ul className="mb-4 space-y-3 flex-grow">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-mint-green-600" />
                <span className="text-stone-700 font-semibold text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            variant="default"
            className="w-full rounded-full mt-4 text-lg py-6 bg-gradient-to-r from-mint-green-500 to-mint-green-500 text-white font-bold hover:bg-mint-green-600 transition-colors duration-300"
            onClick={() => router.push("/app")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
