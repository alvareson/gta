import { defineNuxtPlugin } from '#app'
import TelInput from 'vue-tel-input'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(TelInput, {
		enabledCountryCode: true,
		enabledFlags: true,
		inputOptions: {
			showDialCode: true,
		},
		validCharactersOnly: true,
		defaultCountry: 'AE',
	})
})