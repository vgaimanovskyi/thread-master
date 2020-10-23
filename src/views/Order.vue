<template>
  <div class="page">
    <div class="mainer">
      <Confirm v-if="orderDone" />
      <h1 class="page__caption">Оформление товара</h1>
      <div class="row">
        <div class="col col--width">
          <h4 class="title">Данные покупателя</h4>
          <div class="customer-content">
            <div class="customer-content__col">
              <h4 class="caption">
                <div
                  class="icon"
                  :class="{ 'icon--active': !customerFormOpen }"
                >
                  <svg class="svg-icon">
                    <use
                      xlink:href="../images/svg/sprite.svg#yes"
                      v-if="!customerFormOpen"
                    />
                    <use xlink:href="../images/svg/sprite.svg#pen" v-else />
                  </svg>
                </div>
                Личные данные
              </h4>
              <form
                ref="customerForm"
                class="contact-form"
                @submit.prevent="writeCustomerData"
                v-if="customerFormOpen"
              >
                <!-- имя -->
                <div class="error-block">
                  <span
                    class="error-alert"
                    v-if="!$v.yourName.required && $v.yourName.$error"
                    >это поле обязательное</span
                  >
                  <span
                    v-if="!$v.yourName.alpha || !$v.yourName.maxLength"
                    class="error-alert"
                    >введите верное имя</span
                  >
                </div>
                <input
                  type="text"
                  name="yourName"
                  id="yourName"
                  autocomplete="off"
                  v-model.lazy="yourName"
                  @blur="$v.yourName.$touch()"
                  :class="{
                    invalid: $v.yourName.$error,
                    dirty: $v.yourName.$dirty,
                  }"
                />
                <label for="yourName" class="placeholder-label"
                  >Ваше имя*</label
                >
                <!-- фамилия -->
                <div class="error-block">
                  <span
                    class="error-alert"
                    v-if="!$v.yourLastName.required && $v.yourLastName.$error"
                    >это поле обязательное</span
                  >
                  <span
                    v-if="!$v.yourLastName.alpha || !$v.yourLastName.maxLength"
                    class="error-alert"
                    >введите верное имя</span
                  >
                </div>
                <input
                  type="text"
                  name="yourLastName"
                  id="yourLastName"
                  autocomplete="off"
                  v-model.lazy="yourLastName"
                  @blur="$v.yourLastName.$touch()"
                  :class="{
                    invalid: $v.yourLastName.$error,
                    dirty: $v.yourLastName.$dirty,
                  }"
                />
                <label for="yourLastName" class="placeholder-label"
                  >Ваша фамилия*</label
                >
                <!-- телефон -->
                <div class="error-block">
                  <span
                    class="error-alert"
                    v-if="!$v.tel.required && $v.tel.$error"
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
                  autocomplete="off"
                  v-model="tel"
                  v-mask="'+38(###)-###-##-##'"
                  @focus="tel = 0"
                  @blur="$v.tel.$touch()"
                  :class="{ invalid: $v.tel.$error, dirty: $v.tel.$dirty }"
                />
                <label for="tel" class="placeholder-label">Ваш телефон*</label>
                <!-- E-mail -->
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
                  autocomplete="off"
                  v-model.lazy="email"
                  @blur="$v.email.$touch()"
                  :class="{
                    invalid: $v.email.$error,
                    dirty: $v.email.$dirty,
                  }"
                />
                <label for="email" class="placeholder-label">Ваш E-mail*</label>
                <button
                  type="submit"
                  class="btn btn--width"
                  :disabled="
                    $v.yourName.$invalid ||
                    $v.yourLastName.$invalid ||
                    $v.tel.$invalid ||
                    $v.email.$invalid
                  "
                >
                  Продолжить
                </button>
              </form>
            </div>
            <div class="customer-content__col">
              <h4 class="caption">
                <div class="icon" :class="{ 'icon--active': false }">
                  <svg class="svg-icon" v-if="deliveryFormOpen">
                    <use xlink:href="../images/svg/sprite.svg#pen" />
                  </svg>
                  <span class="text-icon" v-else>2</span>
                </div>
                Доставка и Оплата
              </h4>
              <form
                ref="deliveryForm"
                class="contact-form"
                @submit.prevent="writeDeliveryData"
                v-if="deliveryFormOpen"
              >
                <!-- город -->
                <div class="error-block">
                  <span
                    class="error-alert"
                    v-if="!$v.city.required && $v.city.$error"
                    >это поле обязательное</span
                  >
                  <span
                    v-if="
                      $v.city.$dirty && !citiesArr.length && !$v.city.$error
                    "
                    class="error-alert"
                    >введите верный адресс</span
                  >
                </div>
                <div class="filter">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="off"
                    v-model="city"
                    @blur="$v.city.$touch()"
                    @input="getCity"
                    @focus="focusCity"
                    :class="{
                      invalid:
                        $v.city.$error || ($v.city.$dirty && !citiesArr.length),
                      dirty: $v.city.$dirty,
                    }"
                  />
                  <label for="city" class="placeholder-label">Город*</label>
                  <div class="filter__list" v-show="cityListOpen">
                    <label
                      v-for="(item, index) in citiesArr"
                      :key="index"
                      :title="item.Present"
                    >
                      <input
                        type="radio"
                        :value="index"
                        v-model="checkedCityIndex"
                        @click="checkCity(index)"
                      />
                      {{ item.Present }}
                    </label>
                  </div>
                </div>
                <!-- способ доставки -->
                <div class="error-block">
                  <span
                    v-if="deliveryListOpen && !deliveryName.length"
                    class="error-alert"
                    >выберите доставку</span
                  >
                </div>
                <div class="filter">
                  <div
                    class="filter-name"
                    :class="{
                      dirty: deliveryListOpen || deliveryName.length,
                    }"
                    @click="deliveryListOpen = !deliveryListOpen"
                  >
                    {{ deliveryName }}
                  </div>
                  <label
                    class="placeholder-label"
                    @click="deliveryListOpen = true"
                    >Способ доставки*</label
                  >
                  <div class="filter__list" v-show="deliveryListOpen">
                    <label v-if="checkedCity.Warehouses">
                      <input
                        type="radio"
                        value="warehouse"
                        v-model="deliveryValue"
                        @change="deliveryChecked"
                        @click="deliveryListOpen = false"
                      />
                      Доставка в отделение (Новая Почта)
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="deliveryboy"
                        v-model="deliveryValue"
                        @change="deliveryChecked"
                        @click="deliveryListOpen = false"
                      />
                      Доставка курьером (Новая Почта)
                    </label>
                  </div>
                </div>
                <!-- отделение -->
                <div v-if="deliveryValue === 'warehouse'">
                  <div class="error-block">
                    <span
                      class="error-alert"
                      v-if="!$v.warehouse.required && $v.warehouse.$error"
                      >это поле обязательное</span
                    >
                    <span
                      v-if="!$v.warehouse.uniq && $v.warehouse.$error"
                      class="error-alert"
                      >введите верный адресс</span
                    >
                  </div>
                  <div class="filter">
                    <input
                      type="text"
                      name="warehouse"
                      id="warehouse"
                      autocomplete="off"
                      v-model="warehouse"
                      @blur="$v.warehouse.$touch()"
                      @focus="
                        getWarehouse();
                        warehouseListOpen = true;
                      "
                      @input="warehouseFilter"
                      :disabled="!city.length"
                      :class="{
                        invalid: $v.warehouse.$error,
                        dirty: $v.warehouse.$dirty,
                      }"
                    />
                    <label for="warehouse" class="placeholder-label"
                      >Отделение*</label
                    >
                    <div class="filter__list" v-show="warehouseListOpen">
                      <label
                        v-for="(item, index) in warehouseFilter()"
                        :key="item.Ref"
                        :title="item.Description.replace('на одне місце', '')"
                      >
                        <input
                          type="radio"
                          :value="index"
                          v-model="checkedWarehouseIndex"
                          @click="checkWarehouse(item.Ref)"
                        />
                        {{ item.Description.replace("на одне місце", "") }}
                      </label>
                    </div>
                  </div>
                </div>
                <!-- адресс -->
                <div class="address" v-if="deliveryValue === 'deliveryboy'">
                  <div class="address__col address__col--width">
                    <div class="error-block">
                      <span
                        class="error-alert"
                        v-if="!$v.street.required && $v.street.$error"
                        >это поле обязательное</span
                      >
                      <span
                        v-if="!$v.street.minLength || !$v.street.maxLength"
                        class="error-alert"
                        >введите верный адресс</span
                      >
                    </div>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      autocomplete="off"
                      v-model="street"
                      @blur="$v.street.$touch()"
                      :class="{
                        invalid: $v.street.$error,
                        dirty: $v.street.$dirty,
                      }"
                    />
                    <label for="street" class="placeholder-label">Улица*</label>
                  </div>
                  <div class="address__col">
                    <div class="error-block">
                      <span
                        class="error-alert"
                        v-if="!$v.house.required && $v.house.$error"
                        >это поле обязательное</span
                      >
                      <span v-if="!$v.house.maxLength" class="error-alert"
                        >не больше 10 символов</span
                      >
                    </div>
                    <input
                      type="text"
                      name="house"
                      id="house"
                      autocomplete="off"
                      v-model="house"
                      @blur="$v.house.$touch()"
                      :class="{
                        invalid: $v.house.$error,
                        dirty: $v.house.$dirty,
                      }"
                    />
                    <label for="house" class="placeholder-label">Дом*</label>
                  </div>
                  <div class="address__col">
                    <div class="error-block">
                      <span v-if="!$v.flat.maxLength" class="error-alert"
                        >не больше 10 символов</span
                      >
                    </div>
                    <input
                      type="text"
                      name="flat"
                      id="flat"
                      autocomplete="off"
                      v-model="flat"
                      @blur="$v.flat.$touch()"
                      :class="{
                        invalid: $v.flat.$error,
                        dirty: $v.flat.$dirty,
                      }"
                    />
                    <label for="flat" class="placeholder-label">Кв</label>
                  </div>
                </div>
                <!-- способ оплаты -->
                <div class="error-block">
                  <span
                    v-if="payListOpen && !payName.length"
                    class="error-alert"
                    >выберите оплату</span
                  >
                </div>
                <div class="filter">
                  <div
                    class="filter-name"
                    :class="{ dirty: payListOpen || payName.length }"
                    @click="payListOpen = !payListOpen"
                  >
                    {{ payName }}
                  </div>
                  <label class="placeholder-label" @click="payListOpen = true"
                    >Способ оплаты*</label
                  >
                  <div class="filter__list" v-show="payListOpen">
                    <label>
                      <input
                        type="radio"
                        value="cod"
                        v-model="payValue"
                        @change="payChecked"
                        @click="payListOpen = false"
                      />
                      Наложенный платеж
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="visa"
                        v-model="payValue"
                        @change="payChecked"
                        @click="payListOpen = false"
                      />
                      Оплатить на карту Visa/Mastercard
                    </label>
                  </div>
                </div>
                <!-- комментарий -->
                <div class="error-block">
                  <span v-if="!$v.comment.maxLength" class="error-alert"
                    >количество символов {{ comment.length }}/70</span
                  >
                </div>
                <div class="filter">
                  <textarea
                    name="comment"
                    class="comment-textarea"
                    placeholder="Напишите комментарий..."
                    rows="1"
                    maxlength="71"
                    v-if="commentOpen"
                    v-model="comment"
                    @blur="$v.comment.$touch()"
                    :class="{ invalid: $v.comment.$error }"
                  ></textarea>
                  <button
                    v-else
                    type="button"
                    class="comment-btn"
                    @click="commentOpen = true"
                  >
                    Добавить комментарий к заказу
                  </button>
                </div>
                <button
                  v-if="deliveryValue === 'warehouse'"
                  type="submit"
                  class="btn btn--width"
                  :disabled="
                    $v.city.$invalid ||
                    $v.warehouse.$invalid ||
                    !payName.length ||
                    !cartList.length
                  "
                >
                  Оформить заказ
                </button>
                <button
                  v-else
                  type="submit"
                  class="btn btn--width"
                  :disabled="
                    $v.city.$invalid ||
                    $v.street.$invalid ||
                    $v.house.$invalid ||
                    !payName.length ||
                    !cartList.length
                  "
                >
                  Оформить заказ
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col">
          <h4 class="title">
            <span>Ваш заказ</span>
            <router-link to="/shop" tag="a" class="link"
              >Продолжить покупки</router-link
            >
          </h4>
          <div class="cart-content">
            <div class="cart-products">
              <ul class="cart">
                <li class="cart__item" v-for="item in cartList" :key="item.id">
                  <div class="photo-block">
                    <img class="photo" :src="item.urlPoster" :alt="item.name" />
                  </div>
                  <div class="controls">
                    <h3 class="name">{{ item.name }}</h3>
                    <div class="counter">
                      <button
                        type="button"
                        class="counter__btn"
                        @click="item.count--"
                        :disabled="item.count === 1"
                      >
                        -
                      </button>
                      <span class="counter__number">{{ item.count }}</span>
                      <button
                        type="button"
                        class="counter__btn"
                        @click="item.count++"
                        :disabled="item.count >= 5"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      class="remove-item"
                      @click="removeFromCart(item.id)"
                    >
                      Удалить
                    </button>
                  </div>
                  <div class="summ">{{ item.price * item.count }} $</div>
                </li>
              </ul>
            </div>
            <div class="total">
              <span class="total__name">Общая стоимость товаров</span>
              <span class="total__amount">{{ amount }} $</span>
            </div>
            <div class="notice">
              Доставка осуществляется за счет покупателя согласно тарифов
              компании "Новая Почта". Доставка оплачивается при получении
              заказа.
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="svg svg--book">
      <use xlink:href="../images/svg/sprite.svg#book" />
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
import Confirm from "../components/confirm";

export default {
  name: "Order",
  components: {
    Confirm,
  },
  metaInfo: {
    title: "Заказ",
  },
  data() {
    return {
      orderDone: false,

      yourName: "",
      yourLastName: "",
      tel: "",
      email: "",
      customerFormOpen: true,
      citiesArr: [],
      cityListOpen: false,
      checkedCityIndex: null,
      checkedCity: {},
      city: "",

      deliveryFormOpen: false,
      deliveryListOpen: false,
      deliveryName: "",
      deliveryValue: "",

      warehousesArr: [],
      warehouseListOpen: false,
      checkedWarehouseIndex: null,
      checkedWarehouse: {},
      warehouse: "",

      street: "",
      house: "",
      flat: "",

      payListOpen: false,
      payName: "",
      payValue: "",

      comment: "",
      commentOpen: false,
    };
  },
  computed: {
    cartList() {
      return this.$store.getters.getCartList;
    },
    amount() {
      return this.cartList.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },
  methods: {
    writeCustomerData() {
      this.customerFormOpen = false;
      this.deliveryFormOpen = true;
    },
    writeDeliveryData() {
      this.deliveryFormOpen = false;
      const orderData = {
        customerData: {
          name: this.yourName,
          lastName: this.yourLastName,
          email: this.email,
          tel: this.tel,
        },
        deliveryData: {
          city: this.city,
          deliveryName: this.deliveryName,
          warehouse: this.warehouse,
          street: this.street,
          house: this.house,
          flat: this.flat,
          pay: this.payName,
          comment: this.comment,
        },
        productsData: this.cartList,
        cartData: {
          productsAmount: this.amount,
          date: new Date().toJSON(),
          done: false,
        },
      };
      this.$store
        .dispatch("sendOrder", orderData)
        .then(() => {
          this.orderDone = true;
          this.$refs["customerForm"].reset();
          this.$refs["deliveryForm"].reset();
        })
        .catch(() => {});
    },
    async getCity() {
      const data = {
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: this.city,
          Limit: 10,
        },
        apiKey: "0d0432fee6e7afe32b4e8965268f382f",
      };
      const that = this;
      await fetch("https://api.novaposhta.ua/v2.0/json/", {
        crossDomain: true,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        processData: false,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => (that.citiesArr = result.data[0].Addresses))
        .catch((error) => console.log(error));
    },
    checkCity(index) {
      this.checkedCity = this.citiesArr[index];
      this.city = this.checkedCity.Present;
      this.cityListOpen = false;
      // console.log(this.checkedCity);
    },
    focusCity() {
      this.cityListOpen = true;
      this.deliveryListOpen = false;
      this.deliveryName = "";
      this.deliveryValue = "";
      this.warehousesArr = [];
      this.warehouseListOpen = false;
      this.checkedWarehouseIndex = null;
      this.checkedWarehouse = {};
      this.warehouse = "";
    },
    deliveryChecked() {
      switch (this.deliveryValue) {
        case "warehouse":
          this.deliveryName = "Доставка в отделение (Новая Почта)";
          this.street = "";
          this.$v.street.$reset();
          this.house = "";
          this.$v.house.$reset();
          this.flat = "";
          this.$v.flat.$reset();
          break;
        case "deliveryboy":
          this.deliveryName = "Доставка курьером (Новая Почта)";
          this.warehousesArr = [];
          this.warehouseListOpen = false;
          this.checkedWarehouseIndex = null;
          this.checkedWarehouse = {};
          this.warehouse = "";
          this.$v.warehouse.$reset();
          break;
        default:
          this.deliveryName = "";
      }
      this.deliveryListOpen = false;
    },
    async getWarehouse() {
      const data = {
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
          SettlementRef: this.checkedCity.Ref,
        },
        apiKey: "0d0432fee6e7afe32b4e8965268f382f",
      };
      const that = this;
      await fetch("https://api.novaposhta.ua/v2.0/json/", {
        crossDomain: true,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        processData: false,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => (that.warehousesArr = result.data))
        .catch((error) => console.log(error));
      console.log(this.warehousesArr);
    },
    warehouseFilter() {
      return this.warehousesArr.filter(
        (warehouse) =>
          warehouse.Description.toLowerCase().indexOf(this.warehouse) !== -1
      );
    },
    checkWarehouse(ref) {
      this.checkedWarehouse = this.warehousesArr.find(
        (warehouse) => warehouse.Ref === ref
      );
      this.warehouse = this.checkedWarehouse.Description.replace(
        "на одне місце",
        ""
      );
      this.warehouseListOpen = false;
      // console.log(this.checkedWarehouse);
    },
    payChecked() {
      switch (this.payValue) {
        case "cod":
          this.payName = "Наложенный платеж";
          break;
        case "visa":
          this.payName = "Оплатить на карту Visa/Mastercard";
          break;
        default:
          this.payName = "";
      }
      this.payListOpen = false;
    },
    removeFromCart(prodId) {
      // console.log(this.cartList);
      this.$store.dispatch("removeFromCart", prodId);
    },
  },
  created() {
    this.orderDone = false;
  },
  validations: {
    yourName: {
      required,
      alpha: (val) => /^[а-яё,і,ї,є,a-z,',-]*$/i.test(val),
      maxLength: maxLength(40),
    },
    yourLastName: {
      required,
      alpha: (val) => /^[а-яё,і,ї,є,a-z,',-]*$/i.test(val),
      maxLength: maxLength(40),
    },
    tel: {
      required,
      maxLength: maxLength(18),
      minLength: minLength(18),
    },
    email: {
      required,
      email,
      maxLength: maxLength(40),
    },
    city: {
      required,
    },
    warehouse: {
      required,
      uniq: function (newWarehouse) {
        if (newWarehouse === "") return true;
        return !!this.warehousesArr.find(
          (warehouse) =>
            warehouse.Description.replace("на одне місце", "") === newWarehouse
        );
      },
    },
    street: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(5),
    },
    house: {
      required,
      maxLength: maxLength(10),
    },
    flat: {
      maxLength: maxLength(10),
    },
    comment: {
      maxLength: maxLength(70),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.page {
  min-height: calc(100vh - 110px - 84px - 83px);

  @media screen and (max-width: 991px) {
    min-height: calc(100vh - 20px - 84px - 83px);
  }
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 20px - 64px - 53px);
  }
}
.btn--center {
  margin: 0 auto;
}
.row {
  display: flex;
  margin: 40px -50px 0 -50px;

  @media screen and (max-width: 1199px) {
    margin-left: -20px;
    margin-right: -20px;
    flex-wrap: wrap;
  }
  & > .col {
    max-width: 535px;
    flex-grow: 1;
    padding: 0 50px;

    @media screen and (max-width: 1199px) {
      max-width: 50%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    @media screen and (max-width: 767px) {
      max-width: 100%;
      margin-bottom: 50px;
    }
    &--width {
      max-width: 680px;

      @media screen and (max-width: 1199px) {
        max-width: 50%;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
      }
    }
  }
}
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: $colorTextMain;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 4px solid $colorBrend;
  margin-bottom: 40px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 20px;
  }
}
.link {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: $colorTextMain;
  text-decoration: underline;
  transition-duration: 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
  &:hover,
  &:focus {
    color: $colorBrend;
    text-decoration: none;
  }
}
.customer-content {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  &__col {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 40px;
  }
  .caption {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: $colorTextMain;
    display: flex;
    align-items: center;

    .icon {
      width: 39px;
      height: 39px;
      background-color: $colorTextSecondary;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;

      &--active {
        background-color: $colorBrend;
      }
    }
    .text-icon {
      font-family: "Open Sans", sans-serif;
      font-size: 25px;
      line-height: 39px;
      color: $colorBackground;
    }
    .svg-icon {
      display: block;
      width: 20px;
      height: 21px;
      stroke: $colorBackground;
      fill: $colorBackground;
    }
  }
}
label,
input,
.filter-name {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: $colorTextMain;
  letter-spacing: 0.04em;

  @media screen and (max-width: 1199px) {
    font-size: 14px;
  }
  @media screen and (max-width: 991px) and (min-width: 768px) {
    font-size: 12px;
  }
}
.filter-name {
  font-size: 14px;
  min-height: 31px;
}
.contact-form {
  margin-top: 40px;

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
  label {
    display: block;
    letter-spacing: 0;
  }
  .placeholder-label {
    margin-left: 15px;
    transform: translateY(-25px);
    transition-duration: 0.3s;
  }
  input:not([type="radio"]),
  .filter-name,
  .comment-textarea {
    width: 100%;
    background-color: transparent;
    padding: 4px 2px;
    border: none;
    border-bottom: 1px solid $colorTextMain;
    box-sizing: border-box;
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
    }
    &.invalid {
      border-bottom: 1px solid $colorImportant;

      & + .placeholder-label {
        color: $colorImportant;
      }
    }
    &:disabled + label {
      color: $colorTextSecondary;
    }
  }
  .btn {
    margin-top: 15px;
    display: inline-block;
    vertical-align: middle;

    @media screen and (max-width: 767px) {
      display: block;
      margin: 15px auto 0 auto;
    }
  }
}
.filter {
  position: relative;

  &__list {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    max-height: 200px;
    border: 1px solid $colorBrend;
    box-sizing: border-box;
    background-color: $colorBrend;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 10;

    & label {
      position: relative;
      display: block;
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      line-height: 20px;
      color: $colorBackground;
      padding: 0 5px;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        color: $colorTextMain;
        background-color: $colorBackground;
      }
    }
    & input[type="radio"] {
      position: absolute;
      opacity: 0;
      margin: 0;
    }
  }
  .comment-textarea,
  .comment-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 17px;
    color: $colorTextMain;
    resize: none;
    margin-bottom: 20px;
  }
  .comment-btn {
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    text-decoration: underline;
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
      color: $colorBrend;
      text-decoration: none;
    }
  }
}
.address {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  &__col {
    width: 50%;
    padding: 0 10px;
    box-sizing: border-box;

    &--width {
      width: 100%;
    }
  }
}
.cart-products {
  max-height: 290px;
  border-bottom: 4px solid $colorBrend;
  overflow-y: auto;
  margin-bottom: 40px;

  .cart {
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      display: flex;
      margin-bottom: 40px;

      @media screen and (max-width: 991px) {
        margin-bottom: 30px;
      }
    }
  }
  .photo-block {
    display: flex;
    align-items: center;
    max-width: 105px;
    max-height: 105px;
    overflow: hidden;
    margin-right: 30px;

    @media screen and (max-width: 991px) {
      margin-right: 20px;
    }
    @media screen and (max-width: 767px) {
      max-width: 90px;
      max-height: 90px;
      margin-right: 15px;
    }
    @media screen and (max-width: 575px) {
      max-width: 80px;
      max-height: 80px;
    }
    @media screen and (max-width: 374px) {
      max-width: 70px;
      max-height: 70px;
      margin-right: 10px;
    }
    & .photo {
      display: block;
      width: 100%;
    }
  }
  .controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: $colorTextMain;
  }
  .name {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    color: inherit;

    @media screen and (max-width: 991px) {
      font-size: 16px;
      line-height: 26px;
    }
    @media screen and (max-width: 575px) {
      font-size: 14px;
      line-height: 20px;
    }
    @media screen and (max-width: 374px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
  .counter {
    display: flex;
    align-items: center;
    margin: 5px 0;

    &__btn {
      width: 19px;
      line-height: 16px;
      background-color: transparent;
      border: 1px solid $colorTextMain;
      padding: 0;
      outline: none;
      cursor: pointer;

      &:hover,
      &:focus {
        border-color: $colorBrend;
        color: $colorBrend;
      }
      &:disabled {
        border-color: $colorTextSecondary;
        color: $colorTextSecondary;
        cursor: default;
      }
    }
    &__btn,
    &__number {
      font-family: "Montserrat", sans-serif;
      font-size: 24px;
      color: $colorTextMain;
      text-align: center;

      @media screen and (max-width: 575px) {
        font-size: 20px;
      }
    }
    &__number {
      margin: 0 12px;
      width: 15px;
    }
  }
  .remove-item {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: inherit;
    background-color: transparent;
    padding: 0;
    border: none;
    border-bottom: 1px solid transparent;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 575px) {
      font-size: 12px;
    }
    @media screen and (max-width: 374px) {
      font-size: 11px;
    }
    &:hover,
    &:focus {
      border-bottom-color: $colorBackground;
    }
  }
  .summ {
    min-width: 60px;
    align-self: center;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: $colorTextMain;

    @media screen and (max-width: 575px) {
      font-size: 16px;
    }
  }
}
.total {
  display: flex;
  align-items: flex-end;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: $colorTextMain;
  margin-bottom: 10px;

  &__name {
    font-size: 18px;
    flex-grow: 1;

    @media screen and (max-width: 575px) {
      font-size: 16px;
    }
    @media screen and (max-width: 374px) {
      font-size: 14px;
    }
    &--weight {
      font-weight: 500;
    }
  }
  &__amount {
    font-size: 24px;
    min-width: 15%;

    @media screen and (max-width: 575px) {
      font-size: 20px;
    }
    @media screen and (max-width: 374px) {
      font-size: 18px;
    }
  }
}
.notice {
  margin-top: 25px;
  max-width: 80%;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: $colorTextMain;

  @media screen and (max-width: 991px) {
    font-size: 12px;
  }
  @media screen and (max-width: 575px) {
    font-size: 10px;
    margin-top: 15px;
    max-width: 100%;
  }
}
.svg {
  position: absolute;
  z-index: -1;

  &--book {
    left: 0;
    bottom: -24px;
    stroke: $colorTextMain;
    width: 562px;
    height: 199px;
    stroke-dasharray: 4000;
    stroke-dashoffset: 4050;
    animation: svgShow 25s linear 1s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>