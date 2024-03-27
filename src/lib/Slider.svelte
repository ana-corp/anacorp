<script lang="ts">
  import { onMount } from "svelte";
  import { slides } from "./data";

  let currentSlide = 0;

  onMount(() => {
    setInterval(() => {
      currentSlide = currentSlide == slides.length - 1 ? 0 : currentSlide + 1;
    }, 6000);
  });
</script>

<div>
  {#each slides as s}
    <img
      class="main"
      class:active={s == slides[currentSlide]}
      src={s.img}
      alt=""
      style="object-position: {s.img_position || 'center'};"
      data-text={s.text}
    />
  {/each}
  {#each slides as s}
    <h2 class="home-heading op-2" class:active={s == slides[currentSlide]}>
      {slides[currentSlide].text}
    </h2>
  {/each}

  <!-- {#key currentSlide}
    <p in:fly={{ y: 1000, delay: 300, duration: 600 }}>
      {slides[currentSlide].text}
    </p>
  {/key} -->
  <a href="#about"
    >Scroll down or click here to see the content <br />
    <span>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path></svg
      >
    </span>
  </a>
</div>

<style>
  div {
    display: grid;
    place-items: center;
    position: relative;
    min-height: 100svh;
    overflow: hidden;
  }
  .main {
    width: 100vw;
    height: 100vh;
    position: absolute;
    inset: 0;
    object-fit: cover;
    overflow: hidden;
    opacity: 0;
    will-change: opacity;
    transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  svg {
    vertical-align: middle;
  }

  .main.active {
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  h2 {
    content: attr(data-text);
    text-align: center;

    font-weight: bolder;
    color: white;
    position: absolute;
    transform: translateY(100vh);
    opacity: 0;
    top: 50%;
    will-change: transform;

    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  h2.active {
    opacity: 1;
    transform: translateY(-50%);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  a {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: 600;
    font-size: small;
    text-transform: uppercase;
    padding-inline: 1rem;
  }

  a:hover {
    background-color: #1c1c1c;
    color: #91da32;
  }
</style>
