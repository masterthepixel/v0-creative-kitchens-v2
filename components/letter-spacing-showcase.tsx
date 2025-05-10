export function LetterSpacingShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Letter Spacing Comparison</h2>
        <p className="text-muted-foreground">
          Letter spacing (tracking) affects both readability and aesthetics. Compare different letter spacing values.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Tighter", value: "tracking-tighter", spacing: "-0.05em" },
            { name: "Tight", value: "tracking-tight", spacing: "-0.025em" },
            { name: "Normal", value: "tracking-normal", spacing: "0em" },
            { name: "Wide", value: "tracking-wide", spacing: "0.025em" },
            { name: "Wider", value: "tracking-wider", spacing: "0.05em" },
            { name: "Widest", value: "tracking-widest", spacing: "0.1em" },
          ].map((tracking) => (
            <div key={tracking.value} className="space-y-2">
              <h3 className="text-lg font-semibold">
                {tracking.name} ({tracking.spacing})
              </h3>
              <div className={`${tracking.value} text-xl border border-border p-4 rounded-md`}>
                <p>
                  Letter spacing affects how characters are spaced horizontally. The right letter spacing improves
                  readability and aesthetics.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{tracking.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Letter Spacing for Different Use Cases</h2>
        <p className="text-muted-foreground">
          Different text styles and purposes benefit from different letter spacing values.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Headings</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight border border-border p-4 rounded-md">
                  Tight letter spacing for headlines
                </h2>
                <p className="text-xs text-muted-foreground">text-3xl tracking-tight (-0.025em)</p>
                <p className="text-sm text-muted-foreground">
                  Large headings often benefit from slightly tighter letter spacing, which creates a more cohesive and
                  impactful visual appearance.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-normal border border-border p-4 rounded-md">
                  Normal letter spacing for headlines
                </h2>
                <p className="text-xs text-muted-foreground">text-3xl tracking-normal (0em)</p>
                <p className="text-sm text-muted-foreground">
                  Normal letter spacing works well for most headings, providing a balanced appearance without feeling
                  too cramped or too spread out.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Body Text</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="tracking-normal border border-border p-4 rounded-md">
                  Body text typically uses normal letter spacing for optimal readability. This allows characters to be
                  clearly distinguished while maintaining a natural flow for reading longer passages of text.
                </p>
                <p className="text-xs text-muted-foreground">tracking-normal (0em)</p>
              </div>
              <div className="space-y-2">
                <p className="tracking-wide border border-border p-4 rounded-md">
                  Slightly wider letter spacing can improve readability for some fonts or for users with reading
                  difficulties. It provides more visual separation between characters.
                </p>
                <p className="text-xs text-muted-foreground">tracking-wide (0.025em)</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">All Caps & Small Caps</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="uppercase tracking-normal border border-border p-4 rounded-md">
                  All caps text with normal spacing can feel cramped and harder to read.
                </p>
                <p className="text-xs text-muted-foreground">uppercase tracking-normal (0em)</p>
              </div>
              <div className="space-y-2">
                <p className="uppercase tracking-wider border border-border p-4 rounded-md">
                  All caps text benefits from wider letter spacing for improved readability.
                </p>
                <p className="text-xs text-muted-foreground">uppercase tracking-wider (0.05em)</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Small Text</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs tracking-normal border border-border p-4 rounded-md">
                  Small text with normal letter spacing. Very small text may benefit from slightly increased letter
                  spacing to maintain readability, especially at sizes below 14px.
                </p>
                <p className="text-xs text-muted-foreground">text-xs tracking-normal (0em)</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-wide border border-border p-4 rounded-md">
                  Small text with wider letter spacing. The increased spacing helps maintain legibility at small sizes
                  by preventing characters from visually blending together.
                </p>
                <p className="text-xs text-muted-foreground">text-xs tracking-wide (0.025em)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
