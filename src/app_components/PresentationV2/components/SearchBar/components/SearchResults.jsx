import { User } from "react-feather";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SearchResults = ({ results }) => {
    return <div className="absolute top-14 rounded-lg shadow-xl bg-white p-3 h-auto max-h-64 w-full overflow-y-auto z-20">
        {
            results.map(({ id, name, practitioner, establishment, description }, index) => {
                return <Link to={`/details/${id}`} key={index}>
                    <div className="bg-white group hover:bg-indigo-100 rounded-lg px-3 py-1 duration-300">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-indigo-200 duration-300">
                                <User className="text-indigo-500 group-hover:text-indigo-600 duration-300" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h4 className="text-slate-900 font-bold group-hover:text-indigo-900">
                                    {name} avec {practitioner}
                                </h4>
                                <span className="text-slate-600 text-sm">
                                    Établissement: {establishment}
                                </span>
                            </div>
                        </div>
                        <span className="text-slate-600">
                            {description}
                        </span>
                    </div>
                </Link>

            })
        }
    </div>
};

export default SearchResults;