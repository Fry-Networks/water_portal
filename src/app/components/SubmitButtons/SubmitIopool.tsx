import { submitIOApiKey } from "@/app/server/Iopool";
import { useWallet } from "@txnlab/use-wallet";

export function SubmitIOPoolKeyButton({
  valid,
  apiKey,
  updateMessage,
  disappearInput,
}: {
  valid: boolean;
  apiKey: string;
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

  const handleIOPoolSubmit = async (
    apiKey: string,
    updateMessage: Function,
    disappearInput: Function,
    activeAddress: string
  ) => {
    disappearInput(true);
    updateMessage({ message: "Submitting Key...", color: "white" });

    try {
      const response = await submitIOApiKey(apiKey, activeAddress);
      updateMessage(response?.data);
    } catch (error) {
      console.error("Error submitting IO Pool API key:", error);
      updateMessage({
        message: "Error submitting API key.",
        color: "red",
      });
    } finally {
      disappearInput(false);
    }
  };

  return (
    <button
      onClick={() =>
        handleIOPoolSubmit(apiKey, updateMessage, disappearInput, activeAddress!)
      }
      className={`py-4 px-6 text-base font-medium rounded-lg focus:outline-none ${
        valid ? "bg-[#00FFFF]" : "bg-gray-400"
      }`}
      disabled={!valid}
    >
      Submit
    </button>
  );
}
