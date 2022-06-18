import { PrismaClient } from '@prisma/client';
import initialLessonData from './initialData/initialLessonData';
import initialChapterData from './initialData/initialChapterData';

const prisma = new PrismaClient();

const createInitialChapters = async () => {
  await prisma.chapter.createMany({
    data: initialChapterData,
  });
};

createInitialChapters()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const createInitialLessons = async () => {
  await prisma.lesson.createMany({
    data: initialLessonData,
  });
};

createInitialLessons()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
