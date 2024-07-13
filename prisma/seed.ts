import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.basurero.create({
        data: {
        name: 'Basurero 1',
        location: 'Laboratorio 1',
        incharge:"Consejerme Manuel",
        capacity: "75%/100%"
        }   
});
  const post2 = await prisma.basurero.create({
    data: {
    name: 'Basurero 2',
    location: 'Laboratorio 2',
    incharge:"Conserje Juan",
    capacity: "50%/100%"
    }
  });
}
main()
.catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(async () =>{
    await prisma.$disconnect();
});