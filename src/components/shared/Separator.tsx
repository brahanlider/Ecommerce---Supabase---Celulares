type Props = {
  className?: string;
};

export const Separator = ({ className }: Props) => {
  // bg-slate-200
  return <div className={`bg-orange-600 h-px my-5 ${className}`} />;
};
