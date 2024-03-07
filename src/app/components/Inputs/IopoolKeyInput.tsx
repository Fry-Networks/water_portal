
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
    style={tokenInputStyle}
    className={disappear ? 'fade-out' : ''}
  />
);

const tokenInputStyle = {
  color: 'black',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
};

export default IOPoolTokenInput;
