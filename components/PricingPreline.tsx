"use client";

const PricingPreline = () => {
  return (
    <div>
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mt-20 lg:mt-32">
          <div className="mb-10 lg:mb-20 lg:text-center">
            <h3 className="text-2xl font-semibold dark:text-white">
              Compare plans
            </h3>
          </div>

          {/* <!-- xs to lg --> */}
          <div className="space-y-24 lg:hidden">
            <section>
              <div className="mb-4 px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-800">
                  Free
                </h2>
              </div>
              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="mb-4 px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-800">
                  Startup
                </h2>
              </div>
              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="mb-4 px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-800">
                  Team
                </h2>
              </div>
              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="mb-4 px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-800">
                  Enterprise
                </h2>
              </div>
              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Financial data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  On-chain data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-start text-sm font-bold text-gray-800 dark:border-neutral-700 dark:bg-neutral-700 dark:text-white">
                  Social data
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200 dark:border-neutral-700">
                    <th
                      className="whitespace-nowrap px-4 py-5 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        className="ms-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          {/* <!-- End xs to lg --> */}

          {/* <!-- lg+ --> */}
          <div className="hidden lg:block">
            <table className="h-px w-full">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead className="sticky inset-x-0 top-0 bg-white dark:bg-neutral-900">
                <tr>
                  <th
                    className="py-4 pe-6 ps-6 text-start text-sm font-medium text-gray-800"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span className="dark:text-white">Plans</span>
                  </th>

                  <th
                    className="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                    scope="col"
                  >
                    Free
                  </th>
                  <th
                    className="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                    scope="col"
                  >
                    Startup
                  </th>
                  <th
                    className="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                    scope="col"
                  >
                    Team
                  </th>
                  <th
                    className="w-1/4 px-6 py-4 text-center text-lg font-medium leading-6 text-gray-800 dark:text-white"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border-t border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
                <tr>
                  <th
                    className="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    Financial data
                  </th>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Open/High/Low/Close
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Price-volume difference indicator
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    On-chain data
                  </th>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Network growth
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Average token age consumed
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Exchange flow
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Total ERC20 exchange funds flow
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Transaction volume
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Total circulation (beta)
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Velocity of tokens (beta)
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    ETH gas used
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Not included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="bg-gray-50 py-3 ps-6 text-start font-bold text-gray-800 dark:bg-neutral-800 dark:text-white"
                    colSpan={5}
                    scope="colgroup"
                  >
                    Social data
                  </th>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Dev activity
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Topic search
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Minus --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="whitespace-nowrap py-5 pe-6 ps-6 text-start text-sm font-normal text-gray-600 dark:text-neutral-400"
                    scope="row"
                  >
                    Relative social dominance
                  </th>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Free</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Startup</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Team</span>
                  </td>

                  <td className="px-6 py-5">
                    {/* <!-- Check --> */}
                    <svg
                      className="mx-auto size-5 flex-shrink-0 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- End lg+ --> */}
        </div>
      </div>
    </div>
  );
};

export default PricingPreline;
