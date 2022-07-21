-- CreateTable
CREATE TABLE `Hashtag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hashtag` VARCHAR(255) NOT NULL,
    `number` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(255) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
