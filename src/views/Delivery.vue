<template>
  <div class="page">
    <div class="mainer">
      <h1 class="page__caption">Оплата и Доставка</h1>
      <p>
        Мы заботимся о том, чтобы процесс приобретения Вами наших работ был максимально прост и удобен.
        Ниже, Вы можете ознакомиться с основными вопросами по оплате и доставке авторских работ.
        Ваши отзывы, вопросы и предложения очень важны для нас, и мы будем рады услышать их от Вас.
      </p>
      <ul class="faq">
        <li>
          <a href="#" v-scroll-to="'#pay'">Как осуществить оплату за понравившуюся авторскую работу?</a>
        </li>
        <li>
          <a href="#cod" v-scroll-to="'#cod'">Что такое наложенный платеж?</a>
        </li>
        <li>
          <a href="#cost" v-scroll-to="'#cost'">Как определяется стоимость доставки?</a>
        </li>
        <li>
          <a href="#damage" v-scroll-to="'#damage'">Может ли мой заказ прийти поврежденным?</a>
        </li>
        <li>
          <a
            href="#crashed"
            v-scroll-to="'#crashed'"
          >Что делать, если мой заказ все же пришел побитым или поцарапанным?</a>
        </li>
        <li>
          <a href="#when" v-scroll-to="'#when'">Когда мой заказ будет доставлен?</a>
        </li>
        <li>
          <a href="#unite" v-scroll-to="'#unite'">
            Возможно ли объединить несколько покупок в одну партию, чтобы снизить
            стоимость доставки?
          </a>
        </li>
      </ul>
      <div class="hr-line">
        <svg class="svg svg--fox">
          <use xlink:href="../images/svg/sprite.svg#fox" />
        </svg>
      </div>
      <div class="faq-answer" id="pay">
        <h3 class="faq-answer__caption">Как осуществить оплату за понравившуюся авторскую работу?</h3>
        <p class="faq-answer__text">Оплата осуществлется несколькими способами:</p>
        <br />
        <ul class="faq-answer__list">
          <li>
            Банковской платёжной картой Visa или MasterCard.
            <div>Пополнение карточного счета, реквизиты которого высылаются на электронный адрес/телефон Клиента.</div>
            <div>Картина высылается Клиенту после поступления денег на счет;</div>
          </li>
          <li>
            Наличная форма оплаты
            <div>Происходит по факту доставки наличными курьеру (только город Чернигов, Украина);</div>
          </li>
          <li>
            Банковский перевод
            <div>
              Сделать перевод денежных средств Вы можете посредством системы денежных переводов (Western Union, Money Gram и т.д.),
              существующих в каждом банке, как внутри страны, так и в международном формате.
              Картина отправляется Клиенту только после подтверждения перевода денег.
            </div>
          </li>
          <li>
            Наложенный платеж
            <div>
              Если хотите оплатить за товар при получении, требуется минимальный аванс 20%.
              Отправка производится через транспортную компанию “Новая Почта”.
            </div>
          </li>
        </ul>
        <br />
        <p class="faq-answer__text">
          Оплата производится в национальной валюте - гривне.
          Для клиентов других стран оплата производится в долларах, евро, рублях по курсу Национального Банка Украины.
        </p>
      </div>
      <div class="faq-answer" id="cod">
        <h3 class="faq-answer__caption">Что такое наложенный платеж?</h3>
        <p class="faq-answer__text">
          Наложенный платеж – форма оплаты за товар в отделении службы доставки уже после его получения.
          Таким образом Вы минимизируете любые риски, сможете сначала проверить товар и только после этого расплатиться.
        </p>
        <p
          class="faq-answer__text"
        >Это дополнительная услуга службы доставки. Тариф 20 грн. за оформление + 2% от суммы заказа.</p>
      </div>
      <div class="faq-answer" id="cost">
        <h3 class="faq-answer__caption">Как определяется стоимость доставки?</h3>
        <p
          class="faq-answer__text"
        >Стоимость доставки определяется на основании нескольких параметров:</p>
        <ul class="faq-answer__list faq-answer__list--weight">
          <li>цены предмета искусства;</li>
          <li>размеров (габаритов) предмета;</li>
          <li>веса купленного предмета;</li>
          <li>места отправления.</li>
        </ul>
        <p
          class="faq-answer__text"
        >Все расходы по упаковке, обработке и страхованию включены в стоимость доставки.</p>
        <br />
        <p class="faq-answer__text">
          Обратите внимание, если изделие обрамлено или требует специальной упаковки (например скульптура)
          из-за его размеров, веса или материалов, цена доставки такого предмета искусства может быть выше по сравнению с другими изделиями.
        </p>
        <p
          class="faq-answer__text"
        >Наши работы отправляем по всей Украине с помощью транспортной компании Новая Почта.</p>
        <svg class="svg svg--owl">
          <use xlink:href="../images/svg/sprite.svg#owl" />
        </svg>
      </div>
      <div class="faq-answer" id="damage">
        <h3 class="faq-answer__caption">Может ли мой заказ прийти поврежденным?</h3>
        <p
          class="faq-answer__text"
        >Наш интернет-магазин гарантирует идеальное состояние приобретенных у нас товаров.</p>
        <p class="faq-answer__text">
          При отправке товар страхуется в службе доставки на свою стоимость.
          С этого момента именно почта несет ответственность за целостность товара, а поэтому следит за надлежащим уровнем доставки.
        </p>
      </div>
      <div class="faq-answer" id="crashed">
        <h3
          class="faq-answer__caption"
        >Что делать, если мой заказ все же пришел побитым или поцарапанным?</h3>
        <p class="faq-answer__text">
          Главное – проверить товар на наличие дефектов сразу при его получении в отделении.
          Помните, что когда вы возьмете побитый товар без претензий к службе доставки, мы не сможем вам ничем помочь.
        </p>
        <br />
        <p class="faq-answer__text">
          Если же Вы сразу проверили товар, не выходя из отделения службы доставки и нашли дефект (нарушение целостности упаковки или самого товара) –
          требуйте у работников службы доставки специальный бланк: Акт приема-передачи.
          В этом бланке подробно опишите все повреждения. Откажитесь от товара и получите свои деньги назад.
        </p>
      </div>
      <div class="faq-answer" id="when">
        <h3 class="faq-answer__caption">Когда мой заказ будет доставлен?</h3>
        <p class="faq-answer__text">
          Доставка предметов искусства от украинских художников по Украине осуществляются в течении 2-5 рабочих дней.
          Однако, в некоторых случаях, доставка некоторых предметов искусства может быть быстрее, в то время как другие могут доставляться больше времени.
        </p>
        <p class="faq-answer__text">
          Ожидаемое время обработки и отправки для каждого предмета искусства указывается в личном кабинете заказчика,
          на странице детализации в разделе "Заказы".
        </p>
        <p class="faq-answer__text">
          Когда Ваш заказ будет отправлен, Вы получите письмо с подтверждением отправки и номером для отслеживания.
          Вы сможете контролировать процесс доставки своего заказа и видеть предполагаемую дату доставки онлайн, используя номер отслеживания.
          Если Вы заказываете несколько предметов искусства, каждый из них может быть отправлен отдельно и у каждого будет свой отдельный номер отслеживания.
          Мы уведомим Вас о деталях заказа.
        </p>
        <svg class="svg svg--dino">
          <use xlink:href="../images/svg/sprite.svg#dino" />
        </svg>
      </div>
      <div class="faq-answer" id="unite">
        <h3
          class="faq-answer__caption"
        >Возможно ли объединить несколько покупок в одну партию, чтобы снизить стоимость доставки?</h3>
        <p class="faq-answer__text">
          Да, мы можeм упаковать несколько предметов искусства в одну посылку.
          Если у Вас есть конкретный вопрос о доставке. нескольких предметов, свяжитесь с нами: kostyrkovladyslav@gmail.com
        </p>
      </div>
    </div>
    <Aside />
    <svg class="svg svg--body">
      <use xlink:href="../images/svg/sprite.svg#body" />
    </svg>
    <svg class="svg svg--leptop">
      <use xlink:href="../images/svg/sprite.svg#leptop" />
    </svg>
  </div>
</template>

<script>
import Aside from "../components/aside";

export default {
  name: "Delivery",
  components: { Aside },
  metaInfo: {
    title: "Доставка",
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

p {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.04em;
  color: $colorTextMain;
}
.faq {
  list-style: none;
  padding: 0;
  margin: 45px 0 0 0;

  & li {
    margin-bottom: 30px;

    & a {
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      letter-spacing: 0.04em;
      color: $colorTextMain;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.faq-answer {
  position: relative;
  margin-bottom: 60px;

  &__caption {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    line-height: 29px;
    color: $colorBrend;
    margin-bottom: 35px;
  }
  &__list {
    list-style-type: "- ";
    list-style-position: inside;
    padding: 0;
    margin: 0;

    & li,
    & div {
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 29px;
      color: $colorTextMain;
      letter-spacing: 0.04em;
    }
    & div {
      font-weight: normal;
    }
    &--weight {
      & li {
        font-weight: normal;
      }
    }
  }
}
.svg {
  position: absolute;
  stroke: $colorTextMain;
  z-index: -1;

  &--body {
    top: 153px;
    left: -30px;
    width: 142px;
    height: 538px;
    stroke-dasharray: 450;
    stroke-dashoffset: 500;
    animation: svgShow 15s linear 2s infinite alternate;
  }
  &--fox {
    right: 0;
    bottom: 25px;
    width: 103px;
    height: 108px;
    stroke-dasharray: 90;
    stroke-dashoffset: 100;
    animation: svgShow 5s linear 4s infinite alternate;
  }
  &--owl {
    top: 12%;
    right: 23%;
    width: 199px;
    height: 242px;
    stroke-dasharray: 200;
    stroke-dashoffset: 220;
    animation: svgShow 5s linear 6s infinite alternate;
  }
  &--dino {
    top: 5%;
    right: -12%;
    width: 257px;
    height: 137px;
    stroke-dasharray: 200;
    stroke-dashoffset: 220;
    animation: svgShow 5s linear 8s infinite alternate;
  }
  &--leptop {
    left: 30px;
    bottom: 3px;
    width: 378px;
    height: 163px;
    stroke-dasharray: 3000;
    stroke-dashoffset: 3200;
    animation: svgShow 15s linear 10s infinite alternate;
  }
}
@keyframes svgShow {
  to {
    stroke-dashoffset: 0;
  }
}
</style>