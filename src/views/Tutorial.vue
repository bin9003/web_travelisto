<template>
  <div class="tutorial">
    <div class="t-conter">
      <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Screens" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Splash" transform="translate(-128.000000, -214.000000)">
                <rect fill="#FFFFFF" x="0" y="0" width="375" height="667"></rect>
                <g id="Logo-Icon" transform="translate(128.000000, 214.000000)">
                    <g id="Group-2">
                        <circle id="Oval-2" fill="#FD5739" cx="60" cy="60" r="60"></circle>
                        <path d="M30.703125,43.3125 C30.703125,38.9374781 30.4687523,33.5000325 30,27 C35.8437792,27.1875009 45.7343053,27.28125 59.671875,27.28125 C73.6094447,27.28125 83.4687211,27.1875009 89.25,27 C88.7812477,33.5000325 88.546875,38.9374781 88.546875,43.3125 C88.546875,46.0625137 88.6562489,48.4999894 88.875,50.625 L86.671875,50.625 C85.6093697,45.2812233 84.3125077,41.054703 82.78125,37.9453125 C81.2499923,34.835922 79.4140732,32.6015693 77.2734375,31.2421875 C75.1328018,29.8828057 72.5312653,29.203125 69.46875,29.203125 L67.265625,29.203125 L67.265625,84.046875 C67.265625,86.7031383 67.5390598,88.6406189 68.0859375,89.859375 C68.6328152,91.0781311 69.6015555,91.9062478 70.9921875,92.34375 C72.3828195,92.7812522 74.5624852,93.0156248 77.53125,93.046875 L77.53125,94.96875 C69.4687097,94.7812491 63.3906455,94.6875 59.296875,94.6875 C55.2656048,94.6875 49.4062884,94.7812491 41.71875,94.96875 L41.71875,93.046875 C44.718765,93.0156248 46.9140555,92.7812522 48.3046875,92.34375 C49.6953195,91.9062478 50.6562473,91.0781311 51.1875,89.859375 C51.7187527,88.6406189 51.984375,86.7031383 51.984375,84.046875 L51.984375,29.203125 L49.875,29.203125 C46.7812345,29.203125 44.1640732,29.8749933 42.0234375,31.21875 C39.8828018,32.5625067 38.0468827,34.789047 36.515625,37.8984375 C34.9843673,41.007828 33.6718805,45.2499731 32.578125,50.625 L30.375,50.625 C30.5937511,48.4999894 30.703125,46.0625137 30.703125,43.3125 Z" id="T" fill="#FFFFFF"></path>
                    </g>
                </g>
            </g>
        </g>
      </svg>
      <div class="title">Travelisto</div>
    </div>
    <div class="t-swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <div class="img">
            <img :src="tImg" alt="">
          </div>
          <div class="centent v-text-center">Plan your travel anytime, anywhere.</div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img">
            <img :src="tImg" alt="">
          </div>
          <div class="centent v-text-center">Plan your travel anytime, anywhere.</div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="v-text-center">
      <mt-button type="danger" class="btn">Create an account</mt-button>
    </div>
    <footer class="footer v-text-center">Already on Travel? Log In</footer>
  </div>
</template>
<script>

import img from '../assets/images/Photo.png'
export default {
  name: 'Tutorial',
  data () {
    return {
      tImg: img
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.tutorial {
  svg {
    width: 1rem;
  }
  .t-conter {
    margin-top: 1.066667rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    padding-left: .1rem;
    font-weight: 500;
    font-size: 0.5rem;
  }
  .t-swipe {
    margin-top: 1.06667rem;
    margin-bottom: .37333333rem;
    // height: 60vh;
    height: 10.93333rem;
    .mint-swipe-indicator {
      background-color: #E0E0E1;
      opacity: 1;
    }
    .mint-swipe-indicator.is-active {
      background: #FD5739;
    }
  }
  .img {
    margin: 0 auto;
    width: 7.4667rem;
    text-align: center;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .centent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.3rem;
    padding: 0 6%;
    font-size: .48rem;
  }
  .v-text-center {
    text-align: center;
  }
  .btn {
    margin: 0 auto;
    width: 89.333%;
    height: 1.493rem;
    border-radius: .7465rem;
    font-size: 0.4533rem;
  }
  .footer {
    padding: 0.3735rem 5%;
    font-size: .4266667rem;
  }
}
</style>
