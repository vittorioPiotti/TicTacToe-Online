CREATE TABLE partita (
    idGiocatoreBlu VARCHAR(6) PRIMARY KEY, --giocatore che crea partita
    idGiocatoreRosso VARCHAR(6) UNIQUE,  --giocatore che join partita
    statoPartita ENUM('valido', 'scaduto') DEFAULT 'valido',
    statoTurno ENUM('rosso', 'blu') NOT NULL,
    campoGioco VARCHAR(9) DEFAULT '000000000' --0.nessuno 1.blu 2.rosso
);

DELIMITER //
CREATE TRIGGER random_turno_and_defaults BEFORE INSERT ON partita
FOR EACH ROW
BEGIN
    SET NEW.statoTurno = CASE WHEN RAND() > 0.5 THEN 'rosso' ELSE 'blu' END;
    SET NEW.idGiocatoreRosso = CONCAT(
        CHAR(FLOOR(RAND() * 26) + 65), -- Carattere casuale A-Z maiuscoli
        CHAR(FLOOR(RAND() * 26) + 65),
        CHAR(FLOOR(RAND() * 26) + 65),
        CHAR(FLOOR(RAND() * 26) + 65),
        CHAR(FLOOR(RAND() * 26) + 65),
        CHAR(FLOOR(RAND() * 26) + 65)
    );
END;
//
DELIMITER ;