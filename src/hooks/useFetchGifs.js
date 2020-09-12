import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      // Podemos hacer solo .then( setImages ) porq la func va a tomar el primer argumento y lo va a guardar
      .then((imgs) =>
        setState({
          data: imgs,
          loading: false,
        })
      );
  }, [category]);

  return state; // { data: [], loading: true }
};
