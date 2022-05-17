USE EventMaster;

CREATE TABLE Participa
(
    Id INTEGER IDENTITY(1,1),
    IdUsuario INTEGER,
    IdEvento INTEGER,
    CreaOParticipa BIT NOT NULL,
    CONSTRAINT Pk_Participa PRIMARY KEY (Id,IdUsuario,IdEvento),
    CONSTRAINT Fk_Usuario_Participa FOREIGN KEY (IdUsuario) REFERENCES Usuario(Id),
    CONSTRAINT Fk_Evento_Participa FOREIGN KEY (IdEvento) REFERENCES Evento(Id)
);