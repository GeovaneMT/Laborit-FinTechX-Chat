import Image from 'next/image'
import { format } from 'date-fns'

import { Button } from '@ui/button'
import { DetailsItem } from '@ui/details-item'

import { Avatar, AvatarFallback } from '@shadcn/avatar'

import { TypographyH3 } from '@ui/typography/hx/h3'
import { TypographyMuted } from '@ui/typography/basic/muted'

import { EditIcon, CalendarPlusIcon, CalendarSyncIcon } from 'lucide-react'

import { RenderPhones } from '@features/customers/components/customer-details/render-phones'
import { RenderVehicles } from '@features/customers/components/customer-details/render-vehicles'

import type { CustomerDetailsDTOOutput } from '@http/generated/models'

interface RenderCustomerDetailsProps {
  hasPhones: boolean
  hasVehicles: boolean
  hasMultiplePhones: boolean
  hasMultipleVehicles: boolean
  customer: CustomerDetailsDTOOutput
  openNameSheet: () => void
  openPhonesSheet: () => void
}

export const RenderCustomerDetails = ({
  customer,
  hasPhones,
  hasVehicles,
  openNameSheet,
  openPhonesSheet,
  hasMultiplePhones,
  hasMultipleVehicles,
}: RenderCustomerDetailsProps) => {
  const {
    email,
    phones,
    lastName,
    firstName,
    createdAt,
    updatedAt,
    customerId,
    vehiclesDetails,
  } = customer

  return (
    <section>
      <header className="relative max-w-[83vw] space-y-6">
        <div className="group relative mt-12 h-42 w-full">
          <Image
            fill
            placeholder="blur"
            blurDataURL="/images/hero2.jpg"
            src="/images/hero2.jpg"
            sizes="(max-width: 768px) 100vw, 1440px"
            alt="Customer cover"
            className="pointer-events-none w-full mask-[radial-gradient(circle_farthest-side_at_center,rgba(0,0,0,.5),transparent)] object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] sm:left-1/20 sm:translate-x-0">
          <Avatar className="h-36 w-36">
            <AvatarFallback>
              {firstName?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="absolute inset-x-0 px-8 pt-4">
          <div className="flex items-center gap-2">
            <TypographyH3 className="truncate">
              {firstName} {lastName}
            </TypographyH3>

            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                openNameSheet()
              }}
            >
              <EditIcon size={16} />
            </Button>
          </div>

          <TypographyMuted className="max-w-[40vw] truncate text-lg sm:max-w-full">
            {email}
          </TypographyMuted>
        </div>
      </header>

      <ul className="mx-auto mt-32 grid items-start gap-4 sm:grid-cols-2">
        <RenderVehicles
          customerEmail={email}
          customerId={customerId}
          hasVehicles={hasVehicles}
          vehiclesDetails={vehiclesDetails}
          hasMultipleVehicles={hasMultipleVehicles}
        />

        <RenderPhones
          phones={phones}
          hasPhones={hasPhones}
          openPhonesSheet={openPhonesSheet}
          hasMultiplePhones={hasMultiplePhones}
        />

        <div className="dark:border-b">
          <DetailsItem
            noAction
            noBorder
            noHighlight
            className="py-4"
            title={`Criado: ${format(new Date(createdAt), 'dd/MM/yyyy')}`}
            Icon={<CalendarPlusIcon size={16} />}
          />
        </div>

        {updatedAt && (
          <div className="dark:border-b">
            <DetailsItem
              noAction
              noBorder
              noHighlight
              className="py-4"
              title={`Atualizado: ${format(new Date(updatedAt), 'dd/MM/yyyy')}`}
              Icon={<CalendarSyncIcon size={16} />}
            />
          </div>
        )}
      </ul>
    </section>
  )
}
