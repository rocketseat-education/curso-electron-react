import { useSetAtom } from 'jotai'
import { MagnifyingGlass } from 'phosphor-react'
import { isSearchBarOpen } from '../../atoms/is-search-bar-open'

export function Search() {
  const openSearchBar = useSetAtom(isSearchBarOpen)

  return (
    <button
      onClick={() => openSearchBar(true)}
      className="flex mx-5 items-center gap-2 text-rotion-100 text-sm hover:text-rotion-50"
    >
      <MagnifyingGlass className="w-5 h-5" />
      Busca rápida
    </button>
  )
}
