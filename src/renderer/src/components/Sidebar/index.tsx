import { CaretDoubleLeft, Code } from 'phosphor-react'
import * as Navigation from './Navigation'
import { useAtom } from 'jotai'
import clsx from 'clsx'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'

import { isSidebarOpenAtom } from '@renderer/atoms/is-sidebar-open'

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom)

  const isMacOS = process.platform === 'darwin'

  return (
    <aside
      id="sidebar"
      data-open={isSidebarOpen}
      className={clsx(
        'bg-rotion-800 border-r border-rotion-600 h-screen relative group data-[open=true]:w-[240px] data-[open=false]:w-0 overflow-hidden transition-all duration-500',
      )}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className={clsx(
          'absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS,
          },
        )}
      >
        <CaretDoubleLeft className="h-4 w-4" />
      </button>

      <div
        className={clsx(
          'flex flex-col gap-8 h-full w-[240px] group-data-[open=true]:opacity-100 group-data-[open=false]:opacity-0 transition-opacity duration-500',
          {
            'pt-14': isMacOS,
            'pt-6': !isMacOS,
          },
        )}
      >
        <Profile />
        <Search />

        <Navigation.Root>
          <Navigation.Section>
            <Navigation.SectionTitle>Favorites</Navigation.SectionTitle>
            <Navigation.SectionContent>
              <Navigation.Link>
                <Code className="h-4 w-4" />
                Discover
              </Navigation.Link>
              <Navigation.Link>
                <Code className="h-4 w-4" />
                Ignite
              </Navigation.Link>
            </Navigation.SectionContent>
          </Navigation.Section>

          <Navigation.Section>
            <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
            <Navigation.SectionContent>
              <Navigation.Link>
                <Code className="h-4 w-4" />
                Discover
              </Navigation.Link>
              <Navigation.Link>
                <Code className="h-4 w-4" />
                Ignite
              </Navigation.Link>
            </Navigation.SectionContent>
          </Navigation.Section>
        </Navigation.Root>

        <CreatePage />
      </div>
    </aside>
  )
}
