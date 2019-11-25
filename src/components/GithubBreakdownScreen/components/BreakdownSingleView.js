import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { getGraphProperties, getColor } from "../Helper";

const BreakdownView = ({ rawData, xAxisLabelGenerator, labelIdentifier, title}) => {
  const [graphProperties, setGraphProperties] = useState(undefined);

  useEffect(() => {
      
    const labels = [];
    const data = [];
    const colors = [];
    for (const [key, value] of Object.entries(rawData)) {
      labels.push(xAxisLabelGenerator(key));
      data.push(value);
      colors.push(getColor());
    }

    if(labels.length){
        setGraphProperties(getGraphProperties(labelIdentifier, labels, data, colors));
    }
  }, [ rawData, xAxisLabelGenerator, labelIdentifier, title ]);

  if (!graphProperties) {
    return <h1 className="screen-title">There is No Data Available!</h1>;
  }

  return (
    <div>
      <h1 className="screen-title">{title}</h1>
      <br />
      <Bar className="data-visual" data={graphProperties} />
      <br />
      <Line className="data-visual" data={graphProperties} />
      <br />
      <Pie className="data-visual" data={graphProperties} />
    </div>
  );
};

export default BreakdownView;
