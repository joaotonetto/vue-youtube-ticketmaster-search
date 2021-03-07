<template>
  <div>
    <form @submit.prevent="searchBtn">
      <div class="search-bar">
        <input
          type="search"
          id="band-search"
          placeholder="Sua banda..."
          autosave
          v-model="searchQuery"
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

  data() {
    return {
      searchQuery: "",
    };
  },

  methods: {
    searchBtn() {
      this.$emit("onSearchRequested", this.searchQuery);
    },
  },
};
</script>

<style scoped>
template {
  margin-top: 5vw;
}

div {
  width: 100%;
  user-select: none;
}
input {
  height: calc(1.5em + 0.75rem + 6px);
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
  box-shadow: var(--blueShadow);
}
input:focus,
input:hover,
input:active {
  outline-style: none;
  box-shadow: var(--hoverBlueShadow);
}

button {
  color: white;
  background: var(--gradBluePurple);
  font-size: 1em;
  font-weight: 500;
  height: calc(1.5em + 0.75rem + 6px);
  padding: 0.5rem 1rem;
  line-height: 1.5;
  outline: 0;
  text-decoration: none;
  border: none;
  border-radius: 0 1rem 1rem 0;
  box-shadow: var(--blueShadow);
  transition: box-shadow 0.15s ease-in-out, background-color 0s ease-in-out;
}

button:hover {
  background: var(--hoverGradBluePurple);
  box-shadow: var(--hoverBlueShadow);
}
button:active {
  background: var(--blue);
}



@media (min-width: 992px) {
  input {
    width: 30%;
  }
}
@media (max-width: 992px) {
  input {
    width: 50%;
  }
}
@media (max-width: 319px) {
  button {
    margin-top: 0px;
  }
}

@media (max-width: 576px) {
  button, input {
    height: calc(1.5em + 0.75rem + 2px);
  }
}
</style>