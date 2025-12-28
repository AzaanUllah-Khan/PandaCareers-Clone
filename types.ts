import React from 'react';

export type Page = 'home' | 'about' | 'why' | 'jobs' | 'locations' | 'news';

export interface NavItem {
  label: string;
  href: string;
  page?: Page;
}