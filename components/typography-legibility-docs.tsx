export function TypographyLegibilityDocs() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Typography Legibility Guidelines</h2>
        <p className="text-muted-foreground max-w-prose">
          These guidelines help ensure your text is readable and accessible to all users, including those with visual
          impairments or reading difficulties.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Font Size</h3>
              <div className="border border-border p-4 rounded-md space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Recommendation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Body text: Minimum 16px (1rem)</li>
                    <li>Small text: Minimum 14px (0.875rem)</li>
                    <li>Mobile: Avoid text smaller than 14px</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-base">This is 16px text (recommended)</p>
                      <p className="text-xs text-muted-foreground">text-base (16px)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs">This is 12px text (too small)</p>
                      <p className="text-xs text-muted-foreground">text-xs (12px)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Line Length</h3>
              <div className="border border-border p-4 rounded-md space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Recommendation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Optimal: 45-75 characters per line</li>
                    <li>Maximum: 80-90 characters</li>
                    <li>Use max-width to control line length</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="max-w-prose">
                        This paragraph is limited to around 65-70 characters per line, which is within the optimal range
                        for readability. It's easier for readers to track from the end of one line to the beginning of
                        the next.
                      </p>
                      <p className="text-xs text-muted-foreground">max-w-prose (65ch)</p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        This paragraph has no width limit, which can result in excessively long lines on larger screens.
                        Long lines make it difficult for readers to track from the end of one line to the beginning of
                        the next, reducing reading speed and comprehension. This is especially problematic for users
                        with reading difficulties or cognitive impairments.
                      </p>
                      <p className="text-xs text-muted-foreground">No width limit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Contrast</h3>
              <div className="border border-border p-4 rounded-md space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Recommendation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>WCAG AA: Minimum 4.5:1 for normal text</li>
                    <li>WCAG AA: Minimum 3:1 for large text</li>
                    <li>WCAG AAA: Minimum 7:1 for normal text</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-foreground">This text has good contrast against the background.</p>
                      <p className="text-xs text-muted-foreground">text-foreground (good contrast)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400">This text has poor contrast against the background.</p>
                      <p className="text-xs text-muted-foreground">text-gray-400 (poor contrast)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Font Choice</h3>
              <div className="border border-border p-4 rounded-md space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Recommendation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use sans-serif fonts for digital interfaces</li>
                    <li>Choose fonts with distinct letterforms</li>
                    <li>Avoid decorative fonts for body text</li>
                    <li>Limit the number of fonts used</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="font-sans">This text uses Inter, a highly legible sans-serif font.</p>
                      <p className="text-xs text-muted-foreground">font-sans (Inter)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-serif">This text uses a serif font, which can be less legible on screens.</p>
                      <p className="text-xs text-muted-foreground">font-serif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Additional Legibility Considerations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Text Alignment</h3>
            <div className="border border-border p-4 rounded-md space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Recommendation</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use left-aligned text for most content</li>
                  <li>Avoid justified text on the web</li>
                  <li>Use center alignment sparingly</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Example</h4>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-left">
                      This text is left-aligned, which is the most readable option for most languages that read
                      left-to-right. It provides a consistent starting point for each line.
                    </p>
                    <p className="text-xs text-muted-foreground">text-left (recommended)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-justify">
                      This text is justified, which creates even spacing on both sides but can create uneven spacing
                      between words, making it harder to read. Justified text should generally be avoided on the web.
                    </p>
                    <p className="text-xs text-muted-foreground">text-justify (avoid)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Text Spacing</h3>
            <div className="border border-border p-4 rounded-md space-y-4">
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Recommendation</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use adequate paragraph spacing</li>
                  <li>Add margin between text elements</li>
                  <li>Use white space strategically</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Example</h4>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <p>
                      This paragraph has adequate spacing below it, which helps visually separate it from the next
                      paragraph. This improves readability by making it clear where one paragraph ends and another
                      begins.
                    </p>
                    <p>
                      This second paragraph is easier to distinguish because of the spacing above it. Proper paragraph
                      spacing improves the visual hierarchy and makes content more scannable.
                    </p>
                    <p className="text-xs text-muted-foreground">space-y-4 (good spacing)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="mb-0">
                      These paragraphs have insufficient spacing between them, which makes them run together visually.
                    </p>
                    <p>
                      It's harder to distinguish where one paragraph ends and the next begins, which reduces readability
                      and makes the content feel dense and overwhelming.
                    </p>
                    <p className="text-xs text-muted-foreground">space-y-1 (insufficient spacing)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
