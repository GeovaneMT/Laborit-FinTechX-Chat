'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import { cacheTags } from '@infra/cache-tags'

export async function refreshDashboardAction() {
  revalidateTag(cacheTags.dashboard, 'max')
  revalidatePath('/dashboard')
}
