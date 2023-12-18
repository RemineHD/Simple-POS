export default function NoPerms() {
  return (
    <div className="bg-white flex-center">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <img
            className="mx-auto h-40 w-auto"
            src="/cdn/Logo.jpg"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-rose-600">403</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Whoops. You don't have permission to access this content
            </h1>
            <p className="mt-2 text-lg text-gray-500">
                This page can only be accessed by users with access level 5 or higher
            </p>
          </div>
          <div className="mt-20">
            <div className="mt-8">
              <a href="/" className="text-base font-medium text-red-600 hover:text-red-700">
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-12 text-center md:flex md:justify-between">
          <p className="text-base text-gray-400">&copy; Made by @elremineh</p>
        </div>
      </footer>
    </div>
  )
}
