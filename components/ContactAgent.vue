<template>
  <div class="contact-agent">
    <header class="contact-agent__header">
      <img class="contact-agent__avatar" src="/img/alikoko.png" width="80" height="80" alt="" />
      <p class="contact-agent__caption text-h3">Contact agent</p>
      <p class="contact-agent__name text-h3">{{ broker?.firstName }} {{ broker?.lastName }}</p>
    </header>
    <form class="contact-agent__form" @submit.prevent="onSubmit">
      <input v-model="formData.firstname" class="contact-agent__input" type="text" placeholder="Enter full name here" required />
      <input v-model="formData.lastname" class="contact-agent__input" type="text" placeholder="Enter email here" required />
      <input
        v-model="formData.email"
        class="contact-agent__input"
        type="email"
        placeholder="Enter phone number ( international format ) "
        required
      />
      <p class="contact-agent__form-error" v-if="formErrors.email">{{ formErrors.email }}</p>
      <input
        class="contact-agent__input"
        type="tel"
        placeholder="Your Message"
        v-model="formData.phone"
        required
        inputmode="numeric"
        @input="restrictNonNumeric"
      />
      <p class="contact-agent__form-error" v-if="formErrors.phone" >{{ formErrors.phone }}</p>
      <textarea v-model="formData.notes" class="contact-agent__input" placeholder="Your Message" rows="6"></textarea>
      <div class="contact-agent__icons-and-submit">
        <div class="contact-agent__icons">
          <div class="contact-agent__icon-container">
            <img
              src="/img/phone.png"
              alt="Phone"
              class="contact-agent__icon default-icon"
            />
            <img
              src="/img/activated-phone.png"
              alt="Activated Phone"
              class="contact-agent__icon activated-icon"
            />
          </div>

          <div class="contact-agent__icon-container">
            <img
              src="/img/email.png"
              alt="Email"
              class="contact-agent__icon default-icon"
            />
            <img
              src="/img/activated-email.png"
              alt="Activated Email"
              class="contact-agent__icon activated-icon"
            />
          </div>

          <div class="contact-agent__icon-container">
            <img
              src="/img/whatsapp.png"
              alt="WhatsApp"
              class="contact-agent__icon default-icon"
            />
            <img
              src="/img/activated-whatsapp.png"
              alt="Activated WhatsApp"
              class="contact-agent__icon activated-icon"
            />
          </div>
        </div>

        <Btn class="contact-agent__submit" submit>submit</Btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Broker } from "~/utils/types"
import { apiCall, formatData, MINDALL_CRM_SETTINGS } from "~/utils/generateLead"

const validationPhoneError = 'The provided phone number does not meet the required format. Please ensure that it contains at least 10 to 12 digits and includes the country code without the plus sign'
const isPhoneHovered = ref(false)
const isEmailHovered = ref(false)
const isWhatsAppHovered = ref(false)

const props = defineProps({
  broker: {
    type: Object as PropType<Broker>,
    default: () => ({}),
  },
  reference: {
    type: String,
    default: ''
  }
})
const broker = toRef(props, "broker")
const reference = toRef(props, "reference")

const formData = ref({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  notes: '',
  propertyReference: reference.value,
})

const formErrors: Ref<{[key: string]: null | string}> = ref({
  email: null,
  phone: null,
})

onMounted(() => {
  formData.value.propertyReference = reference.value
})

const restrictNonNumeric = () => {
  formData.value.phone = formData.value.phone.replace(/\D/g, '')
}

const onSubmit = async () => {
  const preparedData = formatData(formData.value, MINDALL_CRM_SETTINGS)
  try {
    const response = await apiCall(preparedData, MINDALL_CRM_SETTINGS.url)
    if (!response.ok) {
      const error = await response.json() || {}

      if (error?.message.length > 0 && error.message.toLowerCase().includes("phone")) {
        formErrors.value.phone = validationPhoneError //error.message
      }

      if (error?.message.length > 0 && error.message.toLowerCase().includes("mail")) {
        formErrors.value.email = error.message
      }

      return
    }
    for (let key in formData.value) {
      formData.value[key] = ''
    }
    alert('Thank you for your request! We will contact you shortly.')
  } catch (error) {
    console.error(error)
  }
}
</script>

<style lang="scss">
.contact-agent {
  color: var(--color-black);
  background: var(--color-white);

  clip-path: polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px);

  &__header {
    display: grid;
    grid-template: repeat(2, auto) / auto 1fr;
    gap: 0 1.5rem;

    // display: flex;
    // flex-direction: row;
    // gap: 1.5rem;

    align-items: flex-start;
    padding: 1.5rem 2rem;
    border-bottom: 0.0625rem solid rgba(var(--color-white-rgb), 0.57);
  }

  &__avatar {
    grid-row: 1 / -1;
  }

  &__caption {
    font-size: 2.2rem;
  }

  &__name {
    font-size: 2.2rem;
    grid-column: 2;
  }

  &__form {
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    color: var(--color-black);

    &-error {
      color: red; 
      margin-top: -20px
    }
  }

  &__input {
    --border-opacity: 0.57;
    padding: 1.125rem 1.5rem;
    color: var(--color-black);
    background: none;
    border: 0.0625rem solid var(--color-black);
    transition: border 0.25s;

    &::placeholder {
      color: rgba(var(--color-gray-rgb), 0.57);
      opacity: 1;
    }

    &:focus {
      --border-opacity: 1;
      outline: none;
    }
  }

  &__icons-and-submit {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 540px) {
      flex-direction: column;
    }
  }

  &__icons {
    display: flex;
    gap: 1rem;

    @media (max-width: 540px) {
      order: 2;
    }
  }

  &__icon-container {
    position: relative;
    width: 62px;
    height: 62px;

    @media (max-width: 540px) {
      width: 100%;
      height: 100%;
    }

    &:hover .activated-icon {
      opacity: 1;
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
    display: block;
  }

  .activated-icon {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.75s ease;
    cursor: pointer;
  }

  &__submit {
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px);
    justify-self: flex-end;
    background: var(--color-black);
    color: var(--color-white);
    font-size: 2rem;
    transition: background 0.75s ease, color 0.75s ease;

    &:hover {
      background: var(--color-lemon);
      color: var(--color-black);
    }

    @media (max-width: 540px) {
      clip-path: none;
      font-size: 1rem;
      border-radius: 0.4rem;
      margin-bottom: 2rem;
      order: 1;
    }
  }
}
</style>
