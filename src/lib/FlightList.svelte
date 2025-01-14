<script>
  import { flights } from '$lib/stores'

  $: console.log('flights:', $flights)

  function getStatusClass(status) {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100'
      case 'scheduled':
        return 'bg-blue-100'
      case 'cancelled':
        return 'bg-red-100'
      case 'landed':
        return 'bg-gray-100'
      default:
        return ''
    }
  }
</script>

<section class="content-block">
  {#if $flights}
    {#each $flights as flight}
      <article
        class={`flex flex-col w-full p-8 ${getStatusClass(flight.flight_status)}`}
      >
        <h3>
          {flight.airline.name}:
          {flight.departure.airport?.includes('airport')
            ? flight.departure.airport
            : `${flight.departure.airport} Airport`} ➡️
          {flight.arrival.airport?.includes('airport')
            ? flight.arrival.airport
            : `${flight.arrival.airport} Airport`}
        </h3>
        <p>Airline: {flight.airline.name}</p>
        <p>Date: {flight.flight_date}</p>
        <p>Departure: {flight.departure.airport}</p>
        <p>Arrival: {flight.arrival.airport}</p>
        <p>Flight #: {flight.flight.number}</p>
        <p>Status: {flight.flight_status}</p>
      </article>
    {/each}
  {/if}
</section>
