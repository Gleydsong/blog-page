import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-inter relative flex min-h-screen flex-col bg-gray-800">
      <Header />

      <main className="flex flex-1 flex-col bg-gray-800 mb-12">{children}</main>
      <Footer />
    </div>
  );
};
