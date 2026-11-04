/**
 * NSL Digital Lab — Apps Script reference (copy into your project editor).
 *
 * Editor: https://script.google.com/home/projects/14KZuhdFCvuSU9pLDQ7js1RtxDvKQgMKBpxY59jxFHsNLehfr_DMpZo5P/edit
 * Web app: Deploy → Manage deployments → Web app → /macros/s/AKfycbx…/exec
 *
 * After editing: Deploy → Manage deployments → Edit → New version (keep same /exec URL).
 * Web app: Execute as Me, Who has access: Anyone.
 *
 * Career posts from the site use type "career" and include jobSlug, UTM fields, marketingOptIn.
 * Return { ok: true, id } for career so GA4 generate_lead can fire (see JOB-MARKETING-SETUP.md).
 */

var CAREER_NOTIFY_EMAIL = "hello@nsldigitallab.com";

function notifyCareerApplication(data, id) {
  var subject = "Career application: " + (data.jobTitle || "Role");
  var lines = [
    "Application id: " + id,
    "Role: " + (data.jobTitle || "") + " (" + (data.jobSlug || "") + ")",
    "Name: " + data.name,
    "Email: " + data.email,
    "Phone: " + (data.phone || "—"),
    "Resume / sample: " + (data.resume || "—"),
    "Notes / rates: " + (data.message || "—"),
    "Marketing opt-in: " + (data.marketingOptIn ? "yes" : "no"),
    "UTM: " +
      [data.utmSource, data.utmMedium, data.utmCampaign].filter(function (x) {
        return x;
      }).join(" / "),
    "Landing page: " + (data.landingPage || "—"),
  ];
  MailApp.sendEmail(CAREER_NOTIFY_EMAIL, subject, lines.join("\n"));
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "OK",
      message: "NSL API Running",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const spreadsheet = SpreadsheetApp.openById(
      "1XeT3EHMjMiouUiY6-OFnuBkdMP3RF9OaNfhERpYB7Sg",
    );

    if (data.type === "newsletter" || data.type === "resource_download") {
      const sheet = spreadsheet.getSheetByName("Newsletter");
      if (!sheet) {
        throw new Error('Sheet tab "Newsletter" was not found.');
      }

      sheet.appendRow([
        data.type,
        data.email,
        data.interest || data.resourceTitle || "",
        data.source || data.pageUrl || "",
        new Date(),
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ success: true }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.type === "contact") {
      const sheet = spreadsheet.getSheetByName("Contact Leads");
      if (!sheet) {
        throw new Error('Sheet tab "Contact Leads" was not found.');
      }

      sheet.appendRow([
        data.name,
        data.email,
        data.phone,
        data.service,
        data.message,
        data.source,
        new Date(),
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ success: true }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.type === "career") {
      const sheet = spreadsheet.getSheetByName("Job Applications");
      if (!sheet) {
        throw new Error('Sheet tab "Job Applications" was not found.');
      }

      var id = Utilities.getUuid();

      sheet.appendRow([
        id,
        data.name,
        data.email,
        data.phone,
        data.resume,
        data.jobTitle,
        data.jobSlug || "",
        data.message,
        data.source,
        data.createdAt || "",
        data.marketingOptIn ? "yes" : "no",
        data.utmSource || "",
        data.utmMedium || "",
        data.utmCampaign || "",
        data.landingPage || "",
        new Date(),
      ]);

      notifyCareerApplication(data, id);

      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, id: id }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: "Unknown request type",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
