import vine from '@vinejs/vine'

export const createEventValidator = vine.create({
  name: vine.string().trim().minLength(2).maxLength(120),
  year: vine.number().withoutDecimals().min(2026).max(2100),
})
