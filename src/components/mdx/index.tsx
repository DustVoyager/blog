import { Callout } from './Callout';
import { Image } from './Image';
import { ExternalLink } from './Link';
import { MDXComponents } from 'mdx/types';
import { ComponentProps } from 'react';
import DownloadButton from '@/components/analytics/DownloadButton';
import CtaButton from '@/components/analytics/CtaButton';
import TrackableLink from '@/components/analytics/TrackableLink';

export const MdxComponents: MDXComponents = {
  a: ExternalLink as React.ComponentType<ComponentProps<'a'>>,
  img: Image as React.ComponentType<ComponentProps<'img'>>,
  blockquote: Callout,
  Callout,
  DownloadButton,
  CtaButton,
  TrackableLink,
};