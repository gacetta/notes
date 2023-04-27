# Building SQL database from a file

Allows you to share a file, so others can build a duplicate database

SQL docs can be dense.  Make sure it's specific to your database.

Postico - lightweight 

## Understanding file
`.sql` is a SQL file
SQL commands are UPPERCASE
Naming convention:  snake_case

comments are done with `-- comment text...`

**SET statements** for initial setup (like config)
```
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false); // default (don't touch)
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
```

**CREATE TABLE**
```
CREATE TABLE public.people (            // default is public.
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"mass" varchar,
	"hair_color" varchar,
	"skin_color" varchar,
	"eye_color" varchar,
	"birth_year" varchar,
	"gender" varchar,
	"species_id" bigint,
	"homeworld_id" bigint,
	"height" integer,
	CONSTRAINT "people_pk" PRIMARY KEY ("_id")  // adds rules 
) WITH (                                      // these lines are necessary for ids
  OIDS=FALSE                                  // IDs are circular & loop back eventually
);
```
**ADD foreign keys**

```
ALTER TABLE public.people ADD CONSTRAINT "people_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");
```

--
-- TOC entry 4118 (class 0 OID 4163845)
-- Dependencies: 223
-- Data for Name: people; Type: TABLE DATA; Schema:  Owner: -
--

 INSERT INTO public.people VALUES (1, 'Luke Skywalker', '77', 'blond', 'fair', 'blue', '19BBY', 'male', 1, 1, 172);
 INSERT INTO public.people VALUES (2, 'C-3PO', '75', 'n/a', 'gold', 'yellow', '112BBY', 'n/a', 2, 1, 167);
 INSERT INTO public.people VALUES (3, 'R2-D2', '32', 'n/a', 'white, blue', 'red', '33BBY', 'n/a', 2, 8, 96);
 INSERT INTO public.people VALUES (4, 'Darth Vader', '136', 'none', 'white', 'yellow', '41.9BBY', 'male', 1, 1, 202);
 INSERT INTO public.people VALUES (5, 'Leia Organa', '49', 'brown', 'light', 'brown', '19BBY', 'female', 1, 2, 150);
 INSERT INTO public.people VALUES (6, 'Owen Lars', '120', 'brown, grey', 'light', 'blue', '52BBY', 'male', 1, 1, 178);
 INSERT INTO public.people VALUES (7, 'Beru Whitesun lars', '75', 'brown', 'light', 'blue', '47BBY', 'female', 1, 1, 165);
 INSERT INTO public.people VALUES (8, 'R5-D4', '32', 'n/a', 'white, red', 'red', NULL, 'n/a', 2, 1, 97);
 INSERT INTO public.people VALUES (9, 'Biggs Darklighter', '84', 'black', 'light', 'brown', '24BBY', 'male', 1, 1, 183);
 INSERT INTO public.people VALUES (10, 'Obi-Wan Kenobi', '77', 'auburn, white', 'fair', 'blue-gray', '57BBY', 'male', 1, 20, 182);
 INSERT INTO public.people VALUES (11, 'Anakin Skywalker', '84', 'blond', 'fair', 'blue', '41.9BBY', 'male', 1, 1, 188);
 INSERT INTO public.people VALUES (12, 'Wilhuff Tarkin', NULL, 'auburn, grey', 'fair', 'blue', '64BBY', 'male', 1, 21, 180);
 INSERT INTO public.people VALUES (13, 'Chewbacca', '112', 'brown', NULL, 'blue', '200BBY', 'male', 3, 14, 228);
 INSERT INTO public.people VALUES (14, 'Han Solo', '80', 'brown', 'fair', 'brown', '29BBY', 'male', 1, 22, 180);
 INSERT INTO public.people VALUES (15, 'Greedo', '74', 'n/a', 'green', 'black', '44BBY', 'male', 4, 23, 173);
 INSERT INTO public.people VALUES (16, 'Jabba Desilijic Tiure', '1,358', 'n/a', 'green-tan, brown', 'orange', '600BBY', 'hermaphrodite', 5, 24, 175);
 INSERT INTO public.people VALUES (18, 'Wedge Antilles', '77', 'brown', 'fair', 'hazel', '21BBY', 'male', 1, 22, 170);
 INSERT INTO public.people VALUES (19, 'Jek Tono Porkins', '110', 'brown', 'fair', 'blue', NULL, 'male', 1, 26, 180);
 INSERT INTO public.people VALUES (20, 'Yoda', '17', 'white', 'green', 'brown', '896BBY', 'male', 6, 28, 66);
 INSERT INTO public.people VALUES (21, 'Palpatine', '75', 'grey', 'pale', 'yellow', '82BBY', 'male', 1, 8, 170);
 INSERT INTO public.people VALUES (22, 'Boba Fett', '78.2', 'black', 'fair', 'brown', '31.5BBY', 'male', 1, 10, 183);
 INSERT INTO public.people VALUES (23, 'IG-88', '140', 'none', 'metal', 'red', '15BBY', 'none', 2, 28, 200);
 INSERT INTO public.people VALUES (24, 'Bossk', '113', 'none', 'green', 'red', '53BBY', 'male', 7, 29, 190);
 INSERT INTO public.people VALUES (25, 'Lando Calrissian', '79', 'black', 'dark', 'brown', '31BBY', 'male', 1, 30, 177);
 INSERT INTO public.people VALUES (26, 'Lobot', '79', 'none', 'light', 'blue', '37BBY', 'male', 1, 6, 175);
 INSERT INTO public.people VALUES (27, 'Ackbar', '83', 'none', 'brown mottle', 'orange', '41BBY', 'male', 8, 31, 180);
 INSERT INTO public.people VALUES (28, 'Mon Mothma', NULL, 'auburn', 'fair', 'blue', '48BBY', 'female', 1, 32, 150);
 INSERT INTO public.people VALUES (29, 'Arvel Crynyd', NULL, 'brown', 'fair', 'brown', NULL, 'male', 1, 28, NULL);
 INSERT INTO public.people VALUES (30, 'Wicket Systri Warrick', '20', 'brown', 'brown', 'brown', '8BBY', 'male', 9, 7, 88);
 INSERT INTO public.people VALUES (31, 'Nien Nunb', '68', 'none', 'grey', 'black', NULL, 'male', 10, 33, 160);
 INSERT INTO public.people VALUES (32, 'Qui-Gon Jinn', '89', 'brown', 'fair', 'blue', '92BBY', 'male', 1, 28, 193);
 INSERT INTO public.people VALUES (33, 'Nute Gunray', '90', 'none', 'mottled green', 'red', NULL, 'male', 11, 18, 191);
 INSERT INTO public.people VALUES (34, 'Finis Valorum', NULL, 'blond', 'fair', 'blue', '91BBY', 'male', 1, 9, 170);
 INSERT INTO public.people VALUES (36, 'Jar Jar Binks', '66', 'none', 'orange', 'orange', '52BBY', 'male', 12, 8, 196);
 INSERT INTO public.people VALUES (37, 'Roos Tarpals', '82', 'none', 'grey', 'orange', NULL, 'male', 12, 8, 224);
 INSERT INTO public.people VALUES (38, 'Rugor Nass', NULL, 'none', 'green', 'orange', NULL, 'male', 12, 8, 206);
 INSERT INTO public.people VALUES (39, 'Ric Olié', NULL, 'brown', 'fair', 'blue', NULL, 'male', NULL, 8, 183);
 INSERT INTO public.people VALUES (40, 'Watto', NULL, 'black', 'blue, grey', 'yellow', NULL, 'male', 13, 34, 137);
 INSERT INTO public.people VALUES (41, 'Sebulba', '40', 'none', 'grey, red', 'orange', NULL, 'male', 14, 35, 112);
 INSERT INTO public.people VALUES (42, 'Quarsh Panaka', NULL, 'black', 'dark', 'brown', '62BBY', 'male', NULL, 8, 183);
 INSERT INTO public.people VALUES (43, 'Shmi Skywalker', NULL, 'black', 'fair', 'brown', '72BBY', 'female', 1, 1, 163);
 INSERT INTO public.people VALUES (44, 'Darth Maul', '80', 'none', 'red', 'yellow', '54BBY', 'male', 22, 36, 175);
 INSERT INTO public.people VALUES (45, 'Bib Fortuna', NULL, 'none', 'pale', 'pink', NULL, 'male', 15, 37, 180);
 INSERT INTO public.people VALUES (46, 'Ayla Secura', '55', 'none', 'blue', 'hazel', '48BBY', 'female', 15, 37, 178);
 INSERT INTO public.people VALUES (48, 'Dud Bolt', '45', 'none', 'blue, grey', 'yellow', NULL, 'male', 17, 39, 94);
 INSERT INTO public.people VALUES (49, 'Gasgano', NULL, 'none', 'white, blue', 'black', NULL, 'male', 18, 40, 122);
 INSERT INTO public.people VALUES (50, 'Ben Quadinaros', '65', 'none', 'grey, green, yellow', 'orange', NULL, 'male', 19, 41, 163);
 INSERT INTO public.people VALUES (51, 'Mace Windu', '84', 'none', 'dark', 'brown', '72BBY', 'male', 1, 42, 188);
 INSERT INTO public.people VALUES (52, 'Ki-Adi-Mundi', '82', 'white', 'pale', 'yellow', '92BBY', 'male', 20, 43, 198);
 INSERT INTO public.people VALUES (53, 'Kit Fisto', '87', 'none', 'green', 'black', NULL, 'male', 21, 44, 196);
 INSERT INTO public.people VALUES (54, 'Eeth Koth', NULL, 'black', 'brown', 'brown', NULL, 'male', 22, 45, 171);
 INSERT INTO public.people VALUES (55, 'Adi Gallia', '50', 'none', 'dark', 'blue', NULL, 'female', 23, 9, 184);
 INSERT INTO public.people VALUES (56, 'Saesee Tiin', NULL, 'none', 'pale', 'orange', NULL, 'male', 24, 47, 188);
 INSERT INTO public.people VALUES (57, 'Yarael Poof', NULL, 'none', 'white', 'yellow', NULL, 'male', 25, 48, 264);
 INSERT INTO public.people VALUES (58, 'Plo Koon', '80', 'none', 'orange', 'black', '22BBY', 'male', 26, 49, 188);
 INSERT INTO public.people VALUES (59, 'Mas Amedda', NULL, 'none', 'blue', 'blue', NULL, 'male', 27, 50, 196);
 INSERT INTO public.people VALUES (60, 'Gregar Typho', '85', 'black', 'dark', 'brown', NULL, 'male', 1, 8, 185);
 INSERT INTO public.people VALUES (61, 'Cordé', NULL, 'brown', 'light', 'brown', NULL, 'female', 1, 8, 157);
 INSERT INTO public.people VALUES (62, 'Cliegg Lars', NULL, 'brown', 'fair', 'blue', '82BBY', 'male', 1, 1, 183);
 INSERT INTO public.people VALUES (63, 'Poggle the Lesser', '80', 'none', 'green', 'yellow', NULL, 'male', 28, 11, 183);
 INSERT INTO public.people VALUES (64, 'Luminara Unduli', '56.2', 'black', 'yellow', 'blue', '58BBY', 'female', 29, 51, 170);
 INSERT INTO public.people VALUES (65, 'Barriss Offee', '50', 'black', 'yellow', 'blue', '40BBY', 'female', 29, 51, 166);
 INSERT INTO public.people VALUES (66, 'Dormé', NULL, 'brown', 'light', 'brown', NULL, 'female', 1, 8, 165);
 INSERT INTO public.people VALUES (67, 'Dooku', '80', 'white', 'fair', 'brown', '102BBY', 'male', 1, 52, 193);
 INSERT INTO public.people VALUES (68, 'Bail Prestor Organa', NULL, 'black', 'tan', 'brown', '67BBY', 'male', 1, 2, 191);
 INSERT INTO public.people VALUES (69, 'Jango Fett', '79', 'black', 'tan', 'brown', '66BBY', 'male', 1, 53, 183);
 INSERT INTO public.people VALUES (70, 'Zam Wesell', '55', 'blonde', 'fair, green, yellow', 'yellow', NULL, 'female', 30, 54, 168);
 INSERT INTO public.people VALUES (71, 'Dexter Jettster', '102', 'none', 'brown', 'yellow', NULL, 'male', 31, 55, 198);
 INSERT INTO public.people VALUES (72, 'Lama Su', '88', 'none', 'grey', 'black', NULL, 'male', 32, 10, 229);
 INSERT INTO public.people VALUES (73, 'Taun We', NULL, 'none', 'grey', 'black', NULL, 'female', 32, 10, 213);
 INSERT INTO public.people VALUES (74, 'Jocasta Nu', NULL, 'white', 'fair', 'blue', NULL, 'female', 1, 9, 167);
 INSERT INTO public.people VALUES (47, 'Ratts Tyerell', '15', 'none', 'grey, blue', NULL, NULL, 'male', 16, 38, 79);
 INSERT INTO public.people VALUES (75, 'R4-P17', NULL, 'none', 'silver, red', 'red, blue', NULL, 'female', NULL, 28, 96);
 INSERT INTO public.people VALUES (76, 'Wat Tambor', '48', 'none', 'green, grey', NULL, NULL, 'male', 33, 56, 193);
 INSERT INTO public.people VALUES (77, 'San Hill', NULL, 'none', 'grey', 'gold', NULL, 'male', 34, 57, 191);
 INSERT INTO public.people VALUES (78, 'Shaak Ti', '57', 'none', 'red, blue, white', 'black', NULL, 'female', 35, 58, 178);
 INSERT INTO public.people VALUES (79, 'Grievous', '159', 'none', 'brown, white', 'green, yellow', NULL, 'male', 36, 59, 216);
 INSERT INTO public.people VALUES (80, 'Tarfful', '136', 'brown', 'brown', 'blue', NULL, 'male', 3, 14, 234);
 INSERT INTO public.people VALUES (81, 'Raymus Antilles', '79', 'brown', 'light', 'brown', NULL, 'male', 1, 2, 188);
 INSERT INTO public.people VALUES (82, 'Sly Moore', '48', 'none', 'pale', 'white', NULL, 'female', NULL, 60, 178);
 INSERT INTO public.people VALUES (83, 'Tion Medon', '80', 'none', 'grey', 'black', NULL, 'male', 37, 12, 206);
 INSERT INTO public.people VALUES (84, 'Finn', NULL, 'black', 'dark', 'dark', NULL, 'male', 1, 28, NULL);
 INSERT INTO public.people VALUES (85, 'Rey', NULL, 'brown', 'light', 'hazel', NULL, 'female', 1, 28, NULL);
 INSERT INTO public.people VALUES (86, 'Poe Dameron', NULL, 'brown', 'light', 'brown', NULL, 'male', 1, 28, NULL);
 INSERT INTO public.people VALUES (87, 'BB8', NULL, 'none', 'none', 'black', NULL, 'none', 2, 28, NULL);
 INSERT INTO public.people VALUES (88, 'Captain Phasma', NULL, NULL, NULL, NULL, NULL, 'female', 1, 28, NULL);
 INSERT INTO public.people VALUES (35, 'Padmé Amidala', '45', 'brown', 'light', 'brown', '46BBY', 'female', 1, 8, 165);

-- Completed on 2019-09-11 17:02:50 PDT

--
-- PostgreSQL database dump complete
--

```