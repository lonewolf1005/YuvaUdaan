import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact | Yuva Udaan",
  description: "Learn about the real-world impact and community service projects driven by Yuva Udaan's young leaders.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
