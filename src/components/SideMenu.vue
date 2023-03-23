<template>
  <div class="side-menu">
    <input type="checkbox" id="smt" class="side-menu-ticker">
    <label class="btn-menu" for="smt">
      <span class="btn-menu-first"></span>
      <span class="btn-menu-second"></span>
      <span class="btn-menu-third"></span>
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
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>

<style lang="scss">
.side-menu {
  display: flex;
  height: 0;
  width: 0;

  & :visited {
    color: black;
  }
}

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
}

.side-menu-ticker {
  display: none;

  &:checked {
    ~.btn-menu {
      right: 5px;
    }

    ~.side-menu-list {
      right: 0;
    }

    ~.btn-menu .btn-menu-first {
      transform: rotate(45deg);
      top: 8px;
    }

    ~.btn-menu .btn-menu-second {
      opacity: 0;
    }

    ~.btn-menu .btn-menu-third {
      transform: rotate(-45deg);
      top: -8px;
    }
  }
}

.btn-menu {
  color: #fff;
  background-color: #777777;
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

  .btn-menu-first,
  .btn-menu-second,
  .btn-menu-third {
    display: block;
    right: 0;
    height: 3px;
    background-color: #fff;
    margin: 5px 0 0;
    transition: all .1s linear .1s;
    position: relative;
  }

  .btn-menu .btn-menu-first {
    margin-top: 0;
  }
}
</style>
