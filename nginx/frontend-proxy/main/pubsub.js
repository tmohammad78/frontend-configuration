export class PubSub {

      data = {}
      subscriberData = {}
      persistedMessages = {}
      subscriberOnMsg = {}

      constructor({ persistedTopics } = {}) {
          if (persistedTopics && !Array.isArray(persistedTopics)) {
            throw new Error("Persisted topics must be an array of topics.");
          }
          if (persistedTopics) {
            this.persistedMessages = persistedTopics.reduce(
              (acc, cur) => {
                acc[cur] = {};
                return acc;
              },
              {}
            );
          }
          this.subscribe.bind(this);
          this.publish.bind(this);
      }

      subscribe(key,onMessage) {
        if (typeof key !== "string") throw new Error("key must be a string.");
        if (typeof onMessage !== "function")
        throw new Error("onMessage must be a function.");

        const subID = uuid();

        if (!(key in this.data)) {
            this.data[key] = [subID];
          } else {
            this.data[key].push(subID);
        }

        this.subscriberOnMsg[subID] = onMessage;
        this.subscriberData[subID] = key;
        if (key in this.persistedMessages) {
            onMessage(this.persistedMessages[key]);
        }
        return subID;
    }

    publish(key, message) {
      if (typeof key !== "string") throw new Error("key must be a string.");
      if (typeof message !== "object") {
        throw new Error("Message must be an object.");
      }
      // If key exists post messages
      if (key in this.data) {
        const subIDs = this.data[key];
        subIDs.forEach((id) => {
          if (id in this.subscriberOnMsg) {
            this.subscriberOnMsg[id](message);
          }
        });
      }
      if (key in this.persistedMessages) {
        this.persistedMessages[key] = message;
      }
    }

    unsubscribe(id) {
      if (typeof id !== "string" || !validateUUID(id)) {
        throw new Error("ID must be a valid UUID.");
      }
      if (id in this.subscriberOnMsg && id in this.subscriberData) {
        delete this.subscriberOnMsg[id];
        const valueData = this.subscriberData[id];
        if (valueData && valueData in this.data) {
          const idx = this.data[valueData].findIndex((tID) => tID === id);
          if (idx > -1) {
            this.data[valueData].splice(idx, 1);
          }
          if (this.data[valueData].length === 0) {
            delete this.data[valueData];
          }
        }
        delete this.subscriberData[id];
      }
  }

}

export default PubSub;

function uuid() {
  // Function to generate a UUID (for simplicity, using a basic version)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function validateUUID(uuid) {
  // Basic UUID validation
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
}