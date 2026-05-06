import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Yuva Udaan",
  description: "Learn about the mission, vision, and values driving the Yuva Udaan youth leadership movement.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
