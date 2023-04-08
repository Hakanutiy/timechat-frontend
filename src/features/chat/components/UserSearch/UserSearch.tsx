import { useState } from 'react'

import { Dropdown } from '@/components/Elements/Dropdown/DropDown'
import { Result } from '@/features/chat/components/UserSearch/Result'
import { useDebounce } from '@/hooks/useDebounce'

export const UserSearch = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)
  return (
    <Dropdown
      trigger={({ open, close }) => (
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={open}
          onBlur={close}
          type="text"
          placeholder="Search..."
        />
      )}>
      <Result search={debouncedSearch} />
    </Dropdown>
  )
}
