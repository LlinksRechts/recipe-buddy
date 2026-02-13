import { useState } from "react"
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog"

import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input, InputProps } from "~/components/ui/input"

interface IngredientVariableAmountDialogProps extends InputProps {}

export function IngredientVariableAmountDialog({
  children,
  ...props
}: IngredientVariableAmountDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Add Variable Amount</DialogHeader>
        <DialogBody>
          <Input autoComplete="off" {...props} />
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
