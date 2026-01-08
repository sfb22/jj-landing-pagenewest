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
import { Button } from "@/src/components/ui/button";

interface PrivacyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyDialog({ open, onOpenChange }: PrivacyDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl bg-white h-screen overflow-hidden">
        <AlertDialogHeader className="flex justify-between items-center">
          <AlertDialogTitle className="text-xl font-semibold mb-2">
            Journey Jotter Privacy Policy
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

        <ScrollArea className="h-full py-4 mb-auto">
          <AlertDialogDescription asChild>
            <div className="space-y-6 text-stone-700">
              <p className="text-base">
                At Journey Jotter, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and share your information when
                you use our App.
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        1.1. Personal Information
                      </h3>
                      <p>
                        When you create an account, we may collect your name,
                        email address, and payment information.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">1.2. Usage Data</h3>
                      <p>
                        We collect information about how you use the App,
                        including journal entries, preferences, and
                        interactions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">1.3. Device Data</h3>
                      <p>
                        We collect information about your device, such as the
                        operating system, IP address, and app version.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        1.4. Cookies and Tracking
                      </h3>
                      <p>
                        We use cookies to improve your experience. You can
                        manage cookie preferences in your browser settings.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        2.1. To Provide Services
                      </h3>
                      <p>
                        We use your information to operate and improve the App,
                        process payments, and provide customer support.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2.2. Personalization</h3>
                      <p>
                        We use your data to personalize your experience,
                        including tailored journaling prompts and summaries
                        generated through AI-powered tools.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">2.3. Communication</h3>
                      <p>
                        We may send you service updates, promotional offers, or
                        surveys. You can opt out of promotional emails at any
                        time.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    3. How We Share Your Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        3.1. With Service Providers
                      </h3>
                      <p>
                        We may share your information with third parties that
                        assist us in operating the App (e.g., payment
                        processors).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">3.2. For Legal Reasons</h3>
                      <p>
                        We may disclose your information if required by law or
                        to protect our legal rights.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">3.3. With Your Consent</h3>
                      <p>
                        We may share your information for other purposes with
                        your explicit consent.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Your Rights</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">4.1. Access and Control</h3>
                      <p>
                        You can access, update, or delete your personal
                        information via the App.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">4.2. Data Portability</h3>
                      <p>
                        You may request a copy of your data in a portable
                        format.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">4.3. Data Deletion</h3>
                      <p>
                        You may request the deletion of your account and data.
                        Some information may be retained as required by law.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
                  <p>
                    We use industry-standard security measures to protect your
                    information, including AI tools to identify threats and
                    anomalies, ensuring enhanced security for your data.
                    However, no system is completely secure, and we cannot
                    guarantee the absolute security of your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    6. Children's Privacy
                  </h2>
                  <p>
                    Journey Jotter does not knowingly collect personal
                    information from children under 13. Additionally, our AI
                    tools are not designed to process data from minors. If you
                    believe we have collected such information, please contact
                    us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. Changes
                    will be posted in the App, and we will notify you of
                    significant updates, particularly if AI processes are
                    updated or expanded, through in-app notifications or email.
                    Your continued use signifies your acceptance of the updated
                    policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please
                    contact us at contact@journeyjotter.ai
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
