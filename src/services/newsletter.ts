const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export async function subscribeNewsletter(
  email: string,
  interest: string,
  source: string,
  type: "newsletter" | "resource_download" = "newsletter"
) {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        type,
        email,
        interest,
        source,
        createdAt: new Date().toISOString(),
      }),
    });

    return {
      success: true,
      message: "Success",
    };

  } catch (error) {

    console.error("Newsletter Error:", error);

    return {
      success: false,
      message: "Failed to submit.",
    };
  }
}