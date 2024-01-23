interface Props {
  label: string;
  idName: string;
  required?: boolean;
  helperText?: string;
  helperError?: string;
  type?: string;
  initValue?: string | any;
  multiLine?: boolean;
}

/**
 * Must be inside of a form
 * @param param0
 * @returns
 */
export function CupertinoTextField({
  label,
  idName,
  required,
  helperError = "This field is required",
  helperText,
  type,
  initValue,
  multiLine = false,
}: Props) {
  const isDate = type == "date";

  return (
    <div className=" relative w-full">
      <label className="relative " htmlFor={label}>
        <input
          defaultValue={initValue}
          title={label}
          required={required}
          id={idName.replaceAll(" ", "")}
          multiple={true}
          type={type ?? "text"}
          name={idName.replaceAll(" ", "")}
          className={
            " " +
            "peer w-full placeholder:text-gray-200 px-[16px] pb-[12px] pt-6 rounded-lg bg-gray-100 border-2 border-transparent p-2  outline-none outline-[1.5px] outline-offset-0  focus-within:valid:outline-teal-500 focus-within:invalid:outline-red-500  empty:border-none valid:border-teal-500 valid:border-1 transition-all focus-within:invalid:caret-red-500 text-[1.1rem]"
          }
          // onChange={(s) => console.log(s)}
        />

        {/* LABEL FOR TEXT AREA / INPUT TEXT */}
        <div
          className={`peer-focus-within:peer-valid:text-teal-500  peer-focus-within:peer-invalid:text-red-500 absolute peer-valid:peer-empty:text-sm peer-invalid:peer-empty:text-lg peer-focus-within:peer-invalid:peer-empty:text-[0.8rem] 
          text-gray-400 peer-valid:text-gray-400

           top-0 ${
             "ltr:left-[15px] ltr:text-left " +
             " rtl:right-[15px] rtl:text-right "
           } bottom-0 text-[0.8rem] peer-focus-within:-translate-y-[1.35rem]  peer-focus-within:text-[0.8rem] 

          
          ${
            !isDate
              ? // normal specs
                `peer-invalid:-translate-y-[0.72rem]  peer-invalid:peer-focus-within:-translate-y-[1.55rem] 
                    peer-valid:-translate-y-[1.25rem] `
              : // specs for date picker tiles
                "-translate-y-[1.55rem]"
          }
                    
          transition-all`}
        >
          {label}
        </div>

        {helperText && (
          <div className="px-[0.5rem] text-[0.85rem] py-[5px] peer-focus-within:peer-invalid:hidden block">
            {helperText}
          </div>
        )}

        <div className="px-[0.5rem] text-[0.85rem] py-[5px] peer-focus-within:peer-invalid:block hidden text-red-500">
          {helperError}
        </div>
      </label>
    </div>
  );
}
