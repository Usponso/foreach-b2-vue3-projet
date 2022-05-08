<script setup>
const { t } = useI18n({
  inheritLocale: true,
});

const firstname = ref("");
const lastname = ref("");
const sujet = ref("");
const message = ref("");
const mail = ref("");
const phone = ref("");

const sendMessage = async () => {
  await fetch(
    "https://discord.com/api/webhooks/964073356389408819/_8M5_O-HmGJEVZLVKWSEfx6BZWC8C_A_MFQG60rbwpDfsoMJDh6l3zAAEc-94NP91Knf",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        // { content: message.value }
        {
          username: "Webhook",
          avatar_url: "https://i.imgur.com/4M34hi2.png",
          // content: "Text message. Up to 2000 characters.",
          embeds: [
            {
              author: {
                name: firstname.value + " " + lastname.value,
                icon_url: "https://zupimages.net/up/22/15/z5lg.png",
              },
              title: sujet.value,
              description: message.value,
              color: 15258703,
              fields: [
                {
                  name: "Email",
                  value: mail.value,
                  inline: true,
                },
                {
                  name: "Téléphone",
                  value: phone.value,
                  inline: true,
                },
              ],
              thumbnail: {
                url: "https://zupimages.net/up/22/15/z5lg.png",
              },
              footer: {
                text: "Envoyé depuis le portfolio.",
              },
            },
          ],
        }
      ),
    }
  );
};
</script>

<template>
  <div w:grid="~ cols-2 gap-10" w:m="t-[8%]">
    <div w:text="4em" class="contact-img gradient-text">
      <p w:font="700">{{ t("contactme") }}</p>
      <img w:w="[50%]" src="../assets/contact.svg" />
    </div>
    <div w:grid="~ col-start-2 cols-12 gap-3">
      <label w:grid="col-span-6">
        {{ t("firstname") }}<br />
        <input v-model="firstname" />
      </label>

      <label w:grid="col-span-6">
        {{ t("lastname") }}<br />
        <input v-model="lastname" />
      </label>
      <label w:grid="col-span-full">
        {{ t("subject") }}<br />
        <input v-model="sujet" />
      </label>

      <label w:grid="col-span-full">
        {{ t("message") }}<br />
        <textarea rows="5" v-model="message"></textarea>
      </label>

      <label w:grid="col-span-full">
        {{ t("mail") }}<br />
        <input v-model="mail" />
      </label>

      <label w:grid="col-span-full">
        {{ t("phone") }}<br />
        <input v-model="phone" />
      </label>
      <button
        @click="sendMessage()"
        w:grid="col-span-full"
        class="btn-grad"
        w:font="bold"
      >
        {{ t("send") }}
      </button>
    </div>
  </div>
</template>

<style scoped>
input,
textarea,
button {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
}
input,
textarea {
  color: black;
  font-weight: bold;
}
.gradient-text {
  text-transform: uppercase;
  background: linear-gradient(to right, #21bde4 30%, #b548c6 65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact-img {
  align-self: center;
  text-align: -webkit-center;
  line-height: 3em;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #21bde4 0%,
    #b548c6 51%,
    #21bde4 100%
  );
  padding: 15px 35px;
  transition: 1s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
}
.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
