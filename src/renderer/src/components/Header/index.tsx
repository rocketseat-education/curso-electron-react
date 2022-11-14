import clsx from 'clsx'
import { Code, CaretDoubleRight, TrashSimple } from 'phosphor-react'
import { useAtom } from 'jotai'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Breadcrumbs from './Breadcrumbs'
import { isSidebarOpenAtom } from '../../atoms/is-sidebar-open'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

export function Header() {
  const [isSidebarOpen] = useAtom(isSidebarOpenAtom)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const isMacOS = process.platform === 'darwin'

  const { id } = useParams<{ id: string }>()

  const { data } = useQuery(
    ['document', id],
    async () => {
      const response = await window.api.getDocument({ id: id! })

      return response.data
    },
    {
      enabled: !!id,
    },
  )

  const { mutateAsync: deleteDocument } = useMutation(
    async () => {
      await window.api.deleteDocument({ id: id! })
    },
    {
      onSuccess: () => {
        queryClient.setQueryData(['documents'], (documents: any[] = []) => {
          return documents.filter((document) => document.id !== id)
        })

        navigate('/')
      },
    },
  )

  return (
    <div
      className={clsx(
        'border-b border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen,
        },
      )}
    >
      <Collapsible.Trigger
        className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </Collapsible.Trigger>

      {data && (
        <>
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
            <Breadcrumbs.Item isActive>{data?.title}</Breadcrumbs.Item>
          </Breadcrumbs.Root>

          <div className="inline-flex region-no-drag">
            <button
              onClick={() => deleteDocument()}
              className="inline-flex items-center gap-1 text-rotion-100 text-sm hover:text-rotion-50"
            >
              <TrashSimple className="h-4 w-4" />
              Apagar
            </button>
          </div>
        </>
      )}
    </div>
  )
}
