import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function BrowserMockup({
  src,
  alt,
  className = "",
  priority = false,
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-2xl ring-1 ring-gray-200 shadow-2xl overflow-hidden bg-white ${className}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
        <span className="size-3 rounded-full bg-[#EF4444]" />
        <span className="size-3 rounded-full bg-[#F59E0B]" />
        <span className="size-3 rounded-full bg-[#10B981]" />
        <div className="flex-1 mx-4 h-5 rounded bg-white/80 max-w-xs" />
      </div>
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        className="w-full h-auto"
        priority={priority}
      />
    </div>
  );
}
