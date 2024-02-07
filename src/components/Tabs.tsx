export function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
}: {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonsContainer: React.ElementType;
}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
