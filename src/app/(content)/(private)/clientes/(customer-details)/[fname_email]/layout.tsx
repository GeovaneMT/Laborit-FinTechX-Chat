import { parseCustomerSlug } from '@core/mappers/customer-slug-route.mapper'
import { customerRefFromSlugParts } from '@core/entities/customer-ref'
import { buildCustomerPageLabels } from '@core/use-cases/build-customer-page-labels'
import { TypographyH2 } from '@ui/typography/hx/h2'

import type { Metadata } from 'next'

import { customerMetadataFromLabels } from '@layouts/detail-route-metadata'

interface customerDetailsLayoutProps {
  params: Promise<{ fname_email: string }>
  children: React.ReactNode
}

export const generateMetadata = async ({
  params,
}: customerDetailsLayoutProps): Promise<Metadata> => {
  const { fname_email } = await params

  const parsed = parseCustomerSlug(fname_email)
  const labels = buildCustomerPageLabels(parsed)

  return customerMetadataFromLabels(labels)
}

const customerDetailsLayout = async ({
  params,
  children,
}: customerDetailsLayoutProps) => {
  const { fname_email } = await params

  const parsed = parseCustomerSlug(fname_email)
  if (!parsed) {
    return (
      <>
        <TypographyH2>Detalhes do cliente</TypographyH2>
        {children}
      </>
    )
  }

  const { displayName } = customerRefFromSlugParts(parsed)

  return (
    <>
      <TypographyH2>Cliente {displayName}</TypographyH2>
      {children}
    </>
  )
}
export default customerDetailsLayout
