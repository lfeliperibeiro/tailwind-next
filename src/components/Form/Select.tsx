'use client'
import * as RadixSelect from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function Select() {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <RadixSelect.Value
          placeholder="Select a Country..."
          className="text-black"
        />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
        >
          <RadixSelect.Viewport>
            <RadixSelect.Item
              value={'br'}
              className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <RadixSelect.ItemText className="text-black">
                Brazil
              </RadixSelect.ItemText>
              <RadixSelect.ItemIndicator>
                <Check className="h-4 w-4 text-violet-600" />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
