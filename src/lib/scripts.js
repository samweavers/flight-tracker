import { PUBLIC_API_KEY } from '$env/static/public'
import { flights } from '$lib/stores'

export async function getFlights() {
  const url = `https://api.aviationstack.com/v1/flights?access_key=${PUBLIC_API_KEY}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json()
    const sortedData = data.data.sort(
      (a, b) => a.flight_status - b.flight_status
    )
    flights.set(sortedData)
  } catch (error) {
    console.log(`Error fetching flights: ${error.message}`)
  }
}
