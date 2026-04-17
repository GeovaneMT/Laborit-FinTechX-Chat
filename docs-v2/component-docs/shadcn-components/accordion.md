# Accordion Component

Collapsible content panels for organizing information. Built on
[Radix UI Accordion](https://www.radix-ui.com/docs/primitives/components/accordion).

## Import

```typescript
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@shadcn/accordion'
```

## Basic Usage

```typescript
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@shadcn/accordion'

export function BasicAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles you can customize.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## Multiple Open Items

Allow multiple accordion items to be open simultaneously.

```typescript
export function MultipleOpenAccordion() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="features">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside space-y-1">
            <li>Fully customizable</li>
            <li>Accessible</li>
            <li>Animated</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
          <p>Our pricing is competitive and flexible.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="support">
        <AccordionTrigger>Support</AccordionTrigger>
        <AccordionContent>
          <p>24/7 customer support available.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## FAQ Section

```typescript
export function FAQAccordion() {
  const faqs = [
    {
      value: 'q1',
      question: 'What is your return policy?',
      answer: 'We offer 30-day money-back guarantees on all purchases.',
    },
    {
      value: 'q2',
      question: 'Do you offer technical support?',
      answer: 'Yes, our support team is available 24/7 via email and chat.',
    },
    {
      value: 'q3',
      question: 'Can I upgrade my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time.',
    },
    {
      value: 'q4',
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all new users.',
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqs.map(({ value, question, answer }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
```

## Nested Accordion

```typescript
export function NestedAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      <AccordionItem value="getting-started">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="pl-4 space-y-2">
            <p>Follow these steps to get started:</p>
            <Accordion type="single" collapsible className="pl-4 border-l">
              <AccordionItem value="step1">
                <AccordionTrigger>Step 1: Install</AccordionTrigger>
                <AccordionContent>
                  Run npm install to setup the project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger>Step 2: Configure</AccordionTrigger>
                <AccordionContent>
                  Update the configuration file with your settings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger>Step 3: Deploy</AccordionTrigger>
                <AccordionContent>
                  Deploy your application to production.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="advanced">
        <AccordionTrigger>Advanced Topics</AccordionTrigger>
        <AccordionContent>
          <p>Learn more about advanced configurations...</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## Rich Content Accordion

```typescript
import { Card, CardDescription, CardContent } from '@shadcn/card'
import { Badge } from '@shadcn/badge'
import { Button } from '@shadcn/button'

export function RichContentAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      <AccordionItem value="plan1">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex flex-1 items-center justify-between gap-2">
            <span>Starter Plan</span>
            <Badge>Popular</Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-semibold">$29/month</h3>
                <CardDescription>Perfect for individuals</CardDescription>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Up to 10 projects</li>
                <li>✓ Basic analytics</li>
                <li>✓ Community support</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="plan2">
        <AccordionTrigger>Professional Plan</AccordionTrigger>
        <AccordionContent>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-semibold">$99/month</h3>
                <CardDescription>For growing teams</CardDescription>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Unlimited projects</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## Props Interface

### Accordion

```typescript
interface AccordionProps extends React.ComponentProps<
  typeof AccordionPrimitive.Root
> {
  type: 'single' | 'multiple'
  collapsible?: boolean
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  disabled?: boolean
  asChild?: boolean
  className?: string
}
```

## Accessibility

- **Keyboard Navigation:** Tab to items, Enter/Space to toggle
- **ARIA Roles:** Proper `role="button"` and `aria-expanded` states
- **Screen Readers:** Announces expanded/collapsed states
- **Focus Management:** Clear focus indicators
- **Semantic HTML:** Uses `<button>` for triggers

### Accessible Example

```typescript
export function AccessibleAccordion() {
  return (
    <Accordion type="single" collapsible role="region" aria-label="FAQ">
      <AccordionItem value="q1">
        <AccordionTrigger aria-label="Question 1: How do I start?">
          How do I get started?
        </AccordionTrigger>
        <AccordionContent id="answer-1" role="region">
          Here's how to get started...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## Styling and Customization

### Custom Colors

```typescript
<AccordionTrigger className="hover:bg-blue-50 data-[state=open]:bg-blue-100">
  Custom Colors
</AccordionTrigger>
```

### Minimal Style

```typescript
<Accordion type="single" collapsible className="border-none space-y-2">
  <AccordionItem value="item1" className="border-0">
    <AccordionTrigger className="hover:no-underline py-2">
      Item
    </AccordionTrigger>
    <AccordionContent className="pt-2">Content</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Accordion type="single" collapsible className="dark:border-slate-700">
  <AccordionItem value="item1" className="dark:border-slate-700">
    <AccordionTrigger className="dark:hover:bg-slate-800">
      Item
    </AccordionTrigger>
    <AccordionContent className="dark:text-slate-300">
      Content
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Advanced Patterns

### Controlled Accordion

```typescript
export function ControlledAccordion() {
  const [open, setOpen] = React.useState('')

  return (
    <div className="space-y-4">
      <Accordion value={open} onValueChange={setOpen} type="single" collapsible>
        <AccordionItem value="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="text-sm text-muted-foreground">
        Open item: {open || 'None'}
      </p>
    </div>
  )
}
```

## Performance Considerations

- **Lazy Content Loading:** Load accordion content only when expanded
- **Memoization:** Wrap accordion items with `React.memo()` for large lists
- **Large Datasets:** Consider virtualization for 100+ items

```typescript
const MemoizedAccordionItem = React.memo(AccordionItem)
```

## Troubleshooting

### Multiple Items Open Not Working

Ensure `type="multiple"`:

```typescript
// ✅ Correct
<Accordion type="multiple">

// ❌ Wrong - only one can open
<Accordion type="single">
```

### Can't Collapse Items

Add `collapsible` prop:

```typescript
// ✅ Can collapse
<Accordion type="single" collapsible>

// ❌ Can't collapse
<Accordion type="single">
```

## Related Components

- [Card](/docs-v2/component-docs/shadcn-components/card.md) — Container
  component
- [Collapsible](/collapsible.md) — Single collapsible panel
- [Button](/docs-v2/component-docs/base-components/button.md) — Action buttons
