import { Fragment, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import {
  XMarkIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

import { toast } from 'react-toastify';

import CheckoutComponent from './checkoutComponent'
import { CheckoutContext } from '../context/checkoutContext'


const pathname = window.location.pathname

const navigation = [
  { name: 'Sales', href: '/', icon: BuildingStorefrontIcon, current: pathname == '/' ? true : false},
  { name: 'Logistics', href: '/logistics', icon: TruckIcon, current: pathname == '/logistics' ? true : false },
  { name: 'Accounting', href: '/accounting', icon: CurrencyDollarIcon, current: pathname == '/accounting' ? true : false },
  { name: 'Team', href: '/team', icon: UserGroupIcon, current: pathname == '/team' ? true : false },
  { name: 'Schedule', href: '/schedule', icon: CalendarIcon, current: pathname == '/schedule' ? true : false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Layout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [products, setProducts] = useState([])
  

  return (
    <>
       <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/cdn/Logo.jpg"
                        alt="Red Zone"
                      />
                    </div>
                    <p className="group flex items-center px-3 py-5 text-xl font-bold rounded-md">Red Zone</p>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://git.zaroz.cloud/uploads/-/system/user/avatar/3/avatar.png?width=400"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">elremineh</p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Click to logout</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/cdn/Logo.jpg"
                  alt="Red Zone"
                />
                <p className="px-3 py-4 text-xl font-bold rounded-md text-rose-600">Red Zone</p>
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://git.zaroz.cloud/uploads/-/system/user/avatar/3/avatar.png?width=400"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Jaime Dominguez</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Click to logout</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="md:pl-64">
          <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-1 justify-between px-4 md:px-0">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  {pathname == "/" &&
                  <button
                  onClick={() => {
                    if (products.length > 0)
                    {
                      setCheckoutOpen(true)
                    } else{
                      toast.warn('You need to add at least one product in order to perform a client checkout', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    }
                  }}
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <ShoppingCartIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  <span>Checkout</span>
                </button>}
                </div>
              </div>
            </div>
            <CheckoutComponent setOpen={setCheckoutOpen} open={checkoutOpen} productCtx={{
              products: products,
              setProducts: setProducts
            }}/>
            <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  <CheckoutContext.Provider value={{
                    products: products,
                    setProducts: setProducts
                  }}>
                    {children}

                  </CheckoutContext.Provider>

                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;