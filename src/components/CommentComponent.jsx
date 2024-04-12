import React from "react";

export default function CommentComponent(props) {
    console.log(props);
    return (
        <div className="comment-component flex-col items-center w-3/4 pb-2"  >
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full items-center">
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                     {props.name}
                </h5>
                <span className="block mb-2 font-sans antialiased font-thin italic leading-snug tracking-normal text-blue-gray-900">
                    -  {props.email}
                </span>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {props.body}
                </p>
            </div>
        </div>
    </div>
    )
}