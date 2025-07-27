class StorageProvider {
  constructor() {
    if(typeof this.upload !== 'function' || typeof this.download !== 'function') {
      throw new Error("Errorrr!!!!!!!!!!!!!!!");
    }
  }

  upload(file) {

  }

  download(filename){

  }
}

class LocalStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`this is your file --> ${file}`);
  }

  download(filename) {
    console.log(`this is your filename --> ${filename}`);
  }
}

class CloudStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`this is your file --> ${file}`);
  }

  download(filename) {
    console.log(`this is your filename --> ${filename}`);
  }
}

function useStorage(provider) {
  if(typeof provider.upload !== 'function' || typeof provider.download !== 'function') {
    throw new Error("This function isn't implement!!!");
  }
}

