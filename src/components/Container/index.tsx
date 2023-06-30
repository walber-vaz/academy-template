interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <section
      className={`
        container mx-auto flex h-full w-[1200px] items-center
      `}
    >
      {children}
    </section>
  );
}
