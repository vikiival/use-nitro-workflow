import { start } from 'workflow/api';
import { defineHandler } from 'nitro';
import { handleUserSignup } from "../../workflows/signup";

export default defineHandler(async (event) => {
    const { email } = await event.req.json();

    // Executes asynchronously and doesn't block your app
    await start(handleUserSignup, [email]);

    return Response.json({
        message: "User signup workflow started",
    });
});