import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {

  const { data: session } = useSession();

  const router = useRouter();
  const { pathname } = router;

  const active = 'text-white transition hover:text-white/75 p-4';
  const inactive = "text-gray-450 transition hover:text-gray-450/75 p4"

  if (session) {
    return <>
      <header className="bg-green-500 rounded-md sticky">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="text-white font-bold text-2xl block h-8" href={"/"}>GameChill.
              </Link>
            </div>

            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <Link className={location.pathname === '/dashboard' ? active : inactive} href="/">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className={location.pathname === '/games' ? active : inactive} href="/games">
                    Games
                  </Link>
                </li>
                <li>
                  <Link className={location.pathname === '/categories' ? active : inactive} href="/">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className={location.pathname === '/settings' ? active : inactive} href="/">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 px-4">
              <div className="sm:flex sm:gap-4">
                <Image
                  className="h-full w-full rounded-full object-cover object-center"
                  width={45}
                  height={45}
                  src={session.user.image}
                  alt=""
                />
              </div>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>


      </header>
    </>
  }
}