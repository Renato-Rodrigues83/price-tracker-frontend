import { Footer, Header } from "@/components/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 h-full overflow-y-auto">{children}</main>

      <Footer />
    </div>
  );
}
