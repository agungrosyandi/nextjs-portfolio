import { poppinsFontRegular400, roboto } from "@/app/lib/font";

export function SectionWebDevelopment({ children }) {
  return (
    <section className="relative gap-5 flex flex-col justify-center items-center desktopMinWidth:gap-2">
      {children}
    </section>
  );
}

export function DescriptionContainer({ children }) {
  return (
    <div className="flex-1 w-full gap-5 flex flex-col p-5 shadow-lg desktopMinWidth:border-none desktopMinWidth:gap-2">
      {children}
    </div>
  );
}

export function DescriptionTitle({ children }) {
  return (
    <h1
      className={`${poppinsFontRegular400.className} font-bold text-2xl tabletMinWidth:text-3xl desktopMinWidth:hidden`}
    >
      {children}
    </h1>
  );
}

export function DescriptionParagraph({ children }) {
  return (
    <p
      className={`${roboto.className} text-xs tabletMinWidth:text-base desktopMinWidth:hidden`}
    >
      {children}
    </p>
  );
}

export function ContainerLink({ children }) {
  return <div className="flex gap-2 items-center">{children}</div>;
}

export function ContainerLinkHyperlink({ children }) {
  return (
    <p
      className={`${roboto.className} font-bold text-zinc-700 text-xs tabletMinWidth:text-sm desktopMinWidth:text-xs`}
    >
      {children}
    </p>
  );
}
