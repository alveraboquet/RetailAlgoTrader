import { PrismaClient } from '@prisma/client';
import initialLessonData from './initialData/initialLessonData';
import initialChapterData from './initialData/initialChapterData';
import initialCourseData from './initialData/initialCourseData';

const prisma = new PrismaClient();

const createInitialData = async () => {
  await prisma.course.createMany({
    data: initialCourseData,
  });
  await prisma.chapter.createMany({
    data: initialChapterData,
  });
  await prisma.lesson.createMany({
    data: initialLessonData,
  });
};

createInitialData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
