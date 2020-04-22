import React from 'react';
import { SiteSectionContainer } from './siteSection.styles';

export interface SiteSectionI {
  className?: string;
  id?: string;
}

export const SiteSection: React.FC<SiteSectionI> = ({ children, className, id }) => {
  return <SiteSectionContainer className={className} id={id}>{children}</SiteSectionContainer>;
};
