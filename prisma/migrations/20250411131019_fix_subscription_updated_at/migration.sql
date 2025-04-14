/*
  Warnings:

  - You are about to drop the column `updateAi` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "updateAi",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
