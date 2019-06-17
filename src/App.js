import React from "react";
import Plot from 'react-plotly.js';

import { useFetch } from "./hooks";

export default function App() {
  const [data, loading] = useFetch(
    "result.csv"
  );
  return (
    <>
      {loading ? (
        <div>
          {'Loading. This may take a while...'}
        </div>
      ) : (
        <Plot
          style={{ width: '100vw', height: '100vh' }}
          data={[
            {
              x: data.x,
              y: data.y,
              type: 'scattergl',
              mode: 'markers',
              marker: {
                size: 2,
                color: '#59234F'
              },
            }
          ]}
          useResizeHandler
          layout={{
            autosize: true,
            title: 'A033093 for n = 1 - 1000000',
            plot_bgcolor: '#0A172A',
            paper_bgcolor: '#0A172A',
            hovermode: 'closest',
            dragmode: 'pan',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#03B5AA',
            }
          }}
          config={{
            scrollZoom: true,
            displayModeBar: false,
          }}
        />
      )}
    </>
  );
}
