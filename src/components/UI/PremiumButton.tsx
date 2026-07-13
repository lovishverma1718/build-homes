import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  showIcon?: boolean;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  to,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  showIcon = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-navy text-white hover:bg-gold rounded-full px-8 py-4 hover:-translate-y-0.5 shadow-sm active:translate-y-0',
    secondary: 'bg-gold text-white hover:bg-navy rounded-full px-8 py-4 hover:-translate-y-0.5 shadow-sm active:translate-y-0',
    outline: 'bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-white rounded-full px-8 py-4 hover:-translate-y-0.5 active:translate-y-0',
    text: 'bg-transparent text-navy hover:text-gold px-0 py-2 border-b border-navy/10 hover:border-gold/50 flex items-center gap-1.5 transition-all tracking-wider',
  };

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <ArrowUpRight size={14} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  const fullClassName = `${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClassName}
    >
      {content}
    </button>
  );
};
export default PremiumButton;
