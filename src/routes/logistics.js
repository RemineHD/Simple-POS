import { add } from "dinero.js";

const items = [
    { id: 1, name: 'Cookie', price: '$15', stock: 12, outgoings: 2 },
    { id: 2, name: 'Cookie 2', price: '$12', stock: 44, outgoings: 13 },
    { id: 3, name: 'Expensive Cookie', price: '$400', stock: 0, outgoings: 100 },
    // More people...
  ]

  let stock = {
    total: 0,
    outgoings: 0,
  };
  items.forEach(item => {
    stock.outgoings = parseInt(item.outgoings) + parseInt(stock.outgoings)
    stock.total = parseInt(item.stock) + parseInt(stock.total)
  });

  const stats = [
    { name: 'Stock', stat:  stock.total},
    { name: 'Items', stat: items.length},
    { name: 'Outcomes', stat: stock.outgoings },

  ]
  
  export default function Logistics() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Logistics</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Item
            </button>
          </div>
        </div>
        <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      Name
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      Stock
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      Outcomes
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                      <span className="sr-only">Modify</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                <span className="font-medium text-gray-900">{item.price}</span>
                                CAD
                              </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.stock > 0 ?                         
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {item.stock} available
                        </span> :                         
                        <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                          not in stock
                        </span>}

                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.outgoings}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                        <a href="/" className="text-rose-600 hover:text-rose-900">
                          Edit<span className="sr-only">, {item.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  