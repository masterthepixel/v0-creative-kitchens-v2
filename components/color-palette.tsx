export function ColorPalette() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Primary Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Primary" className="bg-primary text-primary-foreground" />
          <ColorSwatch name="Primary Foreground" className="bg-primary-foreground text-primary border" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Secondary Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Secondary" className="bg-secondary text-secondary-foreground" />
          <ColorSwatch name="Secondary Foreground" className="bg-secondary-foreground text-secondary" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Accent Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Accent" className="bg-accent text-accent-foreground" />
          <ColorSwatch name="Accent Foreground" className="bg-accent-foreground text-accent" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Destructive Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Destructive" className="bg-destructive text-destructive-foreground" />
          <ColorSwatch name="Destructive Foreground" className="bg-destructive-foreground text-destructive" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Background & Foreground</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Background" className="bg-background text-foreground border" />
          <ColorSwatch name="Foreground" className="bg-foreground text-background" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Muted Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Muted" className="bg-muted text-muted-foreground" />
          <ColorSwatch name="Muted Foreground" className="bg-muted-foreground text-muted" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Card Colors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Card" className="bg-card text-card-foreground border" />
          <ColorSwatch name="Card Foreground" className="bg-card-foreground text-card" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Border & Input</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch name="Border" className="bg-border text-foreground" />
          <ColorSwatch name="Input" className="bg-input text-foreground" />
          <ColorSwatch name="Ring" className="bg-ring text-foreground" />
        </div>
      </section>
    </div>
  )
}

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-24 rounded-md p-4 flex items-end ${className}`}>
        <span className="font-medium">{name}</span>
      </div>
      <div className="text-sm text-muted-foreground">{name}</div>
    </div>
  )
}
