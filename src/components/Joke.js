import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState(null);
  const [id, setId] = useState(0);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${id}`
      );
      const joke = await response.json();
      setJoke(joke);
    }

    startFetching();
  }, [id]);

  if (!joke) {
    // return null;
    // return;
    return <p>Nothing to see here yet.</p>;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={() => setId(joke.nextId)}>
        Next Joke
      </button>
    </>
  );
}
