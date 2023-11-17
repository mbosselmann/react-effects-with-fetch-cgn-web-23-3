import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState(null);

  async function getRandomJoke() {
    const response = await fetch(
      `https://example-apis.vercel.app/api/bad-jokes/random`
    );
    const joke = await response.json();
    setJoke(joke);
  }

  useEffect(() => {
    getRandomJoke();
  }, []);

  if (!joke) {
    return null;
  }

  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={() => getRandomJoke()}>
        Next Joke
      </button>
    </>
  );
}
