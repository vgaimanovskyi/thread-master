<template>
  <div class="modal" @click.self="closeModal">
    <Share
      v-if="share"
      :link="link"
      :description="product.description"
      :name="product.name"
      :media="media"
      @closeShare="share = false"
    />
    <div class="mainer">
      <div class="modal-body" ref="modal">
        <h2 class="name">{{ product.name }}</h2>
        <div class="parameters">
          <b>Размер:</b>
          {{ product.size }}
        </div>
        <div class="parameters">
          <b>Материал:</b>
          {{ product.material }}
        </div>
        <carousel
          class="carousel"
          :perPage="1"
          :loop="true"
          :adjustableHeight="true"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :autoplay="autoplay"
          :navigationClickTargetSize="11"
          :navigationPrevLabel="prevBtn"
          :navigationNextLabel="nextBtn"
        >
          <slide v-for="(img, index) in product.urlGallery" :key="index">
            <div class="slide-block">
              <div class="btn-conteiner">
                <svg
                  class="svg-btn svg-btn--share"
                  title="Поделиться"
                  @click="openShare(img)"
                >
                  <!-- @click="sharePhoto(img)" -->
                  <use xlink:href="../images/svg/sprite.svg#share" />
                </svg>
                <svg
                  class="svg-btn"
                  title="включить автопрокрутку"
                  @click="autoplay = !autoplay"
                >
                  <use
                    v-if="!autoplay"
                    xlink:href="../images/svg/sprite.svg#play"
                  />
                  <use v-else xlink:href="../images/svg/sprite.svg#pause" />
                </svg>
              </div>
              <div
                class="btn-conteiner btn-conteiner--remove"
                title="закрыть"
                @click="closeModal"
              >
                <svg class="svg-btn">
                  <use xlink:href="../images/svg/sprite.svg#remove" />
                </svg>
              </div>
              <div class="img-block">
                <img
                  class="img-block__photo"
                  :ref="`${product.id}` - `${index + 1}`"
                  :src="img"
                />
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import btnNext from "../images/svg/btnNext.svg";
import btnPrev from "../images/svg/btnPrev.svg";
import Share from "../components/share";

export default {
  name: "modal",
  components: { Carousel, Slide, Share },
  /*   props: ["product"], */
  data() {
    return {
      id: this.$route.params["id"],
      share: false,
      media: "",
      link: window.location.href,
      autoplay: false,
    };
  },
  computed: {
    modalHeight() {
      return this.$refs["modal"].clientHeight;
    },
    nextBtn() {
      return `<img src="${btnNext}"/>`;
    },
    prevBtn() {
      return `<img src="${btnPrev}"/>`;
    },
    product() {
      return this.$store.getters.getProductById;
    },
  },
  methods: {
    closeModal() {
      this.$router.push("/gallery");
      this.$emit("modalHeight", "auto");
    },
    openShare(img) {
      this.media = img;
      this.share = true;
    },
    /* sharePhoto(link) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          window.open(link, "_blank");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
      /* if (navigator.share) {
        console.log("Congrats! Your browser supports Web Share API");

        // navigator.share принимает объект с URL, title или text
        navigator
          .share({
            title: "Bits and pieces: Web Share APприI article",
            text: "Web Share API feature is awesome. You must check it",
            url: link,
          })
          .then(function () {
            console.log("Shareing successfull");
          })
          .catch(function () {
            console.log("Sharing failed");
          });
      } else {
        console.log("Sorry! Your browser does not support Web Share API");
      }
    }, */
    scrollTop() {
      window.scrollTo({
        top: 0,
        // behavior: "smooth",
      });
    },
  },
  created() {
    this.$store.dispatch("getProductById", this.id);
    setTimeout(() => {
      this.$emit("modalHeight", this.modalHeight);
    }, 1000);
    this.scrollTop();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.modal {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
}
.modal-body {
  max-width: 1145px;
  margin: 95px auto;
}
.name {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: $colorTextMain;
  margin-bottom: 11px;
}
.parameters {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  color: $colorTextMain;
}
.carousel {
  margin-top: 15px;
}
.slide-block {
  position: relative;
  height: 100%;

  .btn-conteiner {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 8px 0;
    z-index: 1000;

    &--remove {
      left: auto;
      right: 0;
      border-radius: 0 0 0 8px;
    }
    .svg-btn {
      display: inline-block;
      width: 18px;
      height: 18px;
      stroke: $colorTextMain;
      fill: $colorTextMain;
      padding: 20px;
      transition-duration: 0.3s;
      cursor: pointer;

      &:hover,
      &:focus {
        stroke: $colorBrend;
        fill: $colorBrend;
        box-shadow: inset 0 0 10px $colorBrend;
      }
      &--share {
        stroke: none;
        fill: $colorTextMain;

        &:hover,
        &:focus {
          stroke: inherit;
          fill: $colorBrend;
        }
      }
    }
  }
}
.img-block {
  height: 100%;
  display: flex;
  align-items: center;

  &__photo {
    display: block;
    width: 100%;
    border-radius: 8px;
  }
}
</style>