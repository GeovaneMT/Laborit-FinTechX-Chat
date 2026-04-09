import { Trash2Icon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

import { Input } from '@shadcn/input'
import { Button } from '@ui/button'
import { useUpdateSearchParamFilter } from '@pattern/url-params/use-update-search-param-filter'

export const UpdateSearchParamInput = ({
  buttonOnly,
}: {
  buttonOnly?: boolean
}) => {
  const {
    query,
    inputValue,
    clearQuery,
    setInputValue,
    isUpdatingSearchParam,
  } = useUpdateSearchParamFilter()

  const hasQuery = query !== ''

  if (buttonOnly) {
    return (
      <AnimatePresence>
        {hasQuery && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              size="sm"
              effect="ringHover"
              onClick={clearQuery}
              disabled={isUpdatingSearchParam}
            >
              <div className="flex items-center justify-center gap-2">
                <Trash2Icon />
                Limpar filtros
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  const input = (
    <Input
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      disabled={isUpdatingSearchParam}
    />
  )

  return (
    <motion.div layout className="flex space-x-4">
      {input}

      <AnimatePresence>
        {hasQuery && (
          <motion.div
            layout
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              size="sm"
              onClick={clearQuery}
              disabled={isUpdatingSearchParam}
            >
              <div className="flex items-center justify-center gap-2">
                <Trash2Icon />
                Limpar
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
