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
      style={{
        ...buttonStyle,
        backgroundColor: valid ? "cyan" : "gray",
        width: "fit-content",
        alignSelf: "center",
      }}
      disabled={!valid}
    >
      Submit
    </button>
  );
}

const buttonStyle = {
  backgroundColor: "yellow",
  border: "none",
  color: "black",
  padding: "15px 32px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "5px",
};
