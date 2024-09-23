<template>
  <header class="header">
    <div class="logo">
      <img src="/img/logo.png" alt="Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li>Home</li>
        <li>Buy</li>
        <li>Rent</li>
        <li>Off plan</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: black;
}

.logo {
  width: 214px;
  height: 86px;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.logo img {
  width: 100%;
  height: 100%;
}

.nav {
  display: flex;
  align-items: flex-end;
  margin-right: 2rem;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 2.5rem;
  }
}
</style>
