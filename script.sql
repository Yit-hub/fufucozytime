-- Crear base de datos (opcional)
CREATE DATABASE IF NOT EXISTS cafeteria;
USE cafeteria;

-- Tabla de categorías
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    precio_M DECIMAL(10,2),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabla de encargos
CREATE TABLE encargos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    descripcion TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'hecho', 'rechazado') DEFAULT 'pendiente'
);

-- Tabla de empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla de opiniones
CREATE TABLE opiniones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    estrellas INT CHECK (estrellas BETWEEN 1 AND 5),
    descripcion TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);


--Datos

--categorías
INSERT INTO categorias (nombre) VALUES ('Fresh Milk Tea');
INSERT INTO categorias (nombre) VALUES ('Milk Tea');
INSERT INTO categorias (nombre) VALUES ('Ácido Lácteo');
INSERT INTO categorias (nombre) VALUES ('Beat Lemon Tea');
INSERT INTO categorias (nombre) VALUES ('Crema de Queso');
INSERT INTO categorias (nombre) VALUES ('Crema de Queso');
INSERT INTO categorias (nombre) VALUES ('Frappé');
INSERT INTO categorias (nombre) VALUES ('Té con Fruta');
INSERT INTO categorias (nombre) VALUES ('Cafés');




--productos
--Fresh Milk Tea
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de jazmín', 'Milk tea con aroma a jazmín', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de Oolong', 'Milk tea de Oolong con toques de melocotón', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de camelia', 'Milk tea con aroma a camelia', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de camelia con naranja', 'Milk tea con aroma a camelia con naranja', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de Dahongpao', 'Milk tea con aroma a Dahongpao, un té de roca', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de jazmín con matcha', 'Milk tea con aroma a jazmín con matcha', 6.50, 5.50, 1);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de jazmín con menta', 'Milk tea con aroma a jazmín con menta', 6.50, 5.50, 1);
--otros

--encargos
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha) VALUES ('John Doe', 'john.doe@example.com', '123456789', 'Tarta de queso', '2025-05-29 10:00:00');
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha, estado) VALUES ('Jane Smith', 'jane.smith@example.com', '987654321', 'Tarta de chocolate', '2025-05-29 11:00:00', 'hecho');
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha, estado) VALUES ('Alice Johnson', 'alice.johnson@example.com', '112233445', 'café', '2025-05-29 12:00:00', 'rechazado');

-- empleados
INSERT INTO empleados (nombre, email, contraseña) VALUES ('Daniel', 'danielyi2004@gmail.com', '123456789');

-- opiniones
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Patricia María García Soriano', 5, 'Hemos probado estos pastelitos y por mi parte un café latte. El café estaba buenísimo y la leche se nota que es la de oatly de avena, ya que es la que estoy acostumbrada a tomar, creo que habría que mejorar la técnica de latteado ya que tenía más espuma que crema, pero estaba igualmente espectacular. Desde luego es muy buen sitio para tomar un gran café de especialidad. En cuanto a los pasteles, el de fresas me ha encantado el bizcocho era como una nube, y la tarta de Lotus algo dura para lo que estoy acostumbrada, pero muy rica de sabor, una muy buena experiencia y sin duda repetiré!
', '2025-02-28 10:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Ro', 5, 'Es un sitio muy tranquilo, y amplio, el postre era delicioso, y muy suave.
Volveré, lo recomiendo mucho.', '2025-01-29 11:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Julia Quack', 5, 'Reserve estas flores para san valentin, son preciosas, el lugar acogedor y tienen bubble tea y pastelitos muy buenos
', '2025-05-29 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('tony Hu', 5, 'Increíble lugar en sevilla si quieres disfrutar de un buen bubble tea y tartas de diferentes sabores', '2024-12-22 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Alejandra Padilla', 5, 'Es muy bonito y acogedor el lugar me gustaría ir con amigos porque es amplio y muy limpio y todos lo que estaban allí eran amables.
', '2025-02-22 12:30:00');
