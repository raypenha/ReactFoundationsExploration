export function Section({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
