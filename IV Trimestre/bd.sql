-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS Proyecto;
USE Proyecto;

-- Tabla para almacenar tipos de documentos
CREATE TABLE Tipo_Documento (
    Id_Tipo_Doc INT NOT NULL AUTO_INCREMENT,
    desc_doc VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id_Tipo_Doc)
);

-- Tabla para roles de usuarios
CREATE TABLE Roles (
    Id_Rol INT NOT NULL AUTO_INCREMENT,
    nom_rol VARCHAR(50) NOT NULL,
    estado INTEGER NOT NULL,
    PRIMARY KEY (Id_Rol)
);

-- Tabla para almacenar datos personales
CREATE TABLE Datos_Personales (
    Id_Dato_Personal INT NOT NULL AUTO_INCREMENT,
    fk_tipo_doc INT NOT NULL,
    numero_doc VARCHAR(500) NOT NULL,
    nombre1 VARCHAR(50) NOT NULL,
    nombre2 VARCHAR(50) NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50) NULL,
    fk_tipo_rol INT NOT NULL,
    Direccion VARCHAR(100) NOT NULL,
    Num_Local INT NOT NULL,
    correo VARCHAR(100) NOT NULL,
    celular DOUBLE NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    foto VARCHAR(500) NULL,
    PRIMARY KEY (Id_Dato_Personal),
    FOREIGN KEY (fk_tipo_rol) REFERENCES Roles(Id_Rol),
    FOREIGN KEY (fk_tipo_doc) REFERENCES Tipo_Documento(Id_Tipo_Doc)
);


-- Tabla para reservas
CREATE TABLE Reservas (
    Id_Reserva INT NOT NULL AUTO_INCREMENT,
    Fecha_Inicio DATETIME NOT NULL,
    Duracion DATE NOT NULL,
    Estado VARCHAR(50) NOT NULL DEFAULT '',
    PRIMARY KEY (Id_Reserva)
);

-- Tabla para pesos
CREATE TABLE Pesos (
    Id_Peso INT NOT NULL AUTO_INCREMENT,
    Descripcion VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id_Peso)
);

-- Tabla para categorías
CREATE TABLE Categorias (
    Id_Categoria INT NOT NULL AUTO_INCREMENT,
    Nombre_Categoria VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id_Categoria)
);

-- Tabla para productos
CREATE TABLE Productos (
    Id_Producto INT NOT NULL AUTO_INCREMENT,
    Id_Rol INT NOT NULL,
    Id_Peso INT NOT NULL,
    Id_Categoria INT NOT NULL,
    Id_Reserva INT NOT NULL,
    Nombre_Producto VARCHAR(50) NOT NULL,
    Cantidad INT NOT NULL,
    Url_Imagen VARCHAR(1000) NOT NULL,
    Codigo INT NOT NULL,
    PRIMARY KEY (Id_Producto),
    FOREIGN KEY (Id_Rol) REFERENCES Roles(Id_Rol),
    FOREIGN KEY (Id_Peso) REFERENCES Pesos(Id_Peso),
    FOREIGN KEY (Id_Categoria) REFERENCES Categorias(Id_Categoria),
    FOREIGN KEY (Id_Reserva) REFERENCES Reservas(Id_Reserva)
);

-- Inserción de datos en Tipo_Documento
INSERT INTO Tipo_Documento (desc_doc) VALUES
('Tarjeta de identidad'),
('Cédula'),
('Cédula extranjera');

-- Inserción de datos en Roles
INSERT INTO Roles (nom_rol, estado) VALUES
('Administrador', 1),
('Proveedor', 1),
('Cliente', 1);

-- Inserción de datos en Datos_Personales
INSERT INTO Datos_Personales (fk_tipo_doc, numero_doc, nombre1, nombre2, apellido1, apellido2, fk_tipo_rol, correo, celular, usuario, password) VALUES
(1, 123456789, 'Juan','David', 'Cardenas','Perez', 1, 'juan@gmail.com', 3040567890, 'juanito', '12345'),
(2, 987654321, 'Ana', 'Maria', 'Gomez', 'Salcedo', 2, 'ana@gmail.com', 3076543210, 'anita', '67890');

-- Inserción de datos en Reservas
INSERT INTO Reservas (Fecha_Inicio, Duracion, Estado) VALUES
('2023-11-11', '2023-15-12', 'Activo'),
('2023-11-12', '2023-20-12', 'Activo');

-- Inserción de datos en Pesos
INSERT INTO Pesos (Descripcion) VALUES
('Libras'),
('Kilos');

-- Inserción de datos en Categorias
INSERT INTO Categorias (Nombre_Categoria) VALUES
('Fruta'),
('Verdura');

-- Inserción de datos en Productos
INSERT INTO Productos (Id_Rol, Id_Peso, Id_Categoria, Id_Reserva, Nombre_Producto, Cantidad,  Url_Imagen, Codigo) VALUES
(3, 1, 1, 1, 'Mango', 2,  'url_mango.jpg', 12345),
(2, 1, 1, 2, 'Cilantro', 10,'url_cilantro.jpg', 67890);