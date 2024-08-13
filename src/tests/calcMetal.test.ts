import { describe, expect, it } from "vitest";
import { calcMetalFuction } from "../helpers";
import { ShapeValueType } from "../types";

const mark = 7850;
const price = 50;
const length = "мм.";
const weight = "кг.";

const fnCalc = (type: ShapeValueType, sizes: number[]) => {
  return calcMetalFuction(type, mark, sizes, price, length, weight);
};

describe("calcMetalFunction", () => {
  it("Pipe Square", () => {
    const result = fnCalc("pipe-square", [100, 100, 1000, 10]);
    expect(result.weight).toStrictEqual("31.40");
    expect(result.price).toStrictEqual("1570.00 руб.");
    expect(result.square).toStrictEqual("0.40");
  });

  it("Pipe", () => {
    const result = fnCalc("pipe", [100, 10, 1000]);
    expect(result.weight).toStrictEqual("22.20");
    expect(result.price).toStrictEqual("1109.77 руб.");
    expect(result.square).toStrictEqual("0.31");
  });

  it("Circle", () => {
    const result = fnCalc("circle", [100, 1000]);
    expect(result.weight).toStrictEqual("61.65");
    expect(result.price).toStrictEqual("3082.69 руб.");
    expect(result.square).toStrictEqual("0.31");
  });

  it("Corner", () => {
    const result = fnCalc("corner", [100, 100, 1000, 10]);
    expect(result.weight).toStrictEqual("14.91");
    expect(result.price).toStrictEqual("745.75 руб.");
    expect(result.square).toStrictEqual("0.40");
  });

  it("Corner 6", () => {
    const result = fnCalc("corner6", [100, 1000]);
    expect(result.weight).toStrictEqual("68.30");
    expect(result.price).toStrictEqual("3414.75 руб.");
    expect(result.square).toStrictEqual("0.31");
  });

  it("Ribbon", () => {
    const result = fnCalc("ribbon", [10, 100, 1000]);
    expect(result.weight).toStrictEqual("7.85");
    expect(result.price).toStrictEqual("392.50 руб.");
    expect(result.square).toStrictEqual("0.10");
  });

  it("Rail", () => {
    const result = fnCalc("rail", [100, 100, 5, 5, 1000]);
    expect(result.weight).toStrictEqual("11.38");
    expect(result.price).toStrictEqual("569.13 руб.");
    expect(result.square).toStrictEqual("0.59");
  });

  it("Sheet", () => {
    const result = fnCalc("sheet", [100, 100, 1000, 1]);
    expect(result.weight).toStrictEqual("78.50");
    expect(result.price).toStrictEqual("3925.00 руб.");
    expect(result.square).toStrictEqual("0.10");
  });

  it("Shweller", () => {
    const result = fnCalc("shwell", [100, 100, 1000, 5]);
    expect(result.weight).toStrictEqual("10.99");
    expect(result.price).toStrictEqual("549.50 руб.");
    expect(result.square).toStrictEqual("0.60");
  });

  it("Square", () => {
    const result = fnCalc("square", [100, 1000]);
    expect(result.weight).toStrictEqual("78.50");
    expect(result.price).toStrictEqual("3925.00 руб.");
    expect(result.square).toStrictEqual("0.40");
  });
});
