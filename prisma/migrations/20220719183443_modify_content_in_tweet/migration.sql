/*
  Warnings:

  - You are about to drop the column `tweet` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `content` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tweet` DROP COLUMN `tweet`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
