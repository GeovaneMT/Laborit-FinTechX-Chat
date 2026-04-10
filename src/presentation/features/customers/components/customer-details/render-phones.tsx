import { formatPhone } from '@utils/phone-formater'

import { cn } from '@utils/cn'

import { Separator } from '@ui/separator'
import { DetailsItem } from '@ui/details-item'

import { EditIcon, PhoneIcon, PlusCircleIcon } from 'lucide-react'
import { PhoneTitleIcons } from '@features/customers/components/customer-details/phone-titile-icons'

import type { CustomerDetailsDTOOutputPhonesItem } from '@http/generated/models'

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@shadcn/accordion'

interface RenderPhonesProps {
  hasPhones: boolean
  hasMultiplePhones: boolean
  phones: CustomerDetailsDTOOutputPhonesItem[]
  openPhonesSheet: () => void
}

export const RenderPhones = ({
  phones,
  hasPhones,
  openPhonesSheet,
  hasMultiplePhones,
}: RenderPhonesProps) => {
  if (!hasPhones) {
    return (
      <DetailsItem
        warning
        className="py-2"
        noBorder
        title="Sem telefones cadastrados"
        Icon={<PhoneIcon size={16} />}
        ActionIcon={<PlusCircleIcon size={16} />}
        handleButtonClick={openPhonesSheet}
      />
    )
  }

  if (!hasMultiplePhones) {
    const phone = phones[0]

    return (
      <DetailsItem
        className="py-2"
        noBorder
        Icon={<PhoneIcon size={16} />}
        ActionIcon={<EditIcon size={16} />}
        handleButtonClick={openPhonesSheet}
        title={formatPhone({ number: phone.number })}
        titleIcons={
          <PhoneTitleIcons type={phone.type} isWhatsapp={phone.isWhatsapp} />
        }
      />
    )
  }

  return (
    <Accordion collapsible type="single" defaultValue="OPEN_PHONE">
      <AccordionItem
        value="OPEN_PHONE"
        className="bg-card overflow-hidden rounded-md border"
      >
        <div className="bg-muted hover:bg-muted/70 border-b pr-4 transition-colors">
          <AccordionTrigger>
            <DetailsItem
              noBg
              noBorder
              noAction
              noPadding
              noHighlight
              title="Telefones"
              Icon={<PhoneIcon size={16} />}
              className="pl-4"
            />
          </AccordionTrigger>
        </div>

        <AccordionContent className="p-0">
          {phones.map((phone, index) => (
            <div
              key={phone.id}
              className={cn('space-y-4 px-4 pb-4', index === 0 && 'pt-4')}
            >
              <DetailsItem
                className="hover:bg-accent/70 py-2"
                ActionIcon={<EditIcon size={16} />}
                title={formatPhone({ number: phone.number })}
                titleIcons={
                  <PhoneTitleIcons
                    type={phone.type}
                    isWhatsapp={phone.isWhatsapp}
                  />
                }
                handleButtonClick={openPhonesSheet}
              />

              {index !== phones.length - 1 && <Separator />}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
