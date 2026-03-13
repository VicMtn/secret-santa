import vine from '@vinejs/vine'

export const createFamilyValidator = vine.create({
  name: vine.string().trim().minLength(2).maxLength(80),
  familyPassword: vine.string().trim().minLength(8).maxLength(64),
})

export const joinFamilyValidator = vine.create({
  familyCode: vine.string().trim().minLength(4).maxLength(32),
  familyPassword: vine.string().trim().minLength(8).maxLength(64),
})
