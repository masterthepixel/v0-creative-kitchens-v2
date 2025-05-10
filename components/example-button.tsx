"use client"

import { Button } from "@/components/ui/button"
import { event } from "@/lib/analytics"

export function ExampleButton() {
  const handleClick = () => {
    // Track this button click in Google Analytics
    event({
      action: "button_click",
      category: "engagement",
      label: "example_button",
    })

    // Your other button logic here
    console.log("Button clicked!")
  }

  return <Button onClick={handleClick}>Click Me</Button>
}
