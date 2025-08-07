import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { ConfirmationData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { name, adults, children, toddlers, phone, attending }: ConfirmationData = await request.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'A1:G1';

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, adults, children, toddlers, phone, attending]],
      },
    });

    return NextResponse.json({ message: 'Success', data: response.data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error writing to sheet' }, { status: 500 });
  }
}