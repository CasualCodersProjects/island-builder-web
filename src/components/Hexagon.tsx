export type Resource = "ore" | "wheat" | "wood" | "brick" | "sheep" | "desert";

type HexButtonProps = {
  label?: string;
  resource: string;
  onClick?: () => void;
};

const HexButton = ({ label, onClick, resource }: HexButtonProps) => (
  <button onClick={onClick} className={`hex-button ${resource}`}>
    <span className="hex-text">{label}</span>
  </button>
);

type TextBoxProps = {
  value: number;
  setValue?: (value: number) => void;
};

// Text box component

const TextBox = ({ value, setValue }: TextBoxProps) => (
  <input
    type="input"
    min="0"
    max="19"
    value={value}
    onChange={
      setValue
        ? (event) => {
            const v = parseInt(event.target.value);
            if (isNaN(v)) {
              setValue(0);
              return;
            }
            if (v < 0) setValue(0);
            else if (v > 19) setValue(19);
            else setValue(v);
          }
        : undefined
    }
    className="text-box"
  />
);

type ContainerProps = {
  number: number;
  setNumber: (value: number) => void;
  resource: Resource;
  setResource: (value: Resource) => void;
};

// Main hexagon container component

const HexagonContainer = ({
  number,
  setNumber,
  setResource,
  resource,
}: ContainerProps) => {
  return (
    <div className={`hexagon-container ${resource}`}>
      <TextBox value={number} setValue={setNumber} />

      <div className="button-grid">
        {/* 6 buttons with empty string labels */}
        <HexButton onClick={() => setResource("ore")} resource="ore" />
        <HexButton onClick={() => setResource("wheat")} resource="wheat" />
        <HexButton onClick={() => setResource("wood")} resource="wood" />
        <HexButton onClick={() => setResource("brick")} resource="brick" />
        <HexButton onClick={() => setResource("sheep")} resource="sheep" />
        <HexButton onClick={() => setResource("desert")} resource="desert" />
      </div>
    </div>
  );
};

export default HexagonContainer;
