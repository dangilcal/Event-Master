USE EventMaster;

CREATE TABLE Evento
(
    Id INTEGER IDENTITY(1,1),
    Nombre VARCHAR(150) NOT NULL,
    NInscripciones INTEGER NOT NULL,
    AforoMax INTEGER NOT NULL,
    Categoria VARCHAR(100) NOT NULL,
    Direccion VARCHAR(60) NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL,
    Descripcion VARCHAR(max) NOT NULL,
    Imagen VARCHAR(200) NOT NULL,
    CONSTRAINT Pk_Evento PRIMARY KEY(Id)
);