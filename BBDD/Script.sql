-- CREATE DATABASE EventMaster;

USE EventMaster;

CREATE TABLE Evento
(
    Id INTEGER IDENTITY(1,1),
    Nombre VARCHAR(150) NOT NULL,
    NInscripciones INTEGER NOT NULL,
    AforoMax INTEGER NOT NULL,
    Categoria VARCHAR(100) NOT NULL,
    Direccion VARCHAR(60) NOT NULL,
    FechaInicio DATETIME NOT NULL,
    FechaFin DATETIME NOT NULL,
    Descripcion VARCHAR(max) NOT NULL,
    Imagen VARCHAR(200) NOT NULL,
    CONSTRAINT Pk_Evento PRIMARY KEY(Id)
);

CREATE TABLE Usuario
(
    Id INTEGER IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,
    Apodo VARCHAR(60) UNIQUE NOT NULL,
    DNI VARCHAR(9) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    PasswordHast VARCHAR(max) NOT NULL,
    CONSTRAINT Pk_Usuario PRIMARY KEY (Id)
);

CREATE TABLE Participa
(
    Id INTEGER IDENTITY(1,1) UNIQUE,
    IdUsuario INTEGER,
    IdEvento INTEGER,
    CreaOParticipa BIT NOT NULL,
    CONSTRAINT Pk_Participa PRIMARY KEY (IdUsuario,IdEvento),
    CONSTRAINT Fk_Usuario_Participa FOREIGN KEY (IdUsuario) REFERENCES Usuario(Id),
    CONSTRAINT Fk_Evento_Participa FOREIGN KEY (IdEvento) REFERENCES Evento(Id) ON DELETE CASCADE
);