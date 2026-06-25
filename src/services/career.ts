const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export async function submitCareerApplication(data: {
  name: string;
  email: string;
  phone: string;
  resume: string;
  jobTitle: string;
  message: string;
}) {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        type: "career",
        ...data,
        source: "Career Page",
        createdAt: new Date().toISOString(),
      }),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}