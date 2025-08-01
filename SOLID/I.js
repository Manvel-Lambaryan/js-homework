class Printable {
  print(doc) {
    throw new Error('This method must be implemented.');
  }
}

class Faxable {
  fax(doc) {
    throw new Error('This method must be implemented.');
  }
}

class Scannable {
  scan(doc) {
    throw new Error('This method must be implemented.');
  }
}

class OldPrinter extends Printable {
  print(doc) {
    console.log(`Printing document: ${doc}`);
  }
}

class AllInOnePrinter extends Printable {
  print(doc) {
    console.log(`Printing document: ${doc}`);
  }

  fax(doc) {
    console.log(`Faxing document: ${doc}`);
  }

  scan(doc) {
    console.log(`Scanning document: ${doc}`);
  }
}