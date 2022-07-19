/*
  Warnings:

  - Added the required column `date` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tweet` ADD COLUMN `date` DATETIME(3) NOT NULL;
