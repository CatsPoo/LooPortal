module.exports = function () {
    return {
        bases: [
            {
                index: 0,
                name: 'בסיס א',
                number: '111',
                routers:
                    [
                        {
                            index:0,
                            name: 'D1',
                            address: '127.0.0.1',
                            serials:
                                [
                                    {
                                        index:0,
                                        name: 'se0',
                                        description: "site C",
                                        isActive: true
                                    },
                                    {
                                        index:1,
                                        name: 'se1',
                                        description: "site D",
                                        isActive: true
                                    },
                                    {
                                        index:2,
                                        name: 'se2',
                                        description: "site A",
                                        isActive: true
                                    },
                                    {
                                        index:3,
                                        name: 'se3',
                                        description: "site B",
                                        isActive: true
                                    },//another serial start here//another serial start here
                                ]
                        },
                        {
                            index:1,
                            name: 'D2',
                            address: '127.0.0.1',
                            serials:
                                [
                                    {
                                        index:0,
                                        name: 'se0',
                                        description: "site C",
                                        isActive: true
                                    },
                                    {
                                        index:1,
                                        name: 'se1',
                                        description: "site D",
                                        isActive: true
                                    },
                                    {
                                        index:2,
                                        name: 'se2',
                                        description: "site A",
                                        isActive: true
                                    },
                                    {
                                        index:3,
                                        name: 'se3',
                                        description: "site B",
                                        isActive: true
                                    },//another serial start here//another serial start here
                                ]
                        },//another router start here
                    ]
                },
                {
                    index: 1,
                    name: 'בסיס ב',
                    number: '6',
                    routers:
                        [
                            {
                                index:0,
                                name: 'D3',
                                address: '127.0.0.1',
                                serials:
                                    [
                                        {
                                            index:0,
                                            name: 'se0',
                                            description: "site A",
                                            isActive: true
                                        },
                                        {
                                            index:1,
                                            name: 'se1',
                                            description: "site B",
                                            isActive: true
                                        },
                                        {
                                            index:2,
                                            name: 'se2',
                                            description: "site A",
                                            isActive: true
                                        },
                                        {
                                            index:3,
                                            name: 'se3',
                                            description: "site B",
                                            isActive: true
                                        },
                                        //another serial start here
                                    ]
                            },
                            {
                                index:1,
                                name: 'D4',
                                address: '127.0.0.1',
                                serials:
                                    [
                                        {
                                            index:0,
                                            name: 'se0',
                                            description: "site C",
                                            isActive: true
                                        },
                                        {
                                            index:1,
                                            name: 'se1',
                                            description: "site D",
                                            isActive: true
                                        },
                                        {
                                            index:2,
                                            name: 'se2',
                                            description: "site A",
                                            isActive: true
                                        },
                                        {
                                            index:3,
                                            name: 'se3',
                                            description: "site B",
                                            isActive: true
                                        },//another serial start here//another serial start here
                                    ]
                            },//another router start here
                        ]
                    }//another base start here
        ], 
    }
}