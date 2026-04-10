import { cva } from 'class-variance-authority'

export const dataGridVariants = cva('w-full border-collapse text-sm', {
  variants: {
    density: {
      compact: 'text-xs',
      comfortable: 'text-sm',
    },
  },
  defaultVariants: {
    density: 'comfortable',
  },
})
