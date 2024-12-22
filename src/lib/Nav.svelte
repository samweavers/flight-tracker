<script>
  import logo from '$lib/assets/logo.png'
  import Email from '$lib/Email.svelte'
</script>

<header class="border-b">
  <nav class="container mx-auto p-4 items-center flex justify-between">
    <a href="/" class="w-[40px]"><img alt="The project logo" src={logo} /></a>
    <div class="flex gap-8">
      <a href="/about/" class="w-[40px]">About</a>
      <a href="/projects/" class="w-[40px]">Projects</a>
    </div>
    <Email btn text="Get a website" />
  </nav>
</header>
