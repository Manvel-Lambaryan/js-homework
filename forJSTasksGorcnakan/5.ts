class Alert {
  send(message) {
    throw new Error("This method must be implemented by concrete classes.");
  }
}

class EmailAlert extends Alert {
  send(message) {
    console.log(`Email Alert: ${message}`);
  }
}

class SMSAlert extends Alert {
  send(message) {
    console.log(`SMS Alert: ${message}`);
  }
}

class SlackAlert extends Alert {
  send(message) {
    console.log(`Slack Alert: ${message}`);
  }
}

class ServerMonitor {
  protected alertHandler: any;
  constructor(alertHandler) {
    this.alertHandler = alertHandler;
  }

  checkServer() {
    const isServerDown = Math.random() < 0.5;

    if (isServerDown) {
      this.alertHandler.send("Server is down!");
    } else {
      console.log("Server is running smoothly.");
    }
  }
}

const emailMonitor = new ServerMonitor(new EmailAlert());
emailMonitor.checkServer();

const smsMonitor = new ServerMonitor(new SMSAlert());
smsMonitor.checkServer();

const slackMonitor = new ServerMonitor(new SlackAlert());
slackMonitor.checkServer();