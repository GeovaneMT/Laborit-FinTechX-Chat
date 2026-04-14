'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader } from '@shadcn/card'
import { Tabs, TabsList, TabsTrigger } from '@shadcn/tabs'
import { ArrowLeft, ArrowRight, CircleIcon } from 'lucide-react'

import { useOnboardingScreen } from '@features/onboarding/view-models/use-onboard-screen'
import { OnboardingTab1 } from '@features/onboarding/components/onboarding-tab-1'
import { OnboardingTab2 } from '@features/onboarding/components/onboarding-tab-2'
import { OnboardingTab3 } from '@features/onboarding/components/onboarding-tab-3'
import type { OnboardingMessages } from '@features/onboarding/i18n'

import { Separator } from '@ui/separator'
import { Button } from '@shadcn/button'

import { paths } from '@/core/utils/paths'

type OnboardingScreenProps = {
  messages: OnboardingMessages
}

export function OnboardingScreen({ messages }: OnboardingScreenProps) {
  const {
    tab,
    setTab,
    isStep,
    theme,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useOnboardingScreen()

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="place-items-end">
          <Button variant="link">
            <Link href={paths.chat}>{messages['onboarding.nextButton']}</Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="place-content-center space-y-6 place-self-center bg-contain bg-center bg-no-repeat p-8">
            <Image
              src="/images/mascot.svg"
              alt="Logo"
              width={455}
              height={455}
              className="mx-auto object-contain sm:h-80"
            />

            <Tabs
              value={tab}
              onValueChange={(nextTab) => {
                if (isStep(nextTab)) setTab(nextTab)
              }}
            >
              <TabsList className="mx-auto bg-transparent">
                <TabsTrigger
                  value="1"
                  className="border-0 bg-transparent! shadow-none ring-0"
                >
                  {tab === '1' ? (
                    <CircleIcon fill={theme === 'dark' ? 'white' : 'black'} />
                  ) : (
                    <CircleIcon className="scale-50" />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="2"
                  className="border-0 bg-transparent! shadow-none ring-0"
                >
                  {tab === '2' ? (
                    <CircleIcon fill={theme === 'dark' ? 'white' : 'black'} />
                  ) : (
                    <CircleIcon className="scale-50" />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="3"
                  className="border-0 bg-transparent! shadow-none ring-0"
                >
                  {tab === '3' ? (
                    <CircleIcon fill={theme === 'dark' ? 'white' : 'black'} />
                  ) : (
                    <CircleIcon className="scale-50" />
                  )}
                </TabsTrigger>
              </TabsList>

              <OnboardingTab1 messages={messages} />
              <OnboardingTab2 messages={messages} />
              <OnboardingTab3 messages={messages} />
            </Tabs>

            <div className="bg-muted text-muted-foreground mx-auto flex w-max items-center justify-between space-x-8 rounded-lg p-4">
              <Button
                variant="link"
                onClick={prevStep}
                disabled={isFirstStep}
                className="flex items-center gap-2"
              >
                <ArrowLeft />
              </Button>

              <Separator orientation="vertical" />

              <Button
                variant="link"
                onClick={nextStep}
                className="flex items-center gap-2"
              >
                {isLastStep ? <ArrowRight /> : <ArrowRight />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
