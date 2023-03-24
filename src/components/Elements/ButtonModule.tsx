import { useEffect, useState } from 'react'

import { CloseIcon } from '@/assets/icons'
import { Searchmodal } from '@/assets/icons/js/dialog/searchmodal'
import PaginationEndlessRibbon from '@/components/Elements/PaginationEndlessRibbon'
import { useGetUsers } from '@/features/chat/api'
import { useDebounce } from '@/hooks/useDebounce'

export const ButtonModal = () => {
  const [offset, setOffset] = useState(10)
  const [search, setSearch] = useState('')
  const debauncedSearch = useDebounce(search)
  const { data: response, isLoading } = useGetUsers({
    config: {},
    filters: { search: debauncedSearch, limit: offset },
  })
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <div className={'modal'}>
      <button className="add" onClick={() => setOpen(true)}></button>
      <div className={open ? 'overlay active' : 'overlay'}>
        <div className="modal">
          <div className={open ? 'modal__win active' : 'modal__win'}>
            <div className="modal__content">
              <div>
                <div className={'modal__header'}>
                  <button className="close" onClick={() => setOpen(false)}>
                    <CloseIcon />
                  </button>
                  <div className={'input__modal'}>
                    <button
                      className={openSearch ? 'input__loupe active' : 'input__loupe'}
                      onClick={() => setOpenSearch(true)}>
                      <Searchmodal />
                    </button>
                    <input
                      className={openSearch ? 'input__search active' : 'input__search'}
                      type={'text'}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}></input>
                  </div>
                </div>
                {isLoading ? (
                  <div>Loading...</div>
                ) : response?.data.length ? (
                  <div className="count_list">
                    {response.data.map((country) => (
                      <div className="count_user" key={country._id}>
                        <img
                          className="user_image"
                          alt={country.username}
                          src={
                            country.avatar?.url ||
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
                          }
                        />
                        <div>
                          <div className="user__name">
                            {country.firstName} {country.lastName}
                          </div>
                          <div className="user__mail"> @{country.username}</div>
                          <div className="user__info"> {country.description}</div>
                        </div>
                        <div>{country.isOnline}</div>
                      </div>
                    ))}
                    <PaginationEndlessRibbon
                      isLoading={isLoading}
                      maxItems={response.count}
                      onChange={setOffset}
                      offset={offset}
                    />
                  </div>
                ) : (
                  <div> Не найдено </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
