-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "examNum" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "code" TEXT,
    "comment" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
