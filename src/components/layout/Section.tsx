import React, { ReactNode } from 'react';

interface SectionProps {
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const Section: React.FC<SectionProps> = ({
  className,
  children,
  title,
  subtitle,
}) => {
  const rootClasses = classNames('container', 'mx-auto', className);

  return (
    <section
      className={`flex min-h-screen w-full flex-col items-center justify-center ${rootClasses}`}
    >
      {title && <h1 className='mb-4 text-4xl font-bold'>{title}</h1>}
      {subtitle && <h3 className='mb-8 text-2xl'>{subtitle}</h3>}
      {children}
    </section>
  );
};

export default Section;
