<template>
  <div class="page">
    <div class="mainer">
      <div class="grid">
        <div class="col">
          <h1 class="page__caption">Мои контакты</h1>
          <p>
            Если у Вас есть вопросы или предложения по улучшению нашего сервиса,
            напишите мне.
          </p>
          <table>
            <tr>
              <td>Телефон</td>
              <td>+38(063) 688 24 14</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>kostyrkovladyslav@gmail.com</td>
            </tr>
          </table>
        </div>
        <div class="col" v-if="success">
          <h1 class="page__caption">Ваше сообщение успешно отправлено!</h1>
        </div>
        <div class="col" v-else>
          <h1 class="page__caption">Форма обратной связи</h1>
          <form
            ref="form"
            class="contact-form"
            @submit.prevent="addToDb"
            autocomplete="off"
          >
            <div class="error-block">
              <span
                v-if="!$v.email.required && $v.email.$error"
                class="error-alert"
                >это поле обязательное</span
              >
              <span
                v-if="!$v.email.email || !$v.email.maxLength"
                class="error-alert"
                >введите верный e-mail</span
              >
            </div>
            <input
              type="email"
              name="email"
              id="email"
              v-model.lazy="email"
              @blur="$v.email.$touch()"
              :class="{ invalid: $v.email.$error, dirty: $v.email.$dirty }"
            />
            <label for="email" class="placeholder-label">Ваш E-mail*</label>
            <div class="error-block">
              <span
                class="error-alert"
                v-if="!$v.yourname.required && $v.yourname.$error"
                >это поле обязательное</span
              >
              <span
                v-if="!$v.yourname.alpha || !$v.yourname.maxLength"
                class="error-alert"
                >введите верное имя</span
              >
            </div>
            <input
              type="text"
              name="yourname"
              id="yourname"
              v-model.lazy="yourname"
              @blur="$v.yourname.$touch()"
              :class="{
                invalid: $v.yourname.$error,
                dirty: $v.yourname.$dirty,
              }"
            />
            <label for="yourname" class="placeholder-label">Ваше имя*</label>
            <div class="error-block">
              <span class="error-alert" v-if="!$v.tel.required && $v.tel.$error"
                >это поле обязательное</span
              >
              <span
                v-if="!$v.tel.minLength || !$v.tel.maxLength"
                class="error-alert"
                >введите верный номер</span
              >
            </div>
            <input
              type="tel"
              name="tel"
              id="tel"
              v-model="tel"
              v-mask="'+38(###)-###-##-##'"
              @focus="tel = 0"
              @blur="$v.tel.$touch()"
              :class="{ invalid: $v.tel.$error, dirty: $v.tel.$dirty }"
            />
            <label for="tel" class="placeholder-label">Ваш телефон*</label>
            <div class="error-block">
              <span
                v-if="!$v.comment.required && $v.comment.$error"
                class="error-alert"
                >это поле обязательное</span
              >
              <span v-if="!$v.comment.maxLength" class="error-alert"
                >количество символов {{ comment.length }}/2000</span
              >
            </div>
            <textarea
              name="comment"
              id="comment"
              v-model="comment"
              @blur="$v.comment.$touch()"
              :class="{ invalid: $v.comment.$error, dirty: $v.comment.$dirty }"
            ></textarea>
            <label for="comment" class="placeholder-label"
              >Напишите свой вопрос или предложение*</label
            >

            <div class="form-block">* - поле, обязательное для ввода</div>
            <div class="form-block">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                class="custom-checkbox"
                v-model="checkbox"
              />
              <label for="checkbox"><span class="checked"></span></label>
              Я соглашаюсь на обработку
              <u @click="privacy = true">персональных данных</u>
            </div>
            <div v-if="!loading" class="btn-container">
              <button
                type="submit"
                class="btn btn--width"
                :disabled="!checkbox || $v.$invalid || fileError"
              >
                Отправить заявку
              </button>
              <button
                type="button"
                class="btn"
                @click="modalOpen = true"
                :disabled="!checkbox || $v.$invalid"
              >
                <svg v-if="!ie" class="svg-btn">
                  <use xlink:href="../images/svg/sprite.svg#clip" />
                </svg>
                <img
                  v-else
                  class="svg-btn"
                  src="../images/png/clip.png"
                  alt="clip"
                />
              </button>
            </div>
            <div v-else class="col">
              <Loader />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal-file" v-if="modalOpen" @click.self="modalOpen = false">
      <div class="modal-file-body">
        <button type="button" class="btn-remove" @click="modalOpen = false">
          <svg class="svg-remove">
            <use xlink:href="../images/svg/sprite.svg#remove" />
          </svg>
        </button>
        <label>
          <input
            ref="uploadFila"
            type="file"
            id="upload-file"
            name="upload-file"
            accept="image/jpg, image/jpeg, image/png, application/pdf"
            @change="fileUpload"
          />
          <div
            class="modal-file-body__file-label"
            :class="{ error: fileError, valid: fileValid }"
          >
            {{ inputText }}
          </div>
        </label>
        <button
          class="btn btn--width modal-file-body__file-btn"
          @click="triggerUpload"
        >
          Выбрать файл
        </button>
        <button
          class="btn btn--width modal-file-body__file-btn"
          @click="clearFile"
        >
          Очистить
        </button>
        <svg class="svg svg--whale">
          <use xlink:href="../images/svg/sprite.svg#whale" />
        </svg>
        <svg class="svg svg--pineapple">
          <use xlink:href="../images/svg/sprite.svg#pineapple" />
        </svg>
      </div>
    </div>
    <Policy v-if="privacy" @closeModal="privacy = false" />
    <svg class="svg svg--hands">
      <use xlink:href="../images/svg/sprite.svg#hands" />
    </svg>
    <svg class="svg svg--paper-boat">
      <use xlink:href="../images/svg/sprite.svg#paper-boat" />
    </svg>
  </div>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import Loader from "../components/loader";
import Policy from "../components/policy";

export default {
  name: "Contacts",
  components: { Loader, Policy },
  metaInfo: {
    title: "Контакты",
  },
  data() {
    return {
      success: false,
      email: "",
      yourname: "",
      tel: "",
      comment: "",
      checkbox: false,
      file: null,
      fileSrc: "",
      modalOpen: false,
      inputText: "Выберите файл размером до 2 МВ",
      fileError: false,
      fileValid: false,
      privacy: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
    ie() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
  },
  methods: {
    triggerUpload() {
      this.$refs["uploadFila"].click();
    },
    clearFile() {
      this.file = null;
      this.fileSrc = "";
      this.inputText = "Выберите файл размером до 2 МВ";
      this.fileError = false;
      this.fileValid = false;
    },
    fileUpload(event) {
      if (window.FileReader) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.fileSrc = reader.result;
        };
        reader.readAsDataURL(file);
        this.file = file;

        const fileName = file.name;
        let fileSize = file.size;
        const fileType = file.type;
        if (this.validFileType(fileType)) {
          this.fileError = false;

          if (fileSize < 1024) {
            fileSize += "bytes";
            this.inputText = fileName + " " + fileSize;
            this.fileValid = true;
          } else if (fileSize >= 1024 && fileSize < 1048576) {
            fileSize = (fileSize / 1024).toFixed(1) + "KB";
            this.inputText = fileName + " " + fileSize;
            this.fileValid = true;
          } else if (fileSize >= 1048576 && fileSize <= 2097152) {
            fileSize = (fileSize / 1048576).toFixed(1) + "MB";
            this.inputText = fileName + " " + fileSize;
            this.fileValid = true;
          } else {
            this.file = null;
            this.fileError = true;
            this.fileValid = false;
            this.inputText = "Максимальный размер файла 2 МВ";
          }
        } else {
          this.file = null;
          this.fileError = true;
          this.fileValid = false;
          this.inputText = "Неправельный формат файла!";
        }
      }
    },
    validFileType(file) {
      const fileTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "application/pdf",
      ];
      return !!fileTypes.find((type) => type === file);
    },
    async addToDb() {
      const review = {
        email: this.email,
        yourname: this.yourname,
        tel: this.tel,
        comment: this.comment,
        checkbox: this.checkbox,
        file: this.file,
        date: new Date().toJSON(),
        done: false,
      };
      await this.$store
        .dispatch("createReview", review)
        .then(() => {
          this.$refs.form.reset();
          this.success = true;
        })
        .catch(() => {});
    },
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(40),
    },
    yourname: {
      required,
      alpha: (val) => /^[а-яё,і,ї,є,a-z,',-,\s]*$/i.test(val),
      maxLength: maxLength(40),
    },
    tel: {
      required,
      maxLength: maxLength(18),
      minLength: minLength(18),
    },
    comment: {
      required,
      maxLength: maxLength(2000),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  &__caption {
    text-align: left;
    margin-bottom: 25px;

    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
}
.grid {
  display: flex;
  min-height: calc(100vh - 110px - 85px - 83px);
  margin: 0 -10px;

  @media screen and (max-width: 991px) {
    min-height: calc(100vh - 20px - 85px - 83px);
  }
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 20px - 65px - 53px);
    flex-direction: column;
  }
}
.col {
  width: 50%;
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
}
p,
td,
.form-block,
label,
input:not([type="file"]),
textarea {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: $colorTextMain;
  letter-spacing: 0.04em;

  @media screen and (max-width: 991px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
    line-height: 21px;
  }
  @media screen and (max-width: 374px) {
    font-size: 13px;
    line-height: 18px;
  }
}
td {
  padding: 0 20px 25px 0;

  @media screen and (max-width: 991px) {
    padding: 0 15px 25px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 0 10px 20px 0;
  }
  @media screen and (max-width: 374px) {
    padding: 0 3px 20px 0;
  }
}
table {
  margin-top: 34px;

  @media screen and (max-width: 991px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
.contact-form {
  .error-block {
    height: 15px;
    text-align: right;
    margin-bottom: 5px;
  }
  .error-alert {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 15px;
    color: $colorImportant;
    text-align: right;
  }
  .form-block,
  label {
    display: block;
    letter-spacing: 0;
  }
  .placeholder-label {
    margin-left: 15px;
    transform: translateY(-25px);
    transition-duration: 0.3s;
  }
  .form-block {
    margin-bottom: 25px;

    @media screen and (min-width: 768px) and (max-width: 1100px) {
      font-size: 15px;
    }
    @media screen and (max-width: 479px) {
      font-size: 11px;
      letter-spacing: -0.2px;
      margin-bottom: 10px;
    }
    &:last-of-type {
      margin-bottom: 50px;
    }
  }
  u {
    font-weight: 500;
    cursor: pointer;
  }
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    // transform: translateX(-30px);

    & + label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      border: 1px solid $colorTextMain;
      box-sizing: border-box;
      margin-right: 10px;
      vertical-align: middle;
      cursor: pointer;

      @media screen and (max-width: 479px) {
        margin-right: 5px;
      }
      & > .checked {
        display: block;
        width: 10px;
        height: 10px;
      }
    }
    &:focus + label {
      border-color: $colorBrend;
    }
    &.invalid + label {
      border-color: $colorImportant;
    }
    &:checked + label > .checked {
      background-color: $colorBrend;
    }
  }
  input:not([type="checkbox"]),
  textarea {
    width: 100%;
    background-color: transparent;
    padding: 4px 2px;
    border: none;
    border-bottom: 1px solid $colorTextMain;
    // margin-top: 10px;

    &:focus {
      border-bottom-color: $colorBrend;
    }
    &:focus + .placeholder-label,
    &.invalid + .placeholder-label,
    &.dirty + .placeholder-label {
      transform: translateY(-55px);
      font-size: 15px;
      color: $colorBrend;
      margin-left: 5px;

      @media screen and (min-width: 768px) and (max-width: 1100px) {
        font-size: 14px;
        line-height: 21px;
      }
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 21px;
      }
      @media screen and (max-width: 479px) {
        font-size: 14px;
      }
      @media screen and (max-width: 374px) {
        font-size: 12px;
        transform: translateY(-50px);
      }
    }
    &.invalid {
      border-bottom: 1px solid $colorImportant;

      & + .placeholder-label {
        color: $colorImportant;
      }
    }
  }
  textarea {
    height: 165px;
    resize: none;

    @media screen and (max-width: 575px) {
      height: 65px;
    }
    & + .placeholder-label {
      transform: translateY(-165px);

      @media screen and (max-width: 575px) {
        transform: translateY(-65px);
      }
    }
    &:focus + .placeholder-label,
    &.invalid + .placeholder-label,
    &.dirty + .placeholder-label {
      transform: translateY(-192px);

      @media screen and (min-width: 768px) and (max-width: 1100px) {
        transform: translateY(-203px);
      }
      @media screen and (max-width: 575px) {
        transform: translateY(-103px);
      }
    }
  }
  .btn-container {
    @media screen and (max-width: 767px) {
      margin: 53px 0 20px 0;
    }
    @media screen and (max-width: 575px) {
      text-align: center;
    }

    & .btn {
      display: inline-block;
      vertical-align: middle;

      &--width {
        margin-right: 10px;

        @media screen and (max-width: 575px) {
          margin-right: 20px;
        }
      }
    }
    & .svg-btn {
      display: block;
      width: 8px;
      height: 17px;
      fill: $colorBackground;
      margin: 0 auto;
    }
  }
}
.modal-file {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-file-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 803px;
  width: 100%;
  min-height: 194px;
  background-color: $colorBrend;
  text-align: center;
  padding: 20px 45px;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 375px;
    max-height: 812px;
    height: 100%;
  }
  &__file-label {
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    color: $colorBackground;
    text-align: center;
    border: 1px dashed $colorBackground;
    border-radius: 5px;
    display: block;
    width: 100%;
    padding: 29px 5px;
    box-sizing: border-box;
    margin-bottom: 13px;

    @media screen and (max-width: 767px) {
      font-size: 18px;
      word-wrap: break-word;
    }
    &.error {
      background-color: rgba($colorImportant, 0.7);
      border-color: $colorImportant;
      border-style: solid;
    }
    &.valid {
      background-color: rgba(#07a507, 0.5);
      border-color: #07a507;
      border-style: solid;
    }
  }
  &__file-btn {
    display: inline-block;
    color: $colorBrend;
    background-color: $colorBackground;
    margin: 0 20px;

    @media screen and (max-width: 767px) {
      margin: 10px 0;
    }
  }
  input[type="file"] {
    z-index: -1;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-remove {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width: 575px) {
      top: 20px;
      right: 20px;
    }
    & .svg-remove {
      width: 18px;
      height: 18px;
      stroke: $colorBackground;
    }
    &:hover,
    &:focus {
      & .svg-remove {
        stroke: $colorImportant;
      }
    }
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--whale {
    left: -25px;
    bottom: 0;
    stroke: $colorBackground;
    width: 269px;
    height: 97px;

    @media screen and (max-width: 767px) {
      top: 20px;
      left: -25px;
      bottom: auto;
    }
  }
  &--pineapple {
    right: -8px;
    bottom: -24px;
    stroke: $colorBackground;
    width: 81px;
    height: 175px;
  }
  &--hands {
    left: 0;
    bottom: 0;
    stroke: $colorTextMain;
    width: 539px;
    height: 221px;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1600;
    animation: svgShow 15s linear 2s infinite alternate;

    @media screen and (max-width: 575px) {
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
    }
  }
  &--paper-boat {
    top: 155px;
    right: -12px;
    stroke: $colorTextMain;
    width: 218px;
    height: 112px;
    stroke-dasharray: 140;
    stroke-dashoffset: 160;
    transform: rotate(-20deg);
    animation: svgShow 10s linear 4s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>