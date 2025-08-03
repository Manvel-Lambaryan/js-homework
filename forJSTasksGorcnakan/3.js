var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.files = {};
    }
    LocalStorage.prototype.upload = function (filename, data) {
        console.log("Uploading '".concat(filename, "' to LocalStorage."));
        this.files[filename] = data;
    };
    LocalStorage.prototype.download = function (filename) {
        console.log("Downloading '".concat(filename, "' from LocalStorage."));
        return this.files[filename] || null;
    };
    LocalStorage.prototype.delete = function (filename) {
        console.log("Deleting '".concat(filename, "' from LocalStorage."));
        if (this.files.hasOwnProperty(filename)) {
            delete this.files[filename];
        }
    };
    return LocalStorage;
}());
var ReadOnlyCloudStorage = /** @class */ (function () {
    function ReadOnlyCloudStorage() {
        this.files = {};
        console.log("Connecting to ReadOnlyCloudStorage...");
        this.files["important_backup.txt"] = "This is important data from the cloud.";
    }
    ReadOnlyCloudStorage.prototype.download = function (filename) {
        console.log("Downloading '".concat(filename, "' from ReadOnlyCloudStorage."));
        return this.files[filename] || null;
    };
    return ReadOnlyCloudStorage;
}());
function useReadableStorage(storage) {
    console.log("\n--- Client using IReadableStorage ---");
    var fileContent = storage.download("important_backup.txt");
    if (fileContent) {
        console.log("File content:", fileContent);
    }
    else {
        console.log("File not found.");
    }
}
function useWritableStorage(storage) {
    console.log("\n--- Client using IWritableStorage ---");
    var filename = "new_document.txt";
    var content = "Hello, world!";
    storage.upload(filename, content);
    storage.delete(filename);
    console.log("Operation complete.");
}
console.log("--- Demonstrating LocalStorage ---");
var localFileStorage = new LocalStorage(); // Using a distinct variable name
localFileStorage.upload("my_file.txt", "some data");
useReadableStorage(localFileStorage);
useWritableStorage(localFileStorage);
console.log("\n--- Demonstrating ReadOnlyCloudStorage ---");
var cloudBackupStorage = new ReadOnlyCloudStorage(); // Using a distinct variable name
useReadableStorage(cloudBackupStorage);
