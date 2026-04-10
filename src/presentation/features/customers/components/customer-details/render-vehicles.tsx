import Link from 'next/link'
import { CarIcon, ArrowRight, PlusCircleIcon } from 'lucide-react'

import { cn } from '@utils/cn'

import { Button } from '@ui/button'
import { Separator } from '@ui/separator'
import { DetailsItem } from '@ui/details-item'

import { TypographyP } from '@/presentation/ui/typography/p'

import type { CustomerDetailsDTOOutputVehiclesDetailsItem } from '@http/generated'

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@shadcn/accordion'

interface RenderVehiclesProps {
  customerId: string
  customerEmail: string
  hasVehicles: boolean
  hasMultipleVehicles: boolean
  vehiclesDetails: CustomerDetailsDTOOutputVehiclesDetailsItem[]
}

export const RenderVehicles = ({
  customerId,
  hasVehicles,
  customerEmail,
  vehiclesDetails,
  hasMultipleVehicles,
}: RenderVehiclesProps) => {
  const newVehicleUrl = `/veiculos/novo-veiculo?customerEmail=${customerEmail}&customerId=${customerId}`

  if (!hasVehicles) {
    return (
      <DetailsItem
        className="py-2"
        warning
        noBorder
        title="Sem veículos cadastrados"
        Icon={<CarIcon size={16} />}
        ActionIcon={<PlusCircleIcon size={16} />}
        destinationUrl={newVehicleUrl}
      />
    )
  }

  if (!hasMultipleVehicles) {
    const vehicle = vehiclesDetails[0]

    return (
      <DetailsItem
        className="py-2"
        noBorder
        title={vehicle.plate}
        Icon={<CarIcon size={16} />}
        ActionIcon={<PlusCircleIcon size={16} />}
        destinationUrl={newVehicleUrl}
      >
        <Link href={`/veiculos/${vehicle.model}_${vehicle.plate}`}>
          <Button
            size="icon"
            variant="ghost"
            effect="ringHover"
            className="text-accent-foreground hover:bg-secondary hover:text-secondary-foreground dark:text-accent-foreground rounded-full"
          >
            <ArrowRight size={16} />
          </Button>
        </Link>
      </DetailsItem>
    )
  }

  return (
    <div>
      <Accordion collapsible type="single" defaultValue="OPEN_VEHICLE">
        <AccordionItem
          value="OPEN_VEHICLE"
          className="overflow-hidden rounded-md border"
        >
          <div className="bg-muted hover:bg-muted/70 border-b pr-4 transition-colors">
            <AccordionTrigger>
              <DetailsItem
                noBg
                noBorder
                noAction
                noPadding
                noHighlight
                title="Veículos"
                Icon={<CarIcon size={16} />}
                className="pl-4"
              />
            </AccordionTrigger>
          </div>

          <AccordionContent className="p-0">
            <>
              <div className="flex w-full justify-end pt-4 pr-4">
                <Button asChild variant="outline" effect="shine">
                  <Link href={newVehicleUrl} style={{ textDecoration: 'none' }}>
                    <div className="flex items-center gap-2">
                      <PlusCircleIcon size={16} />
                      <TypographyP>Adicionar veiculo</TypographyP>
                    </div>
                  </Link>
                </Button>
              </div>

              {vehiclesDetails.map((vehicle, index) => (
                <div
                  key={vehicle.vehicleId}
                  className={cn('space-y-4 px-4 pb-4', index === 0 && 'pt-4')}
                >
                  <DetailsItem
                    title={vehicle.model}
                    description={vehicle.plate}
                    className="hover:bg-accent/70 py-2"
                    destinationUrl={`/veiculos/${vehicle.model}_${vehicle.plate}`}
                  />

                  {index !== vehiclesDetails.length - 1 && <Separator />}
                </div>
              ))}
            </>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
