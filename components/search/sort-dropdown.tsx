export default function SortDropdown() {
  return (
    <select className="h-11 rounded-xl border px-4">
      <option>Featured</option>
      <option>Newest</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  );
}