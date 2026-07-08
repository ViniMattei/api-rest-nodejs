interface User {
  birthdate: number
}

function calculateAge(user: User) {
  return new Date().getFullYear() - user.birthdate
}

calculateAge({ birthdate: 1990 })
