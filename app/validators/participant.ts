import vine from '@vinejs/vine'

export const participantOnboardingValidator = vine.create({
  contactChannel: vine.enum(['whatsapp', 'email', 'sms'] as const),
  contactValue: vine.string().trim().minLength(3).maxLength(120),
  personalAccessPassword: vine.string().trim().minLength(8).maxLength(64),
})
