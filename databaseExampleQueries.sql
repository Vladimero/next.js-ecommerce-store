/** Query templates: */

CREATE TABLE items (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
price varchar(30) NOT NULL,
description varchar(100) NOT NULL
);

INSERT INTO items
(name, price, description)
VALUES
('Orthopedic Poodle Bed', '59,00', 'Indulge your poodle with the ultimate in comfort for a restful, happy sleep'),
('Grooming Kit', '29,00', 'Everything you need for a stylish, well-groomed poodle, all in one convenient kit'),
('Leashes Set', '45,00', 'Experience safe and stylish walks with our durable, vibrant leashes for your beloved poodle'),
('Poodle Sweater', '34,00', 'Keep your poodle warm and adorable in this cozy sweater, perfect for a fashionable statement'),
('Pendant Necklace', '23,00', 'An elegant pendant showcasing a refined poodle silhouette design'),
('Interactive Puzzle Toy', '19,00', 'Engage your poodle with this stimulating and enjoyable interactive toy for mental exercise'),
('Poodle Dental Care Kit', '39,00', 'Ensure your poodles smile stays healthy and bright with our comprehensive dental care kit'),
('Training Treat Pouch', '27,00', 'A convenient pouch for carrying treats, perfect for rewarding and training your beloved poodle'),
('Poodle Pattern T-Shirt', '29,00', 'Display your poodle love with style in this comfortable t-shirt featuring charming poodle patterns');

SELECT * FROM items;
