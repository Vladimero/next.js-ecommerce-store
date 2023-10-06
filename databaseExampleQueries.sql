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
('Poodle Sweater', '34,00', 'Keep your poodle warm and adorable in this cozy sweater, perfect for a fashionable statement');

SELECT * FROM items;
