-- CreateTable
CREATE TABLE "Conductor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "categoryDrive" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "licensePlate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "chassisNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carId" TEXT NOT NULL,
    "conductorId" TEXT NOT NULL,
    CONSTRAINT "Loan_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("licensePlate") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_conductorId_fkey" FOREIGN KEY ("conductorId") REFERENCES "Conductor" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Conductor_cpf_key" ON "Conductor"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Car_licensePlate_key" ON "Car"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Loan_carId_key" ON "Loan"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Loan_conductorId_key" ON "Loan"("conductorId");
