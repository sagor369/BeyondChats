import React from "react";

const Message = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div>
        <p className="text-start bg-white text-black p-2 mb-2 inline-flex rounded-xl">
          hello
        </p>
      </div>
      <div className="text-end">
        <p className="text-end bg-white text-black p-2 mb-2 inline-flex rounded-xl">
          hi
        </p>
      </div>
      <div>
        <p className="text-start bg-white text-black p-2 mb-2 inline-flex rounded-xl">
          how are you ?
        </p>
      </div>
      <div className="text-end">
        <p className="text-end bg-white text-black p-2 mb-2 inline-flex rounded-xl">
          I am fine, and you?
        </p>
      </div>
    </div>
  );
};

export default Message;
