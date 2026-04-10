import { cacheLife, cacheTag } from 'next/cache'
import { CustomerCreate } from '@features/customers/components/customer-create'

const CustomerCreatePage = async () => {
  'use cache'
  cacheLife('max')
  cacheTag('CustomerCreatePage')

  return <CustomerCreate />
}

export default CustomerCreatePage
