<script>
  import '../app.css'
  import '../fonts.css'
  import Nav from '$lib/Nav.svelte'
</script>

<div class="min-h-screen flex flex-col">
  <Nav />

  <main class="grid gap-8 place-items-center container mx-auto p-4">
    <slot />
  </main>

  <footer class="border-t mt-auto">
    <div class="container mx-auto p-4 text-center">
      <p class="text-sm">&copy; 2024 Samuel Weavers. All rights reserved.</p>
    </div>
  </footer>
</div>
