import { start } from 'workflow/api';
import { defineEventHandler, readBody } from 'h3';
import { handleUserSignup } from "../../workflows/signup";

export default defineEventHandler(async (event) => {
    const { email } = await readBody(event);

    // Executes asynchronously and doesn't block your app
    await start(handleUserSignup, [email]);

    return Response.json({
        message: "User signup workflow started",
    });
});