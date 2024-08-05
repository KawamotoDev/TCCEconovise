import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Econovise",
  description: "Seu gerenciador de despesas",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="pt-br">
      <body className={outfit.className}>{children}</body>
      <Toaster/>
    </html>
    </ClerkProvider>
  );
}
