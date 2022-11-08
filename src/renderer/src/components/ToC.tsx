import { ReactNode } from 'react'

interface ToCRootProps {
  children: ReactNode
}

function ToCRoot(props: ToCRootProps) {
  return (
    <div
      className="flex flex-col text-sm text-gray-200 gap-2 mt-2"
      {...props}
    />
  )
}

interface ToCLinkProps {
  children: ReactNode
}

function ToCLink(props: ToCLinkProps) {
  return <a href="#" className="hover:text-gray-50" {...props} />
}

interface ToCSectionProps {
  children: ReactNode
}

function ToCSection(props: ToCSectionProps) {
  return <div className="flex flex-col gap-2 px-2" {...props} />
}

export const ToC = {
  Root: ToCRoot,
  Link: ToCLink,
  Section: ToCSection,
}
