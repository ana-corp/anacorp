<script lang="ts">
  export let data: { title: string; detail: string }[] = [];
</script>

{#each data as d}
  <div class="col-md-4 col-sm-12 feature-column">
    <div class="feature-info">
      <h4>{d.title || "Title"}</h4>
      <p class="feature-description">{d.detail || "detail ".repeat(20)}</p>
    </div>
  </div>
{/each}
