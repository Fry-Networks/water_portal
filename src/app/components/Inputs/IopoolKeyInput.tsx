const IOPoolTokenInput = ({
  token,
  setToken,
  setValid,
  disappear,
  placeholder,
  inputType
}: {
  token: string;
  setToken: Function;
  setValid: Function;
  disappear: boolean;
  placeholder: string;
  inputType: string;
}) => (
  <input
    type={inputType}
    value={token}
    autoComplete="off"
    data-lpignore="true"
    data-form-type="other"
    onChange={(e) => {
      setToken(e.target.value);
      setValid(e.target.value.trim() !== '');
    }}
    placeholder={placeholder}
    className={`${
      disappear ? "opacity-0" : ""
    } appearance-none border h-11 w-[300px] border-gray-300 text-black rounded-md py-2 px-4 mb-4 leading-tight focus:outline-none focus:border-blue-500`}
  />
);

export default IOPoolTokenInput;
