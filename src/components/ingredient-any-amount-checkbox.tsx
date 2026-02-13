import { Input, InputProps } from "~/components/ui/input"

interface IngredientAnyAmountCheckboxProps extends InputProps {
    setValue(val: boolean): void
}

export function IngredientAnyAmountCheckbox({
  ...props
}: IngredientAnyAmountCheckboxProps) {
  return (
      <Input type="checkbox" title="Check if any amount is in stock" {...props} onChange={({target}: {target: {checked: boolean}}) => props.setValue(target.checked)} />
  )
}
