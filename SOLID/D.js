class MessageService {
  send(message) {
    throw new Error('This method must be implemented by a concrete service.');
  }
}

class EmailService extends MessageService {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService extends MessageService {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class MessageSender {
  constructor(service) {
    this.service = service;
  }

  sendMessage(message) {
    this.service.send(message);
  }
}
