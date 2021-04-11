import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardTickers = React.lazy(() => import('./Demo/Dashboard/Tickers'));
const DashboardBalances = React.lazy(() => import('./Demo/Dashboard/Balances'));
const DashboardTransactions = React.lazy(() => import('./Demo/Dashboard/Transactions')); 
const DashboardTransfers = React.lazy(() => import('./Demo/Dashboard/Transfers')); 

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/tickers', exact: true, name: 'Tickers', component: DashboardTickers },
    { path: '/dashboard/balances', exact: true, name: 'Balances', component: DashboardBalances },
    { path: '/dashboard/transactions', exact: true, name: 'Transactions', component: DashboardTransactions },
    { path: '/dashboard/transfers', exact: true, name: 'Transfers', component: DashboardTransfers },
];

export default routes;