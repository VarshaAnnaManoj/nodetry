-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);
