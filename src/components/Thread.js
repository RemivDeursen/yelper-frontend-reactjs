import React from "react";
import db from "../util/MockDB";
import Card from "react-bootstrap/Card";

function Messages() {
    return (
        <div>
            <h1>Messages</h1>
            {db.messages.map((message) => {
                const user = db.users.find((user) => user.id === message.user);
                const thread = db.threads.find((thread) => thread.id === message.thread);

                return (
                    <Card style={{ width: '18rem' }} key={message.id}>
                        <Card.Body>
                            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                            <Card.Text>{message.message}</Card.Text>
                            <Card.Subtitle>Thread: {thread.id}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default Messages;