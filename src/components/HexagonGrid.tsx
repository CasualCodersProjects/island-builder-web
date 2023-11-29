import HexagonContainer, { type Resource } from "./Hexagon";
import { useState } from "react";

const HexagonGrid = () => {
  // Define the initial grid layout with default numbers
  const initialGridLayout = [
    [10, 2, 9], // 3 hexagons in the first row
    [12, 6, 4, 10], // 4 hexagons in the second row
    [9, 11, 0, 3, 8], // 5 hexagons in the middle row
    [8, 3, 4, 5], // 4 hexagons in the fourth row
    [5, 6, 11], // 3 hexagons in the last row
  ];

  const initialResourceLayout: Resource[][] = [
    ["ore", "sheep", "wood"],
    ["wheat", "brick", "sheep", "brick"],
    ["wheat", "wood", "desert", "wood", "ore"],
    ["wood", "ore", "wheat", "sheep"],
    ["brick", "wheat", "sheep"],
  ];

  // State to track the numbers in each hexagon
  const [gridNumbers, setGridNumbers] = useState(initialGridLayout);
  const [resourceLayout, setResourceLayout] = useState(initialResourceLayout);

  // Function to update the number in a specific hexagon
  const updateNumber = (
    rowIndex: number,
    hexIndex: number,
    newNumber: number
  ) => {
    const newGridNumbers = [...gridNumbers];
    newGridNumbers[rowIndex][hexIndex] = newNumber;
    setGridNumbers(newGridNumbers);
  };

  const updateResource = (
    rowIndex: number,
    hexIndex: number,
    newResource: Resource
  ) => {
    const newResourceLayout = [...resourceLayout];
    newResourceLayout[rowIndex][hexIndex] = newResource;
    setResourceLayout(newResourceLayout);
  };

  return (
    <div className="hexagon-grid">
      {gridNumbers.map((row, rowIndex) => (
        <div key={rowIndex} className="hex-row">
          {row.map((number, hexIndex) => (
            <HexagonContainer
              key={hexIndex}
              number={number}
              setNumber={(newNumber) =>
                updateNumber(rowIndex, hexIndex, newNumber)
              }
              resource={resourceLayout[rowIndex][hexIndex]}
              setResource={(newResource) =>
                updateResource(rowIndex, hexIndex, newResource)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;
