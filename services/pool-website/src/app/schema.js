export default {
    "gallery": {
        "title": "Gallery"
      },
    site: {
        title: "Star Forge"
    },
    navItems: [
        {
            name: "Delegate",
            url: "/delegate"
        },
        {
            name: "Gallery",
            url: "/gallery"
        },
        {
            name: "Community",
            url: "/community"
        },
        {
            name: "Status",
            icon: "Pulse",
            target: "_blank",
            url: "https://stats.uptimerobot.com/kM7VDHnRxR"
        }
    ],
    socials: [
        {
            name: "GitHub",
            icon: "GitHub",
            url: "https://github.com/wcatz"
        },
        {
            name: "Twitter",
            icon: "Twitter",
            url: "https://twitter.com/OTG_WCat"
        }
    ],
    specifications: [
        {
            type: "Title",
            name: "1x Apple Mac Mini M1 16GB RAM"
        },
        {
            icon: "Processor",
            name: "8-core CPU with 4 performance cores and 4 efficiency cores",
        },
        {
            icon: "Storage",
            name: "Apple NVMe SSD, 160 GB"
        },
        {
            type: "Divider",
        },
        {
            type: "Title",
            name: "2x Raspberry Pi 8GB RAM"
        },
        {
            icon: "Processor",
            name: "4-core CPU (overclocked to 2GHz)"
        },
        {
            icon: "Storage",
            name: "Samsung evo NVME 256 GB"
        },
        {
            type: "Divider",
        },
        {
            type: "Title",
            name: "Other"
        },
        {
            icon: "Computer",
            name: "Ubuntu 21.04"
        },
        {
            icon: "Firewall",
            name: "Turris Omnia/OpenWRT"
        },
        {
            icon: "Internet",
            name: "1 Gbps, 8 ms latency"
        },
    ],
    faq: {
        items: [
            {
                title: 'What is Cardano?',
                content: `Cardano is a decentralized public blockchain and cryptocurrency project and is fully open source.
                    It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.`
            },
            {
                title: "What is a Stake Pool?",
                content: `A stake pool is a reliable server node that focuses on maintenance and holds the combined
                    stake of various stakeholders in a single entity. Stake pools are responsible for processing
                transactions and producing new blocks and are at the core of [Ouroboros](https://cardano.org/ouroboros), the Cardano proof-of-stake protocol`
            },
            {
                title: "How does that benefit me?",
                content: `By staking you're delegating your ADA to a Stake Pool you directly participate in the network and
                    help increasing the robustness and decentralization of Cardano. For this you can receive a monetary reward in ADA.`
            },
            {
                title: "How do I delegate ADA to a stake pool?",
                content: `To delegate ADA, you first buy ADA on an exchange, open up a wallet application (e.g. [Daedalus](https://daedaluswallet.io), [Yoroi](https://yoroi-wallet.com) or [Adalite](https://adalite.io)) create a wallet, send your ADA to that wallets' address and select a Stake Pool
                    (preferably **OTG**) in the Staking menu directly in the wallet application.
                Each wallet application looks a bit different but overall it's very straight forward. [Read a more detailed guide](/delegate)`
            },
            // {
            //   title: "What is a pledge",
            //   content: `Pledge is the amount of ADA a stake pool has guaranteed to keep in its account. It’s a way of proving to the delegators that the stake pool is serious and has ‘skin in the game’. It also has a small influence in the rewards a pool will pay. The factor is – however – very small. You need around 5-10m of ADA pledged, before you can start to feel the effects. You should be aware of pools with a low pledge, as it indicates a low dedication.

            //   All our pools in 1 Percent Pool have a pledge of 50.000 ADA each.`,
            // },
            // {
            //   title: "What is 'The ITN'?",
            //   content: `ITN stands for Incenticized Test Net. It was 6 months of test net for Shelley, that was designed to test the game theory and incentive scheme. It started in December 2019. Many pools operators gained valuable experience in running a pool there, and established a reputation. The rewards from the test net were transferred to the main net, which made the test net incentivized – you earned real money from staking on the test net.`,
            // },
        ]
    },
    delegate: {
        title: "Delegate",
        description: `To delegate ADA, you first buy ADA on an exchange, open up a wallet application (e.g. Daedalus, Yoroi or Adalite) create a wallet, send your ADA to that wallets' address and select a Stake Pool
        (preferably OTG) in the Staking menu directly in the wallet application.
    Each wallet application looks a bit different but overall it's very straight forward.`
    },
    usps: {
        items: [
            {
                icon: "Single",
                name: "Operating a single pool",
                description: `Don't support operators that run multiple pools. They are preventing decentralisation by harming the security and reliability Cardano.`
            },
            {
                icon: "Indie",
                name: "Supporting others",
                description: `Encouraging others to run their own stake pool by giving support and providing resources. 50% of our rewards are used to change other peoples lives.`,
            },
            {
                icon: "Eco",
                name: "Eco-friendly",
                description: `Consuming just 5 watts per Raspberry Pi from within an energy-neutral home with solar panels.`
            }
        ]
    },
    roadmap: {
        title: "Roadmap",
        description: "Here you can follow my journey being involved with the Cardano community as well as my plans for the future.",
        sprints: [
            {
                name: "July 2021",
                items: [
                    { name: "[Armada Alliance 2.0](https://armada-alliance.com) Release", completed: true },
                ]
            },
            {
                name: "June 2021",
                items: [
                    { name: "[Armada Alliance 2.0](https://armada-alliance.com) Development", completed: true }
                ]
            },
            {
                name: "May 2021",
                items: [
                    { name: "Increased pledge to 25k", completed: true, date: "May 15" },
                    { name: "[Armada Alliance 2.0](https://armada-alliance.com) Development", completed: true }
                ]
            },
            {
                name: "April 2021",
                items: [
                    { name: "Launch first version of [Armada Alliance website](https://armada-alliance.com)", completed: true, date: "Apr 30" },
                    { name: "Initiate the [Armada Alliance](https://adapools.org/alli/armada-alliance/9) together with [PIADA](https://ada-pi.io)", completed: true, date: "Apr 24" },
                    { name: "Release another [YouTube Video](https://www.youtube.com/watch?v=6Ao98KdBACI) on how to [mint a collection of NFT's](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) together with [PIADA](https://ada-pi.io)", completed: true, date: "Apr 24" },
                    { name: "Increase the pool pledge from 5k to 6k ADA", completed: true, date: "Apr 23" },
                    { name: "Release a [YouTube Video](https://www.youtube.com/watch?v=OeOliguGn7Y) on how to [mint NFT's](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) together with [PIADA](https://ada-pi.io)", completed: true, date: "Apr 12" },
                    { name: "Setup the initial pool website (pool.sublayer.io)", completed: true, date: "Apr 10" },
                    { name: "Ordered an Intel NUC to be prepared for (possible) increased hardware requirements caused by Alonzo", completed: true, date: "Apr 10" },
                    { name: "Created a [pull request](https://github.com/SinglePoolAlliance/Registration/pull/194) to get listed on [singlepoolalliance.net](https://singlepoolalliance.net)", completed: true, date: "Apr 10" },
                    { name: "Added a [status page](https://stats.uptimerobot.com/kM7VDHnRxR) using [uptimerobot.com]() monitoring the uptime of the stake pool on relaynode1.sublayer.io:6001", completed: true, date: "Apr 7" },
                    { name: "Created NFT's on mainnet together with [PIADA](https://ada-pi.io)", completed: true, date: "Apr 3" },
                    { name: "Successfully launched [SBLYR pool](https://pool.pm/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8) on mainnet", completed: true, date: "Apr 3" }
                ]
            },
            {
                name: "March 2021",
                items: [
                    { name: "Setup a stake pool on testnet", completed: true, date: "March 27" },
                    { name: "Received hardware", completed: true, date: "March 27" },
                    { name: "Joined [ADA.pi discord](https://ada-pi.io)", completed: true, date: "March 21" },
                    { name: "Ordered hardware", completed: true, date: "March 20" },
                    { name: "Joined [NASEC discord](https://adapools.org/pool/aa8b94010cd3c7199be1d619079c184a59e6f1ad930926bc2bd38579)", completed: true, date: "March 17" },
                    { name: "Minted first [native asset](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) ([SublayerCoin](https://cardanoassets.com/sublayercoin-862)) on mainnet", completed: true, date: "March 15" },
                    { name: "Minted first [native asset](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) on testnet", completed: true, date: "March 15" },
                ]
            }
        ]
    },
    community: {
        description: "I would like to give special thanks to the following Stake Pool Operators for their support.",
        pools: [
            {
                name: "PIADA",
                url: "https://ada-pi.io",
                authors: "Wael Ivie / Tony",
                image: "piada.png"
            },
            {
                name: "SBLYR",
                url: "https://adamantium.online",
                authors: "Olivier",
                image: "otg.png"
            },
            {
                name: "BERRY",
                url: "https://nasec.co.uk/cardano",
                image: "nasec.png"
            },
            {
                name: "CODER",
                url: "https://cardano.dantup.com",
                image: "coder.png"
            },

        ]
    }
}