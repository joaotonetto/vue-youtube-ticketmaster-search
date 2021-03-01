<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"      
      viewBox="0 0 414 359"
    >
      <defs>
        <filter
          id="Search"
          x="0"
          y="0"
          width="414"
          height="218"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="-2" dy="4" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feFlood />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="MY"
          x="178.5"
          y="136.73"
          width="120"
          height="99"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="-2" dy="4" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1.5" result="blur-2" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Band"
          x="14.036"
          y="94.586"
          width="375.908"
          height="264.414"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="-2" dy="4" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1.5" result="blur-3" />
          <feFlood />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Logo" transform="translate(-474.5 -90.5)">
        <g transform="matrix(1, 0, 0, 1, 474.5, 90.5)" filter="url(#Search)">
          <text
            id="Search-2"
            data-name="Search"
            transform="translate(6.5 164.5)"
            fill="#e1054e"
            font-size="209"
            font-family="CreamCake, Cream Cake"
          >
            <tspan x="0" y="0">Search</tspan>
          </text>
        </g>
        <g transform="matrix(1, 0, 0, 1, 474.5, 90.5)" filter="url(#MY)">
          <text
            id="MY-2"
            data-name="MY"
            transform="translate(185 208.23)"
            fill="#fff"
            font-size="75"
            font-family="Roboto-BoldItalic, Roboto"
            font-weight="700"
            font-style="italic"
            letter-spacing="-0.082em"
          >
            <tspan x="0" y="0">MY</tspan>
          </text>
        </g>
        <g transform="matrix(1, 0, 0, 1, 474.5, 90.5)" filter="url(#Band)">
          <text
            id="Band-2"
            data-name="Band"
            transform="translate(43.5 305.94) rotate(-8)"
            fill="#e1054e"
            font-size="210"
            font-family="CreamCake, Cream Cake"
          >
            <tspan x="0" y="0">Band</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {},
};
</script>

<style scoped>
    .logo {
      min-width: 120px;
      width: 15vw;
    }
    /*.logo {
      max-width: 400px;
      width: 70%;
    }*/
</style>