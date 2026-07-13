import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


interface LuxuryCardProps {
  image: string;
  title: string;
  serifWord?: string; // Optional word to render in Instrument Serif
  description: string;
  to: string;
  className?: string;
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({
  image,
  title,
  serifWord,
  description,
  to,
  className = '',
}) => {
  // Split title if there's a specific serif word to render styled
  const renderTitle = () => {
    if (!serifWord) return title;
    
    const parts = title.split(serifWord);
    return (
      <>
        {parts[0]}
        <em className="font-serif italic text-gold font-normal lowercase">{serifWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <Link
      to={to}
      className={`group block bg-white rounded-[20px] overflow-hidden border border-black/5 hover:border-gold/20 shadow-sm transition-all duration-500 hover:shadow-xl ${className}`}
    >
      {/* Image container */}
      <div className="relative h-[320px] md:h-[400px] overflow-hidden">
        {/* Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between min-h-[220px]">
        <div>
          <h3 className="text-xl font-medium text-navy tracking-tight mb-3 group-hover:text-gold transition-colors duration-300">
            {renderTitle()}
          </h3>
          <p className="text-sm text-muted-text line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Learn More Arrow Link */}
        <div className="flex items-center gap-2 mt-6 text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-gold transition-colors duration-300">
          <span>Explore Details</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </div>
      </div>
    </Link>
  );
};
export default LuxuryCard;
