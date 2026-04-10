import {
  HomeIcon,
  BuildingIcon,
  SmartphoneIcon,
  MessageCircleMoreIcon,
} from 'lucide-react'

const PHONE_TYPE_ICONS = {
  HOME: <HomeIcon size={16} />,
  WORK: <BuildingIcon size={16} />,
  MOBILE: <SmartphoneIcon size={16} />,
} as const

interface PhoneTitleIconsProps {
  type: keyof typeof PHONE_TYPE_ICONS
  isWhatsapp?: boolean
}

export const PhoneTitleIcons = ({ type, isWhatsapp }: PhoneTitleIconsProps) => {
  return (
    <div className="flex items-center gap-1 text-xs">
      {PHONE_TYPE_ICONS[type]}
      {isWhatsapp && <MessageCircleMoreIcon size={16} />}
    </div>
  )
}
