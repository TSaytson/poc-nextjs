/*
  Warnings:

  - You are about to drop the `Finding` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Finding";

-- CreateTable
CREATE TABLE "findings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "findings_pkey" PRIMARY KEY ("id")
);
