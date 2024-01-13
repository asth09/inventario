const {
  getVersionFolders,
  removeExtension,
} = require("../../../src/routes");
const fs = require("fs");

describe("router utils functions", () => {
  describe("getVersionFolders", () => {
    it("should be a function", () => {
      expect(getVersionFolders).toBeInstanceOf(Function);
    });

    it("hould throw an error message with the keywords if no versions are provided", () => {
      jest.spyOn(console, "error").mockImplementation(() => {}); // Suprimir la salida de error en la consola
      jest.spyOn(fs, "readdirSync").mockImplementation(() => {
        throw new Error("No version folders found");
      });
      expect(() => getVersionFolders()).toThrow(/(?=.*\bno\b)(?=.*\bfound\b)/i);
    });

    it("should return an array whit versions provided", () => {
      jest.spyOn(fs, "readdirSync").mockReturnValue(["v1"]); // Simular que existen carpetas de versión
      expect(getVersionFolders()).toEqual(["v1"]);
    });
  });

  describe("removeExtension", () => {
    it("should be a fucntion", () => {
      expect(removeExtension).toBeInstanceOf(Function);
    });

    it("should throw if not fileName is provide as parameter", () => {
      expect(() => removeExtension("")).toThrow("should provide a filename");
    });

    it("should remove the extension", () => {
      const fileName = "example.txt";
      const result = removeExtension(fileName);

      expect(result).toBe("example");
    });
  });

});
