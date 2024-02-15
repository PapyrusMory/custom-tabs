import { ReactNode } from 'react'
export type TabItem = {
  id: number
  label: string
  content: ReactNode
}

export type ContentProps = {
  tabsContent: TabItem[]
  onChange: (index: number) => void
}
