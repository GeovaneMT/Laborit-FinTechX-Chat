'use server'

import { cacheTags } from '@infra/cache-tags'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function refreshDashboardAction() {
  revalidateTag(cacheTags.dashboard, 'max')
  revalidatePath('/dashboard')
}
