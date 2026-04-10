'use client'

import { motion, AnimatePresence } from 'motion/react'

import { formatPhone } from '@utils/phone-formater'

import { usePhoneIndex } from '@features/customers/view-models/phone/use-phone-index'

import { Button } from '@ui/button'

import { TypographyP } from '@ui/typography/p'
import { TypographyMuted } from '@ui/typography/basic/muted'

import {
  CircleX,
  HomeIcon,
  BuildingIcon,
  SmartphoneIcon,
  MessageCircleMoreIcon,
} from 'lucide-react'

import { Tooltip, TooltipTrigger, TooltipContent } from '@shadcn/tooltip'

interface phoneListProps {
  noDescription?: boolean
}

export const PhoneList = ({ noDescription }: phoneListProps) => {
  const { storePhones, onRemovePhone, isRemovingPhone } = usePhoneIndex()

  return (
    <div className="border-muted/25 mt-4 flex flex-col rounded-md border p-4">
      <motion.div
        layout="position"
        transition={{
          layout: { type: 'spring', stiffness: 500, damping: 35 },
        }}
        className="mx-auto grid grid-cols-2 flex-wrap gap-4 sm:mx-0 sm:flex"
      >
        <AnimatePresence mode="popLayout">
          {storePhones.map((phone) => (
            <motion.div
              key={phone.tempId}
              layout="position"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="sm:w-max"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    disabled={isRemovingPhone}
                    variant="passiveDestructive"
                    onClick={() => onRemovePhone(phone.tempId)}
                    className="group relative h-max w-full flex-col pr-4 pl-2"
                  >
                    <div className="absolute top-0 right-0 translate-x-[30%] -translate-y-[30%]">
                      <CircleX className="group-hover:fill-destructive dark:fill-chart-1 fill-secondary dark:group-hover:fill-destructive h-6! w-6! transition-all duration-400" />
                    </div>

                    <div className="flex w-full items-center text-xs">
                      {
                        {
                          HOME: <HomeIcon />,
                          WORK: <BuildingIcon />,
                          MOBILE: <SmartphoneIcon />,
                        }[phone.type]
                      }

                      {phone.isWhatsapp && (
                        <MessageCircleMoreIcon className="mr-0.5" />
                      )}

                      <TypographyP className="truncate">
                        {formatPhone({ number: phone.number })}
                      </TypographyP>
                    </div>
                  </Button>
                </TooltipTrigger>

                <TooltipContent>
                  <TypographyP>Remover este telefone</TypographyP>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}

          {storePhones.length === 0 && (
            <motion.div
              key="empty"
              layout="position"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="col-span-full"
            >
              <TypographyMuted>Nenhum telefone adicionado</TypographyMuted>
            </motion.div>
          )}
        </AnimatePresence>

        {storePhones.length === 1 && !noDescription && (
          <TypographyMuted className="col-span-full my-auto">
            {
              'Para adicionar mais telefones, clique em "Adicionar Novo Telefone"'
            }
          </TypographyMuted>
        )}
      </motion.div>
    </div>
  )
}
