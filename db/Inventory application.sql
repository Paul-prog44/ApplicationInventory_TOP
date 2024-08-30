CREATE TABLE "book" (
  "id" integer UNIQUE PRIMARY KEY,
  "title" varchar,
  "author_id" integer,
  "pageNumber" integer,
  "editor_id" integer,
  "genre_id" integer,
  "price" float
);

CREATE TABLE "author" (
  "id" integer UNIQUE PRIMARY KEY,
  "firstname" varchar,
  "lastname" varchar,
  "emailadress" varchar UNIQUE
);

CREATE TABLE "editor" (
  "id" integer UNIQUE PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "genre" (
  "id" integer UNIQUE PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "book" ADD FOREIGN KEY ("author_id") REFERENCES "author" ("id");

ALTER TABLE "book" ADD FOREIGN KEY ("editor_id") REFERENCES "editor" ("id");

ALTER TABLE "book" ADD FOREIGN KEY ("genre_id") REFERENCES "genre" ("id");
 
ALTER TABLE IF EXISTS public.author
  ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;

ALTER TABLE IF EXISTS public.book
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;

ALTER TABLE IF EXISTS public.editor
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;

ALTER TABLE IF EXISTS public.genre
    ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;