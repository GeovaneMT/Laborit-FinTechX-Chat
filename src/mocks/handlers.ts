import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/v1/me', () => {
    return HttpResponse.json({
      displayName: 'MSW user',
      email: 'msw@example.com',
      accountSecurity: 80,
      avatarUrl: '/images/user-avatar.svg',
    })
  }),
]
