import { InputField } from '@/components/Form'
export const Dialog = () => {
  return (
    <div className=" max-w-[1480px] max-h-[900px]">
      <div className="flex bg-white max-h-28 pl-16 py-2 ">
        <img
          src="https://readd.org/wp-content/uploads/2019/05/screenshot-2017-05-19-001-3.jpg"
          className="rounded-full w-16 h-16 "
        ></img>
        <div className="pl-6">
          <p className="font-semibold text-lg">Чингиз Хан</p>
          <p className="text-gray-400 text-xs">@Chingizhan</p>
          <p className="text-neutral-600 text-xs">Last seen at 1277</p>
        </div>
        <div className="flex mt-4 overflow-visible ml-auto">
          <svg
            className="mr-6"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9622 0C18.5653 0 23.9244 5.35906 23.9244 11.9622C23.9244 18.5653 18.5653 23.9244 11.9622 23.9244C5.35906 23.9244 0 18.5653 0 11.9622C0 5.35906 5.35906 0 11.9622 0ZM11.9622 21.2661C17.1019 21.2661 21.2661 17.1019 21.2661 11.9622C21.2661 6.82111 17.1019 2.65827 11.9622 2.65827C6.82111 2.65827 2.65827 6.82111 2.65827 11.9622C2.65827 17.1019 6.82111 21.2661 11.9622 21.2661ZM23.2399 21.3605L27 25.1193L25.1193 27L21.3605 23.2399L23.2399 21.3605Z"
              fill="#ADADAD"
            />
          </svg>
          <svg
            className="mr-6"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.86044 2.65757H8.82656L10.7493 7.46512L7.65991 9.52474C7.47799 9.64613 7.32883 9.81054 7.22568 10.0034C7.12254 10.1963 7.06858 10.4116 7.06862 10.6303C7.0726 10.7552 7.06862 10.6316 7.06862 10.6316V10.6595C7.0694 10.719 7.07206 10.7783 7.07659 10.8376C7.08456 10.9465 7.09785 11.094 7.1231 11.2761C7.17492 11.6349 7.27457 12.1292 7.46857 12.7112C7.85923 13.8805 8.62459 15.394 10.1155 16.8849C11.6063 18.3758 13.1198 19.1412 14.2878 19.5318C14.8711 19.7258 15.3641 19.8242 15.7255 19.8773C15.9295 19.9058 16.1348 19.9235 16.3407 19.9305L16.358 19.9318H16.3686C16.3686 19.9318 16.5174 19.9238 16.3699 19.9318C16.6166 19.9317 16.8584 19.8629 17.0682 19.7331C17.278 19.6033 17.4476 19.4177 17.5578 19.197L18.4481 17.4164L24.3425 18.3997V24.1401C21.5375 24.5454 13.9609 24.9453 8.00805 18.9923C2.05521 13.0394 2.45384 5.46131 2.86044 2.65757ZM9.82313 11.2761L12.2242 9.67623C12.7314 9.33788 13.1069 8.83539 13.2876 8.25305C13.4684 7.6707 13.4433 7.04392 13.2168 6.47784L11.2941 1.67028C11.0968 1.17718 10.7562 0.754505 10.3164 0.456786C9.8766 0.159068 9.35767 -3.56028e-05 8.82656 5.97585e-09H2.79134C1.5835 5.97585e-09 0.447412 0.838465 0.249427 2.14865C-0.202351 5.12779 -0.814909 13.927 6.12918 20.8713C13.0733 27.8155 21.8723 27.2016 24.8514 26.7511C26.1616 26.5518 27 25.417 27 24.2092V18.3997C27.0001 17.7706 26.777 17.1619 26.3704 16.6818C25.9638 16.2018 25.4002 15.8815 24.7796 15.778L18.8853 14.796C18.3247 14.7025 17.7488 14.7911 17.2423 15.0489C16.7358 15.3067 16.3252 15.7201 16.071 16.2285L15.6112 17.1493C15.4486 17.1093 15.2877 17.0627 15.1289 17.0098C14.305 16.7361 13.161 16.1727 11.9943 15.006C10.8277 13.8393 10.2643 12.6952 9.99056 11.8701C9.9252 11.675 9.86976 11.4768 9.82446 11.2761H9.82313Z"
              fill="#ADADAD"
            />
          </svg>
          <svg
            className="mr-10"
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#ADADAD" />
            <circle cx="3" cy="14" r="3" fill="#ADADAD" />
            <circle cx="3" cy="24" r="3" fill="#ADADAD" />
          </svg>
        </div>
      </div>
      <div className=" bg-cyan-500 w-full h-[89%]">
        <div className="">
          <p className="text-center text-white font-medium">13.6.1219</p>
          <div className="bg-white rounded-xl  max-w-[215px]  min-h-[52px] ml-12">
            <p className="pl-5 pt-3">Хочешь прикол лютый?</p>
            <p className="overflow-visible ml-[170px] text-xs">5:00</p>
          </div>

          <div className="bg-white rounded-xl  max-w-[215px] min-h-[52px]   ml-12 mt-3">
            <p className="pl-5 pt-3">Тебе он очень понравиться</p>
            <p className="overflow-visible ml-[170px] text-xs">5:00</p>
          </div>

          <div className="bg-cyan-100 rounded-xl  max-w-[215px] min-h-[52px]   ml-auto mr-16 mt-3">
            <p className="pl-5 pt-3">Мужик, ну зачеем</p>
            <p className="overflow-visible ml-[170px] text-xs">5:01</p>
          </div>

          <div className="bg-white rounded-xl  max-w-[215px] min-h-[52px]   ml-12 mt-3">
            <p className="pl-5 pt-3">АХАХАХХАХАХА</p>
            <p className="overflow-visible ml-[170px] text-xs">5:01</p>
          </div>
          <div className="bg-white rounded-xl  max-w-[215px] min-h-[52px]   ml-12 mt-3">
            <p className="pl-5 pt-3">Ничего личного, просто нужны земли</p>
            <p className="overflow-visible ml-[170px] text-xs">5:02</p>
          </div>

          <div className="bg-white rounded-xl  max-w-[215px] min-h-[52px]   ml-12 mt-3">
            <p className="pl-5 pt-3">Тюркоязычный народ заказывали?</p>
            <p className="overflow-visible ml-[170px] text-xs">5:03</p>
          </div>

          <div className="bg-white rounded-xl  max-w-[215px] min-h-[52px]   ml-12 mt-3">
            <p className="pl-5 pt-3">ссоре мужик так нужно было</p>
            <p className="overflow-visible ml-[170px] text-xs">5:04</p>
          </div>
        </div>
      </div>
      <div className="flex bg-white w-full max-h-12">
        <svg
          className="my-4 mx-7"
          width="18"
          height="26"
          viewBox="0 0 18 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5455 8.18182V27C15.5455 30.6164 12.6164 33.5455 9 33.5455C5.38364 33.5455 2.45455 30.6164 2.45455 27V6.54545C2.45455 4.28727 4.28727 2.45455 6.54545 2.45455C8.80364 2.45455 10.6364 4.28727 10.6364 6.54545V23.7273C10.6364 24.6273 9.9 25.3636 9 25.3636C8.1 25.3636 7.36364 24.6273 7.36364 23.7273V8.18182H4.90909V23.7273C4.90909 25.9855 6.74182 27.8182 9 27.8182C11.2582 27.8182 13.0909 25.9855 13.0909 23.7273V6.54545C13.0909 2.92909 10.1618 0 6.54545 0C2.92909 0 0 2.92909 0 6.54545V27C0 31.9745 4.02545 36 9 36C13.9745 36 18 31.9745 18 27V8.18182H15.5455Z"
            fill="#B1B1B1"
          />
        </svg>

        <InputField className=" w-[1630px]" />

        <svg
          className="ml-auto my-4 mx-7"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5051 6.59898e-05C12.4455 -0.00887153 9.45207 0.890237 6.90376 2.58356C4.35545 4.27688 2.36688 6.68826 1.18983 9.51239C0.0127731 12.3365 -0.299836 15.4464 0.29158 18.4483C0.882996 21.4502 2.35184 24.2092 4.51215 26.3758C6.67245 28.5424 9.42707 30.0193 12.4272 30.6195C15.4274 31.2197 18.5382 30.9162 21.3658 29.7474C24.1933 28.5786 26.6105 26.5971 28.3113 24.0538C30.012 21.5104 30.9199 18.5196 30.9199 15.46C30.9239 13.4325 30.5282 11.424 29.7555 9.54951C28.9828 7.67498 27.8482 5.97112 26.4166 4.53533C24.985 3.09954 23.2845 1.95998 21.4122 1.18179C19.5399 0.4036 17.5327 0.00204022 15.5051 6.59898e-05V6.59898e-05ZM29.0533 15.46C29.0533 18.1396 28.2587 20.759 26.77 22.987C25.2813 25.215 23.1654 26.9515 20.6898 27.9769C18.2142 29.0023 15.4901 29.2706 12.862 28.7479C10.2339 28.2251 7.81987 26.9348 5.92513 25.04C4.03038 23.1453 2.74005 20.7312 2.21729 18.1031C1.69453 15.4751 1.96283 12.751 2.98826 10.2754C4.01368 7.79976 5.75019 5.68383 7.97817 4.19514C10.2062 2.70645 12.8256 1.91186 15.5051 1.91186C19.0983 1.91186 22.5443 3.33925 25.0851 5.88003C27.6259 8.4208 29.0533 11.8668 29.0533 15.46V15.46Z"
            fill="#B1B1B1"
          />
          <path
            d="M10.6881 14.0299C11.1551 14.0417 11.6149 13.913 12.008 13.6606C12.4011 13.4081 12.7093 13.0435 12.8929 12.6139C13.0764 12.1842 13.1267 11.7094 13.0373 11.2509C12.9479 10.7923 12.7229 10.3712 12.3915 10.0419C12.0601 9.71271 11.6374 9.49054 11.1783 9.4042C10.7192 9.31787 10.2447 9.37134 9.81633 9.55771C9.38794 9.74407 9.02535 10.0547 8.77552 10.4495C8.52568 10.8442 8.40009 11.3049 8.41501 11.7718C8.43759 12.3661 8.68477 12.9296 9.10666 13.3487C9.52854 13.7678 10.0937 14.0112 10.6881 14.0299V14.0299Z"
            fill="#B1B1B1"
          />
          <path
            d="M20.6835 14.0298C21.0047 14.0556 21.3277 14.0147 21.6323 13.9096C21.9368 13.8044 22.2163 13.6373 22.4531 13.4188C22.6899 13.2003 22.8789 12.9352 23.0081 12.6401C23.1374 12.3449 23.2041 12.0262 23.2041 11.704C23.2041 11.3818 23.1374 11.0631 23.0081 10.768C22.8789 10.4729 22.6899 10.2077 22.4531 9.9892C22.2163 9.77071 21.9368 9.60363 21.6323 9.49848C21.3277 9.39333 21.0047 9.3524 20.6835 9.37825C20.3759 9.38204 20.0721 9.44743 19.7901 9.57058C19.5081 9.69372 19.2537 9.87211 19.0418 10.0952C18.8299 10.3183 18.6649 10.5816 18.5565 10.8696C18.448 11.1575 18.3984 11.4643 18.4105 11.7718C18.4144 12.372 18.6557 12.9463 19.0815 13.3694C19.5074 13.7924 20.0833 14.0298 20.6835 14.0298V14.0298Z"
            fill="#B1B1B1"
          />
          <path
            d="M15.7912 22.0083C14.2185 21.9768 12.676 21.5713 11.2912 20.8252C9.90643 20.0792 8.71923 19.0141 7.82788 17.718C8.364 19.4282 9.42129 20.928 10.8518 22.0077C12.2824 23.0873 14.0146 23.6928 15.8062 23.7394C17.6107 23.7356 19.3652 23.1467 20.8065 22.061C22.2478 20.9752 23.2981 19.4514 23.7997 17.718C22.9335 19.0491 21.7455 20.1402 20.3456 20.8901C18.9457 21.6401 17.3792 22.0246 15.7912 22.0083V22.0083Z"
            fill="#B1B1B1"
          />
        </svg>

        <svg
          className="ml-auto my-4 mx-7"
          width="35"
          height="31"
          viewBox="0 0 35 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.5878 13.3421L33.5762 13.3369L2.432 0.136142C2.17004 0.0240972 1.88499 -0.0198452 1.60235 0.00824507C1.31971 0.0363354 1.04829 0.135582 0.812368 0.297108C0.563111 0.464013 0.35837 0.691626 0.216564 0.959468C0.0747591 1.22731 0.000339163 1.52698 3.98171e-07 1.83151V10.2741C0.000138904 10.6904 0.14239 11.0936 0.402235 11.4142C0.662081 11.7349 1.02324 11.9528 1.42347 12.0305L18.4095 15.2402C18.4763 15.2531 18.5365 15.2894 18.5798 15.3429C18.6232 15.3964 18.6469 15.4636 18.6469 15.533C18.6469 15.6025 18.6232 15.6697 18.5798 15.7232C18.5365 15.7767 18.4763 15.813 18.4095 15.8259L1.4242 19.0356C1.02408 19.1131 0.662942 19.3307 0.402981 19.6511C0.143019 19.9714 0.00051048 20.3744 3.98171e-07 20.7905V29.2346C-0.000193269 29.5254 0.0702649 29.8117 0.205052 30.0678C0.33984 30.3239 0.534739 30.5418 0.77226 30.7019C1.05797 30.8959 1.39328 30.9996 1.73631 31C1.97478 30.9998 2.21081 30.9509 2.43054 30.8562L33.574 17.7307L33.5878 17.724C34.007 17.5399 34.3642 17.2342 34.6152 16.8448C34.8662 16.4554 35 15.9993 35 15.533C35 15.0668 34.8662 14.6107 34.6152 14.2213C34.3642 13.8319 34.007 13.5262 33.5878 13.3421V13.3421Z"
            fill="#00ACED"
          />
        </svg>
      </div>
    </div>
  )
}
