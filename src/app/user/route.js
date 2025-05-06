// app/api/user/route.js
import { users } from "./data";

export async function GET() {
    return Response.json(users);
}

export async function POST(req) {
    const user = await req.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser));
}