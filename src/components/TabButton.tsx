export function TabButton({
  children,
  onSelect,
  isSelected,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
