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
              xy: data,
              xbounds: [0, 1000000],
              ybounds: [0, 285],
              type: 'pointcloud',
              mode: 'markers',
              marker: {
                sizemin: 1.5,
                sizemax: 60,
                color: '#59234F',
                opacity: 0.7,
                blend: true
              },
            }
          ]}
          useResizeHandler
          layout={{
            autosize: true,
            title: 'A033093 for n = 1 - 1000000',
            xaxis: {
              range: [0, 1000000],
              hoverformat: ' '
            },
            yaxis: { range: [0, 285] },
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
