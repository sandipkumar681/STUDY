"use client";

const GlobalErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <html>
      <body>
        <div>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalErrorBoundary;
