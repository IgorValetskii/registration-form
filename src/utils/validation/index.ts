import validate from 'validate.js'

export const emailValidation = (values: any) => {
  const constraints = {
    email: {
      presence: true,
      email: true,
    },
  }

  return validate(values, constraints)
}

export const profileValidation = ({ firstName, lastName,  gender}: any) => {

  const constraints = {
    firstName: {
      presence: true,
      length: {
        minimum: 2,
      },
    },
    lastName: {
      presence: true,
      length: {
        minimum: 2,
      },
    },
    gender: {
      presence: {
        message: 'is required',
        allowEmpty: false
      },

    },
  }

  return validate({ firstName, lastName, gender }, constraints)
}

export const companyValidation = (values: any) => {
  const constraints = {
    company: {
      presence: true,
      length: {
        minimum: 2,
      },
    },
  }

  return validate(values, constraints)
}

export const timeZoneValidation = ({ timezone }: any) => {
  const constraints = {
    timezone: {
      presence: { message: 'is required' },
    },
  }

  return validate({ timezone }, constraints)
}
