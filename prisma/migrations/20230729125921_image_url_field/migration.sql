/*
  Warnings:

  - Added the required column `imageUrl` to the `findings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "findings" ADD COLUMN     "imageUrl" TEXT NOT NULL;
