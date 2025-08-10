import "./globals.css";
import Link from "next/link";
import Providers from './redux/Providers'

export const metadata = {
  title: "Tour Packages",
  description: "Tour Packages Listing and Details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* HEADER */}
        <header className="bg-blue-600 text-white py-4 shadow">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Tour Packages
            </Link>
            <nav className="space-x-6">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/wishlist" className="hover:underline">
                Wishlist
              </Link>
              <Link href="/bookings" className="hover:underline">My Bookings</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <Providers>
            {children}
          </Providers>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-white py-4 mt-6">
          <div className="container mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} Tour Packages. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
