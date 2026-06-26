export default function DashboardHeader() {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        Dashboard
      </p>

      <h1 className="mt-3 text-6xl font-semibold">
        Welcome back 👋
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        Manage your orders, wishlist, and account from one place.
      </p>
    </div>
  );
}