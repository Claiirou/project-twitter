/*
  Warnings:

  - You are about to drop the column `userId` on the `Tweet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tweet` DROP FOREIGN KEY `Tweet_userId_fkey`;

-- AlterTable
ALTER TABLE `Tweet` DROP COLUMN `userId`,
    MODIFY `date` DATETIME(3) NULL;
