import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import TipTapDocument from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'

export interface OnContentUpdatedParams {
  title: string
  content: string
}

interface EditorProps {
  content?: string
  onContentUpdated: (params: OnContentUpdatedParams) => void
}

export function Editor({ content, onContentUpdated }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      TipTapDocument.extend({
        content: 'heading block*',
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Untitled'
          }

          return ''
        },
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      }),
    ],
    onUpdate: ({ editor }) => {
      const contentRegex = /(<h1>(?<title>.+)<\/h1>(?<content>.+)?)/
      const parsedContent = editor.getHTML().match(contentRegex)?.groups

      const title = parsedContent?.title ?? 'Untitled'
      const content = parsedContent?.content ?? ''

      onContentUpdated({
        title,
        content,
      })
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-invert prose-headings:mt-0 focus:outline-none pb-40 w-full',
      },
    },
    content,
    autofocus: 'end',
  })

  return <EditorContent className="w-[65ch]" editor={editor} />
}
