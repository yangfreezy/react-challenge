import { lazy } from 'react';

export const RootPage = lazy(() => import('pages/root/RootPage'));
export const DashboardPage = lazy(() => import('pages/dashboard/DashboardPage'));
export const ErrorPage = lazy(() => import('./error/ErrorPage'));
