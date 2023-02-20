import { InputField } from '@/components/Form'
export const CallsDialog = () => {
  return (
    <div className="max-w-md w-full  h-screen ml-20 py-6 bg-slate-100">
      <div>
        <InputField type="text" className="h-7 w-80" />

        <div className="flex h-20 mt-8 w-full pr-3">
          <img
            alt="profileimg"
            src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
            className="rounded-full w-16 h-16"></img>
          <div className="truncate-1">
            <p className="pl-3.5 font-semibold  text-sm h-4">Чингиз Хан</p>
            <p className="text-gray-400 text-xs pl-3.5 h-1 py-1">@Chingizhan</p>
            <p className="font-medium text-cyan-500 pt-2 pl-3 truncate-1 ">
              Today, 16:30 (3:54)
            </p>
          </div>

          <svg
            className="overflow-visible ml-auto mt-7 "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.12 11.0044C14.0267 11.0044 12.9689 10.8267 11.9822 10.5067C11.6711 10.4 11.3244 10.48 11.0844 10.72L9.68889 12.4711C7.17333 11.2711 4.81778 9.00444 3.56444 6.4L5.29778 4.92444C5.53778 4.67556 5.60889 4.32889 5.51111 4.01778C5.18222 3.03111 5.01333 1.97333 5.01333 0.88C5.01333 0.4 4.61333 0 4.13333 0H1.05778C0.577778 0 0 0.213333 0 0.88C0 9.13778 6.87111 16 15.12 16C15.7511 16 16 15.44 16 14.9511V11.8844C16 11.4044 15.6 11.0044 15.12 11.0044Z"
              fill="#00ACED"
            />
            <path
              d="M16 0H11.9145V1.02137H14.2564L9 6.27779L9.72221 7L14.9786 1.74359V4.08547H16V0Z"
              fill="#00ACED"
            />
          </svg>
        </div>

        <div className="flex h-20 mt-2 pr-4 ">
          <img
            alt="profileimg"
            src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
            className="rounded-full w-16 h-16"></img>
          <div className="truncate-1">
            <p className="pl-3.5 font-semibold text-sm h-4">Мгыдрчан Соломон</p>
            <p className="text-gray-400 text-xs pl-3.5 h-1 py-1">@Chingizhan</p>
            <p className=" font-medium text-green-600 pt-2 pl-3 truncate-1 ">
              Yesterday, 13:48 (1:48)
            </p>
          </div>

          <svg
            className="overflow-visible ml-auto mt-7 "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.12 11.0044C14.0267 11.0044 12.9689 10.8267 11.9822 10.5067C11.6711 10.4 11.3244 10.48 11.0844 10.72L9.68889 12.4711C7.17333 11.2711 4.81778 9.00444 3.56444 6.4L5.29778 4.92444C5.53778 4.67556 5.60889 4.32889 5.51111 4.01778C5.18222 3.03111 5.01333 1.97333 5.01333 0.88C5.01333 0.4 4.61333 0 4.13333 0H1.05778C0.577778 0 0 0.213333 0 0.88C0 9.13778 6.87111 16 15.12 16C15.7511 16 16 15.44 16 14.9511V11.8844C16 11.4044 15.6 11.0044 15.12 11.0044Z"
              fill="#1D800D"
            />
            <path
              d="M9 7L13.0855 7L13.0855 5.97863L10.7436 5.97863L16 0.722209L15.2778 -6.31376e-08L10.0214 5.25641L10.0214 2.91453L9 2.91453L9 7Z"
              fill="#1D800D"
            />
          </svg>
        </div>
        <div className="flex h-20 mt-2  ">
          <img
            alt="profileimg"
            src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
            className="rounded-full w-16 h-16"></img>
          <div className="truncate-1">
            <p className="pl-3.5 font-semibold  text-sm h-4">Мгыдрчан Соломон</p>
            <p className="text-gray-400 text-xs pl-3.5 h-1 py-1">@Chingizhan</p>
            <p className="font-medium text-red-700 pt-2 pl-3 truncate-1">
              Yesterday, 13:48 (1:48)
            </p>
          </div>
          <div className=" ml-auto pr-3 mt-7">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.12 11.0044C14.0267 11.0044 12.9689 10.8267 11.9822 10.5067C11.6711 10.4 11.3244 10.48 11.0844 10.72L9.68889 12.4711C7.17333 11.2711 4.81778 9.00444 3.56444 6.4L5.29778 4.92444C5.53778 4.67556 5.60889 4.32889 5.51111 4.01778C5.18222 3.03111 5.01333 1.97333 5.01333 0.88C5.01333 0.4 4.61333 0 4.13333 0H1.05778C0.577778 0 0 0.213333 0 0.88C0 9.13778 6.87111 16 15.12 16C15.7511 16 16 15.44 16 14.9511V11.8844C16 11.4044 15.6 11.0044 15.12 11.0044Z"
                fill="#A90000"
              />
              <path
                d="M9 7.00006L13.0855 7.00006L13.0855 5.97869L10.7436 5.97869L16 0.722271L15.2778 6.0908e-05L10.0214 5.25647L10.0214 2.91459L9 2.91459L9 7.00006Z"
                fill="#A90000"
              />
            </svg>
          </div>
        </div>
        <div className="flex h-20 mt-2 pr-4 ">
          <img
            alt="profileimg"
            src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
            className="rounded-full w-16 h-16"></img>
          <div className="truncate-1">
            <p className="pl-3.5 font-semibold  text-sm h-4">Мгыдрчан Соломон</p>
            <p className="text-gray-400 text-xs pl-3.5 h-1 py-1">@Chingizhan</p>
            <p className="font-medium text-green-600 pt-2 pl-3 truncate-1">
              Yesterday, 13:48 (1:48)
            </p>
          </div>

          <svg
            className="overflow-visible ml-auto mt-7 "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.12 11.0044C14.0267 11.0044 12.9689 10.8267 11.9822 10.5067C11.6711 10.4 11.3244 10.48 11.0844 10.72L9.68889 12.4711C7.17333 11.2711 4.81778 9.00444 3.56444 6.4L5.29778 4.92444C5.53778 4.67556 5.60889 4.32889 5.51111 4.01778C5.18222 3.03111 5.01333 1.97333 5.01333 0.88C5.01333 0.4 4.61333 0 4.13333 0H1.05778C0.577778 0 0 0.213333 0 0.88C0 9.13778 6.87111 16 15.12 16C15.7511 16 16 15.44 16 14.9511V11.8844C16 11.4044 15.6 11.0044 15.12 11.0044Z"
              fill="#1D800D"
            />
            <path
              d="M9 7L13.0855 7L13.0855 5.97863L10.7436 5.97863L16 0.72221L15.2778 -1.27146e-07L10.0214 5.25641L10.0214 2.91453L9 2.91453L9 7Z"
              fill="#1D800D"
            />
          </svg>
        </div>
        <div className="flex h-20 mt-2 pr-4 ">
          <img
            alt="profileimg"
            src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
            className="rounded-full w-16 h-16"></img>
          <div className="truncate-1">
            <p className="pl-3.5 font-semibold  text-sm h-4">Мгыдрчан Соломон</p>
            <p className="text-gray-400 text-xs pl-3.5 h-1 py-1">@Chingizhan</p>
            <p className="font-medium text-green-600 pt-2 pl-3 truncate-1">
              Yesterday, 13:48 (1:48)
            </p>
          </div>

          <svg
            className="overflow-visible ml-auto mt-7 "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.12 11.0044C14.0267 11.0044 12.9689 10.8267 11.9822 10.5067C11.6711 10.4 11.3244 10.48 11.0844 10.72L9.68889 12.4711C7.17333 11.2711 4.81778 9.00444 3.56444 6.4L5.29778 4.92444C5.53778 4.67556 5.60889 4.32889 5.51111 4.01778C5.18222 3.03111 5.01333 1.97333 5.01333 0.88C5.01333 0.4 4.61333 0 4.13333 0H1.05778C0.577778 0 0 0.213333 0 0.88C0 9.13778 6.87111 16 15.12 16C15.7511 16 16 15.44 16 14.9511V11.8844C16 11.4044 15.6 11.0044 15.12 11.0044Z"
              fill="#1D800D"
            />
            <path
              d="M9 7L13.0855 7L13.0855 5.97863L10.7436 5.97863L16 0.72221L15.2778 -1.27146e-07L10.0214 5.25641L10.0214 2.91453L9 2.91453L9 7Z"
              fill="#1D800D"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
