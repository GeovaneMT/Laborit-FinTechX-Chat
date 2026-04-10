import { DetailsItemSkeleton } from '@ui/details-item'

import { Skeleton } from '@shadcn/skeleton'

export const LoadingCustomerSkeleton = () => (
  <section className="min-h-full space-y-4">
    <header className="relative max-w-[83vw] space-y-6">
      <div className="mt-12 h-42 w-full">
        <Skeleton className="h-full w-full rounded-md" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] sm:left-1/20 sm:translate-x-0">
        <Skeleton className="h-36 w-36 rounded-full" />
      </div>

      <div className="absolute inset-x-0 px-8 pt-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>

        <Skeleton className="mt-2 h-5 w-64" />
      </div>
    </header>

    <ul className="mx-auto mt-32 max-w-[83vw]">
      <li className="flex flex-col gap-4 sm:flex-row">
        <DetailsItemSkeleton />
        <DetailsItemSkeleton />
      </li>

      <li className="mt-4 flex flex-col gap-4 sm:flex-row">
        <DetailsItemSkeleton />
        <DetailsItemSkeleton />
      </li>
    </ul>
  </section>
)
