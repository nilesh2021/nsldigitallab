const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export async function submitContact(form: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        type: "contact",
        ...form,
        source: "Homepage Contact Form",
        createdAt: new Date().toISOString(),
      }),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Contact Error:", error);

    return {
      success: false,
    };
  }
}