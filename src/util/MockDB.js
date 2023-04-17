const db = {
    users: [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            password: "password123",
            email: "johndoe@example.com",
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Doe",
            username: "janedoe",
            password: "password456",
            email: "janedoe@example.com",
        },
    ],
    messages: [
        {
            id: 1,
            user: 1,
            message: "Hello, world!",
            thread: 1,
        },
        {
            id: 2,
            user: 2,
            message: "How are you?",
            thread: 1,
        },
    ],
    threads: [
        {
            id: 1,
            messageList: [1, 2],
        },
    ],
};

export default db;
