import Image from "next/image";

interface AppCardProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

export function AppCard({ href, src, alt, label }: AppCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <a
        className="relative flex h-32 w-32 sm:h-56 sm:w-56 rounded-2xl bg-zinc-900 overflow-hidden transition-all duration-200 hover:opacity-75 hover:scale-105"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image fill src={src} alt={alt} className="object-cover" />
      </a>
      <p className="text-sm font-medium text-foreground">{label}</p>
    </div>
  );
}