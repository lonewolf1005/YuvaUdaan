import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey | Yuva Udaan",
  description: "Discover the transformative journey of the Yuva Udaan program, from discovery to impactful action.",
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
