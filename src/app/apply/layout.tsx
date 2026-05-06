import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | Yuva Udaan",
  description: "Start your journey with Yuva Udaan. Apply now to join our youth leadership programs and make an impact.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
