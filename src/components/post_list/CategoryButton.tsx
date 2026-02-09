"use client";

import Link from 'next/link';

import { Button } from '../ui/button';
import { trackClick } from '@/lib/gtm';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

export const CategoryButton = ({ isCurrent, displayName, href, count }: Props) => {
  const handleClick = () => {
    trackClick(`category-button-${displayName.toLowerCase()}`, "category_filter", 0);
  };

  return (
    <li>
      <Button asChild size='sm' variant={isCurrent ? 'default' : 'ghost'}>
        <Link href={href} onClick={handleClick}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
};
