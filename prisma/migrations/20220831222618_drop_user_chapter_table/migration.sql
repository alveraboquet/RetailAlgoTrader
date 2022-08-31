/*
  Warnings:

  - You are about to drop the `User_Chapter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User_Chapter" DROP CONSTRAINT "User_Chapter_chapter_id_fkey";

-- DropForeignKey
ALTER TABLE "User_Chapter" DROP CONSTRAINT "User_Chapter_user_id_fkey";

-- DropTable
DROP TABLE "User_Chapter";
