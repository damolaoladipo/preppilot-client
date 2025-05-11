import React from "react";
import type { IModal } from "../../utils/interface.util";

const Modal = (props: IModal) => {
  const { children, title, isOpen, onClose, hiddenHeader } = props;

  return (
    <div className="fixed inset-0 z-50 flex just">
      <div
        className={`relative flex flex-col bg-white shadow rounded-lg overflow-hidden`}
      >
        {!hiddenHeader && (
          <div className="f">
            <h3 className="">{title}</h3>
          </div>
        )}

        <button type="button" className="" onClick={onClose}>
          <svg
            className=""
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6m7 7l6-6M7 7l-6 6 "
            />
          </svg>
        </button>

        <div className="f">
            {children}
        </div>


      </div>
    </div>
  );
};

export default Modal;
