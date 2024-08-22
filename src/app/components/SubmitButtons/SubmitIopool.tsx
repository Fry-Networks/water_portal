import { submitIOApiKey } from "@/app/server/Iopool";
import { useWallet } from "@txnlab/use-wallet";
import { useState } from "react";

export function SubmitIOPoolKeyButton({
  apiKey,
  minerKey,
  updateMessage,
  disappearInput,
}: {
  apiKey: string;
  minerKey: string;
  updateMessage: ({
    message,
    color,
  }: {
    message: string;
    color: string;
  }) => void;
  disappearInput: Function;
}) {
  const { activeAddress } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  const isValidApiKey = /^[a-zA-Z0-9]{40}$/i.test(apiKey);
  const isValidMiner = /^([A-Z]{2,6})-[A-Z0-9]{32}$/i.test(minerKey);
  const isValidKeys = isValidApiKey && isValidMiner;

  const handleIOPoolSubmit = async (
    apiKey: string,
    minerKey: string,
    updateMessage: Function,
    disappearInput: Function,
    activeAddress: string
  ) => {
    setIsLoading(true);
    disappearInput(true);
    updateMessage({ message: "Submitting Key...", color: "white" });

    try {
      const response = await submitIOApiKey(apiKey, minerKey, activeAddress);
      updateMessage(response?.data);
    } catch (error) {
      console.error("Error submitting IO Pool API key:", error);
      updateMessage({
        message: "Error submitting API key.",
        color: "red",
      });
    } finally {
      setIsLoading(false);
      disappearInput(false);
    }
  };

  return (
    <button
      onClick={() =>
        handleIOPoolSubmit(apiKey, minerKey, updateMessage, disappearInput, activeAddress!)
      }
      className={`py-4 px-6 text-base font-medium rounded-lg focus:outline-none ${
        isValidKeys ? "bg-[#00FFFF]" : "bg-gray-400"
      }`}
      disabled={!isValidKeys || isLoading}
    >
      {isLoading ? "Submitting..." : "Submit"}
    </button>
  );
}
