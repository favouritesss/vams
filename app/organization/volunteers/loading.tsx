import { Skeleton } from '@/components/ui/skeleton'

export default function VolunteersLoading() {
  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <Skeleton className="h-10 w-48 mb-2" />
        <Skeleton className="h-6 w-64 mb-8" />

        {/* Search skeleton */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        {/* Volunteers list skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
                <Skeleton className="h-8 w-20 rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>

              <div className="flex gap-2">
                <Skeleton className="flex-1 h-10 rounded-lg" />
                <Skeleton className="flex-1 h-10 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
