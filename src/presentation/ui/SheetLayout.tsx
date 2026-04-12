import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@shadcn/sheet'

import { Button } from '@ui/button'
import { ScrollArea } from '@ui/scroll-area'
import { TypographyH2 } from '@ui/typography/hx/h2'

export type OpenedSheetType =
  | 'CLOSED'
  | 'EDIT-NAME'
  | 'EDIT-MODEL'
  | 'EDIT-PHONES'
  | 'EDIT-VEHICLES'
  | 'EDIT-BREAKDOWNS'

interface SheetLayoutFooterProps {
  children: React.ReactNode
}

interface SheetLayoutProps {
  title: string
  description?: string
  shouldOpen: boolean

  footer?: React.ReactNode
  children: React.ReactNode

  closeSheet: () => void
}

export const SheetLayoutFooter = ({ children }: SheetLayoutFooterProps) => (
  <SheetFooter className="mt-4">
    <div className="grid w-full gap-2 sm:grid-cols-2">
      {children}
      <SheetClose asChild>
        <Button variant="outline" className="w-full">
          Fechar
        </Button>
      </SheetClose>
    </div>
  </SheetFooter>
)

export const SheetLayout = ({
  title,
  children,
  closeSheet,
  shouldOpen,
  description,
}: SheetLayoutProps) => (
  <Sheet open={shouldOpen} onOpenChange={(isOpen) => !isOpen && closeSheet()}>
    <SheetContent className="flex flex-col p-0">
      <ScrollArea className="mb-1 h-full p-4">
        <SheetHeader>
          <SheetTitle asChild>
            <TypographyH2>{title}</TypographyH2>
          </SheetTitle>

          {description && (
            <SheetDescription asChild className="sr-only">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>

        <div className="flex-1">{children}</div>
      </ScrollArea>
    </SheetContent>
  </Sheet>
)
