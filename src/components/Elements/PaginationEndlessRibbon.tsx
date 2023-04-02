import { FC, useRef } from 'react'

interface PaginationEndlessRibbonProps {
  onChange: (offset: number) => void
  isLoading: boolean
  maxItems: number
  offset?: number
  addOn?: number
}

export const PaginationEndlessRibbon: FC<PaginationEndlessRibbonProps> = ({
  onChange,
  maxItems,
  isLoading,
  offset,
  addOn = 10,
}) => {
  const observer = useRef<IntersectionObserver>()
  const lastElementRef = (node) => {
    const hasMore = offset >= maxItems
    if (isLoading || hasMore) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        await onChange(offset + addOn)
      }
    })
    if (node) observer.current.observe(node)
  }

  return <div ref={lastElementRef} />
}

export default PaginationEndlessRibbon
