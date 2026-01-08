"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/src/components/ui/alert-dialog";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { X } from "lucide-react";
import { Button } from "@/src/components/ui/button";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsDialog({ open, onOpenChange }: TermsDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl h-screen overflow-hidden bg-white">
        <AlertDialogHeader className="flex justify-between items-center">
          <AlertDialogTitle className="text-xl font-semibold mb-2">
            Journey Jotter Terms and Conditions
          </AlertDialogTitle>
          <AlertDialogCancel asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-stone-100 bg-stone-50 shadow-sm w-full text-stone-700 font-bold"
            >
              I ACCEPT
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>

        <ScrollArea className="h-full py-4">
          <AlertDialogDescription asChild>
            <div className="space-y-6 text-stone-700">
              <p className="text-base">
                Welcome to Journey Jotter! These Terms and Conditions ("Terms")
                govern your use of the Journey Jotter application ("App") and
                our services ("Services"). By accessing or using our App, you
                agree to be bound by these Terms. If you do not agree, please do
                not use our App.
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Use of the App</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">1.1. Eligibility</h3>
                      <p>
                        You must be at least 13 years old to use our App. If you
                        are under 18, you may only use the App with the
                        involvement of a parent or guardian.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">1.2. Account Creation</h3>
                      <p>
                        To access certain features, you must create an account.
                        You agree to provide accurate and complete information
                        and keep your account details secure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">1.3. Permitted Use</h3>
                      <p>
                        The App is for personal use only. You may not use the
                        App for any illegal, unauthorized, or commercial
                        purposes without our written consent.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">1.4. Prohibited Conduct</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          You may not reverse-engineer, copy, or modify the App.
                        </li>
                        <li>You may not upload harmful or illegal content.</li>
                        <li>
                          You may not interfere with the operation or security
                          of the App.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    2. Subscription and Payments
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">2.1. Subscriptions</h3>
                      <p>
                        Journey Jotter offers weekly, monthly, and yearly
                        subscription plans. By subscribing, you authorize us to
                        charge your chosen payment method for recurring
                        payments.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2.2. Refunds</h3>
                      <p>
                        All purchases are final and non-refundable, except where
                        required by law.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2.3. Changes to Pricing</h3>
                      <p>
                        We reserve the right to change subscription fees. You
                        will be notified in advance of any price changes.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    3. Content and Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">3.1. User Content</h3>
                      <p>
                        You retain ownership of the content you create in the
                        App. By using the App, you grant us a non-exclusive,
                        worldwide, royalty-free license to use, store, and
                        display your content to provide the Services, which may
                        include processing through AI to enhance journaling and
                        personalization features.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        3.2. Intellectual Property
                      </h3>
                      <p>
                        All rights, titles, and interests in the App and its
                        content (excluding user content) remain the property of
                        Journey Jotter. You may not use our intellectual
                        property without permission.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Privacy</h2>
                  <p>
                    Your privacy is important to us. Please review our Privacy
                    Policy to understand how we collect, use, and protect your
                    information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    To the extent permitted by law, Journey Jotter is not liable
                    for any indirect, incidental, or consequential damages
                    arising from your use of the App. Our total liability will
                    not exceed the amount you paid for the Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. Termination</h2>
                  <p>
                    We may suspend or terminate your access to the App at our
                    discretion, with or without notice, if you violate these
                    Terms or for any other reason.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    7. Changes to These Terms
                  </h2>
                  <p>
                    We may update these Terms from time to time. The updated
                    Terms will be posted in the App, and your continued use
                    signifies your acceptance of the changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
                  <p>
                    These Terms are governed by the laws of United Kingdom,
                    without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact
                    us at contact@journeyjotter.ai
                  </p>
                </section>
              </div>
            </div>
          </AlertDialogDescription>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
