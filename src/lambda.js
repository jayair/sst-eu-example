export async function handler (evt) {
  return {
    statusCode: 200,
    body: JSON.stringify(evt, null, 2),
    headers: { 'Content-Type': 'application/json' }
  }
}
