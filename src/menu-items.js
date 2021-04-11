export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'tickers',
                    title: 'Tickers',
                    type: 'item',
                    url: '/dashboard/tickers',
                    icon: 'feather icon-pie-chart',
                },
                {
                    id: 'balances',
                    title: 'Balances',
                    type: 'item',
                    url: '/dashboard/balances',
                    icon: 'feather icon-box',
                },
                {
                    id: 'transactions',
                    title: 'Transactions',
                    type: 'item',
                    url: '/dashboard/transactions',
                    icon: 'feather icon-box',
                },
                {
                    id: 'transfers',
                    title: 'Transfers',
                    type: 'item',
                    url: '/dashboard/transfers',
                    icon: 'feather icon-box',
                },
            ]
        },
    ]
}