-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
