import { Skeleton } from "@/components/ui/skeleton"

export default function EventsLoading() {
  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        {/* Header Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 w-64 mb-2" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Search and Filter Skeleton */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <Skeleton className="h-12 w-full mb-6" />
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>

        {/* Events Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/5 mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
