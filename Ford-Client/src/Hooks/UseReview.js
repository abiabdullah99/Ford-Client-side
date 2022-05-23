import { useEffect, useState } from "react";

const UseReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-85484.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review];
};

export default UseReview;
