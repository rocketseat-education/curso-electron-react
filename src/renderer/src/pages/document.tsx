import { ToC } from '../components/ToC'
import { useParams } from 'react-router-dom'
import { Editor, OnContentUpdatedParams } from '../components/Editor'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Header } from '../components/Header'

export function Document() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()

  const { data, isFetching } = useQuery(['document', id], async () => {
    const response = await window.api.getDocument({ id: id! })

    return response.data
  })

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: OnContentUpdatedParams) => {
      await window.api.saveDocument({
        id: id!,
        title,
        content,
      })
    },
    {
      onSuccess: (_, params) => {
        queryClient.setQueryData(['documents'], (documents: any[] = []) => {
          return documents.map((document) => {
            if (document.id === id) {
              return { ...document, title: params.title }
            }

            return document
          })
        })

        queryClient.setQueryData(['document', id], (document: any) => {
          return { id, title: params.title, content: params.content }
        })
      },
    },
  )

  const initialContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`
    }
  }, [data])

  async function handleUpdateOnDocument({
    title,
    content,
  }: OnContentUpdatedParams) {
    await saveDocument({
      title,
      content,
    })
  }

  return (
    <>
      <Header />

      <section
        id="content"
        className="flex-1 py-12 px-10 flex gap-8 overflow-y-auto scrollbar-thin scrollbar-thumb-rotion-600 scrollbar-track-rotion-800"
      >
        <aside className="hidden lg:block sticky top-0">
          <strong className="text-rotion-300 uppercase text-xs font-semibold">
            TABLE OF CONTENTS
          </strong>

          <ToC.Root>
            <ToC.Link>Arquitetura back-end</ToC.Link>
            <ToC.Section>
              <ToC.Link>Banco de dados</ToC.Link>
              <ToC.Link>Mensageria</ToC.Link>
            </ToC.Section>
            <ToC.Link>Tecnologias</ToC.Link>
            <ToC.Section>
              <ToC.Link>Nest.js</ToC.Link>
              <ToC.Link>GraphQL</ToC.Link>
              <ToC.Link>Prisma</ToC.Link>
              <ToC.Link>Apache Kafka</ToC.Link>
            </ToC.Section>
            <ToC.Link>Estrutura do código</ToC.Link>
            <ToC.Section>
              <ToC.Link>Fundamentos</ToC.Link>
              <ToC.Section>
                <ToC.Link>Inversão de dependência</ToC.Link>
                <ToC.Link>Injeção de dependências</ToC.Link>
                <ToC.Link>Domínio</ToC.Link>
                <ToC.Link>Entities</ToC.Link>
                <ToC.Link>Value Objets</ToC.Link>
                <ToC.Link>AggregateRoots</ToC.Link>
                <ToC.Link>Eventos de domínio</ToC.Link>
                <ToC.Link>Watched Lists</ToC.Link>
              </ToC.Section>
            </ToC.Section>
          </ToC.Root>
        </aside>

        <main className="flex-1 leading-relaxed flex flex-col items-center">
          {data && !isFetching && (
            <Editor
              content={initialContent}
              onContentUpdated={handleUpdateOnDocument}
            />
          )}
        </main>
      </section>
    </>
  )
}
