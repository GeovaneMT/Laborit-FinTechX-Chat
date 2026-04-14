'use client'

import type { ReactNode } from 'react'
import { Component, type ErrorInfo } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@shadcn/alert'

type Props = {
  children: ReactNode
  fallbackTitle?: string
}

type State = { error: Error | null }

export class WidgetBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('widget-boundary', error, info.componentStack)
  }

  override render() {
    if (this.state.error) {
      return (
        <Alert variant="destructive">
          <AlertTitle>
            {this.props.fallbackTitle ?? 'Something went wrong'}
          </AlertTitle>
          <AlertDescription>{this.state.error.message}</AlertDescription>
        </Alert>
      )
    }
    return this.props.children
  }
}
