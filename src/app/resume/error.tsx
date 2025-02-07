"use client"; // Error boundaries must be Client Components

export default function ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
