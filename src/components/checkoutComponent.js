import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import { CheckoutContext } from '../context/checkoutContext';
import { dinero, add, toUnit, multiply, allocate } from 'dinero.js';
import { CAD } from '@dinero.js/currencies';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: dinero({amount: 1175, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: dinero({amount: 950, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: dinero({amount: 150, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: dinero({amount: 1299, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: dinero({amount: 1875, scale: 2, currency: CAD}),
    stock: false,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: dinero({amount: 1890, scale: 2, currency: CAD}),
    stock: false,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: dinero({amount: 25010, scale: 2, currency: CAD}),
    stock: false,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: dinero({amount: 4999, scale: 2, currency: CAD}),
    stock: false,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

const steps = [
  { id: '1', name: 'Select Products', href: '#', status: 'complete' },
  { id: '2', name: 'Review Products', href: '#', status: 'current' },
  { id: '3', name: 'Payment', href: '#', status: 'upcoming' },
]

export default function CheckoutComponent(props) {
  let open = props.open;
  let setOpen = props.setOpen;
  let price = {}
  const productCtx = props.productCtx
  price.subtotal = dinero({amount:0, scale:0, currency: CAD});
  productCtx.products.forEach(product => {
    price.subtotal = add(multiply(products.find(x => x.id === product.id).price, product.quantity), price.subtotal)
  });
  price.pst = allocate(price.subtotal, [7, 93])[0]
  price.gst = allocate(price.subtotal, [5, 95])[0]
  const addMany = (addends) => addends.reduce(add);
  price.total = addMany([price.subtotal]) //, price.pst, price.gst
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-105"
            >
              <Dialog.Panel className="flex w-full max-w-3xl transform text-left text-base transition sm:my-8">
                <form className="relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8">
                  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg font-medium text-gray-900">Checkout new client</h2>
                    <button type="button" className="text-gray-400 hover:text-gray-500" onClick={() => setOpen(false)}>
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <nav aria-label="Progress" className="mx-10 my-5">
                    <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                      {steps.map((step, stepIdx) => (
                        <li key={step.name} className="relative md:flex md:flex-1">
                          {step.status === 'complete' ? (
                            <a href={step.href} className="group flex w-full items-center">
                              <span className="flex items-center px-6 py-4 text-sm font-medium">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 group-hover:bg-red-800">
                                  <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                                <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                              </span>
                            </a>
                          ) : step.status === 'current' ? (
                            <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-red-600">
                                <span className="text-red-600">{step.id}</span>
                              </span>
                              <span className="ml-4 text-sm font-medium text-red-600">{step.name}</span>
                            </a>
                          ) : (
                            <a href={step.href} className="group flex items-center">
                              <span className="flex items-center px-6 py-4 text-sm font-medium">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                  <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                                </span>
                                <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                              </span>
                            </a>
                          )}

                          {stepIdx !== steps.length - 1 ? (
                            <>
                              {/* Arrow separator for lg screens and up */}
                              <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                                <svg
                                  className="h-full w-full text-gray-300"
                                  viewBox="0 0 22 80"
                                  fill="none"
                                  preserveAspectRatio="none"
                                >
                                  <path
                                    d="M0 -2L20 40L0 82"
                                    vectorEffect="non-scaling-stroke"
                                    stroke="currentcolor"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <section aria-labelledby="cart-heading">
                    <ul role="list" className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
                      {productCtx.products.filter(x => x.quantity > 0).map(product => (
                        <li key={products.find(x => x.id === product.id).name} className="flex py-8 text-sm sm:items-center">
                          <img
                            src={products.find(x => x.id === product.id).imageSrc}
                            className="h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32"
                          />
                          <div className="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-y-3 gap-x-5 sm:ml-6 sm:flex sm:items-center sm:gap-0">
                            <div className="row-end-1 flex-auto sm:pr-6">
                              <h3 className="font-medium text-gray-900">
                                <a href={products.find(x => x.id === product.id).href}>{products.find(x => x.id === product.id).name}</a>
                              </h3>
                            </div>
                            <p className="row-span-2 row-end-2 text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right text-lg">
                              ${toUnit(multiply(products.find(x => x.id === product.id).price, product.quantity), {digits: 2})}
                            </p>
                            <div className="flex items-center sm:block sm:flex-none sm:text-center">
                              <label htmlFor={`quantity-${product.quantity}}`} className="sr-only">
                                Quantity, {products.find(x => x.id === product.id).name}
                              </label>

                              <label className="block max-w-full py-1.5 text-left text-base font-medium leading-5 text-gray-700 ">Qty: {product.quantity}</label>
                              <button
                              onClick={() => 
                                {

                                  let result = productCtx.products.filter(x => x.id !== product.id)
                                  productCtx.setProducts(result)
                                  
                                  if (result.length === 0)
                                  {
                                    setOpen(false)
                                  }

                                }}
                                type="button"
                                className="ml-4 font-medium text-red-500 hover:text-red-700 sm:ml-0 sm:mt-2"
                              >
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section aria-labelledby="summary-heading" className="mt-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                      <h2 id="summary-heading" className="sr-only">
                        Order summary
                      </h2>

                      <div className="flow-root">
                        <dl className="-my-4 divide-y divide-gray-200 text-sm">
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">${toUnit(price.subtotal, {digits: 2})}</dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">PST (Exempt)</dt>
                            <dd className="font-medium text-red-900">${toUnit(price.pst, {digits: 2})}</dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">GST (Exempt)</dt>
                            <dd className="font-medium text-red-900">${toUnit(price.gst, {digits: 2})}</dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-base font-medium text-gray-900">Order total</dt>
                            <dd className="text-base font-medium text-emerald-600">${toUnit(price.total, {digits: 2})}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>

                  <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                    <button
                      type="submit"
                      className="rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}