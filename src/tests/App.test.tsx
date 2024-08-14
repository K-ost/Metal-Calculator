import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

const wrapper = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe("App common test", () => {
  it("App renders", () => {
    render(wrapper);
    expect(screen.getByText("Калькулятор металлов")).toBeInTheDocument();
  });

  it("Nav test", async () => {
    render(wrapper);
    expect(screen.getByText("Калькулятор металлов")).toBeInTheDocument();
    expect(screen.queryByText("Калькулятор окраски")).not.toBeInTheDocument();
    await userEvent.click(screen.getByTestId("calc-paint"));
    expect(screen.queryByText("Калькулятор металлов")).not.toBeInTheDocument();
    expect(screen.queryByText("Калькулятор окраски")).toBeInTheDocument();
  });

  it("Counting results", async () => {
    render(wrapper);
    expect(screen.queryByText("Результаты подсчёта")).not.toBeInTheDocument();
    const inputHeight = screen.getByTestId("height");
    const inputWidth = screen.getByTestId("width");
    const inputLength = screen.getByTestId("length");
    const inputWall = screen.getByTestId("wall");
    await userEvent.type(inputHeight, "100");
    await userEvent.type(inputWidth, "100");
    await userEvent.type(inputLength, "1000");
    await userEvent.type(inputWall, "10");
    await userEvent.click(screen.getByText("Посчитать"));
    expect(screen.queryByText("Результаты подсчёта")).toBeInTheDocument();
  });

  it("Removing result", async () => {
    render(wrapper);
    const inputHeight = screen.getByTestId("height");
    const inputWidth = screen.getByTestId("width");
    const inputLength = screen.getByTestId("length");
    const inputWall = screen.getByTestId("wall");
    await userEvent.type(inputHeight, "100");
    await userEvent.type(inputWidth, "100");
    await userEvent.type(inputLength, "1000");
    await userEvent.type(inputWall, "10");
    await userEvent.click(screen.getByText("Посчитать"));
    expect(screen.queryByText("Результаты подсчёта")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Удалить все"));
    expect(screen.queryByText("Удалить все результаты")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("removeHandler"));
    expect(screen.queryByText("Результаты подсчёта")).not.toBeInTheDocument();
  });

  it("Counting paint", async () => {
    render(wrapper);
    await userEvent.click(screen.getByTestId("calc-paint"));
    expect(screen.queryByText("Расход краски")).toBeInTheDocument();
    await userEvent.type(screen.getByTestId("priceField"), "500");
    await userEvent.type(screen.getByTestId("squareField"), "10");
    await userEvent.click(screen.getByTestId("paintCount"));
    expect(screen.queryByText("Результаты подсчёта")).toBeInTheDocument();
    expect(screen.queryByText("133.333")).toBeInTheDocument();
  });
});
