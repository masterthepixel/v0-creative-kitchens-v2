export default function Loading() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="h-8 w-1/3 rounded-md bg-muted animate-pulse" />
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-1/4 rounded-md bg-muted animate-pulse" />
              <div className="h-24 rounded-md bg-muted animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
