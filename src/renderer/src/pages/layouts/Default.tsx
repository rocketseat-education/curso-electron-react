import * as Collapsible from '@radix-ui/react-collapsible'
import { useAtom } from 'jotai'

import { Sidebar } from '../../components/Sidebar'

import { isSidebarOpenAtom } from '../../atoms/is-sidebar-open'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function Default() {
  const [, setIsSidebarOpen] = useAtom(isSidebarOpenAtom)

  return (
    <Collapsible.Root
      defaultOpen={true}
      onOpenChange={setIsSidebarOpen}
      asChild
    >
      <div className="h-screen w-screen bg-rotion-900 text-gray-100 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col max-h-screen">
          <Header />
          <Outlet />
        </div>
      </div>
    </Collapsible.Root>
  )
}
