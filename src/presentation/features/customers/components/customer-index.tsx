'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { User2Icon, RefreshCcwIcon, PlusCircleIcon } from 'lucide-react'

import { Button } from '@ui/button'
import { ErrorCard } from '@ui/error-card'
import { ItemSeparator } from '@shadcn/item'
import { UpdateSearchParamInput } from '@ui/update-search-param-input'

import { useCustomerIndex } from '@features/customers/view-models/index/use-customer-index'

import type { FetchCustomersParams } from '@http/generated/models'
import type { CustomersQueryKey } from '@infra/query-keys'

import {
  CustomerItem,
  CustomerSkeleton,
} from '@features/customers/components/widgets/customer-item'

import {
  Empty,
  EmptyTitle,
  EmptyMedia,
  EmptyHeader,
  EmptyContent,
  EmptyDescription,
} from '@shadcn/empty'

interface CustomerIndexProps extends Omit<FetchCustomersParams, 'query'> {
  queryKey: CustomersQueryKey
}

export const CustomerIndex = ({
  queryKey,
  limit = 1,
  cursor = undefined,
}: CustomerIndexProps) => {
  const {
    refetch,
    customers,
    parentRef,
    isLoading,
    errorMessage,
    rowVirtualizer,
    notFoundErrorStatus,
  } = useCustomerIndex({
    cursor,
    queryKey,
  })

  if (errorMessage && !notFoundErrorStatus && !isLoading) {
    return (
      <>
        <Link href="/clientes/novo-cliente">
          <Button
            asChild
            className="text-secondary dark:text-secondary p-0 capitalize"
            variant="link"
            effect="hoverUnderline"
          >
            novo cliente
          </Button>
        </Link>
        <ErrorCard
          title="Erro ao buscar clientes:"
          message={errorMessage}
          action={() => refetch()}
        />
      </>
    )
  }

  if (!customers.length && !isLoading) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" className="bg-transparent!">
            <User2Icon />
          </EmptyMedia>
          <EmptyTitle>Nenhum cliente encontrado</EmptyTitle>
          <EmptyDescription>
            Não encontramos nenhum cliente cadastrado.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              effect="spinIcon"
              icon={<RefreshCcwIcon />}
              onClick={() => refetch()}
            >
              Recarregar
            </Button>
            <Link href="/clientes/novo-cliente">
              <Button
                size="sm"
                variant="outline"
                className="capitalize"
                effect="hoverUnderline"
              >
                novo cliente
              </Button>
            </Link>
            <UpdateSearchParamInput buttonOnly />
          </div>
        </EmptyContent>
      </Empty>
    )
  }

  const virtualItems = rowVirtualizer.getVirtualItems()

  return (
    <section className="space-y-8">
      <UpdateSearchParamInput />
      <div className="flex w-full justify-end">
        <Link href="/clientes/novo-cliente">
          <Button
            asChild
            variant="secondary"
            effect="shine"
            icon={<PlusCircleIcon />}
          >
            <div className="flex items-center justify-center gap-2">
              Novo cliente
            </div>
          </Button>
        </Link>
      </div>
      <div ref={parentRef}>
        <ul
          className="relative w-full"
          style={{ height: rowVirtualizer.getTotalSize() }}
        >
          {virtualItems.map((virtualRow) => {
            const { index, start } = virtualRow
            const inRange = index < customers.length
            const customer = customers[index]
            const key = inRange ? customer.id : `skeleton-${index}`

            return (
              <li key={key}>
                <div
                  data-index={index}
                  ref={rowVirtualizer.measureElement}
                  className="absolute -top-4 left-0 w-full"
                  style={{ transform: `translateY(${start}px)` }}
                >
                  <AnimatePresence>
                    <motion.div
                      viewport={{ root: parentRef, margin: '-50px' }}
                      initial={{ opacity: 0.1, scale: 0.99 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: 0.03,
                      }}
                    >
                      {inRange ? (
                        <>
                          <CustomerItem
                            refetch={refetch}
                            queryKey={queryKey}
                            customer={customer}
                          />
                          {index !== customers.length - 1 && (
                            <ItemSeparator className="mt-4 opacity-25" />
                          )}
                        </>
                      ) : (
                        <>
                          <CustomerSkeleton />
                          {index !== limit - 1 && (
                            <ItemSeparator className="opacity-25" />
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

CustomerIndex.displayName = 'CustomerIndex'
