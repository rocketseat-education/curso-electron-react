import { useQuery } from '@tanstack/react-query'
import { Command } from 'cmdk'
import { useAtom } from 'jotai'
import { File, MagnifyingGlass } from 'phosphor-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isSearchBarOpen } from '../../atoms/is-search-bar-open'

export function SearchBar() {
  const [open, setOpen] = useAtom(isSearchBarOpen)
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      console.log(e.key, e.metaKey)
      if (e.key === 'k' && e.metaKey) {
        setOpen((state) => !state)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  const { data } = useQuery(['documents'], async () => {
    const response = await window.api.getDocuments()

    return response.data
  })

  function handleOpenDocument(id: string) {
    navigate(`/documents/${id}`)
    setOpen(false)
  }

  return (
    <Command.Dialog
      className="fixed top-24 left-1/2 -translate-x-1/2 w-[480px] max-w-full bg-rotion-800 rounded shadow-2xl text-rotion-100 border border-rotion-600"
      open={open}
      onOpenChange={setOpen}
      label="Search"
    >
      <div className="flex items-center gap-2 border-b border-rotion-700 p-4">
        <MagnifyingGlass className="w-5 h-5" />
        <Command.Input
          autoFocus
          placeholder="Buscar documentos..."
          className="w-full bg-transparent focus:outline-none text-sm text-rotion-50 placeholder:text-rotion-200"
        />
      </div>
      <Command.List className="py-2">
        <Command.Empty className="py-3 px-4 text-rotion-200 text-sm">
          Nenhum documento encontrado.
        </Command.Empty>

        <Command.Group>
          {data?.map((document) => {
            return (
              <Command.Item
                onSelect={() => handleOpenDocument(document.id)}
                className="py-3 px-4 text-rotion-50 text-sm flex items-center gap-2 hover:bg-rotion-700 aria-selected:!bg-rotion-600"
                key={document.id}
              >
                <File className="w-4 h-4" />
                {document.title}
              </Command.Item>
            )
          })}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
