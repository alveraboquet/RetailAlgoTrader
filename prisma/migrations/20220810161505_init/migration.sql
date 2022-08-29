/*
  Warnings:

  - You are about to drop the `Course_Chapter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `course_id` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course_Chapter" DROP CONSTRAINT "Course_Chapter_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "Course_Chapter" DROP CONSTRAINT "Course_Chapter_course_id_fkey";

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "course_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Course_Chapter";

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
