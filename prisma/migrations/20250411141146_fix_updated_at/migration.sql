/*
  Warnings:

  - You are about to drop the column `updateAi` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `updateAi` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `updateAi` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "updateAi",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "updateAi",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "updateAi",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
