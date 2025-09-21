import { Search } from "lucide-react";

export default function DarkSearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Search Icon */}
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md bg-neutral-700 border border-neutral-600 pl-10 pr-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
      />
    </div>
  );
}
