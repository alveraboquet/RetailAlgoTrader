-- DropForeignKey
ALTER TABLE "Course_Chapter" DROP CONSTRAINT "Course_Chapter_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "Course_Chapter" DROP CONSTRAINT "Course_Chapter_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Chapter" DROP CONSTRAINT "User_Chapter_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Chapter" DROP CONSTRAINT "User_Chapter_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Course" DROP CONSTRAINT "User_Course_course_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Course" DROP CONSTRAINT "User_Course_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Lesson" DROP CONSTRAINT "User_Lesson_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Lesson" DROP CONSTRAINT "User_Lesson_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Chapter" ADD CONSTRAINT "User_Chapter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Chapter" ADD CONSTRAINT "User_Chapter_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Lesson" ADD CONSTRAINT "User_Lesson_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Lesson" ADD CONSTRAINT "User_Lesson_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Course" ADD CONSTRAINT "User_Course_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Course" ADD CONSTRAINT "User_Course_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Chapter" ADD CONSTRAINT "Course_Chapter_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Chapter" ADD CONSTRAINT "Course_Chapter_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
