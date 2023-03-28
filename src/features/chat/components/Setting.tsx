import {
  CallGroupIcon,
  ChangeEmojiIcon,
  SharedPhotoIcon,
  VideoChatIcon,
} from '@/assets/icons'
import { useTheme } from '@/hooks/useTheme'
export const Setting = () => {
  const { themeMessage, setThemeMessage } = useTheme()
  const handleThemeBLueClick = () => {
    setThemeMessage('blue')
  }
  const handleThemePurpleClick = () => {
    setThemeMessage('purple')
  }
  const handleThemeGreenClick = () => {
    setThemeMessage('green')
  }
  const handleThemeOrangeClick = () => {
    setThemeMessage('orange')
  }
  return (
    <div className="detail-area hidden-md">
      <div className="detail-area-header">
        <div className="msg-profile group">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1">
            <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
            <path d="M22 8.5l-10 7-10-7" />
            <path d="M2 15.5l10-7 10 7M12 2v6.5" />
          </svg>
        </div>
        <div className="detail-title">CodePen Group</div>
        <div className="detail-subtitle">Created by Aysenur, 1 May 2020</div>
        <div className="detail-buttons">
          <button className="detail-button">
            <CallGroupIcon /> Call Group
          </button>
          <button className="detail-button">
            <VideoChatIcon />
            Video Chat
          </button>
        </div>
      </div>
      <div className="detail-changes">
        <input type="text" placeholder="Search in Conversation"></input>
        <div className="detail-change">
          Change Color
          <div className="colors">
            <button className={'button_theme'} onClick={handleThemeBLueClick}>
              <div className="color blue selected" data-color="blue"></div>
            </button>
            <button className={'button_theme'} onClick={handleThemePurpleClick}>
              <div className="color purple" data-color="purple"></div>
            </button>
            <button className={'button_theme'} onClick={handleThemeGreenClick}>
              <div className="color green" data-color="green"></div>
            </button>
            <button className={'button_theme'} onClick={handleThemeOrangeClick}>
              <div className="color orange" data-color="orange"></div>
            </button>
          </div>
        </div>
        <div className="detail-change">
          <ChangeEmojiIcon />
          Change Emoji
        </div>
      </div>
      <div className="detail-photos">
        <div className="detail-photo-title">
          <SharedPhotoIcon />
          Shared photos
        </div>
        <div className="detail-photo-grid">
          <img
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80"
            alt={'imageass'}
          />

          <img
            src="https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2189&q=80"
            alt={'imageass'}
          />
        </div>
        <div className="view-more">View More</div>
      </div>
    </div>
  )
}
