<template>
  <div class="signIn">
    <mt-header title="" class="header-top">
      <router-link to="/" slot="left">
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Screens" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Sign-In" transform="translate(-20.000000, -32.000000)">
                    <rect fill="#FFFFFF" x="0" y="0" width="375" height="667"></rect>
                    <g id="Back" transform="translate(20.000000, 32.000000)" fill="#FD5739" fill-rule="nonzero">
                        <polygon id="Shape" points="20 8.75 4.7875 8.75 11.775 1.7625 10 0 0 10 10 20 11.7625 18.2375 4.7875 11.25 20 11.25"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </router-link>
    </mt-header>

  </div>
</template>
<script>
export default {
  name: 'SignIn'
}
</script>
<style lang="scss">
.header-top {
  padding-left: .53333333rem;
  height: 1.1733333rem;
  background-color: #fff;
  svg {
    width: .5333333rem;
  }
}
svg {
  vertical-align: middle;
}
</style>
