<script setup>
const message = ref("");

const sendMessage = () => {
  fetch(
    "https://discord.com/api/webhooks/964073356389408819/_8M5_O-HmGJEVZLVKWSEfx6BZWC8C_A_MFQG60rbwpDfsoMJDh6l3zAAEc-94NP91Knf",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message.value }),
    }
  );
  message.value = "";
};
</script>

<template>
  <input v-model="message" />
  <p>Message ici : {{ message }}</p>
  <button @click="sendMessage()">Envoyer</button>
</template>
