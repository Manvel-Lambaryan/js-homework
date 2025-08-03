interface INotification {
  send(message: string): void;
}

class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending EMAIL with message: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending PUSH notification with message: ${message}`);
  }
}

class SlackNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SLACK message: ${message}`);
  }
}

class NotificationFactory {
  private static registry: Record<string, new () => INotification> = {
    email: EmailNotification,
    sms: SMSNotification,
    push: PushNotification,
  };

  static register(type: string, notificationClass: new () => INotification) {
    this.registry[type] = notificationClass;
  }

  static create(type: string): INotification {
    const NotificationClass = this.registry[type];
    if (!NotificationClass) {
      throw new Error(`Notification type "${type}" is not supported.`);
    }
    return new NotificationClass();
  }
}

const notifier = NotificationFactory.create('email');
notifier.send("Welcome to our platform!");  