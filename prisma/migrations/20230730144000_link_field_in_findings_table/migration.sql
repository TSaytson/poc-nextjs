/*
  Warnings:

  - Added the required column `link` to the `findings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "findings" ADD COLUMN     "link" TEXT NOT NULL;
