<script lang="ts">
  import * as Accordion from '$lib/components/ui/accordion/index.js'
</script>

<section class="content-block">
  <h2>Frequently asked questions</h2>

  <Accordion.Root class="w-full sm:max-w-[70%]">
    <Accordion.Item value="item-1">
      <Accordion.Trigger
        >Do you work with big or small companies?</Accordion.Trigger
      >
      <Accordion.Content
        >We collaborate with web agencies, startups, small & medium businesses,
        and enterprises. If you are looking for a quality web development
        service, we are probably just the right fit for you.</Accordion.Content
      >
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Can you guarantee results?</Accordion.Trigger>
      <Accordion.Content>
        We are a reliable and easy-to-use web development service. We stand
        behind the work we deliver and provide various guarantees, starting from
        risk-free trial runs, code quality guarantees, and life-time
        post-delivery support.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger
        >How many people do you have on staff?</Accordion.Trigger
      >
      <Accordion.Content>
        We are a team of 150+ experts in web design & development. We are
        separated into small teams, each specializing in a different area - from
        HTML/CSS coding, static websites, CMS integrations, and eCommerce
        solutions. We have highly-profiled experts to help you in every step of
        the web development process.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-4">
      <Accordion.Trigger
        >Can your team work within our project management environment?</Accordion.Trigger
      >
      <Accordion.Content>
        ure, we will be happy to explore your processes and inherit the project
        management styles, tools, and flows you follow. We will come up with a
        solution that is adapted to you, suits your needs, and achieves the best
        results.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-5">
      <Accordion.Trigger>How can I pay for your services?</Accordion.Trigger>
      <Accordion.Content>
        <p>
          We offer a range of payment options like all major credit cards,
          PayPal, bank wires, and Wise.
        </p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-6">
      <Accordion.Trigger>What’s the average turnaround time?</Accordion.Trigger>
      <Accordion.Content>
        The turnaround time for a project may vary depending on its complexity,
        the scope of work, and urgency. We evaluate every project individually
        and in detail to provide options adapted to your needs.
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</section>
