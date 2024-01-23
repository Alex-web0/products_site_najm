import React from "react";
import { Oval } from "react-loader-spinner";

// npm install react-loader-spinner --save

export default function Loading({ label }: { label: string }) {
  return (
    <div className="flex flex-col align-middle justify-center p-7 mx-auto  my-auto">
      <Oval
        height={104}
        width={104}
        color="#0079BF"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0079BF"
        strokeWidth={5}
        strokeWidthSecondary={5}
        wrapperClass="self-center"
      />

      <p className="py-10 text-gray-600 self-center md:text-lg text-sm">
        {label}
      </p>
    </div>
  );
}
