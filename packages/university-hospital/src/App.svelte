<script>
  import './global.css';
  import Card from './lib/Card.svelte';
  import CardList from './lib/CardList.svelte';
  import Grid from './lib/Grid.svelte';
  import Greeting from './lib/Greeting.svelte';

  export let cards = [
    {
      title: 'Need an interpreter?',
      subhead: '¿Need an interpreter?'
    },
    {
      title: 'Need a wheelchair?',
      subhead: '¿Need an interpreter?'
    },
    {
      title: 'Need any other help?',
      subhead: '¿Need an interpreter?'
    }
  ];

  export let greeting = {
    highlighted: 'Hello.',
    greeting: 'How can we help you?'
  }
</script>

<main>
  <div class="skrim"></div>
  <Grid columns={8} gap='2rem'>

    <Greeting {...greeting} />

    <CardList class='card-list'>
      {#each cards as card}
        <Card>
          <svelte:fragment slot="title">{card.title}</svelte:fragment>
        </Card>
      {/each}
    </CardList>

    <div class="self-service"></div>

  </Grid>

</main>

<style>
  main {
    height: 100%;
    width: 100%;
    background-image: url($assets/bg-1.jpg);
    background-size: cover;
    position: relative;
  }

  .skrim {
    position: absolute;
    z-index: 0;
    left: 0; top: 0; bottom: 0; right: 0;
    background-image: linear-gradient(
      to top,
      rgba(0,0,0,40%),
      rgba(0,0,0,0%)
      );
  }

  :global(.skrim + *) {
    position: relative;
  }

  .self-service {
    grid-column: span 3;
  }

  :global(.card-list) {
    grid-column: span 3;
  }
</style>
