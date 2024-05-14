CREATE DATABASE AcorttBanco;

use AcorttBanco;

CREATE TABLE Faculdade(
	facul_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    facul_nome VARCHAR(300),
    facul_site VARCHAR(500)
);

INSERT INTO Faculdade(facul_nome, facul_site) VALUES('Fatec Shunji Nishimura', 'https://www.fatecpompeia.edu.br');

SELECT * FROM Faculdade;

CREATE TABLE Usuarios(
	usu_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(300),
    usu_email VARCHAR(300),
    usu_senha VARCHAR(300),
    usu_tel VARCHAR(300),
    facul_id INT,
    FOREIGN KEY (facul_id) REFERENCES Faculdade(facul_id)
);

ALTER TABLE Usuarios DROP COLUMN usu_cidade;

DELETE FROM Usuarios WHERE usu_id = 1;


INSERT INTO Usuarios(usu_nome, usu_email, usu_senha, usu_tel, facul_id) VALUES('Marçal', 'marcal@gmail.com', '$2b$12$ibr4827C8n17LQFOa8Zapeau4HGpeTxs3TxVFv0b.5tvm7uvfBuCW', '123456789', 1);

SELECT * FROM Usuarios;

CREATE TABLE Produtos(
	prod_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(300),
    prod_marca VARCHAR(300),
    prod_preco VARCHAR(300),
    prod_descricao VARCHAR(500),
    prod_data_public DATE,
    prod_ativo BIT,
    prod_foto VARCHAR(300),
    usu_id INT,
    cat_id int,
    FOREIGN KEY (usu_id) REFERENCES Usuarios(usu_id),
    FOREIGN KEY (cat_id) REFERENCES Categoria(cat_id)
);

CREATE TABLE Categoria(
	cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	categoria ENUM('Fatec Shunji Nishimura - BDAG', 'Fatec Shunji Nishimura - MAP')
);

SELECT * FROM Categoria;
