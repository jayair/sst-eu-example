export async function handler () {
  return {
    statusCode: 200,
    body: 'Hello super-simple test',
    headers: { 'Content-Type': 'text/plain' }
  }
}
