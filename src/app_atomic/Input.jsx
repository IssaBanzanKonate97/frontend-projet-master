/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Label = ({ label, required = false, htmlFor = "" }) => {
    return label && <label title={required ? `${label} (Champs requis)` : `${label} (Champs facultatif)`}
        className="text-slate-700 mb-1.5 ml-0.5 text-sm font-medium tracking-tight"
        htmlFor={htmlFor}
    >
        {label}
        {
            required && <span className="text-red-500 text-xs font-medium">*</span>
        }
    </label>
};

// eslint-disable-next-line react/display-name
const InputBlock = forwardRef(({
    name,
    label,
    add = "",
    type = "text",
    required = false,
    disabled = false,
    placeholder = "Entrez une valeur",
    error = false,
    errorMessage = "Une erreur est survenue",
    hint,
    spellCheck = false,
    ...props
}, ref) => {
    return <section className="flex flex-col py-1 w-full">

        <Label label={label} required={required} />

        <input
            ref={ref}
            name={name}
            className={`
                h-10 relative
                bg-white shadow-sm
                ${add}
                text-slate-900
                border ${error ? "border-red-500" : "border-gray-300"}
                border border-solid box-border
                focus:border-fbl-500 focus:shadow-outline-fbl
                focus:ring focus:ring-fbl-400 duration-100
                focus:outline-none
                rounded-lg
                placeholder:text-sm
                placeholder-slate-400
                disabled:bg-slate-100 disabled:text-slate-400 disabled:select-none
                ${disabled && "cursor-not-allowed"}
                text-base px-3.5`}
            type={type}
            spellCheck={spellCheck}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            {...props}
        />
        {
            hint && <span className="text-slate-500 text-xs mt-0.5 leading-tight pt-0.5 px-0.5">{hint}</span>
        }
        {
            error && <span className="text-red-500 text-xs font-medium px-2.5 pt-1">{errorMessage}</span>
        }
    </section>
});

export {
    InputBlock
};