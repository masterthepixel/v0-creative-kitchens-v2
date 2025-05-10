import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function FormElementsShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Text Inputs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="default-input">Default Input</Label>
            <Input id="default-input" placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled Input</Label>
            <Input id="disabled-input" placeholder="Disabled input" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="with-icon">Input with Icon</Label>
            <div className="relative">
              <Input id="with-icon" placeholder="Search..." className="pl-8" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="with-button">Input with Button</Label>
            <div className="flex space-x-2">
              <Input id="with-button" placeholder="Enter email..." />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Textarea</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="default-textarea">Default Textarea</Label>
            <Textarea id="default-textarea" placeholder="Enter long text..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
            <Textarea id="disabled-textarea" placeholder="Disabled textarea" disabled />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Select</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="default-select">Default Select</Label>
            <Select>
              <SelectTrigger id="default-select">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-select">Disabled Select</Label>
            <Select disabled>
              <SelectTrigger id="disabled-select">
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Checkbox</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checkbox" disabled />
            <Label htmlFor="disabled-checkbox" className="text-muted-foreground">
              Disabled checkbox
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checked-disabled" checked disabled />
            <Label htmlFor="checked-disabled" className="text-muted-foreground">
              Checked disabled
            </Label>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Radio Group</h2>
        <RadioGroup defaultValue="option-one">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" disabled />
              <Label htmlFor="option-three" className="text-muted-foreground">
                Option Three (Disabled)
              </Label>
            </div>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Switch</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch" className="text-muted-foreground">
              Disabled switch
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="checked-disabled-switch" checked disabled />
            <Label htmlFor="checked-disabled-switch" className="text-muted-foreground">
              Checked disabled
            </Label>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Form Example</h2>
        <div className="rounded-md border p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
