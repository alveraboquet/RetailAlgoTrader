/*
  Warnings:

  - Added the required column `current_chapter` to the `User_Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_lesson` to the `User_Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isPro" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stripeCustomerId" TEXT;

-- AlterTable
ALTER TABLE "User_Course" ADD COLUMN     "current_chapter" TEXT NOT NULL,
ADD COLUMN     "current_lesson" TEXT NOT NULL;
