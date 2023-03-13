<template>
  <div class="side-bar">
    <div>
      <input type="checkbox" id="smt" class="side-menu-ticker">
      <label class="btn-menu" for="smt">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </label>
      <ul class="side-menu-list">
        <li>
          <router-link class="link" :to="{ name: 'calendar' }">
            Calendar
          </router-link>
        </li>  
        <li>
          <router-link class="link" :to="{ name: 'weather' }">
            Weather
          </router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'main' }">
            Main
          </router-link>
        </li>  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>

<style lang="scss">
.link {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: black;
  text-decoration: none;

  & :visited {
  color: black;
  }
};

.side-menu-list {
  display: block;
  position: fixed;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  width: 200px;
  background-color: #eee;
  height: 100%;
  top: 0;
  right: -200px;
  transition-duration: 1s;
  z-index: 2;
  transform: translateZ(0);
  backface-visibility: hidden;
};

.side-menu-ticker {
  display: none;
};

.btn-menu {
  color: #fff;
  background-color: #000;
  padding: 5px;
  position: fixed;
  top: 5px;
  right: 5px;
  cursor: pointer;
  transition-duration: 1s;
  z-index: 3;
  width: 25px;
  transform: translateZ(0);
  backface-visibility: hidden;
};

.btn-menu span {
  display: block;
  right: 0;
  height: 3px;
  background-color: #fff;
  margin: 5px 0 0;
  transition: all .1s linear .1s;
  position: relative;
};

.btn-menu span.first {
  margin-top: 0;
};

.side-menu-ticker:checked ~ .btn-menu {
  right: 5px;
};

.side-menu-ticker:checked ~ .side-menu-list {
  right: 0;
};

.side-menu-ticker:checked ~ .btn-menu span.first {
  transform: rotate(45deg);
  top: 8px; 
};

.side-menu-ticker:checked ~ .btn-menu span.second {
  opacity: 0;
};

.side-menu-ticker:checked ~ .btn-menu span.third {
  transform: rotate(-45deg);
  top: -8px;    
};

</style>
