import React, { ReactNode } from 'react';

interface SectionDividerProps {
  className?: string;
  children?: ReactNode;
  subtitle?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  className,
  children,
  subtitle,
}) => {
  return (
    <div className={`container mx-auto ${className}`}>
      <div className='min-h-200px w-full'>
        <div className='bg-gray-900 px-6 py-16 sm:rounded-3xl sm:px-16 md:pt-24'>
          <div className='mx-auto max-w-7xl text-center'>
            {subtitle && (
              <div className='text-lg font-semibold leading-6 text-gray-300'>
                {subtitle}
              </div>
            )}
          </div>
          {children && <div className='mt-8'>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
