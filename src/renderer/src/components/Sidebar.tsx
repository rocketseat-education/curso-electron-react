import { CaretDown, MagnifyingGlass, Code } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="bg-rotion-900 w-60 h-screen px-5 pt-14 flex flex-col gap-8"
    >
      <button className="text-gray-50 flex items-center gap-2 text-sm font-medium group">
        <img
          className="h-5 w-5 rounded-sm"
          src="https://avatars.githubusercontent.com/u/2254731?v=4"
          alt=""
        />
        Diego Fernandes
        <CaretDown className="w-4 h-4 text-gray-200 group-hover:text-gray-50" />
      </button>

      <button className="flex items-center gap-2 text-gray-200 text-sm hover:text-gray-50">
        <MagnifyingGlass className="w-5 h-5" />
        Busca rápida
      </button>

      <nav className="flex flex-col gap-8 text-gray-200">
        <div className="flex flex-col gap-4">
          <div className="text-gray-400 uppercase text-xs font-semibold">
            Favorites
          </div>

          <div className="flex flex-col gap-3">
            <a
              href=""
              className="flex items-center text-sm gap-2 hover:text-gray-50"
            >
              <Code className="h-4 w-4" />
              Discover
            </a>
            <a
              href=""
              className="flex items-center text-sm gap-2 hover:text-gray-50"
            >
              <Code className="h-4 w-4" />
              Ignite
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-gray-400 uppercase text-xs font-semibold">
            Workspace
          </div>

          <div className="flex flex-col gap-3">
            <a
              href=""
              className="flex items-center text-sm gap-2 hover:text-gray-50"
            >
              <Code className="h-4 w-4" />
              Discover
            </a>
            <a
              href=""
              className="flex items-center text-sm gap-2 hover:text-gray-50"
            >
              <Code className="h-4 w-4" />
              Ignite
            </a>
          </div>
        </div>
      </nav>
    </aside>
  )
}
