import React, {useState} from "react";
import { Tooltip } from 'react-tooltip'
import CommentContainer from "./CommentContainer";
export default function PostComponent(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showComments, setShowComments] = useState(false);
    return (
        <div className="post-component  flex items-center w-1/2" onClick={() => setIsOpen(false) } >
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full items-center">
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                         {props.title}
                    </h5>
                    <span className="block mb-2 font-sans antialiased font-thin italic leading-snug tracking-normal text-blue-gray-900">
                        - <a data-tooltip-id={props.user.username} onMouseEnter={() => setIsOpen(true)}>{props.user.name} </a>
                    </span>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {props.body}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() => setShowComments(!showComments)}
                        >
                        {showComments && "Hide comments"}
                        {!showComments && "Show comments"}
                    </button>
                </div>
                { showComments && <CommentContainer postId={props.id}/>}
            </div>
            <Tooltip id={props.user.username} isOpen={isOpen}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>Email: {props?.user?.email}</span>
                    <span>Website: {props?.user?.website}</span>
                    <span>Company: {props?.user?.company?.name}</span>
                </div>
            </Tooltip>
        </div>
    )
} 