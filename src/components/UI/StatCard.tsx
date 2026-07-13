import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  className = '',
}) => {
  return (
    <div className={`p-8 bg-white border border-black/5 rounded-[20px] shadow-sm hover:shadow-md hover:border-gold/15 transition-all duration-300 flex flex-col justify-between min-h-[220px] ${className}`}>
      <div>
        <span className="font-serif text-5xl font-light text-gold tracking-tight block mb-2">
          {value}
        </span>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-navy mb-4">
          {label}
        </h4>
      </div>
      <p className="text-xs text-muted-text leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
export default StatCard;
