import { renderHook } from "@testing-library/react";
import * as Factory from "factory.ts";
import { describe, expect, it } from "vitest";
import { usePaintResultStore } from "../store/resultPaintStore";
import { PaintDataType, PaintType } from "../types";
import { act } from "react-dom/test-utils";

const mockedPaint = Factory.Sync.makeFactory<PaintType>({
  id: Factory.each((i) => i.toString()),
  currency: "USD",
  efficiency: 90,
  layers: 1,
  material: "pipe-square",
  price: 500,
  square: 10,
  thick: 80,
  weight: 1.5,
});

const mockedResult = Factory.Sync.makeFactory<PaintDataType>({
  id: Factory.each((i) => i.toString()),
  consume: "100",
  cover: "100",
  material: "pipe-square",
  necessity: "1",
  priceCover: "100",
});

describe("usePaintResultStore", () => {
  it("Add new result", () => {
    const { result } = renderHook(() => usePaintResultStore());
    act(() => {
      result.current.setResultPaint(mockedPaint.build());
      result.current.setResultPaint(mockedPaint.build());
    });
    const state = result.current.resultsPaint;
    expect(state).toHaveLength(2);
    state.forEach((el) => {
      expect(el).toHaveProperty("consume");
      expect(el.consume).toStrictEqual("133.333");
    });
    result.current.resultsPaint = [];
  });

  it("Remove one result", () => {
    const { result } = renderHook(() => usePaintResultStore());
    result.current.resultsPaint = [
      mockedResult.build({ id: "1" }),
      mockedResult.build({ id: "2" }),
    ];
    act(() => {
      result.current.removePaintResult("2");
    });
    expect(result.current.resultsPaint.find((el) => el.id === "2")).toBeFalsy();
    expect(result.current.resultsPaint).toHaveLength(1);
    result.current.resultsPaint = [];
  });

  it("Remove all results", () => {
    const { result } = renderHook(() => usePaintResultStore());
    result.current.resultsPaint = mockedResult.buildList(3);
    act(() => {
      result.current.removeAllPaintResults();
    });
    expect(result.current.resultsPaint).toHaveLength(0);
  });
});
