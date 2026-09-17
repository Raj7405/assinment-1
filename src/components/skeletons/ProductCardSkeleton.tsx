export function ProductCardSkeleton() {
    return (
      <div
        className="flex h-full w-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        aria-hidden
      >
        <div className="shimmer h-40 rounded-lg" />
        <div className="shimmer mt-3 h-4 w-4/5 rounded" />
        <div className="shimmer mt-2 h-4 w-2/5 rounded" />
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="shimmer h-3 w-20 rounded" />
          <div className="shimmer h-5 w-14 rounded" />
        </div>
      </div>
    );
  }
  