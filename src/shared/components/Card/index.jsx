/* eslint-disable react/prop-types */
const Card = ({ children, add = "" }) => (
    <div className={`bg-white rounded-lg shadow-lg shadow-slate-200/40 p-4 sm:p-5 md:p-6 ${add}`}>
        {children}
    </div>
);

export default Card;