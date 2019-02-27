const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const updatedUser = await prisma
  .updateUser({
    where: { id: 'cjsnr68u3008m07553g2odpvq' },
    data: { name: 'Bobby' }
  })
  console.log(updatedUser);

  const deletedUser = await prisma
  .deleteUser({ id: 'cjsnr6hm8008x07558t875sm9' })
  console.log(deletedUser);
}

main().catch(e => console.error(e))