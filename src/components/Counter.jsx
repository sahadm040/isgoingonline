import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../store/slices/counterSlice";
import { Button, Container } from "react-bootstrap";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div>
      <Container fluid>
        <div>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
          <span className="m-3 ">{count}</span>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
        </div>
        <div>
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Add Async
          </button>
        </div>
      </Container>
    </div>
  );
}
