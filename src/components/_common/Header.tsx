import React, { FC, Fragment } from 'react'
import { signOut } from 'next-auth/react'
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Logo } from '../atoms'
import { useTranslation } from 'react-i18next'

export const Header: FC = () => {
  const { t } = useTranslation(['common', 'home'])
  return (
    <header className="justify-between bg-slate-300 md:flex">
      <Logo />

      <div className="mr-4 flex justify-between space-x-4 p-4">
        <Link
          href={'/portfolio/new'}
          className="inline-flex justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {t('common:Post')}
        </Link>

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            {t('common:Menu')}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-slate-200 hover:text-slate-100"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-slate-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <UserCircleIcon
                          className="mr-2 h-5 w-5 text-slate-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <UserCircleIcon
                          className="mr-2 h-5 w-5 text-slate-400"
                          aria-hidden="true"
                        />
                      )}
                      {t('common:Profile')}
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-slate-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => signOut()}
                    >
                      {active ? (
                        <ArrowLeftOnRectangleIcon
                          className="mr-2 h-5 w-5 text-slate-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowLeftOnRectangleIcon
                          className="mr-2 h-5 w-5 text-slate-400"
                          aria-hidden="true"
                        />
                      )}
                      {t('common:Logout')}
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}
