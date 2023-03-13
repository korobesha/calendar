<template>
  <div class="sideMenu">
    <div>
      <input type="checkbox" id="hmt" class="hidden-menu-ticker">
      <label class="btn-menu" for="hmt">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </label>
      <ul class="hidden-menu">
        <li>
          <router-link class="link" :to="{ name: 'calendar'}">
            Calendar
          </router-link>
        </li>  
        <li>
          <router-link class="link" :to="{ name: 'weather'}">
            Weather
          </router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'main'}">
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

  &:visited {
  color: black;
  }
};

.hidden-menu {
  display: block;
  position: fixed;
  list-style:none;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  width: 200px;
  background-color: #eee;
  height: 100%;
  top: 0;
  right: -200px;
  transition: left 1.5s;
  z-index: 2;
  transform: translateZ(0);
  backface-visibility: hidden;
};

.hidden-menu-ticker {
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
  transition: left 1.5s;
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
  transition: all .1s linear .2s;
  position: relative;
};

.btn-menu span.first {
  margin-top: 0;
};

.hidden-menu-ticker:checked ~ .btn-menu {
  right: 5px;
};

.hidden-menu-ticker:checked ~ .hidden-menu {
  right: 0;
};

.hidden-menu-ticker:checked ~ .btn-menu span.first {
  transform: rotate(45deg);
  top: 8px; 
};

.hidden-menu-ticker:checked ~ .btn-menu span.second {
  opacity: 0;
};

.hidden-menu-ticker:checked ~ .btn-menu span.third {
  transform: rotate(-45deg);
  top: -8px;    
};

</style>
