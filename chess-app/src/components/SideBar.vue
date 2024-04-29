<template>
    <div id="sidebar">
      <ul class="selected-squares">
        <div class="row">
          <li v-bind:key="selectedSquare" v-for="selectedSquare of selectedSquares">{{ selectedSquare }}</li>
        </div>
      </ul>
    </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    selectedSquares: { type: Array }
  }
};
</script>

<style>
#sidebar {
  height: calc(80vh - 40px);
  width: 35vw;
  max-width: 250px;
  max-height: 700px;
  margin-top: 15px;
  margin-bottom: 0%;
  background-color: #36454F;
  overflow: scroll;
  font-weight: bold;
  flood-color: rgb(5, 0, 0);
}

.selected-squares {
  color: #050505;
  list-style-type: none;
  display: contents;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px
}

li {
  flex-basis: 50px;
}

@media only screen and (max-width: 600px) {
  #sidebar {
    height: 25vh; /* Small change to height for a better aspect ratio */
    width: 100%; /* Full width for better use of space on small screens */
    overflow-y: auto; /* 'auto' only shows scrollbar when needed */
  }

  .row {
    margin: 0 10px; /* Adding margin instead of reducing width for padding */
  }

  li {
    flex-basis: 50%; /* Easier to tap with larger area on small screens */
    font-size: 14px; /* Slightly larger font for better readability */
    padding: 10px; /* Add padding for touch friendliness */
  }
}

@media only screen and (min-width: 601px) and (max-width: 1024px) {
  #sidebar {
    height: auto; /* Let the content determine the height */
    width: 50vw; /* Utilize more screen real estate on larger devices */
    padding: 10px; /* Add some internal space */
  }

  li {
    flex-basis: 25%; /* Increase number of items per row on larger screens */
    font-size: 16px; /* Larger font size for tablets and small desktops */
  }
}
</style>