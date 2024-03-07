import { useState } from "react";
import Modal from "react-modal";
import IOPoolTokenInput from "../Inputs/IopoolKeyInput";
import { SubmitIOPoolKeyButton } from "../SubmitButtons/SubmitIopool";

export function IopoolModal({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Function;
}) {
  const [apiKey, setApiKey] = useState("");
  const [validApiKey, setValidApiKey] = useState(false);
  const [message, updateMessage] = useState({ message: "", color: "white" });
  const [disappear, setDisappear] = useState(false);
    const handleCloseModal = () => {
    setOpen(false);
    setApiKey("");
    setValidApiKey(false);
    updateMessage({ message: "", color: "white" });
  };

  return (
    <Modal
      isOpen={isOpen}
      className="bg-[#0CA7E5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 w-auto sm:w-[600px]"
      overlayClassName="inset-0 bg-black"
    >
      <div className="flex justify-end">
        <button
          className="text-[20px] rounded-[50%] border-white border-t "
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px]">
          Please enter your IO Pool API Key below:
        </h1>
        <IOPoolTokenInput
          token={apiKey}
          setToken={setApiKey}
          setValid={setValidApiKey}
          disappear={disappear}
          inputType="text"
          placeholder="Enter API Key"
        />

        <SubmitIOPoolKeyButton
          valid={validApiKey}
          apiKey={apiKey}
          updateMessage={updateMessage}
          disappearInput={setDisappear}
        />

        <p className={`text-${message.color} text-center text-[17px] mt-10 font-bold`}>
          {message.message}
        </p>
      </div>
    </Modal>
  );
}
