import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

export const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border-b border-black/5 pb-4 transition-all duration-300"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between py-4 text-left font-medium text-navy hover:text-gold tracking-tight transition-colors duration-200 cursor-pointer focus-visible:outline-2"
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <span className="ml-4 flex-shrink-0 text-stone-gray group-hover:text-gold">
                {isExpanded ? (
                  <Minus size={18} className="text-gold" />
                ) : (
                  <Plus size={18} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 pb-4 text-sm md:text-base text-muted-text leading-relaxed font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
export default CustomAccordion;
