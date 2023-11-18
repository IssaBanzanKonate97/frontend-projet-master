/* eslint-disable react/prop-types */
import Card from "../../../shared/components/Card"

const DetailsCard = ({ icon, title, children, id }) => {
    return <section id={id}>
        <Card>
            <div className="flex flex-row gap-3">
                {
                    icon && <div className="shrink-0 py-1">
                        {icon}
                    </div>}
                <div className="flex flex-col">
                    <h5 className="text-slate-900 font-bold text-base mb-2">
                        {title}
                    </h5>
                    <div className="text-slate-600 text-sm mb-2 inter">
                        {children}
                    </div>
                </div>
            </div>
        </Card>
    </section>
};

export default DetailsCard;