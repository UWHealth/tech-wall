<script>
  import NameCircle from "./NameCircle.svelte";
  export let paragraphs = [""];
  export let firstName;
  export let lastName;
  export let year;
</script>

<article class="p-0 story" b-b5asbswnas="">
	<!--!-->
	<div class="container story__container">
		<div class="cover"><img alt="" class="cover__img" src="https://picsum.photos/1920/1080"></div>
		<!--!-->
		<div id="Content" class="row" style="position: relative;">
			<div class="col-6 meta">
				<!--!-->

				<div class="Card meta__container">

          <NameCircle {firstName} {lastName} {year}/>

					<div id="Name" class="meta__title">Cyrus Abra'Movich</div>
					<!--!-->
					<div id="Organ" class="meta__organ">Kidney</div>
					<!--!-->
					<div id="TxpDate" class="meta__date">9/10/1992</div>
				</div>
			</div>
			<!--!-->
			<div id="Story" class="col-6 px-2 story__content">
        {#each paragraphs as paragraph}
          <p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</article>

<style lang="scss">
  @import './_functions.scss';

  .story {
    width: 100%;
    aspect-ratio: 9/16;
    overflow: hidden;
    background-color: white;
    position: relative;
  }

  .row {
    max-width: 1080px;
    box-sizing: content-box;
    padding: 0 space(4);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: space(4);
    height: 100%;
    margin: 0 auto;
  }

  .cover {
    aspect-ratio: 8/6;
    width: 100%;
  }

  .cover__img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .meta__container {
    text-align: center;
    padding-top: space(4);
  }

  .meta__title {
    font-family: 'bennet-banner';
    font-weight: 900;
    font-size: type(5);
    line-height: 1.001;
    margin-bottom: space(2);
    letter-spacing: -.025em;
    word-spacing: .05em;
    color: #4B5155;
  }

  .meta__organ,
  .meta__date {
    font-size: rem($base);
    text-transform: uppercase;
    letter-spacing: .5em;
    line-height: space(1.5);
    margin-bottom: space(2);
    color: #858d8f;
  }

  .story__content {
    font-size: 1rem;
    line-height: rem($space);
    letter-spacing: 0.02em;
    padding-top: space(3);
    height: 100%;
  }

  .story__content > * {
    position: relative;
  }

  .story__content p:first-child:first-letter {
    float: left;
    font-size: space(7);
    margin-right: .1em;
    margin-left: -.05em;
    color: #43586e;
    line-height: space(5);
    padding-top: space(.5);
  }

  p + p {
    margin-top: rem(32px);
  }

  .story__container:before {
    content: "";
    display: block;
    position: absolute;
    width: 170vw;
    height: 170vw;
    top: 10vw;
    left: -40vw;
    border-radius: 300%;
    border: 1px solid #cfebfa;
    filter: blur(3px);
  }
</style>
