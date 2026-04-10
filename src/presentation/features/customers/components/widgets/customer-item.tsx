import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import { simplify } from '@utils/slugfy'

import { Button } from '@ui/button'
import { Skeleton } from '@shadcn/skeleton'
import { Avatar, AvatarFallback } from '@shadcn/avatar'
import { DeleteCustomerAlertDialog } from '@features/customers/components/widgets/delete-customer-alert-dialog'

import type { CustomersQueryKey } from '@infra/query-keys'
import type { FetchCustomersResultProps } from '@features/customers/actions'
import type { CustomersDTOOutputCustomersItem } from '@http/generated/models'

import type {
  InfiniteData,
  RefetchOptions,
  QueryObserverResult,
} from '@tanstack/react-query'

import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  ItemActions,
  ItemContent,
  ItemDescription,
} from '@shadcn/item'

interface CustomerItemProps {
  queryKey: CustomersQueryKey
  customer: CustomersDTOOutputCustomersItem

  refetch: (
    options?: RefetchOptions,
  ) => Promise<
    QueryObserverResult<InfiniteData<FetchCustomersResultProps, unknown>, Error>
  >
}

export const CustomerItem = ({
  refetch,
  queryKey,
  customer,
}: CustomerItemProps) => {
  const customerSlug = simplify(`${customer.firstName}_${customer.email}`)
  const destinationUrl = `/clientes/${customerSlug}`

  return (
    <div className="hover:bg-card dark:hover:bg-accent mt-4 flex w-full flex-col gap-6 rounded-md">
      <ItemGroup>
        <Item className="flex-nowrap">
          <div>
            <ItemMedia>
              <Avatar>
                {/* <AvatarImage src={customer.avatar} className="grayscale" /> */}
                <AvatarFallback>
                  {customer.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </ItemMedia>
          </div>
          <ItemContent className="flex min-w-0 flex-1 flex-col gap-1">
            <ItemTitle className="block w-full truncate">
              {customer.firstName} {customer.lastName}
            </ItemTitle>
            <ItemDescription className="truncate">
              {customer.email}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <DeleteCustomerAlertDialog
              refetch={refetch}
              queryKey={queryKey}
              customer={customer}
            />
            <Link href={destinationUrl}>
              <Button
                asChild
                size="icon"
                variant="ghostSmooth"
                className="rounded-full"
              >
                <ArrowRightIcon />
              </Button>
            </Link>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  )
}

CustomerItem.displayName = 'CustomerItem'

export const CustomerSkeleton = () => (
  <div className="border-muted-foreground/5 flex w-full flex-col gap-6 rounded-md border">
    <Item>
      <Avatar asChild>
        <Skeleton />
      </Avatar>
      <ItemContent className="flex h-10 gap-1">
        <div className="relative h-full w-42">
          <Skeleton className="absolute inset-0" />
        </div>
        <div className="relative h-full w-80">
          <Skeleton className="absolute inset-0" />
        </div>
      </ItemContent>
      <Avatar asChild>
        <Skeleton />
      </Avatar>
    </Item>
  </div>
)

CustomerSkeleton.displayName = 'CustomerSkeleton'
