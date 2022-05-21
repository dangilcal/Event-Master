use EventMaster;

SELECT p.IdUsuario, e.id , e.Nombre, e.NInscripciones, e.AforoMax, e.Categoria,
    e.Direccion, e.FechaInicio, e.FechaFin, e.Descripcion, e.Imagen
FROM Evento e INNER JOIN Participa p on e.Id = p.IdEvento
where p.IdEvento not in(
    SELECT a.IdEvento
from Participa a
where a.IdUsuario = 1
)