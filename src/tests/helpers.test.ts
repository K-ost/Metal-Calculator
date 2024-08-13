import { describe, expect, it } from "vitest";
import {
  createEmptySizes,
  createLabelFunction,
  transformNumber,
  valueSizeFunction,
} from "../helpers";

describe("Helpers", () => {
  it("createEmptySizes", () => {
    const result = createEmptySizes(3);
    expect(result).toStrictEqual(["", "", ""]);
  });

  it("valueSizeFunction", () => {
    const result = valueSizeFunction("length", "type");
    expect(result).toStrictEqual("type");
    const result2 = valueSizeFunction("number", "type");
    expect(result2).toStrictEqual("шт.");
    const result3 = valueSizeFunction("wall", "type");
    expect(result3).toStrictEqual("мм.");
  });

  it("createLabelFunction", () => {
    const result = createLabelFunction("number", "title");
    expect(result).toStrictEqual("title, шт.");
    const result2 = createLabelFunction("length", "title");
    expect(result2).toStrictEqual("title");
    const result3 = createLabelFunction("wall", "title");
    expect(result3).toStrictEqual("title, мм.");
  });

  it("transformNumber", () => {
    expect(transformNumber(45.123456789)).toStrictEqual("45.123");
    expect(transformNumber(100)).toStrictEqual("100");
    expect(transformNumber(0)).toStrictEqual("0");
  });
});
