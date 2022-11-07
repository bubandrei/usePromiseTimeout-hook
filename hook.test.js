import { renderHook, act } from "@testing-library/react-hooks";
import { usePromiseTimeout } from "./hook";

const getMessage = async (result) => {
  let message;

  await act(async () => {
    try {
      message = await result.current();
    } catch (e) {
      message = e;
    }
  });

  return message;
};

describe("use promise timeout hook", () => {
  describe("async function", () => {
    const fn = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve("Success!"), 1000);
      });

    test("timeout not exceeded", async () => {
      const { result } = renderHook(() => usePromiseTimeout(fn, 2000));

      const message = await getMessage(result);
      expect(message).toEqual("Success!");
    });

    test("timeout exceeded", async () => {
      const { result } = renderHook(() => usePromiseTimeout(fn, 500));

      const message = await getMessage(result);
      expect(message).toEqual("Timeout exceeded.");
    });
  });

  test("non async function", async () => {
    const fn = () => "Success!";

    const { result } = renderHook(() => usePromiseTimeout(fn, 1000));

    const message = await getMessage(result);
    expect(message).toEqual("Success!");
  });
});
