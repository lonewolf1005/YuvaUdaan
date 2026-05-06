import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Yuva Udaan",
  description: "Explore the Yuva Udaan leadership programs and mentorship opportunities designed to empower youth.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
