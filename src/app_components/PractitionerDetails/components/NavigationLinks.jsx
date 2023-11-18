
const navigationLinks = [
    {
        name: "L'essentiel",
        href: '#about',
    },
    {
        name: "Présentation",
        href: '#presentation',
    },
    {
        name: "Horaires",
        href: '#opening_hours',
    },
];

const NavigationLinks = () => {
    return <div className="bg-white shadow p-4">
        <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-6">
                {
                    navigationLinks.map(({ name, href }, index) => {
                        return <a
                            key={index}
                            href={href}
                            className="text-cyan-900 font-bold hover:text-cyan-800 duration-300"
                        >
                            {name}
                        </a>
                    })
                }
            </div>
        </div>
    </div >
};

export default NavigationLinks;