import type { ComponentType } from 'react'

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BackwardOutlined,
  BellOutlined,
  CalendarOutlined,
  CameraOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  CreditCardOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FolderOutlined,
  ForwardOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined,
  MenuOutlined,
  MoreOutlined,
  PaperClipOutlined,
  PauseCircleOutlined,
  PhoneOutlined,
  PictureOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  PrinterOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  SearchOutlined,
  SendOutlined,
  SettingOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  SoundOutlined,
  StarFilled,
  StarOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  UnlockOutlined,
  UploadOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons'

import { isHidden } from './checks'

interface IconProps {
  accessibility?: unknown
  name?: unknown
}

const ICON_MAP: Record<string, ComponentType> = {
  accountCircle: UserOutlined,
  add: PlusOutlined,
  arrowBack: ArrowLeftOutlined,
  arrowForward: ArrowRightOutlined,
  attachFile: PaperClipOutlined,
  calendarToday: CalendarOutlined,
  call: PhoneOutlined,
  camera: CameraOutlined,
  check: CheckOutlined,
  close: CloseOutlined,
  delete: DeleteOutlined,
  download: DownloadOutlined,
  edit: EditOutlined,
  event: CalendarOutlined,
  error: CloseCircleOutlined,
  fastForward: ForwardOutlined,
  favorite: HeartFilled,
  favoriteOff: HeartOutlined,
  folder: FolderOutlined,
  help: QuestionCircleOutlined,
  home: HomeOutlined,
  info: InfoCircleOutlined,
  locationOn: EnvironmentOutlined,
  lock: LockOutlined,
  lockOpen: UnlockOutlined,
  mail: MailOutlined,
  menu: MenuOutlined,
  moreVert: MoreOutlined,
  moreHoriz: EllipsisOutlined,
  notificationsOff: BellOutlined,
  notifications: BellOutlined,
  pause: PauseCircleOutlined,
  payment: CreditCardOutlined,
  person: UserOutlined,
  phone: PhoneOutlined,
  photo: PictureOutlined,
  play: PlayCircleOutlined,
  print: PrinterOutlined,
  refresh: ReloadOutlined,
  rewind: BackwardOutlined,
  search: SearchOutlined,
  send: SendOutlined,
  settings: SettingOutlined,
  share: ShareAltOutlined,
  shoppingCart: ShoppingCartOutlined,
  skipNext: StepForwardOutlined,
  skipPrevious: StepBackwardOutlined,
  star: StarFilled,
  starHalf: StarOutlined,
  starOff: StarOutlined,
  stop: PauseCircleOutlined,
  upload: UploadOutlined,
  visibility: EyeOutlined,
  visibilityOff: EyeInvisibleOutlined,
  volumeDown: SoundOutlined,
  volumeMute: SoundOutlined,
  volumeOff: SoundOutlined,
  volumeUp: SoundOutlined,
  warning: WarningOutlined,
}

export default function Icon({ accessibility, name }: IconProps) {
  if (isHidden(accessibility)) return null

  if (typeof name === 'object' && name !== null && typeof (name as { svgPath?: unknown }).svgPath === 'string') {
    return (
      <svg className="h-[24px] w-[24px]" fill="currentColor" viewBox="0 0 24 24">
        <path d={(name as { svgPath: string }).svgPath} />
      </svg>
    )
  }

  const IconComponent = ICON_MAP[name == null ? '' : String(name)]
  return IconComponent ? <IconComponent /> : null
}
