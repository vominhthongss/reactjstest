import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/appSlice";

export function Counter() {
  const count = useSelector((state) => state.app.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
