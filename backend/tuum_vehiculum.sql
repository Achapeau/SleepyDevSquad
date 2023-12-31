DROP TABLE IF EXISTS vehicules;

CREATE TABLE
    vehicules (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(35) NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL,
        prix INT NOT NULL,
        vitesse INT NOT NULL,
        moteur VARCHAR(15) NOT NULL,
        decapotable BOOLEAN NOT NULL,
        roues INT NOT NULL,
        confort VARCHAR(10) NOT NULL,
        boisson BOOLEAN NOT NULL,
        garde BOOLEAN NOT NULL,
        marchandise BOOLEAN NOT NULL,
        chauffeur BOOLEAN NOT NULL,
        decoration BOOLEAN NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8mb4;

INSERT INTO
    vehicules (
        name,
        image,
        description,
        prix,
        vitesse,
        moteur,
        decapotable,
        roues,
        confort,
        boisson,
        garde,
        marchandise,
        chauffeur,
        decoration
    )
VALUES (
        'Âne',
        '/Images/ane.png',
        'Un magnifique âne qui vous amènera à bon port, lentement mais sûrement.',
        1,
        8,
        'Âne',
        0,
        0,
        'Serf',
        0,
        0,
        0,
        0,
        0
    ), (
        'Calèche 2 chevaux',
        '/Images/caleche.png',
        'Rapide, la calèche 2 chevaux vous amène où vous le souhaitez dans les délais les plus rapides',
        20,
        25,
        'Cheval',
        1,
        4,
        'Noble',
        1,
        0,
        0,
        1,
        1
    ), (
        'Calèche décapotable',
        '/Images/caleche_décapotable.png',
        'Idéale pour prendre le soleil, cette calèche vous amène où vous souhaitez rapidement et avec style',
        17,
        15,
        'Cheval',
        1,
        2,
        'Noble',
        1,
        1,
        0,
        1,
        1
    ), (
        'Calèche',
        '/Images/caleche.png',
        'Le transport idéal pour faire bonne impression à la cour sans être en concurrence avec la monarchie',
        15,
        15,
        'Cheval',
        1,
        2,
        'Noble',
        1,
        1,
        1,
        1,
        1
    ), (
        'Carrosse familial',
        '/Images/carrosse_familiale.png',
        'Ce sublime carrosse vous amènera vous et votre famille où vous le souhaitez, tout en bénéficiant d''un confort extrême',
        30,
        15,
        'Cheval',
        0,
        4,
        'Royal',
        1,
        1,
        1,
        1,
        1
    ), (
        'Carrosse',
        '/Images/carrosse.png',
        'La princesse que vous êtes mérite ce transport rapelant à la populasse vos royales origines',
        25,
        15,
        'Cheval',
        0,
        4,
        'Royal',
        1,
        1,
        1,
        1,
        1
    ), (
        'Chaise à porteur',
        '/Images/Chaise-porteuse.png',
        'Peu rapide, mais au moins vous aurez la classe !',
        20,
        3,
        'Humain',
        0,
        0,
        'Royal',
        0,
        1,
        0,
        0,
        1
    ), (
        'Char',
        '/Images/char.png',
        'L''époque des arènes vous manques? Vous prenez pour Ben-Hur? Utilisez nos chars (attention, les risques d''accidents ne sont pas prix en charge pour notre compagnie)',
        12,
        35,
        'Cheval',
        1,
        2,
        'Serf',
        0,
        0,
        0,
        0,
        0
    ), (
        'Charette 2 boeufs',
        '/Images/charette_2_boeufs.png',
        'Cette charette est idéale pour transporter de la marchandise sans être pressé',
        8,
        5,
        'Boeuf',
        0,
        2,
        'Serf',
        1,
        0,
        1,
        0,
        0
    ), (
        'Charette 2 chevaux',
        '/Images/charette_2_chevaux.png',
        'Cette charette avec chevaux vous permettra de frimer à côté de ceux qui utilisent encore des boeufs',
        9,
        5,
        'Cheval',
        0,
        4,
        'Serf',
        1,
        0,
        1,
        0,
        0
    ), (
        'Charette 2 roues',
        '/Images/charette.png',
        'Une simple charette, idéale pour transporter vos marchandises',
        5,
        12,
        'Cheval',
        1,
        2,
        'Serf',
        1,
        0,
        1,
        0,
        0
    ), (
        'Chariot 2 roues',
        '/Images/chariot_aere.png',
        'Ce petit chariot est parfait pour faire des courtes distances',
        8,
        12,
        'Cheval',
        0,
        2,
        'Serf',
        1,
        0,
        1,
        0,
        1
    ), (
        'Chariot 4 roues',
        '/Images/chariot_4roues.png',
        'Vous rêvez de faire un déménagement façon "Petite maison dans la prairie"? Vous avez trouvé le véhicule idéal',
        7,
        5,
        'Cheval',
        1,
        4,
        'Serf',
        0,
        0,
        0,
        1,
        1
    ), (
        'Chariot décapotable',
        '/Images/chariot_decapotable.png',
        'Superbe chariot décapotable, permettant de faire des courtes distances en profitant du soleil.',
        12,
        12,
        'Cheval',
        1,
        4,
        'Noble',
        1,
        1,
        0,
        1,
        1
    ), (
        'Cheval',
        '/Images/cheval.png',
        'Simple et efficace, le cheval est la solution à tout vos déplacement',
        3,
        30,
        'Cheval',
        1,
        0,
        'Noble',
        0,
        0,
        0,
        0,
        0
    );