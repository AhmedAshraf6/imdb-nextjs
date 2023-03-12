import React from 'react';

export default function Results({ results }) {
  return (
    <>
      {results.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.original_title}</h1>
          </div>
        );
      })}
    </>
  );
}
