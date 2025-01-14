<script>
  import { getFlights } from '$lib/scripts.js'
  import { Button } from '$lib/components/ui/button/index.js'
</script>

<section class="content-block !py-[10rem]">
  <h1 class="text-center">
    Flight
    <span class="gradient-text">Tracking</span>
  </h1>
  <p class="text-center">Track flights all over the world.</p>
  <Button on:click={getFlights} class="btn">Find Flights</Button>
</section>
