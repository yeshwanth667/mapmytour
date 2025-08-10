const tourDetails = [
    {
        id: 1,
        bannerImage: "https://images.unsplash.com/photo-1598275277521-1885382d523a",
        discountInPercentage: "17%",
        title: "Himalayan Trek Adventure",
        description: "Experience the ultimate Himalayan trekking adventure with 14 days of pure bliss and scenic views.",
        duration: "14Days/13Nights",
        actualPrice: "$1200",
        discountedPrice: "$1000",
        overView: {
            Groupsize: "10-15 People",
            difficulty: "Moderate",
            startDate: "2025-10-01",
            endDate: "2025-10-15",
            startLocation: "Kathmandu",
            endlocation: "Pokhara",
            country: "Nepal",
            region: "Annapurna Region"
        },
        itinery: [
            {
                day: 1,
                title: "Kathmandu to Pokhara",
                type: "Travel + Sightseeing",
                details: [
                    "Arrive at Tribhuwan International Airport, Kathmandu.",
                    "Welcome by team and transfer to hotel.",
                    "Trek starts via Ghorepani Poon Hill.",
                    "Enjoy scenic views and cultural immersion."
                ]
            },
            {
                day: 2,
                title: "Fly to Lukla, Trek to Phakding",
                type: "Trek",
                details: [
                    "Scenic flight to Lukla.",
                    "Start trekking to Phakding.",
                    "Beautiful Himalayan views.",
                    "Overnight in tea house."
                ]
            }
        ],
        inclution: [
            "03 nights’ accommodation in Kathmandu with Breakfast & Dinner",
            "02 nights’ accommodation in Pokhara with Breakfast & Dinner",
            "Local Guide during sightseeing",
            "Airport transfers by A/c vehicle",
            "Sightseeing as per itinerary",
            "Standard travel insurance coverage"
        ],
        exclution: [
            "Services other than specified",
            "Personal expenses",
            "Entrance & Monument Fees"
        ]
    },
    {
        id: 2,
        bannerImage: "https://images.unsplash.com/photo-1598275277521-1885382d523a",
        discountInPercentage: "15%",
        title: "Everest Base Camp Journey",
        description: "Explore the majestic Everest trails on a 10-day trek.",
        duration: "10Days/9Nights",
        actualPrice: "$1500",
        discountedPrice: "$1275",
        overView: {
            Groupsize: "8-12 People",
            difficulty: "Challenging",
            startDate: "2025-11-05",
            endDate: "2025-11-15",
            startLocation: "Lukla",
            endlocation: "Lukla",
            country: "Nepal",
            region: "Everest Region"
        },
        itinery: [
            {
                day: 1,
                title: "Kathmandu Arrival",
                type: "Travel",
                details: [
                    "Arrive in Kathmandu.",
                    "Meet guide and group.",
                    "Briefing about trek.",
                    "Overnight in hotel."
                ]
            }
        ],
        inclution: [
            "Hotel stays in Kathmandu",
            "Domestic flights for trek",
            "Guide & porter services"
        ],
        exclution: [
            "International flights",
            "Personal trekking gear"
        ]
    },
    {
        id: 3,
        bannerImage: "https://images.unsplash.com/photo-1598275277521-1885382d523a",
        discountInPercentage: "10%",
        title: "Kathmandu Cultural Discovery",
        description: "5-day heritage tour of temples, markets, and mountains.",
        duration: "5Days/4Nights",
        actualPrice: "$800",
        discountedPrice: "$720",
        overView: {
            Groupsize: "12-18 People",
            difficulty: "Easy",
            startDate: "2025-09-10",
            endDate: "2025-09-15",
            startLocation: "Kathmandu",
            endlocation: "Kathmandu",
            country: "Nepal",
            region: "Kathmandu Valley"
        },
        itinery: [
            {
                day: 1,
                title: "Arrival in Kathmandu",
                type: "Sightseeing",
                details: [
                    "Visit Swayambhunath Stupa.",
                    "Explore local markets.",
                    "Dinner at traditional restaurant."
                ]
            }
        ],
        inclution: [
            "Hotel in Kathmandu with breakfast",
            "Local guide services",
            "Transport during sightseeing"
        ],
        exclution: [
            "Lunch and dinner",
            "Personal expenses"
        ]
    },
    {
        id: 4,
        bannerImage: "https://images.unsplash.com/photo-1598275277521-1885382d523a",
        discountInPercentage: "20%",
        title: "Annapurna Circuit Trek",
        description: "One of Nepal’s most classic and scenic treks.",
        duration: "18Days/17Nights",
        actualPrice: "$1800",
        discountedPrice: "$1440",
        overView: {
            Groupsize: "10-14 People",
            difficulty: "Difficult",
            startDate: "2025-12-01",
            endDate: "2025-12-18",
            startLocation: "Besisahar",
            endlocation: "Pokhara",
            country: "Nepal",
            region: "Annapurna Region"
        },
        itinery: [
            {
                day: 1,
                title: "Besisahar to Bahundanda",
                type: "Trek",
                details: [
                    "Start trek from Besisahar.",
                    "Pass through lush hills and rivers.",
                    "Overnight at guesthouse."
                ]
            }
        ],
        inclution: [
            "Guide and porter services",
            "All accommodations during trek",
            "Three meals a day during trek"
        ],
        exclution: [
            "Travel insurance",
            "Personal expenses"
        ]
    },
    {
        id: 5,
        bannerImage: "https://images.unsplash.com/photo-1598275277521-1885382d523a",
        discountInPercentage: "12%",
        title: "Relaxing Retreat in Pokhara",
        description: "Enjoy lakeside views, spas, and peaceful trails.",
        duration: "7Days/6Nights",
        actualPrice: "$950",
        discountedPrice: "$836",
        overView: {
            Groupsize: "15-20 People",
            difficulty: "Easy",
            startDate: "2025-08-20",
            endDate: "2025-08-26",
            startLocation: "Pokhara",
            endlocation: "Pokhara",
            country: "Nepal",
            region: "Pokhara Valley"
        },
        itinery: [
            {
                day: 1,
                title: "Pokhara Arrival",
                type: "Relaxation",
                details: [
                    "Arrive in Pokhara.",
                    "Check into lakeside resort.",
                    "Enjoy boat ride on Phewa Lake."
                ]
            }
        ],
        inclution: [
            "Resort stay with breakfast",
            "Spa session",
            "Local sightseeing transport"
        ],
        exclution: [
            "Flights to Pokhara",
            "Meals not mentioned"
        ]
    }
];

export default tourDetails;
