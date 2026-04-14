const WEBHOOK_URL = "https://hook.eu1.make.com/nhvo0184km5atyyxwslun4bjjtta7ge5";
const API_KEY = "0cd3f98d-d8de-45c5-ac8f-a5da59539790";

interface WebhookPayload {
  source: "demo" | "contact" | "arcade-gate";
  timestamp: string;
  page: string;
  data: Record<string, string | boolean | null>;
}

export async function sendToWebhook(payload: WebhookPayload): Promise<boolean> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": API_KEY,
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
