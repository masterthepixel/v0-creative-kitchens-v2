export function LineHeightShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Line Height Comparison</h2>
        <p className="text-muted-foreground">
          Line height (leading) significantly impacts readability. Compare different line heights with the same text.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "None", value: "leading-none", lineHeight: "1" },
            { name: "Tight", value: "leading-tight", lineHeight: "1.25" },
            { name: "Snug", value: "leading-snug", lineHeight: "1.375" },
            { name: "Normal", value: "leading-normal", lineHeight: "1.5" },
            { name: "Relaxed", value: "leading-relaxed", lineHeight: "1.625" },
            { name: "Loose", value: "leading-loose", lineHeight: "2" },
          ].map((leading) => (
            <div key={leading.value} className="space-y-2">
              <h3 className="text-lg font-semibold">
                {leading.name} ({leading.lineHeight})
              </h3>
              <div className={`${leading.value} border border-border p-4 rounded-md h-64 overflow-y-auto`}>
                <p>
                  Line height affects how text is spaced vertically. Good line height improves readability by giving
                  text room to breathe and helping readers track from one line to the next.
                </p>
                <p>
                  The optimal line height depends on several factors: text size, line length, font choice, and audience.
                  Longer lines generally benefit from increased line height.
                </p>
                <p>
                  For body text, a line height between 1.5 and 1.6 is often recommended. Headings typically use tighter
                  line heights (1.2-1.3) to keep related text visually connected.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{leading.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Line Height for Different Text Sizes</h2>
        <p className="text-muted-foreground">
          Different text sizes often require different line heights for optimal readability.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Small Text (14px)</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm leading-normal border border-border p-4 rounded-md">
                  This small text uses a normal line height (1.5). Small text often benefits from slightly more generous
                  line height to improve readability, especially when used for longer passages.
                </p>
                <p className="text-xs text-muted-foreground">text-sm leading-normal (1.5)</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm leading-relaxed border border-border p-4 rounded-md">
                  This small text uses a relaxed line height (1.625). The additional spacing makes it easier to read,
                  especially for users with visual impairments or reading difficulties.
                </p>
                <p className="text-xs text-muted-foreground">text-sm leading-relaxed (1.625)</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Body Text (16px)</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-base leading-normal border border-border p-4 rounded-md">
                  This body text uses a normal line height (1.5), which is generally considered optimal for body text.
                  It provides enough space between lines without making the text feel disconnected.
                </p>
                <p className="text-xs text-muted-foreground">text-base leading-normal (1.5)</p>
              </div>
              <div className="space-y-2">
                <p className="text-base leading-tight border border-border p-4 rounded-md">
                  This body text uses a tight line height (1.25). While this saves vertical space, it can make longer
                  text harder to read as the lines feel cramped and it's easier to lose your place.
                </p>
                <p className="text-xs text-muted-foreground">text-base leading-tight (1.25)</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Large Text (24px)</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-2xl leading-tight border border-border p-4 rounded-md">
                  This large text uses a tight line height (1.25). Larger text often works well with tighter line
                  heights, as the increased font size already provides visual separation between lines.
                </p>
                <p className="text-xs text-muted-foreground">text-2xl leading-tight (1.25)</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl leading-normal border border-border p-4 rounded-md">
                  This large text uses a normal line height (1.5). While this provides plenty of space, it might feel
                  too spread out for headings or display text, making related lines feel disconnected.
                </p>
                <p className="text-xs text-muted-foreground">text-2xl leading-normal (1.5)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
