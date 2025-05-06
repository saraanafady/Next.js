// app/user/[id]/route.js
import { users } from "../data";

export async function GET(req, { params }) {
    const id = parseInt(params.id);
    const user = users.find(user => user.id === id);
    
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404
        });
    }
    
    return Response.json(user);
}

export async function DELETE(req, { params }) {
    const id = parseInt(params.id);
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404
        });
    }
    
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    
    return new Response(JSON.stringify(deletedUser));
}

export async function PUT(req, { params }) {
    const id = parseInt(params.id);
    const { name, email } = await req.json();
    
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404
        });
    }
    
    users[userIndex].name = name;
    users[userIndex].email = email;
    
    return new Response(JSON.stringify(users[userIndex]));
}
