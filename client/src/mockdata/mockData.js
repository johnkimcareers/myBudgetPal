export const mockExpenses = [
    {
        id: 1,
        date: new Date('2023-11-01T00:00:00Z').toISOString(),
        type: 'Food',
        amount: 45.00,
        description: 'Dinner at Italian restaurant'
    },
    {
        id: 2,
        date: new Date('2023-11-01T00:00:00Z').toISOString(),
        type: 'Fun',
        amount: 20.00,
        description: 'Movie tickets for two'
    },
    {
        id: 3,
        date: new Date('2023-11-02T00:00:00Z').toISOString(),
        type: 'Food',
        amount: 15.50,
        description: 'Lunch at the local deli'
    },
    {
        id: 4,
        date: new Date('2023-11-02T00:00:00Z').toISOString(),
        type: 'Fun',
        amount: 100.00,
        description: 'Amusement park tickets'
    },
    {
        id: 5,
        date: new Date('2023-11-03T00:00:00Z').toISOString(),
        type: 'Food',
        amount: 8.75,
        description: 'Breakfast at the cafe'
    },
    {
        id: 6,
        date: new Date('2023-11-03T00:00:00Z').toISOString(),
        type: 'Fun',
        amount: 50.00,
        description: 'Concert tickets'
    }
]


export const totals = [
    {
        name: 'Food',
        value: 80,
        totalBudget: 100,
        fill: '#8884d8',
    },
    {
        name: 'Fun',
        value: 50,
        totalBudget: 120,
        fill: '#82ca9d',
    },
]
