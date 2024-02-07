export function TabButton({
  children,
  isSelected,
  ...props
}: {
  children: React.ReactNode;
  isSelected: boolean;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
