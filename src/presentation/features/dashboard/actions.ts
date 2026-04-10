'use server'

import { cacheTags } from '@infra/cache-tags'
import { readDashboardSummaryJson } from '@infra/queries'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function readDashboardSummaryAction() {
  return readDashboardSummaryJson()
}

export async function refreshDashboardAction() {
  revalidateTag(cacheTags.dashboard, 'max')
  revalidatePath('/dashboard')
}
