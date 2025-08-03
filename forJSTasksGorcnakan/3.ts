interface IReadableStorage {
  download(filename: string): string | null;
}

interface IWritableStorage {
  upload(filename: string, data: string): void;
  delete(filename: string): void;
}

class LocalStorage implements IReadableStorage, IWritableStorage {
  private files: { [key: string]: string } = {};

  upload(filename: string, data: string): void {
    console.log(`Uploading '${filename}' to LocalStorage.`);
    this.files[filename] = data;
  }

  download(filename: string): string | null {
    console.log(`Downloading '${filename}' from LocalStorage.`);
    return this.files[filename] || null;
  }

  delete(filename: string): void {
    console.log(`Deleting '${filename}' from LocalStorage.`);
    if (this.files.hasOwnProperty(filename)) {
      delete this.files[filename];
    }
  }
}

class ReadOnlyCloudStorage implements IReadableStorage {
  private files: { [key: string]: string } = {};

  constructor() {
    console.log("Connecting to ReadOnlyCloudStorage...");
    this.files["important_backup.txt"] = "This is important data from the cloud.";
  }

  download(filename: string): string | null {
    console.log(`Downloading '${filename}' from ReadOnlyCloudStorage.`);
    return this.files[filename] || null;
  }
}

function useReadableStorage(storage: IReadableStorage) {
  console.log("\n--- Client using IReadableStorage ---");
  const fileContent = storage.download("important_backup.txt");
  if (fileContent) {
    console.log("File content:", fileContent);
  } else {
    console.log("File not found.");
  }
}

function useWritableStorage(storage: IWritableStorage) {
  console.log("\n--- Client using IWritableStorage ---");
  const filename = "new_document.txt";
  const content = "Hello, world!";

  storage.upload(filename, content);
  storage.delete(filename);
  console.log(`Operation complete.`);
}

console.log("--- Demonstrating LocalStorage ---");
const localFileStorage = new LocalStorage(); // Using a distinct variable name
localFileStorage.upload("my_file.txt", "some data");

useReadableStorage(localFileStorage);

useWritableStorage(localFileStorage);

console.log("\n--- Demonstrating ReadOnlyCloudStorage ---");
const cloudBackupStorage = new ReadOnlyCloudStorage(); // Using a distinct variable name

useReadableStorage(cloudBackupStorage);
