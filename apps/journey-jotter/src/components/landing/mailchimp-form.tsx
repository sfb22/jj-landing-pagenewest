"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Mail } from "lucide-react";

interface MailchimpFormProps {
  title?: string;
  transparency?: boolean;
}

export function MailchimpForm({
  title,
  transparency = false,
}: MailchimpFormProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundClasses = transparency
    ? "bg-white/10 backdrop-blur-sm"
    : "bg-[#FF6F3C]";

  return (
    <Card
      className={`w-full max-w-md border-none rounded-3xl ${backgroundClasses}`}
    >
      {title && (
        <CardHeader>
          <CardTitle className="text-2xl text-white font-bold text-center">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <form
          action="https://journeyjotter.us22.list-manage.com/subscribe/post?u=ad280a7b0b2b9b40a9606ad42&id=1745314ecd&f_id=0091d9e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="relative mb-4">
              <Label htmlFor="mce-EMAIL" className="sr-only">
                Email Address
              </Label>
              <div className="relative">
                {/* Email Icon positioned inside the input */}
                <div className="absolute inset-y-0 left-0 flex items-center px-5 pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <Input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-black/20 placeholder:text-white/40 pr-5 pl-12 text-md font-medium text-white leading-[30px] min-h-[40px] py-2 rounded-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />
              </div>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_ad280a7b0b2b9b40a9606ad42_1745314ecd"
                tabIndex={-1}
              />
            </div>

            <Button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="px-10 py-3 w-full text-lg bg-white hover:bg-white/70 text-big-stone-950 rounded-full font-bold border-none leading-none"
            >
              Get Updates
            </Button>
          </div>
        </form>
      </CardContent>

      {isMounted && (
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ad280a7b0b2b9b40a9606ad42/1745314ecd.js");`,
          }}
        />
      )}
    </Card>
  );
}
