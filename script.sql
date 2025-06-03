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

--milk Tea
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con tapioca', 'Milk tea con tapioca original', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con azuki', 'Milk tea con legumbres azuki', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con jelly coco', 'Milk tea con birutas de jelly coco', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con pudding', 'Milk tea con trozos de pudding', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con sago', 'Milk tea con birutas de sago', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con azúcar moreno y tapioca', 'Milk tea con azúcar moreno y tapioca', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea con puré de taro y tapioca', 'Milk tea con puré de taro y tapioca', 6, 5, 2);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Milk tea con tapioca, azuki y pudding', 'Milk tea con tapioca, azuki y pudding', 6, 2);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Milk tea con café', 'Milk tea con café y matcha de tapioca', 6, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de oreo', 'Milk tea de galletas oreo', 5.50, 4.50, 2);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Milk tea de lotus', 'Milk tea de galletas lotus', 5.50, 4.50, 2);

--Ácido lácteo
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo mango', 'Ácido lácteo con sabor a mango', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo fresa', 'Ácido lácteo con sabor a fresa', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo maracuyá', 'Ácido lácteo con sabor a maracuyá', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo pomelo', 'Ácido lácteo con sabor a pomelo', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo arándano', 'Ácido lácteo con sabor a arándano', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo uva', 'Ácido lácteo con sabor a uva', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo lichi', 'Ácido lácteo con sabor a fruta lichi', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo melocotón', 'Ácido lácteo con sabor a melocotón', 5.50, 4.50, 3);
INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES ('Ácido lácteo limón', 'Ácido lácteo con sabor a limón', 5.50, 4.50, 3);

--Beat lemon tea
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con lima', 'Té verde con sabor a lima', 5, 4);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Yashixiang con lima', 'Té Yashixiang con lima', 5, 4);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té con toque melocotón y lima', 'Té con toque melocotón y lima', 5, 4);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té camelia con lima', 'Té camelia con lima', 5, 4);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Dahongpao con lima', 'Té Dahongpao con lima', 5, 4);

--Crema de queso
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de uva', 'Smoothie de sabor a uva', 6, 5);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de fresa', 'Smoothie de sabor a fresa', 6, 5);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de lichi', 'Smoothie de sabor a fruta lichi', 6, 5);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de mango', 'Smoothie de sabor a mango', 6, 5);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de piña', 'Smoothie de sabor a piña', 6, 5);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Smoothie de melocotón', 'Smoothie de sabor a melocotón', 6, 5);

--Frappé
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de matcha', 'Frapé de sabor a matcha', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de mango', 'Frapé de sabor a mango', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de chocolate', 'Frapé de sabor a chocolate', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de caramelo', 'Frapé de sabor a caramelo', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de milk tea', 'Frapé de sabor a milk tea', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de oreo', 'Frapé de sabor a oreo', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de lotus', 'Frapé de sabor a lotus', 6, 6);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Frapé de taro', 'Frapé de sabor a taro', 6, 6);

--Té con fruta
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con maracuyá', 'Té verde con maracuyá y toppings de tapioca y jelly de coco', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con maracuyá y mango', 'Té verde con maracuyá y mango', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con maracuyá y piña', 'Té verde con maracuyá y piña', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con lichi y melocotón', 'Té verde con lichi y melocotón', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con lichi', 'Té verde con lichi', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Oolong con melocotón', 'Té Oolong con melocotón', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Sago de pomelo con mango', 'Sago de pomelo con mango', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con piña', 'Té verde con piña', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Yashixiang con mango', 'Té Yashixiang con sabor a mango', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Yashixiang con fresa', 'Té Yashixiang con sabor a fresa', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té Yashixiang con uva', 'Té Yashixiang con sabor a uva', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con maracuyá y naranja', 'Té verde con maracuyá y naranja', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con maracuyá y melocotón', 'Té verde con maracuyá y melocotón', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con fresa y melocotón', 'Té verde con fresa y melocotón', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con lichi aromático', 'Té verde con lichi aromático', 5.5, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con melocotón y pomelo', 'Té verde con melocotón y pomelo', 6, 7);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Té verde con arándano y uva', 'Té verde con arándano y uva', 6, 7);

--Cafés
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café solo', 'café solo puro', 1.6, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con leche', 'café con leche', 1.8, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con leche de avena', 'café con leche de avena', 2, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Capuchino con leche de avena', 'Capuchino con leche de avena', 3.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con té de camelia', 'Café con té de camelia', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Caramel macchiato', 'Caramel macchiato', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Matcha latte', 'Matcha latte', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con leche de coco', 'Café con leche de coco', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Americano de naranja', 'Café americano de naranja', 4, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Americano', 'Café americano', 2.8, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café latte con leche de avena', 'Café latte con leche de avena', 3.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con crema de pistacho', 'Café con crema de pistacho', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café mocha', 'Café mocha', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Latte de menta', 'Café latte de menta', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Café con leche de coco y matcha', 'Café con leche de coco y matcha', 4.5, 8);
INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES ('Americano de piña', 'Café americano de piña', 4, 8);

--encargos
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha) VALUES ('John Doe', 'john.doe@example.com', '123456789', 'Tarta de queso', '2025-05-29 10:00:00');
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha, estado) VALUES ('Jane Smith', 'jane.smith@example.com', '987654321', 'Tarta de chocolate', '2025-05-29 11:00:00', 'hecho');
INSERT INTO encargos (nombre, email, telefono, descripcion, fecha, estado) VALUES ('Alice Johnson', 'alice.johnson@example.com', '112233445', 'café', '2025-05-29 12:00:00', 'rechazado');

-- empleados
INSERT INTO empleados (nombre, email, contraseña) VALUES ('Daniel', 'danielyi2004@gmail.com', '123456789');

-- opiniones
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Patricia María García Soriano', 5, 'Hemos probado estos pastelitos y por mi parte un café latte. 
El café estaba buenísimo y la leche se nota que es la de oatly de avena, ya que es la que estoy acostumbrada a tomar, creo que habría que mejorar la técnica de latteado 
ya que tenía más espuma que crema, pero estaba igualmente espectacular. Desde luego es muy buen sitio para tomar un gran café de especialidad. En cuanto a los pasteles, 
el de fresas me ha encantado el bizcocho era como una nube, y la tarta de Lotus algo dura para lo que estoy acostumbrada, pero muy rica de sabor, una muy buena experiencia y sin duda repetiré!
', '2025-02-28 10:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Ro', 5, 'Es un sitio muy tranquilo, y amplio, el postre era delicioso, y muy suave.
Volveré, lo recomiendo mucho.', '2025-01-29 11:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Julia Quack', 5, 'Reserve estas flores para san valentin, son preciosas, el lugar acogedor y tienen bubble tea y pastelitos muy buenos
', '2025-05-29 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('tony Hu', 5, 'Increíble lugar en sevilla si quieres disfrutar de un buen bubble tea y tartas de diferentes sabores', '2024-12-22 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Alejandra Padilla', 5, 'Es muy bonito y acogedor el lugar me gustaría ir con amigos porque es amplio y muy limpio y todos lo que estaban allí eran amables.
', '2025-02-22 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('Xinyi Chen', 5, 'Vine a Sevilla de viaje y llegué hasta esta pastelería. 
¡Su tienda es muuuy instagrameable! Me encanta su diseño y cómo está diseñado todo. 
El personal es SUPER amable y servicial y sus pasteles, se ven y son muy sabrosos, 
especialmente sus mochis, son muuuy buenos. También pedí un té de burbujas de camelia con tapioca, no es demasiado dulce,
 por lo que es perfecto para mis papilas gustativas asiáticas (pero puedes decirles que agreguen más azúcar si lo deseas). 
Recomiendo encarecidamente este lugar!!!!!! 🤩', '2025-01-15 12:30:00');
INSERT INTO opiniones (nombre, estrellas, descripcion, fecha) VALUES ('ISPANEX Global Trade', 5, 'Cafe riquísimo .... Y lugar muy agradable', '2025-05-01 12:30:00');
