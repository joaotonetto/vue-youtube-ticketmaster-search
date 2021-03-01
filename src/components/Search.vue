<template>
  <div>
    <form>
      <div class="search-bar">
        <input
          type="search"
          id="band-search"
          placeholder="Sua banda..."
          autosave
        />
        <button class="search-btn" type="subtmit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
};
</script>

<style scoped>
    div {
        width: 100%;
    }
    input {
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        border-style: none;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: var(--grey);
        background-color: white;
        background-clip: padding-box;
        border: 1px solid white;
        border-radius: 1rem 0 0 1rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    input:focus,:hover,:active {
        outline-style: none;
    }

    button {
        color: white;
        background-color: var(--red);
        font-size: 1em;
        font-weight: 500;
        height: 38px;
        padding: 0.375rem 1rem;
        line-height: 1.5;
        outline: 0;
        text-decoration: none;
        border: none;
        border-radius: 0 1rem 1rem 0;
    }
    @media (min-width: 992px) {
        input {
            width: 50%;
        }
    }
    @media (max-width: 992px) {
        input {
            width: 70%;
        }
    }
    @media (max-width: 319px) {
        button {
            border-radius: 1rem;
            margin-top: 0.5em;
        }
        input {
            border-radius: 1rem;
        }
    }
</style>