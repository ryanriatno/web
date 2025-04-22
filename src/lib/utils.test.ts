import { describe, it, expect } from "vitest";
import { dateRange } from "./utils";

describe("utils", () => {
  describe("dateRange", () => {
    it("should format date range correctly", () => {
      const start = new Date("2020-01-01");
      const end = new Date("2022-12-31");
      expect(dateRange(start, end)).toBe("Jan 2020 - Dec 2022");
    });

    it("should handle present date", () => {
      const start = new Date("2020-01-01");
      expect(dateRange(start)).toBe("Jan 2020 - Present");
    });
  });
}); 