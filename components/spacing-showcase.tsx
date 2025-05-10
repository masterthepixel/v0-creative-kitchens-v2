export function SpacingShowcase() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Margin & Padding Scale</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Padding (p-*)</h3>
            <div className="flex flex-wrap gap-4">
              {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12].map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <div
                    className={`p-${size} bg-primary text-primary-foreground rounded-md flex items-center justify-center`}
                  >
                    <div className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">p-{size}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Margin (m-*)</h3>
            <div className="flex flex-wrap gap-4 bg-muted p-4 rounded-md">
              {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12].map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <div
                    className={`m-${size} bg-primary text-primary-foreground rounded-md flex items-center justify-center`}
                  >
                    <div className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">m-{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Gap Spacing</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Horizontal Gap (gap-x-*)</h3>
            {[0, 1, 2, 4, 6, 8].map((size) => (
              <div key={size} className="mb-4">
                <div className={`flex gap-x-${size} bg-muted p-2 rounded-md overflow-auto`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 flex-shrink-0 bg-primary rounded-md" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">gap-x-{size}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Vertical Gap (gap-y-*)</h3>
            <div className="grid grid-cols-6 gap-4">
              {[0, 1, 2, 4, 6, 8].map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <div className={`flex flex-col gap-y-${size} bg-muted p-2 rounded-md`}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-primary rounded-md" />
                    ))}
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">gap-y-{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Space Between (space-*)</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Horizontal Space (space-x-*)</h3>
            {[0, 1, 2, 4, 6, 8].map((size) => (
              <div key={size} className="mb-4">
                <div className={`flex space-x-${size} bg-muted p-2 rounded-md overflow-auto`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 flex-shrink-0 bg-primary rounded-md" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">space-x-{size}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Vertical Space (space-y-*)</h3>
            <div className="grid grid-cols-6 gap-4">
              {[0, 1, 2, 4, 6, 8].map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <div className={`flex flex-col space-y-${size} bg-muted p-2 rounded-md`}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-primary rounded-md" />
                    ))}
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">space-y-{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
