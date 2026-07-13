import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  number: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`p-8 bg-white border border-black/5 rounded-[20px] shadow-sm hover:shadow-md hover:border-gold/15 transition-all duration-300 flex flex-col justify-between min-h-[260px] ${className}`}>
      <div className="flex items-start justify-between">
        {Icon ? (
          <div className="p-3 bg-warm-beige rounded-xl text-gold">
            <Icon size={24} />
          </div>
        ) : (
          <span className="font-serif text-3xl italic text-gold/30 font-light">
            {number}
          </span>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-navy tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-sm text-muted-text leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
export default FeatureCard;
