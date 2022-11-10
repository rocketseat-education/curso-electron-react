import { Plus } from 'phosphor-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export function CreatePage() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading: isCreatingNewPage, mutateAsync: createDocument } =
    useMutation(
      async () => {
        const response = await window.api.createDocument()

        return response.data
      },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(['documents'], (documents: any[] = []) => {
            return [...documents, data]
          })
        },
      },
    )

  async function handleCreateDocument() {
    const document = await createDocument()

    navigate(`/documents/${document.id}`)
  }

  return (
    <button
      onClick={handleCreateDocument}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60"
      disabled={isCreatingNewPage}
    >
      <Plus className="h-4 w-4" />
      Create new page
    </button>
  )
}
