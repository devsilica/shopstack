

export default function NotificationSettings() {
  return (
    <div className="rounded-[28px] border bg-white p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Notifications
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border"
          />
          <span>Email Notifications</span>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border"
          />
          <span>SMS Notifications</span>
        </div>
      </div>
    </div>
  );
}