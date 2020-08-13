import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, isLoading: true }));
    fetch("https://cors-anywhere.herokuapp.com/" + url)
      .then((x) => x.json())
      .then((y) => {
        setState({ data: y, isLoading: false });
      });
  }, [url, setState]);

  return state;
};
