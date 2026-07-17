export default function Loading() {
  return (
    <div className="mx-auto min-h-[60vh] w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="h-3 w-28 animate-pulse rounded-full bg-[var(--accent)]/20" />
      <div className="mt-5 h-16 max-w-xl animate-pulse rounded-2xl bg-white/6" />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="aspect-[4/5] animate-pulse rounded-[1.75rem] bg-white/5" />
        ))}
      </div>
    </div>
  );
}
