"use client";

import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';
import { trackClick } from '@/lib/gtm';

export const ExternalLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  const handleClick = () => {
    const url = href.toString();
    const linkText = typeof children === 'string' ? children : url;
    trackClick(url, 'external_link');
  };

  return (
    <a
      {...props}
      target='_blank'
      href={href.toString() || ''}
      onClick={handleClick}
      className='break-words text-blue-600 no-underline underline-offset-4 hover:underline'
    >
      {children}
    </a>
  );
};
