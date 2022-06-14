import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: "Home", href: process.env.PUBLIC_URL + "/", current: false },
  { name: "Demo", href: process.env.PUBLIC_URL + "/Demo", current: false },
  {
    name: "Uploud File",
    href: process.env.PUBLIC_URL + "/upload-file",
    current: false,
  },
  {
    name: "About Our Algorithm",
    href: process.env.PUBLIC_URL + "/about",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800 relative flex">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center"></div>
                    <div className="hidden sm:block sm:ml-8">
                      <div className="flex space-x-20">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-5 py-4 rounded-md text-sm font-high"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

