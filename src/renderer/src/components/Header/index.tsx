import clsx from 'clsx'
import { Code, Sticker, Link, Gear, CaretDoubleRight } from 'phosphor-react'
import { useAtom } from 'jotai'
import * as Breadcrumbs from './Breadcrumbs'

import { isSidebarOpenAtom } from '@renderer/atoms/is-sidebar-open'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom)

  const isMacOS = process.platform === 'darwin'

  return (
    <div
      id="header"
      className={clsx(
        'border-b border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-500',
        {
          'pl-24': !isSidebarOpen && isMacOS,
        },
      )}
    >
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </button>

      <Breadcrumbs.Root>
        <Breadcrumbs.Item>
          <Code weight="bold" className="h-4 w-4 text-pink-500" />
          Estrutura técnica
        </Breadcrumbs.Item>
        <Breadcrumbs.Separator />
        <Breadcrumbs.HiddenItems />
        <Breadcrumbs.Separator />
        <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
        <Breadcrumbs.Separator />
        <Breadcrumbs.Item isActive>Arquitetura back-end</Breadcrumbs.Item>
      </Breadcrumbs.Root>
      <div className="inline-flex gap-3">
        <button className="text-rotion-100 hover:text-rotion-50">
          <Sticker className="h-5 w-5" weight="bold" />
        </button>
        <button className="text-rotion-100 hover:text-rotion-50">
          <Link className="h-5 w-5" weight="bold" />
        </button>
        <button className="text-rotion-100 hover:text-rotion-50">
          <Gear className="h-5 w-5" weight="bold" />
        </button>
      </div>
    </div>
  )
}
