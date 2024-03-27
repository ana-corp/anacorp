<script lang="ts">
  import Icon from "./Icon.svelte";
  import { email, kontak, type kontakType } from "./data";

  const kontakPrefix = {
    phone: "tel:",
    email: "mailto:",
    whatsapp: "https://wa.me/",
  };

  const kt = [...kontak, { type: "email" as kontakType, detail: email }];
</script>

{#each kt as k}
  <a
    title="{k.type} {k.detail}"
    href="{kontakPrefix[k.type] || ''}{k.detail}"
    style="display:flex; gap:1rem; color:black; font-size:18px; margin-bottom:0.5em"
  >
    <Icon i={k.type} />
    <span>
      {k.detail}
    </span>
  </a>
{/each}
