DROP TABLE IF EXISTS a_vous_de_trouver;

CREATE TABLE
    a_vous_de_trouver (
        id INT PRiMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8mb4;

INSERT INTO
    a_vous_de_trouver (
        name
    )
VALUES (
    'Anaïs'
),(
    'Annie'
),(
    'Claire'
),(
    'Laurène'
),(
    'Adrien'
);