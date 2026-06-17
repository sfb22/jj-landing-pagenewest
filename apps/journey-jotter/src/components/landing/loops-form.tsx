"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Mail } from "lucide-react";

interface LoopsFormProps {
  title?: string;
  transparency?: boolean;
}

export function LoopsForm({ title, transparency = false }: LoopsFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const backgroundClasses = transparency
    ? "bg-white/10 backdrop-blur-sm"
    : "bg-[#FF6F3C]";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lastSubmit = localStorage.getItem("loops-form-timestamp");
    const now = Date.now();
    if (lastSubmit && Number(lastSubmit) + 60000 > now) {
      setStatus("error");
      setErrorMessage("Too many signups, please try again in a little while.");
      return;
    }

    setStatus("loading");

    try {
      const formBody = `userGroup=&mailingLists=&email=${encodeURIComponent(email)}`;
      const res = await fetch(
        "https://app.loops.so/api/newsletter-form/cmqgxkm9v03ll0jyxhyqyop63",
        {
          method: "POST",
          body: formBody,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (res.ok) {
        localStorage.setItem("loops-form-timestamp", String(now));
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.message || "Oops! Something went wrong, please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Oops! Something went wrong, please try again.");
    }
  };

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
        {status === "success" ? (
          <p className="text-white text-center text-lg font-medium py-3">
            Wicked. We&apos;ll keep you posted!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <Label htmlFor="loops-email" className="sr-only">
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center px-5 pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <Input
                  type="email"
                  name="email"
                  id="loops-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-black/20 placeholder:text-white/40 pr-5 pl-12 text-md font-medium text-white leading-[30px] min-h-[40px] py-2 rounded-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />
              </div>
            </div>
            {status === "error" && (
              <p className="text-white/90 text-sm text-center mb-3">
                {errorMessage}
              </p>
            )}
            <Button
              type="submit"
              disabled={status === "loading"}
              className="px-10 py-3 w-full text-lg bg-white hover:bg-white/70 text-big-stone-950 rounded-full font-bold border-none leading-none"
            >
              {status === "loading" ? "Please wait..." : "Join Waitlist Today"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
