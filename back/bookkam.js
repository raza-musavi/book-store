import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const booksFilePath = path.join(__dirname, "books.json");

export function getBooks() {
  const books = fs.readFileSync(booksFilePath, "utf8");
  return JSON.parse(books);
}

export function saveBooks(books) {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2), "utf8");
}

//we can use read stream
// const readStream = fs.createReadStream("books.json", { encoding: "utf8" });
// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// readStream.on("end", () => {
//   console.log("finished reading");
// });
// readStream.on("error", (error) => {
//   console.log(error);
// });
