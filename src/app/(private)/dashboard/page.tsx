export const revalidate = 60 * 60 * 24; // 24 hours

import { Metadata } from 'next';
import { List } from './components/List';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage() {
  return <List />;
}
