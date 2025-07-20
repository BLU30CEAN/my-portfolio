interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Google Apps Script Web App URL (실제 배포 후 URL로 변경 필요)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export const submitToGoogleSheets = async (
  formData: ContactFormData
): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "submitContact",
        data: formData,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return false;
  }
};

// Google Apps Script 코드 (Google Apps Script에서 실행)
/*
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    if (data.action === 'submitContact') {
      const rowData = [
        data.data.timestamp,
        data.data.name,
        data.data.email,
        data.data.subject,
        data.data.message
      ];
      
      sheet.appendRow(rowData);
      
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK' }))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
