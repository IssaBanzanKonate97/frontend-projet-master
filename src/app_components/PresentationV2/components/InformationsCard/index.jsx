/* eslint-disable react/prop-types */

import Card from "../../../../shared/components/Card";

const cardsDetails = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
        linkLabel: "En savoir plus",
        href: "/presentation/1",
    }, {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
        linkLabel: "En savoir plus",
        href: "/presentation/2",
    }, {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
        linkLabel: "En savoir plus",
        href: "/presentation/3",
    }
]

const InformationsCard = () => {
    return <div className="h-40 z-10 -top-14 relative px-8">
        <div className="flex flex-row-reverse">
            <div className="flex flex-row gap-3 max-w-4xl">
                {
                    cardsDetails.map(({ title, description, linkLabel, href }, index) => {
                        return <Card key={index} add="group hover:scale-105 duration-300">
                            <div className="inter">
                                <h5 className="text-slate-900 font-bold text-base mb-2">
                                    {title}
                                </h5>
                                <p className="text-slate-600 text-sm mb-2 inter">
                                    {description}
                                </p>
                                <a href={href} className="text-indigo-500 text-sm hover:underline">
                                    {linkLabel}
                                </a>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    </div>
};

export default InformationsCard;