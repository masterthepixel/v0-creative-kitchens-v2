export function TypographyShowcase() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Typography Scale</h2>
        <p className="text-muted-foreground max-w-prose">
          Our typography system uses Inter, a versatile font with excellent multilingual support, and a modular scale
          for consistent sizing and improved readability across all screen sizes.
        </p>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="text-9xl font-extrabold">Aa</div>
              <p className="text-sm text-muted-foreground">Inter</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">The quick brown fox jumps over the lazy dog. (xs - 12px)</p>
              <p className="text-sm">The quick brown fox jumps over the lazy dog. (sm - 14px)</p>
              <p className="text-base">The quick brown fox jumps over the lazy dog. (base - 16px)</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog. (lg - 18px)</p>
              <p className="text-xl">The quick brown fox jumps over the lazy dog. (xl - 20px)</p>
              <p className="text-2xl">The quick brown fox jumps over the lazy dog. (2xl - 24px)</p>
              <p className="text-3xl">The quick brown fox jumps over the lazy dog. (3xl - 30px)</p>
              <p className="text-4xl">The quick brown fox jumps over the lazy dog. (4xl - 36px)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Multilingual Support</h2>
        <p className="text-muted-foreground max-w-prose">
          Inter provides excellent support for multiple languages, making it perfect for our bilingual site.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2 border p-4 rounded-md">
            <h3 className="text-xl font-semibold">English</h3>
            <p>The quick brown fox jumps over the lazy dog.</p>
            <p className="font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="font-semibold">abcdefghijklmnopqrstuvwxyz</p>
            <p className="font-semibold">0123456789</p>
          </div>
          <div className="space-y-2 border p-4 rounded-md">
            <h3 className="text-xl font-semibold">Spanish</h3>
            <p>El rápido zorro marrón salta sobre el perro perezoso.</p>
            <p className="font-semibold">ÁÉÍÓÚÜÑ áéíóúüñ</p>
            <p className="font-semibold">¿¡ ¿Cómo estás? ¡Muy bien!</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Font Weights</h2>
        <p className="text-muted-foreground max-w-prose">
          Inter provides a range of weights, giving us flexibility in our typography.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-thin text-xl">Inter Thin (100)</p>
            <p className="font-extralight text-xl">Inter Extra Light (200)</p>
            <p className="font-light text-xl">Inter Light (300)</p>
          </div>
          <div className="space-y-2">
            <p className="font-normal text-xl">Inter Regular (400)</p>
            <p className="font-medium text-xl">Inter Medium (500)</p>
            <p className="font-semibold text-xl">Inter Semibold (600)</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-xl">Inter Bold (700)</p>
            <p className="font-extrabold text-xl">Inter Extra Bold (800)</p>
            <p className="font-black text-xl">Inter Black (900)</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Headings</h2>
        <p className="text-muted-foreground max-w-prose">
          Headings use a consistent scale with appropriate line heights and letter spacing for improved readability.
        </p>
        <div className="space-y-6">
          <div className="space-y-2 border-b pb-4">
            <h1>Heading 1 - The quick brown fox jumps over the lazy dog.</h1>
            <p className="text-sm text-muted-foreground">
              text-4xl md:text-5xl lg:text-6xl, font-bold, tracking-tight, line-height: tight
            </p>
          </div>
          <div className="space-y-2 border-b pb-4">
            <h2>Heading 2 - The quick brown fox jumps over the lazy dog.</h2>
            <p className="text-sm text-muted-foreground">
              text-3xl md:text-4xl, font-semibold, tracking-tight, line-height: tight
            </p>
          </div>
          <div className="space-y-2 border-b pb-4">
            <h3>Heading 3 - The quick brown fox jumps over the lazy dog.</h3>
            <p className="text-sm text-muted-foreground">
              text-2xl md:text-3xl, font-semibold, tracking-tight, line-height: snug
            </p>
          </div>
          <div className="space-y-2 border-b pb-4">
            <h4>Heading 4 - The quick brown fox jumps over the lazy dog.</h4>
            <p className="text-sm text-muted-foreground">text-xl, font-semibold, tracking-tight, line-height: snug</p>
          </div>
          <div className="space-y-2 border-b pb-4">
            <h5>Heading 5 - The quick brown fox jumps over the lazy dog.</h5>
            <p className="text-sm text-muted-foreground">text-lg, font-semibold, line-height: normal</p>
          </div>
          <div className="space-y-2">
            <h6>Heading 6 - The quick brown fox jumps over the lazy dog.</h6>
            <p className="text-sm text-muted-foreground">text-base, font-semibold, line-height: normal</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Line Height</h2>
        <p className="text-muted-foreground max-w-prose">
          Proper line height (leading) improves readability, especially for longer text blocks. Different text sizes
          require different line heights.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading None (1)</h3>
              <p className="leading-none border border-border p-4 rounded-md">
                This paragraph has a line height of 1 (leading-none). It's very tight and generally not recommended for
                body text, but can be useful for headings or single lines of text where you want to minimize vertical
                space.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading Tight (1.25)</h3>
              <p className="leading-tight border border-border p-4 rounded-md">
                This paragraph has a line height of 1.25 (leading-tight). It's suitable for larger text like headings
                where you want the lines closer together for visual impact.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading Snug (1.375)</h3>
              <p className="leading-snug border border-border p-4 rounded-md">
                This paragraph has a line height of 1.375 (leading-snug). It's a good compromise between tight and
                normal, often used for subheadings or short paragraphs.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading Normal (1.5)</h3>
              <p className="leading-normal border border-border p-4 rounded-md">
                This paragraph has a line height of 1.5 (leading-normal). This is the default for body text and provides
                good readability for most content. It's a good balance between too tight and too loose.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading Relaxed (1.625)</h3>
              <p className="leading-relaxed border border-border p-4 rounded-md">
                This paragraph has a line height of 1.625 (leading-relaxed). It provides more breathing room between
                lines, which can improve readability for longer text blocks, especially on smaller screens.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Leading Loose (2)</h3>
              <p className="leading-loose border border-border p-4 rounded-md">
                This paragraph has a line height of 2 (leading-loose). It provides maximum spacing between lines, which
                can be helpful for content that needs to be easily scannable or for improving readability for users with
                reading difficulties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Letter Spacing</h2>
        <p className="text-muted-foreground max-w-prose">
          Letter spacing (tracking) affects readability and aesthetics. Different text sizes and weights benefit from
          different letter spacing values.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Tighter (-0.05em)</h3>
              <p className="tracking-tighter text-2xl border border-border p-4 rounded-md">
                This text has tighter letter spacing, which can work well for large, bold headings.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Tight (-0.025em)</h3>
              <p className="tracking-tight text-2xl border border-border p-4 rounded-md">
                This text has slightly tighter letter spacing, good for headings.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Normal (0em)</h3>
              <p className="tracking-normal text-lg border border-border p-4 rounded-md">
                This text has normal letter spacing, which works well for most body text.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Wide (0.025em)</h3>
              <p className="tracking-wide text-lg border border-border p-4 rounded-md">
                This text has slightly wider letter spacing, which can improve readability for some fonts.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Wider (0.05em)</h3>
              <p className="tracking-wider text-base border border-border p-4 rounded-md">
                This text has wider letter spacing, which can be good for all-caps text or for creating emphasis.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tracking Widest (0.1em)</h3>
              <p className="tracking-widest text-base uppercase border border-border p-4 rounded-md">
                This text has the widest letter spacing, often used for small caps or all-caps text.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
