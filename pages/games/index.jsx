/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function Game() {
  return <>
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">All games
            </h1>

            <p className="mt-1.5 text-md text-gray-500 max-w-lg">Let's add a new game! 🎉</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-green-600 px-5 py-3 text-green-700 transition hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring"
              href={"/games"}
            >
              <span className="text-sm font-medium"> View Games</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>

    <hr className="my-2 h-px border-0 bg-gray-300"/>
  </>
}