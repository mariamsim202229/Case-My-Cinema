import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  
  // Handle the error and display a user-friendly error message
  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, an error occurred while loading this page.</p>
    </div>
  );
}

export default ErrorBoundary;
