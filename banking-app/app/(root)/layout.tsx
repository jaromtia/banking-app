import Sidebar from "@/components/Sidbar";
import Image from "next/image"
import MobileNav from "@/components/MobileNav"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Jarom', lastName: 'Tia'}

  return (
    <main>
        <Sidebar user = { loggedIn } />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="menu icon"
            >
            </Image>
          </div>
          <div>
            <MobileNav user = { loggedIn } />
          </div>
          {children}
        </div>
    </main>
  );
}
