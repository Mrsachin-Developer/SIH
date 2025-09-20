import { Search } from "lucide-react";

export default function DarkSearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3 top-3/4 -translate-y-1/2 text-gray-300"
        size={20}
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md bg-neutral-700 border border-neutral-700 pl-10 pr-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:border-white-500 focus:ring-1 focus:ring-white-500 focus:outline-none"
      />
    </div>
  );
}
