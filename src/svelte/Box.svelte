<script lang="ts">
  import { onMount } from "svelte";
  import { divDrag } from "../common_js/divDrag";
  onMount(async () => {
    //<div class="drag">をドラッグ可能にする
    divDrag();
  });
</script>

<div class="drag-and-drop" />

<style lang="scss">
  div {
    width: 100pt;
    height: 100pt;
    background-color: red;
    &.drag-and-drop {
      cursor: move;
      position: absolute;
      z-index: 1000;
    }
    &.drag {
      z-index: 1001;
    }
  }
</style>
