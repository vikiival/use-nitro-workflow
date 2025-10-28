import { sleep } from "workflow";
import { createUser, sendOnboardingEmail, sendWelcomeEmail } from "./steps";

export async function handleUserSignup(email: string) {
    "use workflow";

    const user = await createUser(email);
    await sendWelcomeEmail(user);

    await sleep("5s"); // Pause for 5s - doesn't consume any resources
    await sendOnboardingEmail(user);

    return { userId: user.id, status: "onboarded" };
}