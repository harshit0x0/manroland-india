type products = {
    name: string;
    description: string;
    image: string;
    url: string;
}
export type partnerType = {
    name: string;
    logo: string;
    description: string;
    website: string;
    products: products[];
}

export const partners: partnerType[] = [
    {
        name: "Busch",
        logo: "/images/logos/busch-logo.jpg",
        description:
            "German engineering excellence – printing-related products manufactured by Gerhard BUSCH GmbH Helping to maximise efficiencies in the print room.",
        website: "http://www.buschgraphic.co.uk/",
        products: [
            {
                name: "Waste Conveyors",
                description:
                    "Waste is conveyed from low-level into a waste container – the height of container governing the model of waste conveyor used.",
                image: "/images/PartnerProducts/busch-waste-conveyor.jpg",
                url: "http://www.buschgraphic.co.uk/machines/waste-conveyors/product-details/",
            },
            {
                name: "Pile Turners",
                description:
                    "Speeds up both the printing and the finishing process, so saving time and money",
                image: "/images/PartnerProducts/busch-pile-turners.jpg",
                url: "http://www.buschgraphic.co.uk/machines/pile-turners/product-details/",
            },
            {
                name: "Banders",
                description: "All types of products, and different volumes, can be banded",
                image: "/images/PartnerProducts/busch-banders.jpg",
                url: "http://www.buschgraphic.co.uk/machines/pile-turners/product-details/"
            },
            {
                name: "Punches & Label Lines",
                description: "Diecutting and high volume production of labels, cards and other shapes",
                image: "/images/PartnerProducts/busch-punches.jpg",
                url: "http://www.buschgraphic.co.uk/machines/punches-and-label-lines/punches-details/"
            },
            {
                name: "Pile hoists",
                description: "For ergonomic working at a comfortable height these are an indispensible component of cutting systems",
                image: "/images/PartnerProducts/busch-pile-hoists.jpg",
                url: "http://www.buschgraphic.co.uk/machines/pile-hoists/product-details/"
            },
            {
                name: "Joggers",
                description: "Material preparation outside the cutting machine",
                image: "/images/PartnerProducts/busch-joggers.jpg",
                url: "http://www.buschgraphic.co.uk/machines/joggers/product-details/"
            },
        ],
    },
    {
        name: "Zechini",
        logo: "/images/logos/zechini-logo.jpg",
        description:
            "Zechini designs machines for bookbinding, paper converting, luxury packaging and children's books.",
        website: "https://zechini.com/",
        products: [
            {
                name: "Kissy",
                description:
                    "Kissy is a semi-automatic gluing machine with suction belt for the medium/high production of luxury boxes and covers (thanks to the addition of the tucking unit). It is possible to implement a scara robot capable of making the positioning of the box or cardboard completely automatic.",
                image: "/images/PartnerProducts/zechini-kissy.jpg",
                url: "https://zechini.com/macchine/legatoria/kissy/",
            },
            {
                name: "CT150 2.0 ",
                description:
                    "CT150 2.0 is the machine for closing the corners of the box by placing heat-sealing strips. The machine places the adhesive on the corners to form the box. The iron-on tape is cut in different heights for different needs.",
                image: "/images/PartnerProducts/zechini-ct150.png",
                url: "https://zechini.com/macchine/packaging/posizionatore-adesivo/ct-150/",
            },
            {
                name: "E.S.B 2.0",
                description:
                    "E.S.B 2.0 is the ideal solution for creating highly customizable luxury boxes thanks to automatic format changeover, touchscreen controls, different production formats and coating materials.",
                image: "/images/PartnerProducts/zechini-esb.jpg",
                url: "https://zechini.com/macchine/packaging/rivestitrice-scatole/e-s-b-2-0/",
            },
            {
                name: "X-Case Plus Cube",
                description:
                    "X-Case Plus Cube is the case packer machine for inserting book blocks inside covers for medium runs and oversized books. Unlike the standard version (X-Case Cube), the Plus has automatic feeding of the book block, thus making processing faster.",
                image: "/images/PartnerProducts/zechini-xcase.png",
                url: "https://zechini.com/macchine/legatoria/incassatrici/x-case-cube-plus/",
            },
            {
                name: "Roby 1800 XL Lining",
                description:
                    "Roby 1800 XL Lining is the automatic line for gluing internal planks (lining). It is possible to work in line with the Roby 1800 XL for the automatic production of finished covers.",
                image: "/images/PartnerProducts/zechini-rolby1800.png",
                url: "https://zechini.com/macchine/legatoria/copertinatrici/roby-1800-xl-lining/",
            },
        ],
    },
    {
        name: "Kolbus",
        logo: "/images/logos/kolbus-logo.jpg",
        description:
            "KOLBUS: Setting the Standard in Packaging Machinery Engineering and Quality",
        website: "https://kolbus.com/",
        products: [
            {
                name: "Box maker BX Motion Pro",
                description:
                    "Multi-talent for the packaging industry. For customised short-run corrugated box production. Simply select the tool configuration to meet your unique production requirements.",
                image: "/images/PartnerProducts/kolbus-motion-pro.png",
                url: "https://kolbus.com/products/bx-motion-pro",
            },
            {
                name: "KOLBUS RD 115S ",
                description:
                    "Production line for printed and die-cut corrugated packaging",
                image: "/images/PartnerProducts/kolbus-rd115s.png",
                url: "https://kolbus.com/products/rd-115s-servo",
            },
            {
                name: "Boxline Taper BLT 200",
                description:
                    "Sealing machine to form rigid boxes",
                image: "/images/PartnerProducts/kolbus-boxline-taper.png",
                url: "https://kolbus.com/products/boxline-taper-blt-200",
            },
        ],
    },
    {
        name: "CreaseStream",
        logo: "/images/logos/CreaseStream-logo.jpeg",
        description:
            "At last, a quick, easy and affordable way to achieve perfect creasing",
        website: "https://www.creasestream.com/",
        products: [
            {
                name: "Auto-feed MkII",
                description:
                    "The Auto-feed MkII is the perfect piece of print finishing equipment for businesses that produce both short and high volume production runs",
                image: "/images/PartnerProducts/creaseStream-autofeed.jpg",
                url: "https://www.creasestream.com/products-old/auto-feed-mkii/",
            },
            {
                name: "Quick-feed MkII",
                description:
                    "The Quick-feed MkII is the ideal digital finishing solution for businesses who have medium to low production requirements but tight timescales",
                image: "/images/PartnerProducts/creaseStream-autofeed.jpg",
                url: "https://www.creasestream.com/products-old/quick-feed-mkii/",
            },
        ],
    },
    {
        name: "Smag Graphique",
        logo: "/images/logos/smagGraphique-logo.jpeg",
        description:
            "Design and manufacture of innovative solutions for the printing and finishing of labels and flexible packaging",
        website: "https://www.smag-graphique.com/",
        products: [
            {
                name: "ICONCEPT line",
                description:
                    "The ICONCEPT line is the most advanced range of the ICON multi-process platform, and includes a wide range of fully servo-motorized and independent printing and finishing modules in both feed formats and automatic registration systems as well as web movements. It is endlessly composed for solutions adapted to each market application",
                image: "/images/PartnerProducts/smag-iconcept.jpg",
                url: "https://www.smag-graphique.com/gamme-icon/iconcept/",
            },
            {
                name: "Easyconvert",
                description:
                    "The EAsyconvert is a high-quality, high-speed converting/finishing machine. With the following possibilities: cold foil stamping, super varnish, rotary and semi-rotary flexo printing, rotary and semi-rotary cutting, IML output and cutting, slitting and sheeting.",
                image: "/images/PartnerProducts/smag-easyconvert.jpg",
                url: "https://www.smag-graphique.com/gamme-easycon/easyconvert/",
            },
            {
                name: "CLASSIC GALAXY",
                description:
                    "CLASSIC GALAXY Roll-to-roll flatbed screen printing press. The Galaxie Classique web-to-roll screen printing press was launched on the market in 1995 at the Label'Expo Europe trade show. To date, more than 800 machines of this type have been installed on five continents.  ",
                image: "/images/PartnerProducts/smag-galaxy.jpg",
                url: "https://www.smag-graphique.com/gamme-classique/galaxie-classique/",
            },
        ],
    }
];