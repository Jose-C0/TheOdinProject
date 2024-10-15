import crypto from "crypto";

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: crypto.randomUUID()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: crypto.randomUUID()
    }
];

export default messages;