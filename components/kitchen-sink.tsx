import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorPalette } from "@/components/color-palette"
import { TypographyShowcase } from "@/components/typography-showcase"
import { FormElementsShowcase } from "@/components/form-elements-showcase"
import { LineHeightShowcase } from "@/components/line-height-showcase"
import { LetterSpacingShowcase } from "@/components/letter-spacing-showcase"
import { TypographyLegibilityDocs } from "@/components/typography-legibility-docs"

export function KitchenSink() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Kitchen Sink</h1>
        <p className="text-muted-foreground">
          A showcase of all UI components and design elements available in this application.
        </p>
      </div>

      <Tabs defaultValue="typography" className="mt-8">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="line-height">Line Height</TabsTrigger>
          <TabsTrigger value="letter-spacing">Letter Spacing</TabsTrigger>
          <TabsTrigger value="legibility">Legibility</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>
        <TabsContent value="typography" className="mt-6 space-y-8">
          <TypographyShowcase />
        </TabsContent>
        <TabsContent value="line-height" className="mt-6 space-y-8">
          <LineHeightShowcase />
        </TabsContent>
        <TabsContent value="letter-spacing" className="mt-6 space-y-8">
          <LetterSpacingShowcase />
        </TabsContent>
        <TabsContent value="legibility" className="mt-6 space-y-8">
          <TypographyLegibilityDocs />
        </TabsContent>
        <TabsContent value="colors" className="mt-6 space-y-8">
          <ColorPalette />
        </TabsContent>
        <TabsContent value="components" className="mt-6 space-y-8">
          <ComponentsShowcase />
        </TabsContent>
        <TabsContent value="forms" className="mt-6 space-y-8">
          <FormElementsShowcase />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ComponentsShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <span>+</span>
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Click the button below</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This card has interactive elements.</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter text..." />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Cancel</Button>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
