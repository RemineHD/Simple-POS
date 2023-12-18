
import { PlusIcon as PlusIconMini, MinusSmallIcon} from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { CheckoutContext } from '../context/checkoutContext'

import { dinero, toUnit, } from 'dinero.js';
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
    stock: false,
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
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: dinero({amount: 25010, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: dinero({amount: 4999, scale: 2, currency: CAD}),
    stock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function SalesPage() {
  const productCtx = useContext(CheckoutContext)
  return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${toUnit(product.price, {digits: 2})}
            

              {product.stock ?

                  <><button
                    onClick={() => {

                      if (productCtx.products.some(e => e.id === product.id)) {
                        let item = productCtx.products.find(e => e.id === product.id);
                        item.quantity = Math.max(0, item.quantity - 1);
                      }

                      else {
                        productCtx.products.push({
                          id: product.id,
                          quantity: 0
                        });
                      }

                      productCtx.setProducts([...productCtx.products]);

                    } }
                    type="button"
                    className="float-right inline-flex items-center rounded-full border border-transparent text-gray-900 shadow-sm hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    <MinusSmallIcon className="h-5 w-5" aria-hidden="true" />
                  </button><label className="float-right text-sm text-gray-700 mx-2">{productCtx.products.find(e => e.id === product.id)?.quantity ?? 0}</label><button
                    onClick={() => {

                      if (productCtx.products.some(e => e.id === product.id)) {
                        let item = productCtx.products.find(e => e.id === product.id);
                        item.quantity = Math.max(0, item.quantity + 1);
                      }

                      else {
                        productCtx.products.push({
                          id: product.id,
                          quantity: 1
                        });
                      }

                      productCtx.setProducts([...productCtx.products]);

                    } }
                    type="button"
                    className="float-right inline-flex items-center rounded-full border border-transparent text-gray-900 shadow-sm hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                      <PlusIconMini className="h-5 w-5" aria-hidden="true" />
                    </button></>

                    : <label className="float-right text-sm text-red-700 mx-2">Out of stock</label>

              }

              

              </p>
                <div>
                  
                  
                </div>
              
            </a>
          ))}
        </div>
      </div>
  )
}