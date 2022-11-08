import { CaretDoubleLeft, Code } from 'phosphor-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Navigation from './Navigation'
import clsx from 'clsx'
import { CreatePage } from './CreatePage'
import { Profile } from './Profile'
import { Search } from './Search'

export function Sidebar() {
  const isMacOS = process.platform === 'darwin'

  return (
    <Collapsible.Content
      id="sidebar"
      className={clsx(
        'bg-rotion-800 flex-shrink-0 border-r border-rotion-600 h-screen relative group data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-hidden',
      )}
    >
      <Collapsible.Trigger
        className={clsx(
          'absolute h-5 w-5 right-4 text-rotion-200 hover:text-rotion-50 inline-flex items-center justify-center',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS,
          },
        )}
      >
        <CaretDoubleLeft className="h-4 w-4" />
      </Collapsible.Trigger>

      <div
        className={clsx(
          'flex flex-col gap-8 h-full w-[240px] group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 transition-opacity duration-500',
          {
            'pt-14': isMacOS,
            'pt-[1.125rem]': !isMacOS,
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
    </Collapsible.Content>
  )
}
