import { cn } from '@/utils/cn';

export default function Container({
  children,
  className,
  scroll = false,
}: {
  scroll?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `main-container ${scroll === true ? '!px-0' : 'px-6'}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
